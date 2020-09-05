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

$(document).ready(function () {
    $(".menu-list li").hover(
        function(){
            $(this).addClass('hover');
            $(this).siblings().addClass('notHover')
        },
        function(){
            $(this).removeClass('hover');
            $(this).siblings().removeClass('notHover')
        }
    );


    // menu toggle animation
    var tl = new TimelineMax({paused : true});

    tl.to('.line1' , {
        duration : 0.6,
        rotate : 45,
        y: 4,
        ease: 'power4.out'
    });
    tl.to('.line2' , {
        duration : 0.6,
        rotate : -45,
        y: -4,
        ease: 'power4.out',
        delay: -0.6
    });

    //menu
    tl.to('.mobile-menu', {
        opacity: 1,
        display:'flex',
        duration : 1,
        ease: 'power4.out',
        delay: -0.4
    });
    tl.to('.mobile-menu ul li', {
        opacity: 1,
        duration : 0.7,
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
    var t2 = new TimelineMax({paused : true});
    t2.to('.menu-list li',{
        opacity:1,
        scale:1,
        stagger: 0.2,
        delay: 0.5,
        duration : 1.5,
        ease: "elastic.out(1, 0.4)",
        x:0
    });

    t2.play()
});
