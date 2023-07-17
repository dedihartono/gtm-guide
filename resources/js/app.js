import "./bootstrap";

const handleClick = (selector, eventName) => {
    triggerCustomEvent(eventName);
}

const triggerCustomEvent = (eventName) => {
    // Check if Google Tag Manager is defined
    if (typeof dataLayer !== "undefined") {
        // Push an event to the dataLayer
        dataLayer.push({
            event: eventName,
        });
    } else {
        console.error("Google Tag Manager is not defined.");
    }
}


window.handleClick = handleClick
window.triggerCustomEvent = triggerCustomEvent
