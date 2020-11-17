export function computeColor(h = 50, s = 100, l = 0){
    return `hsl(${h}, ${s}%, ${l}%)`;
}


/**
 * Animate scroll inside an alement
 * @param {DOM element} element     The DOM element inside which to scroll
 * @param {Number}      offset      The offset from Left of the element to which to scroll
 * @param {Number}      duration    Duration of the animation in miliseconds
 * @param {Function}    callback    f() Function to call when the animation is finished
 */
export function scrollToDuration(element, offset, duration, callback = null) {
    let elem = element
    if (Math.abs(offset - elem.scrollLeft) < 0.5) return;

    const totalLength = (offset - elem.scrollLeft);
    let startingPos = elem.scrollLeft
    let scrollCount = 0, oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            scrollCount += Math.PI/2 * (newTimestamp - oldTimestamp) / duration;
            if (scrollCount >= Math.PI/2) {
                callback ? callback() : null;
                return elem.scrollLeft = offset;
            }
            elem.scrollLeft = startingPos + totalLength * Math.sin(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}
