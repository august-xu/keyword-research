function baiduSearch(info: chrome.contextMenus.OnClickData) {
  let url = null

  if (info.menuItemId === "trends")
    url = `https://trends.google.com/trends/explore?geo=US&q=${info.selectionText},gpts&hl=zh-CN`
  else if (info.menuItemId === "kd")
    url = `https://ahrefs.com/zh/keyword-difficulty/?country=us&input=${info.selectionText}`
  else url = `https://web.archive.org/web/${info.selectionText}`

  chrome.tabs.create({
    url: url
  })
}

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "trends",
    title: "google trends",
    type: "normal",
    contexts: ["selection"]
  })
  chrome.contextMenus.create({
    id: "kd",
    title: "kd difficulty",
    type: "normal",
    contexts: ["selection"]
  })

  chrome.contextMenus.create({
    id: "achive",
    title: "web achive",
    type: "normal",
    contexts: ["selection"]
  })

  chrome.contextMenus.onClicked.addListener((info) => baiduSearch(info))
})
