import { extend } from 'flarum/extend'

import IndexPage from 'flarum/forum/components/IndexPage'
import LinkButton from 'flarum/forum/components/LinkButton'
import Separator from 'flarum/forum/components/Separator'
import type ItemList from 'flarum/common/utils/ItemList'

import { default as SideNavLink, LinksPosition, SideNavLinkJSObject } from '../common/models/SideNavLink'

app.initializers.add('davwheat/custom-sidenav-links', app => {
  const jsonRaw: string = app.data['davwheat-custom-sidenav-links.link-data'] || '[]'
  const linkPosition: LinksPosition = app.data['davwheat-custom-sidenav-links.position'] || 'above-tags-link'

  const showTopSpacer: boolean = app.data['davwheat-custom-sidenav-links.top-spacer'] !== '0'
  const showBottomSpacer: boolean = app.data['davwheat-custom-sidenav-links.bottom-spacer'] !== '0'

  const priority = linkPosition === 'above-tags-link' ? 0 : -11

  if (jsonRaw && jsonRaw !== '[]') {
    const jsonParsed: SideNavLinkJSObject[] = JSON.parse(jsonRaw)
    const links: SideNavLink[] = []

    jsonParsed.forEach(l => links.push(SideNavLink.fromJsObject(l)))

    extend(IndexPage.prototype, 'navItems', (items: typeof ItemList) => {
      showTopSpacer && items.add('customLinks-separator1', <Separator />, priority + 1)

      links.forEach((link, i) => {
        let href = link.url

        if (link.internal) {
          // Replace main part of URL with empty string as it's internal
          href = href.replace(app.forum.attribute('baseUrl'), '')

          // If it's a home page link, make sure it has a forward slash
          if (href === '') href = '/'
        }

        items.add(
          'customLink-' + i,
          <LinkButton external={!link.internal} href={href} rel="noopener noreferrer" icon={link.icon}>
            {link.text}
          </LinkButton>,
          priority,
        )
      })

      showBottomSpacer && items.add('customLinks-separator2', <Separator />, priority - 1)
    })
  }
})
