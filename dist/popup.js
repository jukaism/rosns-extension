function getKeyAndCheck(keys) {
  chrome.storage.sync.get([...keys, 'slot'], function (items) {
    var slot = items.slot ? Number(items.slot) : 0
    var slotSelect = document.querySelector("select[name='slot']")
    slotSelect.value = slot
    slotNames.forEach(sn => {
      if (items[sn]) {
        var query = "option[name='" + sn + "']"
        var option = document.querySelector(query)
        option.innerHTML = items[sn]
      }
    })
  })
}

function setKey(key, value) {
  chrome.storage.sync.set(
    { [key]: value }
  )
}

function changeSlot(slot) {
  setKey('slot', slot)
}

var slotNames = Array.from(Array(7), (v, k) => 'slotName' + k)
var bg = chrome.extension.getBackgroundPage()
window.onload = function () {
  var slotTable = document.querySelector("select[name='slot']")
  slotTable.addEventListener('change', function (e) {
    changeSlot(Number(e.target.value))
    bg.reloadAction()
  })
  var runButton = document.querySelector("a[name='runButton']")
  runButton.addEventListener('click', function (e) {
    bg.reloadAndRunAction()
  })
  var optionLink = document.querySelector("a[name='options']")
  optionLink.addEventListener('click', function (e) {
    e.preventDefault()
    bg.openOption()
  })
  getKeyAndCheck(slotNames)
}
