$(document).ready(function () {
  // Sticky Navbar on Scroll
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Scroll-up button visibility
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Scroll-up button click
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  // Smooth scroll for menu items
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // Toggle Navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing Text Animation
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Mobile App Developer", "Freelancer"],
    typeSpeed: 200,
    backSpeed: 60,
    loop: true,
  });

  // Owl Carousel Initialization
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".pic", {
    opacity: 0,
    duration: 3,
    ease: "power1.out",
  });
  // gsap.fromTo(
  //   ".text",
  //   { opacity: 0, scale: 0.5, rotation: -20, color: "red" },
  //   {
  //     opacity: 1,
  //     scale: 1.2,
  //     rotation: 0,
  //     color: "#00ffcc",
  //     duration: 2,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "power2.inOut",
  //   }
  // );
  gsap.from(".navbar", {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  });
});
