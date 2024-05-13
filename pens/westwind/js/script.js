const panels = gsap.utils.toArray(".services");
gsap.to(panels, {
  xPercent: (i) => -100 * i,
  duration: (i) => i,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    end: "+=" + 100 * panels.length + "5",
    scrub: true,
    pin: true,
    markers: {
      startColor: "orangered",
      endColor: "orangered"
    }
  }
});
