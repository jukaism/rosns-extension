var worldIds = []
var worldNames = []
var availableChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function fetchQuests() {
  lastFetchDate = Date.now()
  var currentDate = lastFetchDate.toString()
  worldIds = []
  worldNames = []
  availableChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  remainQuests = []
  annivQuestList.forEach(questName => {
    var chompedQuestName = questName.replace(/No\. ?[0-9]+ /, '')
    if (chompedQuestName.length > 0 && checkedQuests.indexOf(chompedQuestName) < 0) { remainQuests.push(chompedQuestName) }
  })
  var worldSelects = document.querySelectorAll("select[name='world'] option")
  worldSelects.forEach(worldSelect => {
    worldIds.push(worldSelect.value)
    worldNames.push(worldSelect.innerHTML)
  })
  var bingoTable = document.querySelector("table#bingoTable")
  if (bingoTable) {
    if (structedTable.length === 0) { structedTable += bingoTable.innerHTML }
    bingoTable.innerHTML = structedTable
    load_quest_detail(0, 0, 2, currentDate)
  }
}

function finish(message) {
  var fetchInfos = document.querySelector("span[name='fetchingWorld']")
  fetchInfos.innerHTML = message
  let details = document.querySelector("details[name='remainQuests']")
  var remainQuestHtml = ''
  if (remainQuests.length === 0) {
    details.innerHTML = '<summary name="remainSummary">未達成クエストはありません</summary>'
  } else {
    remainQuests.forEach((que, inde) => {
      if (inde !== 0) { remainQuestHtml += ', ' }
      if (que === '魔術') {
        remainQuestHtml += '<a href="' + encodeURI('https://www.google.com/search?q=' + que + '+クエスト+ro+プロンテラ') + '" target="_blank" style="white-space: nowrap;" rel="noopener noreferrer">' + que + '</a>'
      } else {
        remainQuestHtml += '<a href="' + encodeURI('https://www.google.com/search?q=' + que + '+クエスト+ro') + '" target="_blank" style="white-space: nowrap;" rel="noopener noreferrer">' + que + '</a>'
      }
    })
    details.innerHTML = '<summary>未達成クエストが' + remainQuests.length + '個あります（クリックで開閉）</summary>' + remainQuestHtml
  }
}

function load_quest_detail(charIndex, worldIndex, retry, currentDate) {
  if (currentDate !== lastFetchDate.toString()) { return }
  var fetchInfo = document.querySelector("span[name='fetchingWorld']")
  fetchInfo.innerHTML = worldNames[worldIndex] + 'の情報を取得中…'
  var nextChar = 0
  var nextWorld = 0
  if (charIndex === 0) {
    availableChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  }
  if (charIndex < availableChars[availableChars.length - 1]) {
    nextChar = charIndex + 1
    nextWorld = worldIndex
  } else if (worldIndex < (worldIds.length - 1)) {
    nextWorld = worldIndex + 1
  }
  if (availableChars.includes(charIndex)) {
    new Ajax.Request(
      '/ro/'
      , {
        'method': 'get'
        , 'parameters': 'm=pc&a=page_g_char_quest_info&charnum=' + charIndex + '&world=' + worldIds[worldIndex] + '&category=3&id=701&route_id=24'
        , onSuccess: function (httpObj) {
          if (currentDate !== lastFetchDate.toString()) { return }
          try {
            var newDiv = document.createElement('div')
            newDiv.innerHTML = httpObj.responseText
            var charTable = newDiv.querySelectorAll("div.dparts div.parts table")
            var charName = '鯖の誰か'
            charTable.forEach(tab => {
              if (tab.innerHTML.indexOf('キャラクター選択') > 0) {
                var charReg = new RegExp('charnum=' + charIndex + '&amp;world=' + worldIds[worldIndex] + '">\\n[^\\n]+')
                var charNameMatch = tab.innerHTML.match(charReg)
                if (charNameMatch && charNameMatch[0]) {
                  charName = charNameMatch[0].replace(/^[^\n]+\n				/, '')
                }
                if (charIndex === 0) {
                  var charLink = new RegExp('[0-9]+&amp;world=' + worldIds[worldIndex] + '">', 'g')
                  var charIds = tab.innerHTML.match(charLink)
                  if (charIds.length > 0) {
                    availableChars = [0]
                    charIds.forEach(idReg => {
                      var charI = idReg.match(/^[0-9]+/)[0]
                      if (Number(charI) !== 0) {
                        availableChars.push(Number(charI))
                      }
                    })
                  }
                }
              }
            })
            var questListTables = newDiv.querySelectorAll("table.questList")
            questListTables.forEach(tbl => {
              if (!tbl.innerHTML.includes('攻略順')) {
                var finishes = tbl.querySelectorAll("table.questList tr td div.sammary_finished a")
                finishes.forEach(finish => {
                  var regExp = new RegExp('<[^>]+>', 'g')
                  var chomped = finish.innerHTML.replace(regExp, '').replace(/\r?\n/g, '').replace('クエスト', '')
                  var finishedQuestTab = document.querySelectorAll(`td#${CSS.escape(chomped)}`)
                  var index = remainQuests.indexOf(chomped)
                  if (index > -1) {
                    remainQuests.splice(index, 1)
                  }
                  if (chomped === 'The Sign') {
                    ['1', '2', '3'].forEach(bu => {
                      var signdex = remainQuests.indexOf(`The Sign${bu}部`)
                      if (signdex > -1) {
                        remainQuests.splice(signdex, 1)
                      }
                    })
                  }
                  finishedQuestTab.forEach(fqt => fqt.insertAdjacentHTML('beforeend', '<br/><tt><span style="color: darkred; font-weight: bold;">' + worldNames[worldIndex].substr(0, 3) + ' ' + charName + '</span></tt>'))
                })
              }
            })
            if (nextWorld !== 0 || nextChar !== 0) {
              load_quest_detail(nextChar, nextWorld, 2, currentDate)
            } else {
              finish('確認完了')
            }
          } catch (ex) {
            if (nextWorld !== 0 || nextChar !== 0) {
              if (retry > 0) {
                load_quest_detail(charIndex, worldIndex, retry - 1, currentDate)
              } else {
                load_quest_detail(nextChar, nextWorld, 2, currentDate)
              }
            } else {
              finish('確認完了しましたが、何か問題が発生した可能性があります')
            }
          }
        }
        , onfailure: function (request) {
          if (currentDate !== lastFetchDate.toString()) { return }
          if (nextWorld !== 0 || nextChar !== 0) {
            if (retry > 0) {
              load_quest_detail(charIndex, worldIndex, retry - 1, currentDate)
            } else {
              load_quest_detail(nextChar, nextWorld, 2, currentDate)
            }
          } else {
            finish('確認完了しましたが、何か問題が発生した可能性があります')
          }
        }
        , onException: function (request) {
          if (currentDate !== lastFetchDate.toString()) { return }
          if (nextWorld !== 0 || nextChar !== 0) {
            if (retry > 0) {
              load_quest_detail(charIndex, worldIndex, retry - 1, currentDate)
            } else {
              load_quest_detail(nextChar, nextWorld, 2, currentDate)
            }
          } else {
            finish('確認完了しましたが、何か問題が発生した可能性があります')
          }
        }
      }
    )
  } else {
    if (currentDate !== lastFetchDate.toString()) { return }
    if (nextWorld !== 0 || nextChar !== 0) {
      load_quest_detail(nextChar, nextWorld, 2, currentDate)
    } else {
      finish('確認完了')
    }
  }
}

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  if (request == "Action") {
    fetchQuests()
  }
  if (request == "Reload") {
    setupBingoInformation(null)
  }
  if (request == "ReloadAndRun") {
    var callback = function () {
      fetchQuests()
    }
    setupBingoInformation(callback)
  }
})
