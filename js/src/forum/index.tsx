import { extend } from 'flarum/extend'

import IndexPage from 'flarum/forum/components/IndexPage'
import LinkButton from 'flarum/forum/components/LinkButton'
import Separator from 'flarum/forum/components/Separator'

import { default as SideNavLink, SideNavLinkJSObject } from '../common/models/SideNavLink'

app.initializers.add('davwheat/custom-sidenav-links', app => {
  const jsonRaw: string = app.data['davwheat-custom-sidenav-links.link-data']

  if (jsonRaw && jsonRaw !== '[]') {
    const jsonParsed: SideNavLinkJSObject[] = JSON.parse(jsonRaw)
    const links: SideNavLink[] = []

    jsonParsed.forEach(l => links.push(SideNavLink.fromJsObject(l)))

    extend(IndexPage.prototype, 'navItems', items => {
      items.add('customLinks-separator1', <Separator />, 1)

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
          0,
        )
      })

      items.add('customLinks-separator2', <Separator />, -1)
    })
  }
})
