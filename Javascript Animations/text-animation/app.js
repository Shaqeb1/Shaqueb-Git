const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: 'Power3.easeOut' },
})

tl.fromTo(
  '.hero-img',
  { scale: 1.3, borderRadius: '0rem' },
  {
    scale: 1,
    borderRadius: '2rem',
    delay: 0.35,
    duration: 2.5,
    ease: 'elastic.out(1.5,1)',
  }
)

tl.fromTo('.cta1', { x: 110, opacity: 0 })
