// ANIMATIONS
gsap.fromTo('.sidebar',
    { right: 60 },
    { right: 0, duration: 1, ease: 'expo.inOut'}
);
gsap.fromTo('.col1 .img',
    { left: '100%' },
    { left: 0, duration: 2, ease: 'expo.inOut', delay: 1 }
);
gsap.fromTo(['#hero-logo', '#hero-caption'],
    { marginBottom: 10, opacity: 0 },
    { marginBottom: 0, opacity: 1, duration: 1, ease: 'expo.inOut', delay: 2, stagger: .5 }
);
gsap.fromTo('.col2 .c-top .img',
    { right: '100%' },
    { right: 0, duration: 2, ease: 'expo.inOut', delay: 0.7 }
);
gsap.fromTo('.col2 .c-top .desc',
    { bottom: 0, opacity: 0 },
    { bottom: '30px', opacity: 1, duration: 2, ease: 'expo.inOut', delay: 0.8 }
);
gsap.fromTo('.col2 .c-bottom .img',
    { right: '100%' },
    { right: 0, duration: 2, ease: 'expo.inOut', delay: 1 }
);
gsap.fromTo('.col2 .c-bottom .overlay',
    { opacity: 0 },
    { opacity: 1, duration: 2, ease: 'expo.inOut', delay: 1.5 }
);
gsap.fromTo(['.col2 .c-bottom .title','.col2 .c-bottom .btn'],
    { opacity: 0 },
    { opacity: 1, ease: 'expo.inOut', delay: 2, stagger: 0.5 }
);

var btnExplore = document.getElementById('btn-explore');

btnExplore.addEventListener('mouseover', function() {
    gsap.to('.col2 .c-bottom .overlay',
        { opacity: 0, duration: 1, ease: 'expo.inOut' }
    );
    gsap.to('.col2 .c-bottom .img',
        { scale: 1.5, duration: 1, ease: 'expo.inOut' }
    );
});
btnExplore.addEventListener('mouseout', function() {
    gsap.to('.col2 .c-bottom .overlay',
        { opacity: 1, duration: 1, ease: 'expo.inOut' }
    );
    gsap.to('.col2 .c-bottom .img',
        { scale: 1, duration: 1, ease: 'expo.inOut' }
    );
});




document.addEventListener('DOMContentLoaded', () => {
    var width = window.innerWidth,
    height = window.innerHeight;
    console.log( width + ' : ' + height );

    let controller = new ScrollMagic.Controller();

    // about section
    let timeLine_2 = new TimelineMax();

    timeLine_2
    .from('.section-1 .section-wrapper h1', 1, 
        { 
            left: "-500px", 
            ease: Power4.easeOut
        }
    )
    .from('.section-1 .section-wrapper .ul-wrapper .col1-section1 ul', 1, 
        { 
            marginBottom: 10,
            opacity: 0, 
            top: '50px',
            ease: Expo.easeOut
        }, '-=1'
    )
    .from('.section-1 .section-wrapper .ul-wrapper .col2-section1 img', 2, 
        { 
            // marginBottom: 10,
            opacity: 0, 
            x: '-100px',
            ease: Power4.easeOut
        }, '-=2'
    )

    if (width <= 768) {
        let scene = new ScrollMagic.Scene({
            triggerElement: '#about',
            reverse: false,
            triggerHook: '1'
        })
        .setTween(timeLine_2)
        // .addIndicators()
        .addTo(controller);
    } else {

        let scene = new ScrollMagic.Scene({
            triggerElement: '#about',
            reverse: false,
            triggerHook: '0.25'
        })
        .setTween(timeLine_2)
        // .addIndicators()
        .addTo(controller);
    }

    // services section
    let timeLine_3 = new TimelineMax();

    timeLine_3
    .from('.section-2 .section-2_row .col1', 1, 
        { 
            y: 400, 
            opacity: 0,
            ease: Expo.easeOut
        }, '-=2'
    )
    .from('.section-2 .section-2_row .col2', 2, 
        { 
            y: 400, 
            opacity: 0,
            ease: Expo.easeOut
        }, '-=2'
    )
    .from('.section-2 .section-2_row .col3', 3, 
        { 
            y: 400, 
            opacity: 0,
            ease: Expo.easeOut
        }, '-=2'
    )

    if (width <= 768) {
        let scene2 = new ScrollMagic.Scene({
            triggerElement: '#services',
            reverse: false,
            triggerHook: '1'
        })
        .setTween(timeLine_3)
        // .addIndicators()
        .addTo(controller);
    } else {
        let scene2 = new ScrollMagic.Scene({
            triggerElement: '#services',
            reverse: false,
            triggerHook: '0.25'
        })
        .setTween(timeLine_3)
        // .addIndicators()
        .addTo(controller);
    }

    // contact section
    let timeLine_4 = new TimelineMax();

    timeLine_4
    .from('.section-3 .section-wrapper h1', 1, 
        { 
            x: -400, 
            opacity: 0,
            ease: Expo.easeOut
        }
    )
    .from('.section-3 .section-wrapper .contact-wrapper .form-left h2', 1, 
        { 
            x: -400, 
            opacity: 0,
            ease: Expo.easeOut
        }
    )
    .from('.section-3 .section-wrapper .contact-wrapper .form-left form input:nth-child(1)', 1, 
        { 
            x: -400, 
            opacity: 0,
            ease: Expo.easeOut
        }, '-=3'
    )
    .from('.section-3 .section-wrapper .contact-wrapper .form-left form input:nth-child(2)', 2, 
        { 
            x: -400, 
            opacity: 0,
            ease: Expo.easeOut
        }, '-=3'
    )
    .from('.section-3 .section-wrapper .contact-wrapper .form-left form textarea', 3, 
        { 
            x: -400, 
            opacity: 0,
            ease: Expo.easeOut
        }, '-=3'
    )
    .from('.section-3 .section-wrapper .contact-wrapper .form-left form button', 3, 
        { 
            x: -400, 
            opacity: 0,
            ease: Expo.easeOut
        }, '-=1'
    )
    .from('.section-3 .section-wrapper .contact-wrapper .form-right h2', 1, 
        { 
            x: 400, 
            opacity: 0,
            ease: Expo.easeOut
        }, '-=1'
    )
    .from('.section-3 .section-wrapper .contact-wrapper .form-right p', 3, 
        { 
            x: 400, 
            opacity: 0,
            ease: Expo.easeOut
        }, '-=3'
    )

    if (width <= 768) {
        let scene3 = new ScrollMagic.Scene({
            triggerElement: '#contact',
            reverse: false,
            triggerHook: '1'
        })
        .setTween(timeLine_4)
        // .addIndicators()
        .addTo(controller);
    } else {
        let scene3 = new ScrollMagic.Scene({
            triggerElement: '#contact',
            reverse: false,
            triggerHook: '0.25'
        })
        .setTween(timeLine_4)
        // .addIndicators()
        .addTo(controller);
    }
})

// SIDEBAR
function menuAnimation(x) {

    // toggle menu button
    x.classList.toggle("change");
    
    var toggleBtn = document.getElementById('sidenav');
    var menuOverlay = document.getElementById("menu-overlay");
    var socialIconsDisplay = document.getElementById('socialIconsDisplay');
    var sidebarContent = document.getElementById("sidebar-content");
    var menuLinks = document.getElementById("menuLink");

    if (toggleBtn.style.width == '80%') {
        toggleBtn.style.width = '60px';
        // footer text left
        gsap.to('.wrapper .sidebar .fixed-sidebar .footer',
            { right: 0, left: '22px', bottom: '-13px', transform: "rotate(-90deg)", duration: 2, ease: 'expo.inOut' }
        );
    } else {
        toggleBtn.style.width = '80%';

        menuLinks.onclick = function(){
            // toggle menu overlay
            menuOverlay.classList.toggle('enabled');
            // toggle fixed-sidebar width
            toggleBtn.style.width = "60px";
            // toggle menu links
            sidebarContent.classList.toggle('enabled');
            // toggle social icons
            socialIconsDisplay.classList.toggle('display');
            // toggle hamburger button
            x.classList.toggle("change");
            // footer text left 
            gsap.to('.wrapper .sidebar .fixed-sidebar .footer',
                { right: 0, left: '22px', bottom: '-13px', transform: "rotate(-90deg)", duration: 2, ease: 'expo.inOut' }
            );
        }
        
        // footer text left 
        gsap.to('.wrapper .sidebar .fixed-sidebar .footer',
            { right: 0, bottom: '13px', transform: "rotate(360deg)", duration: 2, ease: 'expo.inOut' }
        );
    }
    
    // toggle social media icons display
    menuOverlay.classList.toggle('enabled');

    sidebarContent.classList.toggle('enabled');

    socialIconsDisplay.classList.toggle('display');

    // sidebar-content animations
    gsap.fromTo('.wrapper .sidebar .fixed-sidebar .sidebar-content ul li',
        { y: 200, opacity: 0, duration: 2, ease: 'expo.inOut' },
        { y: 0, opacity: 1, duration: 1, ease: 'expo.inOut' }
    );
    // sidebar social media icon animations
    gsap.fromTo('.wrapper .sidebar .fixed-sidebar .social-icons ul li',
        { left: '-500px', duration: 2 },
        { left: '22px', duration: 2, ease: 'expo.inOut', delay: 0.7 }
    );
} 