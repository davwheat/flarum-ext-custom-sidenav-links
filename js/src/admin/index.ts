import SettingsPage from './components/SettingsPage'

app.initializers.add('davwheat/custom-sidenav-links', app => {
  // Debug line
  // app.data.settings['davwheat-custom-sidenav-links.link-data'] = `[{"icon":"icon1","text":"text1","url":"url1","internal":true}]`

  app.extensionData.for('davwheat-custom-sidenav-links').registerPage(SettingsPage)
})
