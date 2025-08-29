$(".hello-slider").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  navText: [
    '<img src="img/svg/BArrowL.svg" alt="BArrowL">',
    '<img src="img/svg/BArrowR.svg" alt="BArrowL">',
  ],
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".slider").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  navText: [
    '<img src="img/svg/WArrowL.svg" alt="WArrowL">',
    '<img src="img/svg/WArrowR.svg" alt="WArrowR">',
  ],
  responsive: {
    0: {
      items: 1,
      margin: 20,
    },
    321: {
      items: 1,
      margin: 10,
    },
    744: {
      items: 2,
      margin: 10,
    },
    995: {
      items: 3,
    },
    1201: {
      items: 4,
    },
    1700: {
      items: 5,
    },
  },
});

$(".truncate-profile-authorized").each(function () {
  var maxLength = 13;
  var text = $(this).text();

  if (text.length > maxLength) {
    var truncatedText = text.substring(0, maxLength);
    $(this).html(truncatedText + '<span class="ellipsis">...</span>');
  }
});

$(".truncate-slider").each(function () {
  var maxLength = 65;
  var text = $(this).text();

  if (text.length > maxLength) {
    var truncatedText = text.substring(0, maxLength);
    $(this).html(truncatedText + '<span class="ellipsis">...</span>');
  }
});

function openPopup() {
  const popupOverlay = document.querySelector(".popup-overlay");
  const closeBtn = document.querySelector(".close-btn");

  popupOverlay.style.display = "flex";

  closeBtn.addEventListener("click", () => {
    popupOverlay.style.display = "none";
  });

  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = "none";
    }
  });
}

function mobMenu() {
  console.log("mobMenu clicked"); // проверка
  $(".header__nav").toggleClass("active");
}
