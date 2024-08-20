async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  chrome.scripting.executeScript({
    target: { tabId: tab.id ? tab.id : -1 },
    func: () => console.log("Hello from background script"),
  });
};
