document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('coupons', ({ coupons }) => {
        const container = document.getElementById('coupon-container');
        if (coupons && coupons.length > 0) {
            coupons.forEach(coupon => {
                const card = document.createElement('div');
                card.className = 'coupon-card';
                card.innerText = coupon;

                // Click handler for copying coupon
                card.onclick = () => {
                    navigator.clipboard.writeText(coupon).then(() => {
                        showCopiedNotification();
                    });
                };

                container.appendChild(card);
            });
        } else {
            container.innerText = "No coupons found.";
        }
    });
});

// Function to show the copied notification
function showCopiedNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = "Copied!";
    document.body.appendChild(notification);

    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.remove();
    }, 2000);
}
