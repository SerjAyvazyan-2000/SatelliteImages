let possibilitiesSwiper = new Swiper(".possibilities-slider", {
    spaceBetween: 10,
    // autoplay:true,

    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        370: {slidesPerView: 1.1,},
        400: {slidesPerView: 1.2,},
        540: {slidesPerView: 1.3,},
        576: {slidesPerView: 1.5},
        629: {slidesPerView: 2},
        855: {slidesPerView: 2.5},
    },


});

document.querySelectorAll('.possibilities-slider-picture').forEach(twenty => {
    twenty.addEventListener('pointerdown', () => {
        possibilitiesSwiper.allowTouchMove = false;
    });

    twenty.addEventListener('pointerup', () => {
        possibilitiesSwiper.allowTouchMove = true;
    });

    twenty.addEventListener('pointerleave', () => {
        possibilitiesSwiper.allowTouchMove = true;
    });
});


let photoStyleSwiper = new Swiper(".photo-style-swiper", {
    spaceBetween: 20,
    slidesPerView:3,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 3000,
    on: {
        slideChange: updatePhotoHeroStyle,
        transitionStart: updatePhotoHeroStyle, // обновление раньше начала анимации

    },
    breakpoints: {
        320: {slidesPerView: 4,spaceBetween: 10,},
        490: {slidesPerView: 3},

    },


});

function updatePhotoHeroStyle() {
    const allItems = document.querySelectorAll(".photo-style-item");

    allItems.forEach((item) => {

        const slide = item.closest(".swiper-slide");
        if (slide.classList.contains("swiper-slide-active")) {
            item.classList.add('active');

        } else {
            item.classList.remove('active');

        }
    });
}


updatePhotoHeroStyle();




let improveStyleSwiper = new Swiper(".improve-style-swiper", {
    spaceBetween: 20,
    slidesPerView:3,
    loop: true,
    centeredSlides: true,

    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 3000,
    on: {
        slideChange: updateImproveHeroStyle,
        transitionStart: updateImproveHeroStyle,

    },
    breakpoints: {
        320: {slidesPerView: 2,spaceBetween: 10,},
        400: {slidesPerView: 2,spaceBetween: 12,},
        500: {slidesPerView: 1.5,},
        600: {slidesPerView: 2,},
        700: {slidesPerView: 3,},

        800: {slidesPerView: 4,},

        1000: {slidesPerView: 4.5,spaceBetween: 12,},

        1399: {slidesPerView: 5.3,spaceBetween: 12,},

    },


});

function updateImproveHeroStyle() {
    const allItemsImprove = document.querySelectorAll(".improve-hero-card");

    allItemsImprove.forEach((item) => {
        const lowQuality = item.getAttribute("data-low");
        const highQuality = item.getAttribute("data-high");
        const cardName = item.querySelector(".improve-card-name p");

        const slide = item.closest(".swiper-slide");
        if (slide.classList.contains("swiper-slide-active")) {
            item.classList.add("active");

            // setTimeout(() => {
            //     cardName.textContent = "Результат";
            // }, 300);

            // Обновляем фон плавно
            // setTimeout(() => {
            //     if (highQuality) {
            //         item.style.backgroundImage = `url('${highQuality}')`;
            //
            //     }
            // }, 300);
        } else {
            // cardName.textContent = "Оригинал";
            item.classList.remove("active");
            //
            // if (lowQuality) {
            //     item.style.backgroundImage = `url('${lowQuality}')`;
            //
            // }
        }
    });
}


updateImproveHeroStyle();














let swiper = new Swiper(".tools-swiper-items", {
    slidesPerView: 4.3,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiper2 = new Swiper(".tools-swiper-result", {
    spaceBetween: 10,
    slidesPerView: 1,
    allowTouchMove: false, // Отключает листание пальцами или курсором

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

let swiperTools2 = new Swiper(".tools-swiper-items2", {
    slidesPerView: 4.3,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiperResult2 = new Swiper(".tools-swiper-result2", {
    spaceBetween: 10,
    slidesPerView: 1,

    thumbs: {
        swiper: swiperTools2,
    },
});



function initSwiper() {
    let reviewsSwiper;

    const isMobile = window.innerWidth <= 992;
    const direction = isMobile ? "horizontal" : "vertical";

    if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
    }

    reviewsSwiper = new Swiper(".reviews-swiper", {
        direction: direction,
        spaceBetween: 12,
        slidesPerView: 3,
        pagination: {
            el: ".reviews-pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 10,
            disableOnInteraction: false,
        },
        speed: 2000,

        breakpoints: {
            320: {slidesPerView: 1,},
            490: {slidesPerView: 1.2,},
            620: {slidesPerView: 1.5,},
            810: {slidesPerView: 2},
            992: {slidesPerView: 2},
            1096: {slidesPerView: 2.5},
            1232: {slidesPerView: 3},
            1920: {slidesPerView: 3},
        },

    });
    const swiperContainer = document.querySelector(".reviews-swiper");

    if(swiperContainer){

        swiperContainer.addEventListener("mouseenter", () => {
            reviewsSwiper.autoplay.stop();
        });

        swiperContainer.addEventListener("mouseleave", () => {
            reviewsSwiper.autoplay.start();
        });
    }

}

initSwiper();





let advantagesSwiper = new Swiper(".advantages-slider", {
    spaceBetween: 21,
    slidesPerView: 3,

    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {slidesPerView: 1,},
        370: {slidesPerView: 1.1,},
        400: {slidesPerView: 1.2,},
        540: {slidesPerView: 1.3,},
        576: {slidesPerView: 1.5},
        779: {slidesPerView: 2},
        954: {slidesPerView: 2.4},
        1139: {slidesPerView: 2.5},
        1200: {slidesPerView: 3},

    },
    on: {
        slideChange: updateActiveText, // Обновляем текст при смене слайда
    },


});


let creatingSwiper = new Swiper(".creating-swiper", {
    effect: "coverflow",
    centeredSlides: true,
    // autoplay:true,
    cursor: null,
    loop: true,
    initialSlide: 2,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 3,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".creating-button-next",
        prevEl: ".creating-button-prev",
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
            effect: "slide",
            centeredSlides: false,
            loop: false,
            coverflowEffect: {}  // Убираем эффект
        },
        430: {
            slidesPerView: 1.5,
        },
        540: {
            slidesPerView: 2.4,
        },
        935: {
            slidesPerView: 3,

        },

        1027: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 4,
        },
    }

});

const slides = document.querySelectorAll(".creating-swiper .swiper-slide");

slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        creatingSwiper.slideTo(index);
    });
});

let creatingSwiperMobile = new Swiper(".creating-mobile-swiper", {
    effect: "slide",
    autoplay: true,
    loop: true,
    spaceBetween: 10,

    pagination: {
        el: ".creating-pagination",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        430: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,

        },
        935: {
            slidesPerView: 1,

        },


    }

});


creatingSwiper.on("slideChange", function () {
    updateActiveText();
});

function updateActiveText() {
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (!activeSlide) return;

    const activeImg = activeSlide.querySelector(".creating-slide");
    if(activeImg){
        const activeId = activeImg.getAttribute("data-id");
        document.querySelectorAll(".swiper-slide-text").forEach((text) => {
            text.style.display = text.getAttribute("data-id") === activeId ? "block" : "none";
        });

    }



}

creatingSwiper.on("transitionEnd", updateActiveText);
creatingSwiperMobile.on("transitionEnd", updateActiveText);

document.querySelectorAll(".creating-slide-more").forEach((button) => {
    button.addEventListener("click", function () {
        const parentSlide = button.closest(".swiper-slide");
        const images = parentSlide.querySelectorAll(".creating-slide-img img");
        const currentImageIndex = Array.from(images).findIndex((img) => img.style.display === "block");

        images.forEach((img) => (img.style.display = "none"));

        const nextIndex = (currentImageIndex + 1) % images.length;
        images[nextIndex].style.display = "block";

        updateActiveText();
    });
});

function initializeSlides() {
    // Устанавливаем первую картинку для каждого слайда
    document.querySelectorAll(".creating-slide-img").forEach((slideImg) => {
        const images = slideImg.querySelectorAll("img");
        images.forEach((img, index) => {
            img.style.display = index === 0 ? "block" : "none";
        });
    });

    // Отображаем текст, соответствующий первой картинке активного слайда
    updateActiveText();
}

initializeSlides();






