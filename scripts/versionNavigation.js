var DOCUMENTATION_VERSIONS = DOCUMENTATION_VERSIONS || [];

(function () {
  if (DOCUMENTATION_VERSIONS.length < 2) { return }

  var container = document.getElementById('versionNavigation')
  container.innerHTML = '<br /><span style="font-size: 12px">Documentation Versions:</span><br />'
  var form = container.appendChild(document.createElement('form'))

  var select = document.createElement('select')
  select.style.width = '80%'
  select.onchange = function () { window.location.href = select[select.selectedIndex].value }
  form.appendChild(select)

  window.DOCUMENTATION_VERSIONS.forEach((version) => {
    var option = document.createElement('option')
    var value = '/'
    if (version !== 'master') { value = '/' + version }
    option.setAttribute('value', value)

    var pathParts = window.location.pathname.split('/')
    if (pathParts[1] === version) {
      option.setAttribute('selected', false)
    }

    option.innerHTML = version
    select.appendChild(option)
  })
})()
