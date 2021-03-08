import Modal from 'flarum/common/components/Modal'

import Button from 'flarum/common/components/Button'
import Switch from 'flarum/common/components/Switch'
import LoadingIndicator from 'flarum/common/components/LoadingIndicator'
import Input from './Input'

import extractText from 'flarum/common/utils/extractText'

import SideNavLink from '../../common/models/SideNavLink'
import isValidUrl from '../isValidUrl'

const translate = (key: string, data?: Record<string, unknown>): string[] =>
  app.translator.trans(`davwheat.custom_sidenav_links.admin.settings_page.new_link_modal.${key}`, data)

export default class AddLinkModal extends Modal {
  private loading = false
  private newLink: SideNavLink = new SideNavLink('', '', '', false)

  // constructor(public links: SideNavLink[]) {
  //   super()
  // }

  className() {
    return 'davwheat-sidenav-AddLinkModal Modal--small'
  }

  title() {
    return translate('title')
  }

  content() {
    const validUrl = isValidUrl(this.newLink.url)

    return (
      <div className="Modal-body">
        <div className="Form">
          <div className="Form-group">
            <div>
              <label>
                {translate('labels.icon')}
                <div class="icon-preview-container">
                  <span class={`icon-preview fa-fw ${this.newLink.icon}`} title={translate('table.icon_preview_tooltip')} />
                  <Input
                    value={this.newLink.icon}
                    onChange={(newValue: string) => {
                      this.newLink.icon = newValue
                    }}
                    placeholder={translate('placeholders.icon')}
                    disabled={false}
                  />
                </div>
              </label>
            </div>

            <div>
              <label>
                {translate('labels.text')}
                <Input
                  value={this.newLink.text}
                  onChange={(newValue: string) => {
                    this.newLink.text = newValue
                  }}
                  placeholder={translate('placeholders.text')}
                  disabled={false}
                />
              </label>
            </div>

            <div>
              <label>
                {translate('labels.url')}
                <Input
                  class={!validUrl && 'sidenav-input--invalid'}
                  value={this.newLink.url}
                  onChange={(newValue: string) => {
                    this.newLink.url = newValue
                  }}
                  placeholder={translate('placeholders.url')}
                  disabled={false}
                />
              </label>
            </div>

            <div>
              <Switch
                state={this.newLink.internal}
                onchange={(newValue: boolean) => {
                  this.newLink.internal = newValue
                }}
                disabled={false}
              >
                {translate('labels.internal')}
              </Switch>
            </div>

            <Button className="Button Button--primary" type="submit" disabled={!validUrl || this.loading || !this.isValid()} loading={this.loading}>
              {this.getButtonText(validUrl)}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  getButtonText(validUrl: boolean): string[] {
    if (!validUrl) return translate('submit_btn.fix_url')
    if (this.loading) return translate('submit_btn.loading')
    if (!this.isValid()) return translate('submit_btn.invalid_form')

    return translate('submit_btn.add')
  }

  isValid() {
    return this.newLink.icon.trim() !== '' && this.newLink.text.trim() !== '' && this.newLink.url.trim() !== ''
  }

  onsubmit(e) {
    e.preventDefault()

    this.loading = true
    this.hide.bind(this)()

    this.attrs.links.push(this.newLink)
  }
}
