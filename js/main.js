$("#openBtn").click(() => {
  if ($(".menu-left").css("left") === "-260px") {
    $(".menu-left").css({ left: 0 });
  } else {
    $(".menu-left").css({ left: -260 });
  }
});

$(".fa-close").click(function () {
  $(".menu-left").css({ left: -260 });
});

$(window).scroll(function () {
  let singersTop = $(".singers").offset().top - 50;
  let btnScroll = $("#openBtn").offset().top;

  let counterTop = $(".counter").offset().top - 50;

  let formFooter = $(".form").offset().top - 50;

  singersTop <= btnScroll && btnScroll < counterTop
    ? $("#openBtn").css({ color: "red" })
    : counterTop <= btnScroll && btnScroll < formFooter
    ? $("#openBtn").css({ color: "white" })
    : formFooter <= btnScroll
    ? $("#openBtn").css({ color: "red" })
    : $("#openBtn").css({ color: "white" });
});

$(".singer-block").click(function () {
  $(this).next().slideToggle();

  $(".singer-block + p").not($(this).next()).slideUp();
});

$("textarea").keydown(function () {
  let validLength = $("textarea").val().length;
  let valid = 100 - validLength;
  $("textarea + p span").text(valid == 0 ? "you are finished" : valid);
});


let end = '2025-1-1'
 let endDate =new Date(end).getTime()

let countdownInterval = setInterval(function () {
    let currentTime = new Date().getTime();
    let timeRemaining = endDate - currentTime;
    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      
      $('#complete').text("Countdown complete!")
      return;
    }

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  
    $("#seconds").text(seconds + ' sec') ;
    $("#minutes").text(minutes + ' min') ;
    $("#hours").text(hours + ' hour') ;
    $("#days").text(days + ' day') ;
   
  }, 1000);


