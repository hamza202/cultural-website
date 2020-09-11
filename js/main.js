/* global jQuery */

// var main = function () {
//     var handleMenuResponsive = function () {
//         let play = document.querySelector("#menu");
//
//         let tl = gsap.timeline({paused: true});
//         let t2 = gsap.timeline({paused: true});
//
//         tl.to(".mobile-menu", {duration: 0.5, opacity: 1, visibility: "visible"})
//             .to(".mobile-menu .odd", {duration: 0.7, x: -50});
//
//         t2.to(".mobile-menu .even", {duration: 0.7, x: 50, delay: 0.5});
//
//         play.onclick = function () {
//             console.log('test');
//             tl.play();
//             t2.play();
//         };
//
//         // function close_menu() {
//         //     $('.menu-list,.overlay-menu').addClass('active');
//         //     $('.hamburger').removeClass('is-active').addClass('unactive');
//         //     $('body').removeClass('overflow-hidden');
//         // };
//
//     };
//     return {
//         init: function () {
//             handleMenuResponsive();
//         }
//     };
// }();
var t3 = new TimelineMax({paused: true});
t3.to('.placeholder img', 0.8, {
    opacity: 1,
    y: "0",
    ease: Power3.ease
});

$(document).ready(function () {
    $(".menu-list li").hover(
        function () {
            $(this).addClass('hover');
            $(this).siblings().addClass('notHover')
        },
        function () {
            $(this).removeClass('hover');
            $(this).siblings().removeClass('notHover')
        }
    );

    //smooth scroll function
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"),
        smooth: true
    });
    $('.arrow-down').on("click", function () {
        locoScroll.scrollTo($(this).attr("data-goTo"), -50)
    });

    //work_page_scroll_trigger
    function work_page_scroll_trigger() {
        gsap.to(".a1 img", {
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: "power5.ease",
            scrollTrigger: {
                trigger: ".a1",
                start: "-10% center",
                scroller: ".smooth-scroll",
                end: "+50% center",
                toggleActions: "play none none reverse",
                markers: true,
            }
        });
        gsap.to(".a2 img", {
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: "power5.ease",
            scrollTrigger: {
                trigger: ".a2",
                start: "-10% center",
                scroller: ".smooth-scroll",
                end: "+50% center",
                toggleActions: "play none none reverse",
                markers: true,
            }
        });
        gsap.to(".a3", {
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: "power5.ease",
            scrollTrigger: {
                trigger: ".a2",
                start: "-10% center",
                scroller: ".smooth-scroll",
                end: "+50% center",
                toggleActions: "play none none reverse",
                markers: true,
                scrub:true
            }
        });
    }

    function smooth_scroll() {
        gsap.registerPlugin(ScrollTrigger);

        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy(".smooth-scroll", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
        });

        work_page_scroll_trigger();

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();

    }

    //do some thing on load
    function page_has_load() {
        $("body").removeClass("overflow-hidden")
    }

    // menu toggle animation

    var tl = new TimelineMax({paused: true});

    tl.to('.line1', {
        duration: 0.6,
        rotate: 45,
        y: 4,
        ease: 'power4.out'
    });
    tl.to('.line2', {
        duration: 0.6,
        rotate: -45,
        y: -4,
        ease: 'power4.out',
        delay: -0.6
    });

    //menu
    tl.to('.mobile-menu', {
        opacity: 1,
        display: 'flex',
        duration: 1,
        ease: 'power4.out',
        delay: -0.4
    });
    tl.to('.mobile-menu ul li', {
        opacity: 1,
        duration: 0.7,
        ease: 'power1.out',
        delay: -0.3,
        x: "0%",
        stagger: 0.3
    });

    tl.reverse();

    $('#menu-btn').on('click', function () {
        tl.reversed(!tl.reversed());
        console.log('test')
    });
    var t2 = new TimelineMax({paused: true});
    t2.to('#header .head-logo img', {
        opacity: 1,
        delay: -0.3,
        duration: 1.5,
        ease: Expo.easeInOut,
    });
    t2.to('.menu-list li', {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1.5,
        delay: -0.9,
        ease: Expo.easeInOut,
        x: 0
    });

    $(window).on('load', function () {

        var t4 = new TimelineMax({paused: true});
        t4.staggerFrom('.text-hidden', 1.5, {
            y: "105%",
            ease: Power4.ease
        }, 0.20);

        t3.to('.placeholder img', 1.5, {
            opacity: 0,
            delay: 1,
            duration: 0.5,
            y: "-100%",
            ease: Expo.easeInOut,
        });
        t3.to('.placeholder', {
            duration: 1.5,
            delay: 0,
            // opacity:0.5,
            BorderRadius: "50%",
            y: "-100%",
            ease: Power4.easeOut
        });

        t3.to('.placeholder-container span', 1, {
            BorderRadius: "50%",
            duration: 0.4,
            delay: -0.7,
            y: "-100%",
            ease: Power4.easeOut,
        });

        var $t = $(".placeholder-container");
        t3.to('.placeholder-container', {
            display: "none",
            delay: -0.7,
            onComplete: function () {
                $t.remove();
                t2.play();
                t4.play();
                smooth_scroll();
                page_has_load();
            }
        });
        t3.play();

        // document.addEventListener("mousemove", parallax);
        // function parallax(e) {
        //     this.querySelectorAll('.main-title-parallax').forEach(layer =>{
        //         const speed = layer.getAttribute('data-speed');
        //         const x = (window.innerWidth - e.pageX*speed)/100;
        //         const y = (window.innerWidth - e.pageY*speed)/100;
        //         layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        //
        //     })
        // }

    })
});
