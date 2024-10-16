chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.coupons) {
        chrome.action.setBadgeText({ text: request.coupons.length.toString() });
        chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
        chrome.storage.local.set({ coupons: request.coupons });
    } else if (request.clearCoupons) {
        chrome.storage.local.remove('coupons');
        chrome.action.setBadgeText({ text: '' });
        chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
    }
});

/*
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: extractCoupons
        });
    }
});
*/