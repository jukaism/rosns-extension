function runAction() {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, "Action")
	})
}

function reloadAction() {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, "Reload")
	})
}

function reloadAndRunAction() {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, "ReloadAndRun")
	})
}

function selfId() {
	return chrome.runtime.id
}

function openOption() {
	chrome.runtime.openOptionsPage()
}
