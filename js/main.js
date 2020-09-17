/* global jQuery */

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


        var arr1 = [0, 0, 100, 0, 100, 100, 0, 100];

        //work_page_scroll_trigger
        function work_page_scroll_trigger() {
            if ($(".a1 img").length) {
                gsap.to(".a1 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a1",
                        start: "-40% center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a2 img").length) {
                gsap.to(".a2 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a2",
                        start: "-40% center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".card-1 a").length) {
                gsap.to(".card-1 a", {
                    opacity: 1,
                    webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
                    y: 0,
                    duration: 2,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: ".card-1",
                        start: "-30% center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".card-2 a").length) {
                gsap.to(".card-2 a", {
                    opacity: 1,
                    webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
                    y: 0,
                    duration: 2,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: ".card-2",
                        start: "-30% center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".card-1 .my-breadcrumb").length) {
                gsap.from(".card-1 .my-breadcrumb", {
                    opacity: 0,
                    y: 150,
                    duration: 3,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: ".card-1",
                        start: "-30% center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".card-2 .my-breadcrumb").length) {
                gsap.from(".card-2 .my-breadcrumb", {
                    opacity: 0,
                    y: 150,
                    duration: 3,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: ".card-2",
                        start: "30% center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                        // markers: true
                    }
                });
            }
        }

        //deep page scroll trigger
        function deep_page_scroll_trigger() {
            if ($(".a3 img").length) {
                gsap.to(".a3 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a3",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a4").length) {
                gsap.to(".a4", {
                    opacity: 1,
                    webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
                    y: 0,
                    duration: 2,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: ".a4",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a5").length) {
                gsap.to(".a5", {
                    opacity: 1,
                    webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
                    y: 0,
                    duration: 2,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: ".a5",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a6").length) {
                gsap.to(".a6", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a6",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a7").length) {
                gsap.to(".a7", {
                    opacity: 1,
                    webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
                    y: 0,
                    duration: 2,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: ".a7",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a8 p").length) {
                gsap.to(".a8 p", {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: ".a8",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                },);
            }
            if ($(".a9").length) {
                gsap.to(".a9", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a9",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a10 img").length) {
                gsap.to(".a10 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a10",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a11 img").length) {
                gsap.to(".a11 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a11",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a12").length) {
                gsap.to(".a12", {
                    opacity: 1,
                    webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
                    y: 0,
                    duration: 2,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: ".a12",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a13").length) {
                gsap.to(".a13", {
                    opacity: 1,
                    webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
                    y: 0,
                    duration: 2,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: ".a13",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a14 img").length) {
                gsap.to(".a14 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a14",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a15 img").length) {
                gsap.to(".a15 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a15",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
        }

        //MULA page scroll trigger
        function mula_page_scroll_trigger() {
            if ($(".a16 img").length) {
                gsap.to(".a16 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a16",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a17 img").length) {
                gsap.to(".a17 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a17",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a18 img").length) {
                gsap.to(".a18 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a18",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a19 img").length) {
                gsap.to(".a19 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a19",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".a20 img").length) {
                gsap.to(".a20 img", {
                    scale: 1,
                    rotate: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".a20",
                        start: "-320vh center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
        }

        //About page scroll trigger
        function about_page_scroll_trigger() {
            var t5 = new TimelineMax({paused: true});
            if ($(".about-first-section .section-img-container img").length) {
                t5.to('.about-first-section .section-img-container img', {
                    webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
                    duration: 3,
                    ease: 'power4.out',
                    y: 0,
                });
                t5.play();
            }
            if ($(".about-second-section h2").length) {
                gsap.to(".about-second-section h2", {
                    opacity: 1,
                    duration: 1.5,
                    y: 0,
                    scrollTrigger: {
                        trigger: ".about-second-section",
                        start: "-50% center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".about-second-section p").length) {
                gsap.to(".about-second-section p", {
                    opacity: 1,
                    duration: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: ".about-second-section p",
                        start: "-50% center",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }

            if ($(".about-third-section").length) {
                let t6 = gsap.timeline();
                t6.to('.about-third-section img', {
                    webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
                    duration: 2,
                    ease: 'power4.out'
                });
                t6.to('.about-third-section p', {
                    y: 0,
                    opacity: 1,
                    delay: -1.5,
                    duration: 2,
                    ease: 'power4.out'
                });
                ScrollTrigger.create({
                    animation: t6,
                    trigger: ".about-third-section",
                    scroller: ".smooth-scroll",
                    start: "-25% center",
                    end: "+80% +70%",
                    scrub: 3
                });
            }

            if ($(".about-fourth-section").length) {
                gsap.to(".about-fourth-section .v-line", {
                    height: 'calc(100% - 235px)',
                    scrollTrigger: {
                        trigger: ".about-fourth-section",
                        start: "top center",
                        scroller: ".smooth-scroll",
                        end: "+100% +40%",
                        toggleActions: "play none none reverse",
                        scrub: 2,
                    }
                });
                let t7 = gsap.timeline();
                t7.to('.about-fourth-section img', {
                    webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
                    duration: 2,
                    ease: 'power4.out'
                });
                t7.to('.about-fourth-section p', {
                    y: 0,
                    opacity: 1,
                    delay: -1.5,
                    duration: 2,
                    ease: 'power4.out'
                });
                ScrollTrigger.create({
                    animation: t7,
                    trigger: ".about-fourth-section",
                    scroller: ".smooth-scroll",
                    start: "-30% center",
                    end: "+80% +70%",
                    scrub: 3
                });
            }
            if ($(".about-fifth-section").length) {
                let t7 = gsap.timeline();
                t7.to('.about-fifth-section .section-img-container img', {
                    webkitClipPath: 'polygon(' + arr1[0] + '%' + arr1[1] + '%,' + arr1[2] + '%' + arr1[3] + '%,' + arr1[4] + '%' + arr1[5] + '%,' + arr1[6] + '%' + arr1[7] + '%)',
                    ease: 'power4.out',
                    duration: 2,

                });
                t7.to('.about-fifth-section .cultural-section p', {
                    y: 0,
                    opacity: 1,
                    delay: -1.5,
                    ease: 'power4.out',
                    duration: 2,
                });
                ScrollTrigger.create({
                    animation: t7,
                    trigger: ".about-fifth-section",
                    scroller: ".smooth-scroll",
                    start: "-25% center",
                    end: "+80% +70%",
                    scrub: 2,
                    // markers:true
                });
            }

            if ($(".about-fifth-section").length) {
                gsap.to(".about-fifth-section .v-line", {
                    height: 'calc(100% - 650px)',
                    scrollTrigger: {
                        trigger: ".about-fifth-section",
                        start: "top center",
                        scroller: ".smooth-scroll",
                        end: "+100% +40%",
                        toggleActions: "play none none reverse",
                        scrub: 2,
                    }
                });
            }
            if ($(".be-section").length) {
                gsap.to(".be-section p", {
                    opacity: 1,
                    duration: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: ".be-section",
                        start: "10% 90%",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".service-accordion").length) {
                gsap.to(".service-accordion .card", {
                    opacity: 1,
                    duration: 1,
                    y: 0,
                    stagger: 0.5,
                    scrollTrigger: {
                        trigger: ".service-accordion",
                        start: "10% 90%",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
            if ($(".our-service-section").length) {
                gsap.to(".our-service-section .v-line", {
                    height: 'calc(110% - 0px)',
                    scrollTrigger: {
                        trigger: ".our-service-section",
                        start: "-20% center",
                        scroller: ".smooth-scroll",
                        end: "+100% +40%",
                        toggleActions: "play none none reverse",
                        scrub: 2,
                    }
                });
            }
            if ($(".our-client-section").length) {
                gsap.to(".our-client-section .clint-img-container", {
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".our-client-section",
                        start: "10% 90%",
                        scroller: ".smooth-scroll",
                        end: "+50% center",
                        toggleActions: "play none none reverse",
                    }
                });
            }
        }


        function smooth_scroll() {
            gsap.registerPlugin(ScrollTrigger);
            //smooth scroll function
            const locoScroll = new LocomotiveScroll({
                el: document.querySelector(".smooth-scroll"),
                smooth: true
            });
            $('.go-to').on("click", function () {
                locoScroll.scrollTo($(this).attr("data-goTo"), -50)
            });
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
            deep_page_scroll_trigger();
            mula_page_scroll_trigger();
            about_page_scroll_trigger();

            ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

            // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
            ScrollTrigger.refresh();

        }

//do some thing on load
        function page_has_load() {
            $("body").removeClass("overflow-hidden")
        }

// menu toggle animation
    if ($('#header').length) {
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
    }
        $(window).on('load', function () {

            var t4 = new TimelineMax({paused: true});
            if ($('.text-hidden').length) {
                t4.staggerFrom('.text-hidden', 1.5, {
                    y: "105%",
                    ease: Power4.ease
                }, 0.20);
            }
            var t3 = new TimelineMax({paused: true});

            t3.to('.placeholder-img', 1.5, {
                opacity: 0,
                duration: 0.5,
                y: "-120%",
                ease: Expo.easeInOut,
            });
            t3.to('.placeholder', {
                duration: 1.5,
                delay: -0.4,
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
                    if ($('#header').length) {
                        t2.play();
                    }
                    if ($('.text-hidden').length) {
                        t4.play();
                    }
                    if ($('.smooth-scroll').length) {
                        smooth_scroll();
                    }
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
            let inputFocus = $(".input-container input");
            inputFocus.on("focusin",function () {
                $(this).parent().addClass("focus");
            });
            inputFocus.on("focusout",function () {
                $(this).parent().removeClass("focus");
            })
        });
    }
)
;
