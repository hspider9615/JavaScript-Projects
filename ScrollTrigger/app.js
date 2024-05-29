gsap.registerPlugin(ScrollTrigger);

// SCROLLER

var scroller = document.querySelector('.wrapper');
var sections = document.querySelectorAll('.section');
var numSections = sections.length;
let scrollWidth;

function createScroller() {
  scrollWidth = scroller.offsetWidth - innerWidth;
  ScrollTrigger.addEventListener('refreshInit', () => {
    scrollWidth = scroller.offsetWidth - innerWidth;
    gsap.set(document.body, { height: scrollWidth + innerHeight });
  });
}

createScroller();

gsap.to(scroller, {
  x: () => -scrollWidth,
  ease: 'none',
  scrollTrigger: {
    start: 0,
    end: 'bottom bottom',
    scrub: 0.75,
    invalidateOnRefresh: true,
    onUpdate: (trigger) => console.log(trigger.progress),
  },
});

// NAV

let navWidth = 0;
let maxScrollerWidth = scroller.offsetWidth - innerWidth;

function slideAnim(e) {
  e.preventDefault();
  let direction = this.classList.contains('navi--next') ? 1 : -1;
  navWidth = Math.min(
    Math.max(navWidth + direction * innerWidth, 0),
    maxScrollerWidth
  );

  gsap.to(window, {
    duration: 2,
    ease: 'power3.out',
    scrollTo: navWidth,
  });
}

document.querySelector('.navi--prev').addEventListener('click', slideAnim);
document.querySelector('.navi--next').addEventListener('click', slideAnim);
