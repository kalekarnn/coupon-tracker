const couponRegex = /\b[A-Z]{2,10}[-_]?[0-9]{2,10}\b/g;


function extractCoupons() {
  const bodyText = document.body.innerText;
  const foundCoupons = bodyText.match(couponRegex);

  if (foundCoupons) {
    chrome.runtime.sendMessage({ coupons: Array.from(new Set(foundCoupons)) });
  } else {
    chrome.runtime.sendMessage({ clearCoupons: true });
  }
}

// Initial extraction of coupons on page load
window.onload = extractCoupons;

window.addEventListener("load", extractCoupons);

// Listen for visibility change to reset coupons when switching tabs
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    extractCoupons(); // Re-extract coupons when tab is active
  }
});
