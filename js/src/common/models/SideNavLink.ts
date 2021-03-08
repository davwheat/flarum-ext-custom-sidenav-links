export interface SideNavLinkJSObject {
  icon: string
  text: string
  url: string
  internal: boolean
}

export default class SideNavLink {
  /**
   * Create instance of SideNavLink
   *
   * @param icon FontAwesome icon classes (e.g. `fas fa-link`)
   * @param text Link text (e.g. `My cool site`)
   * @param url Link URL (e.g. `https://flarum.org/`)
   * @param internal Is link within forum? (e.g. `false`)
   */
  constructor(public icon: string, public text: string, public url: string, public internal: boolean) {}

  static fromJsObject(obj: SideNavLinkJSObject) {
    return new SideNavLink(obj.icon, obj.text, obj.url, obj.internal)
  }

  public toString() {
    return JSON.stringify({ icon: this.icon, text: this.text, url: this.url, internal: this.internal })
  }

  public toJSON() {
    return { icon: this.icon, text: this.text, url: this.url, internal: this.internal }
  }
}
