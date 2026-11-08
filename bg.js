/*
 * Background hook.
 *
 * Right now this does nothing on purpose - the background is a clean
 * gradient from style.css. When you're ready for a moving background
 * (particles, waves, whatever), draw it on the #bg canvas from here.
 * The canvas is already fixed behind the content and resized for you.
 */

const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Your animation loop goes here later, e.g.:
//
// function frame(t) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // ...draw something that moves...
//     requestAnimationFrame(frame);
// }
// requestAnimationFrame(frame);
