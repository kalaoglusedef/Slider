var models = [
  {
    name: " Kia Ceed 1.0 ",
    image: "img/kia.jpg",
    link: "http://www.arabalar.com.tr/kia/ceed/2022/1-0-cool-dct",
  },
  {
    name: "Nissan Qashqai 1.3",
    image: "img/nissan.jpg",
    link: "http://www.arabalar.com.tr/nissan/qashqai/2022/1-3-designpack-cvt",
  },
  {
    name: "Volkswagen Taigo",
    image: "img/vw.jpg",
    link: "http://www.arabalar.com.tr/volkswagen/taigo/2022/1-0-life",
  },
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2021/430i-coupe-2-0-m-sport",
  },
  {
    name: " Volkswagen Tiguan 1.5",
    image: "img/vw-tiguan.jpg",
    link: "http://www.arabalar.com.tr/volkswagen/tiguan/2022/1-5-elegance",
  },
];

var index = 1;
var slaytCount = models.length;
var interval;
var settings = {
  duration: "2000",
  random: false,
};

document.querySelectorAll(".fas").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".fas").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settings) {
  var prev;

  interval = setInterval(function () {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index === prev);
      prev = index;
    } else {
      if (slaytCount === index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }
    console.log(index);
    showSlide(index);
  }, settings.duration);
}

init(settings);
document
  .querySelector(".fa-arrow-alt-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
  });
document
  .querySelector(".fa-arrow-alt-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
    console.log(index);
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document.querySelector(".card-link").setAttribute("href", models[index].link);
  document.querySelector(".card-img").setAttribute("src", models[index].image);
}
