var tl = gsap.timeline();

tl.from(".navbar",{
    x:-200,
    opacity:0,
})
tl.from(".home",{
    x:400,
    opacity:0
})


gsap.registerPlugin(ScrollTrigger);

let tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start: "top top",
        end: "+=200",
        scrub: 1,
        pin:".home",
        markers: true
    },
});

tl1.to(".home-img",{
    y:700,
    rotate: 0,
    scale:0.95,
    duration:1
})

gsap.from(".second",{
    x:600,
    opacity:0,
    duration:0.5,
    delay:4
})