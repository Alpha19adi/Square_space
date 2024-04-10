var t1=gsap.timeline();

t1.from("#ss,nav h3,nav button ",{
    y:-100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.1
});

t1.from("#main h1",{
    y:100,
    opacity:0,
    duration:0.5,
    stagger:0.3 
});
t1.from("#left-1,#right-2",{
    y:100,
    opacity:0,
    duration:0.5,
    stagger:0.3  
});
t1.from("#main h5",{
    opacity:0,
    y:100
});
t1.to("#main h5",{
    y:50,
    repeat:-1,
    duration:0.7,
    yoyo:true
});

