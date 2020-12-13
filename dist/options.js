function getKeyAndCheck(keys) {
  chrome.storage.sync.get([...keys, 'slot'], function (items) {
    var slot = items.slot ? Number(items.slot) : 0
    var slotSelect = document.querySelector("select[name='slot']")
    slotSelect.value = slot
    checkDraft.slot = slot
    checkDraft = mergeDeep(checkDraft, items)
    refleshCheck()
  })
}

function changeSlot(slot) {
  setKey('slot', slot)
  refleshCheck()
}

function convertB(value) {
  var initialValue = 'fffffff'
  switch (value) {
    case true:
      initialValue = 'tffffff'
      break
    case false:
    case undefined:
      break
    default:
      initialValue = value
  }
  return initialValue
}

function setKey(key, value) {
  checkDraft = mergeDeep(
    checkDraft,
    { [key]: value }
  )
  chrome.storage.sync.set(
    { [key]: value }
  )
}

function draft(key, value) {
  checkDraft = mergeDeep(
    checkDraft,
    { [key]: value }
  )
  syncStorage()
}

var dateStack = []

function syncStorage(force = false) {
  // draft時に最終セーブから1500ms経過していればsync
  if (force || dateStack.length === 0 || (Date.now() - dateStack[0]) > 1500) {
    dateStack = []
    chrome.storage.sync.set(checkDraft)
  }
  dateStack.push(Date.now())
}

// 1500ms毎に変更がスタックされていればsync
window.setInterval(autoSync, 1500)
function autoSync() {
  if (dateStack.length > 0) {
    chrome.storage.sync.set(checkDraft)
    dateStack = []
  }
}

function refleshCheck() {
  refleshCheckMarks()
  refleshOptions()
  refleshSlotNames()
  enoughCheck([0, 1, 2, 3])
}

function refleshCheckMarks() {
  checkMarkNames.forEach(cmn => {
    var query = "input[name='" + cmn + "']"
    var box = document.querySelector(query)
    box.checked = convertB(checkDraft[cmn]).slice(checkDraft.slot, checkDraft.slot + 1) === 't'
  })
}

function refleshOptions() {
  options.forEach(ops => {
    var query = "input[name='" + ops + "']"
    var box = document.querySelector(query)
    box.checked = checkDraft[ops]
  })
}

function refleshSlotNames() {
  slotNames.forEach(sn => {
    if (checkDraft[sn]) {
      var query = "option[name='" + sn + "']"
      var option = document.querySelector(query)
      option.innerHTML = checkDraft[sn]
    }
  })
}

function checkKey(key, checked) {
  var currentValue = convertB(checkDraft[key])
  var slot = checkDraft.slot
  var stringValue = checked ? 't' : 'f'
  var newValue = currentValue.slice(0, slot) + stringValue + currentValue.slice(slot + 1)
  draft(key, newValue)
}

function checkOption(key, value) {
  setKey(key, value)
}

function saveSlotName(slot, value) {
  setKey(slotNames[slot], value)
  refleshSlotNames()
}

var checkDraft = { slot: 0 }
var bingoOneKeyArray = Array.from(Array(49), (v, k) => 'bingoOneCheck' + k)
var bingoTwoKeyArray = Array.from(Array(49), (v, k) => 'bingoTwoCheck' + k)
var bingoThreeKeyArray = Array.from(Array(49), (v, k) => 'bingoThreeCheck' + k)
var bingoFourKeyArray = Array.from(Array(49), (v, k) => 'bingoFourCheck' + k)
var checkMarkNames = [...bingoOneKeyArray, ...bingoTwoKeyArray, ...bingoThreeKeyArray, ...bingoFourKeyArray]
var options = ['noInfoChecked']
var slotNames = Array.from(Array(7), (v, k) => 'slotName' + k)
var overall = []
window.onload = function () {
  overall = document.querySelectorAll("input[type='checkbox']")
  overall.forEach(ov => {
    if (ov.name === 'noInfoChecked') {
      ov.addEventListener('click', function (e) {
        checkOption(e.target.name, e.target.checked)
      })
    } else if (ov.name.startsWith('allCheck')) {
      ov.addEventListener('click', function (e) {
        var checkIndex = Number(ov.name.slice(8) - 1) * 49
        var targetSlice = checkMarkNames.slice(checkIndex, checkIndex + 49)
        targetSlice.forEach(ka => {
          var forCheck = document.querySelector("input[name='" + ka + "']")
          if (forCheck) { forCheck.checked = e.target.checked }
          checkDraft[ka] = e.target.checked
        })
        syncStorage(true)
      })
    } else {
      ov.addEventListener('click', function (e) {
        checkKey(e.target.name, e.target.checked)
        var table = 0
        var keSlice = e.target.name.slice(0, 8)
        switch (keSlice) {
          case 'bingoOne':
            table = 0
            break
          case 'bingoTwo':
            table = 1
            break
          case 'bingoThr':
            table = 2
            break
          case 'bingoFou':
            table = 3
            break
          default:
        }
        enoughCheck([table])
      })
    }
  })
  var slotTable = document.querySelector("select[name='slot']")
  slotTable.addEventListener('change', function (e) {
    changeSlot(Number(e.target.value))
  })
  var nameButton = document.querySelector("input[name='nameButton']")
  nameButton.addEventListener('click', function (e) {
    var nameValue = document.querySelector("input[name='slotName']").value
    saveSlotName(checkDraft.slot, nameValue)
  })
  getKeyAndCheck([...checkMarkNames, ...options, ...slotNames])
}

function enoughCheck(tables) {
  tables.forEach(table => {
    var enough = false
    var allCheck = document.querySelector("input[name='allCheck" + (table + 1) + "']")
    var checkIndex = table * 49
    var targetSlice = checkMarkNames.slice(checkIndex, checkIndex + 49)
    enough = targetSlice.every(ka => {
      var forCheck = document.querySelector("input[name='" + ka + "']")
      return forCheck && forCheck.checked
    })
    allCheck.checked = enough
  })
}
