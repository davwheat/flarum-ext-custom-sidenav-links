import app from 'flarum/app'
import ExtensionPage from 'flarum/components/ExtensionPage'

import Button from 'flarum/common/components/Button'
import Switch from 'flarum/common/components/Switch'
import LoadingIndicator from 'flarum/common/components/LoadingIndicator'
import Input from './Input'

import saveSettings from 'flarum/common/utils/saveSettings'
import extractText from 'flarum/common/utils/extractText'

import { default as SideNavLink, SideNavLinkJSObject } from '../../common/models/SideNavLink'
import isValidUrl from '../isValidUrl'
import AddLinkModal from './AddLinkModal'

const settingsKey = `davwheat-custom-sidenav-links.link-data`

const translate = (key: string, data?: Record<string, unknown>): string[] =>
  app.translator.trans(`davwheat.custom_sidenav_links.admin.settings_page.${key}`, data)

export default class FakeDataPage extends ExtensionPage {
  private settings = {}
  private loading = false
  private isDirty = false
  private isAnyUrlInvalid = false

  /**
   * IMPORTANT: Only evaluated on first draw! Edits to the link data are only performed to `this.linkData`.
   */
  private rawLinkData: string = app.data.settings['davwheat-custom-sidenav-links.link-data']
  private linkData: SideNavLink[] | null = null

  oninit(vnode) {
    super.oninit(vnode)

    this.createData()
  }

  content() {
    // Non-existant
    if (!this.rawLinkData) {
      return (
        <p>
          My settings key (<code>{settingsKey}</code>) is missing from your database! Make sure you've run the migrations. If that doesn't work, add it to your
          settings table manually with the content <code>[]</code>.
        </p>
      )
    } else if (!this.linkData) {
      return (
        <div class="davwheat-ext-settings">
          <form>
            <LoadingIndicator />
          </form>
        </div>
      )
    }

    let isAnyUrlInvalid = false

    return (
      <div class="davwheat-ext-settings">
        <form>
          <section class="davwheat-sidenav-addlink">
            <h2>{translate('heading')}</h2>
            <Button
              class="Button davwheat-sidenav-addlink-btn"
              icon="fas fa-plus"
              onclick={() => {
                app.modal.show(AddLinkModal, { links: this.linkData })
                this.makeDirty()
              }}
            >
              {translate('add_link_btn')}
            </Button>
          </section>

          <div class="scroll-container">
            <main>
              <div id="davwheat-sidenav--position-heading">{translate('table.header.position')}</div>
              <div id="davwheat-sidenav--icon-heading">{translate('table.header.icon')}</div>
              <div id="davwheat-sidenav--text-heading">{translate('table.header.text')}</div>
              <div id="davwheat-sidenav--url-heading">{translate('table.header.url')}</div>
              <div id="davwheat-sidenav--internal-heading">{translate('table.header.internal')}</div>
              <div id="davwheat-sidenav--delete-heading">{translate('table.header.delete')}</div>

              {this.linkData.map((link, i) => {
                const validUrl = isValidUrl(link.url)
                if (!validUrl) isAnyUrlInvalid = true

                return [
                  <div data-column="position">
                    <Button
                      class="Button Button--icon"
                      icon="fas fa-arrow-up"
                      title={translate('table.tooltips.move_up')}
                      disabled={i === 0}
                      onclick={() => {
                        if (i === 0) return

                        let temp = link
                        this.linkData[i] = this.linkData[i - 1]
                        this.linkData[i - 1] = link
                      }}
                    />
                    <Button
                      class="Button Button--icon"
                      icon="fas fa-arrow-down"
                      title={translate('table.tooltips.move_down')}
                      disabled={i === (this.linkData?.length || 1) - 1}
                      onclick={() => {
                        if (i === (this.linkData?.length || 1) - 1) return

                        let temp = link
                        this.linkData[i] = this.linkData[i + 1]
                        this.linkData[i + 1] = link
                      }}
                    />
                  </div>,
                  <div data-column="icon">
                    <span class={`icon-preview fa-fw ${link.icon}`} title={translate('table.tooltips.icon_preview')} />
                    <Input
                      value={link.icon}
                      onChange={(newValue: string) => {
                        this.linkData[i].icon = newValue
                        this.makeDirty()
                      }}
                      labelId="davwheat-sidenav--icon-heading"
                      placeholder={translate('table.placeholders.icon')}
                      disabled={false}
                    />
                  </div>,
                  <div data-column="text">
                    <Input
                      value={link.text}
                      onChange={(newValue: string) => {
                        this.linkData[i].text = newValue
                        this.makeDirty()
                      }}
                      labelId="davwheat-sidenav--text-heading"
                      placeholder={translate('table.placeholders.text')}
                      disabled={false}
                    />
                  </div>,
                  <div data-column="url">
                    <Input
                      class={!validUrl && 'sidenav-input--invalid'}
                      value={link.url}
                      onChange={(newValue: string) => {
                        this.linkData[i].url = newValue
                        this.makeDirty()
                      }}
                      labelId="davwheat-sidenav--url-heading"
                      placeholder={translate('table.placeholders.url')}
                      disabled={false}
                    />
                  </div>,
                  <div data-column="internal">
                    <Switch
                      state={link.internal}
                      onchange={(newValue: boolean) => {
                        this.linkData[i].internal = newValue
                        this.makeDirty()
                      }}
                      aria-labelled-by="davwheat-sidenav--url-heading"
                      disabled={false}
                    />
                  </div>,
                  <div data-column="delete">
                    <Button
                      class="Button Button--icon"
                      icon="fas fa-trash"
                      aria-labelled-by="davwheat-sidenav--delete-heading"
                      onclick={() => {
                        if (confirm(extractText(translate('confirm_delete', { link: link.text })))) {
                          // Remove this link
                          this.linkData?.splice(i, 1)
                        }
                      }}
                    />
                  </div>,
                ]
              })}
            </main>
          </div>

          <Button
            onclick={this.saveSettings.bind(this)}
            className="Button Button--primary"
            loading={this.loading}
            disabled={isAnyUrlInvalid || !this.isDirty || this.loading}
          >
            {this.getButtonText(isAnyUrlInvalid)}
          </Button>
        </form>
      </div>
    )
  }

  private getButtonText(isAnyUrlInvalid: boolean): string[] {
    this.isAnyUrlInvalid = isAnyUrlInvalid

    if (this.isAnyUrlInvalid) return translate('save_btn.fix_errors')
    if (this.loading) return translate('save_btn.saving')
    if (this.isDirty) return translate('save_btn.dirty')

    return translate('save_btn.saved')
  }

  createData(): void {
    const rawData = this.rawLinkData
    let json: SideNavLinkJSObject[]

    try {
      json = Object.freeze(JSON.parse(rawData))
    } catch {
      throw `Invalid JSON found in Flarum setting \`${settingsKey}\`. We can't continue. Fix manually, or reset to \`[]\` in your DB.`
    }

    let finalData: SideNavLink[] = []

    json.forEach(snl => finalData.push(SideNavLink.fromJsObject(snl)))

    this.linkData = finalData
  }

  makeDirty() {
    this.isDirty = true
  }

  saveSettings(e: MouseEvent) {
    e.preventDefault()

    if (this.isAnyUrlInvalid) {
      app.alerts.show({ type: 'error' }, translate('alert.fix_errors'))
      return
    }

    app.alerts.clear()
    this.loading = true

    const stringData = JSON.stringify(this.linkData)
    console.log(stringData)

    return saveSettings({ [settingsKey]: JSON.stringify(this.linkData) }).then(this.onSettingsSaved.bind(this))
  }

  onSettingsSaved(): void {
    this.loading = false
    this.isDirty = false

    app.alerts.show({ type: 'success' }, app.translator.trans('core.admin.settings.saved_message'))
  }
}
