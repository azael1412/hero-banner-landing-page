/**
 * If the screen is a tablet, then initialize AOS with a duration of 2000ms and the default easing.
 * Otherwise, disable AOS.
 * @param e - the event object
 */
function handleTabletChange(e) {
    const data = e.matches ? {
        duration: 2000,
        easing: 'ease', // default easing for AOS animations
    } : {
        disable: true,
    };
    AOS.init(data);
}

window.addEventListener('load',() => {
    const media = window.matchMedia("(min-width: 768px)");
    handleTabletChange(media); // Call listener function at run time
    media.addListener(handleTabletChange); // Attach listener function on state changes
});



