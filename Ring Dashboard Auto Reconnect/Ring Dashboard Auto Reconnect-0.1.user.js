// ==UserScript==
// @name         Ring Dashboard Auto Reconnect
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Automatically clicks the Reconnect button in the Ring Dashboard Live View Camera when it appears due to a timeout.
// @author       1LineAtaTime
// @match        https://account.ring.com/account/dashboard*
// @icon         https://www.google.com/s2/favicons?domain=ring.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to check for the Reconnect button and click it
    function checkAndClickReconnect() {
        // Change the selector as per the actual button class or ID
        const reconnectButtonA = document.querySelector('button[data-testid="video-error__button"][aria-label="Reconnect"]'); // Update this selector if needed
        const reconnectButtonB = document.querySelector('button[data-testid="modal__accept-button"]');

        if (reconnectButtonA) {
            console.log('Reconnect button found, clicking...');
            reconnectButtonA.click();
        }
        else if (reconnectButtonB && reconnectButtonB.textContent.includes('Reconnect')) {
            console.log('Reconnect button found, clicking...');
            reconnectButtonB.click();
        }
    }
    
    // Observe changes in the DOM to detect when the checkbox appears
    const observer = new MutationObserver(() => {
        checkAndClickReconnect();
    });

    // Start observing the body for changes in the subtree and child nodes
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial check in case the checkbox is already present when the script loads
    checkAndClickReconnect();
})();
