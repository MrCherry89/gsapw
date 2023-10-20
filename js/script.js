$(document).ready(function () {
  gsap.to(".text-animate svg", {
    scale: 72,
    duration: 4,
    x: "-85vw",
    scrollTrigger: {
      scrub: -1,
      start: "top top",
      end: "bottom",
      pin: ".text-animate",
    },
    onComplete: function () {
      $(".wrapper").addClass("hidden");
      $(".div").addClass("visible");
    },
    onUpdate: function () {
      if ($(".wrapper").hasClass("hidden")) {
        $(".wrapper").removeClass("hidden");
        $(".div").removeClass("visible");
      }
    },
  });

  gsap.to(".div .left", {
    x: 0,
    duration: 3,
    scrollTrigger: {
      scrub: -1,
    },
  });
  gsap.to(".div .right", {
    x: 0,
    duration: 3,
    scrollTrigger: {
      scrub: -1,
    },
  });
});
