

$(document).ready(function () {
    $(".possibilities-slider-picture").twentytwenty();
});




const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});





function toggleActiveState(item) {
    const allItems = document.querySelectorAll('.often-asks-item');

    allItems.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
        }
    });

    item.classList.toggle('active');
}

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.faq-item-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});


function setupGifToggle(selector) {
    document.querySelectorAll(selector).forEach(block => {
        const gif = block.getAttribute('data-gif');
        const defaultImage = block.getAttribute('data-img');

        function toggleGif() {
            if (block.classList.contains('active')) {
                block.classList.remove('active');
                block.style.backgroundImage = `url('${defaultImage}')`;
            } else {
                block.classList.add('active');
                block.style.backgroundImage = `url('${gif}')`;
            }
        }

        block.addEventListener('click', toggleGif);
    });
}

setupGifToggle('.hero-video-block');
setupGifToggle('.video-block');






document.querySelectorAll('.video-block').forEach(block => {
    const playButton = block.querySelector('.playButton');
    const videoPlayer = block.querySelector('.videoPlayer');
    const defaultImage = block.getAttribute('data-gif');
    let isPlaying = false;

    function playVideo() {
        block.style.backgroundImage = "none";
        if (videoPlayer) {
            videoPlayer.style.display = "block";
        }
        videoPlayer.play();
        if (playButton) {
            playButton.style.display = "none";

        }
        isPlaying = true;
    }

    function stopVideo() {
        block.style.backgroundImage = `url('${defaultImage}')`;
        if (videoPlayer) {
            videoPlayer.style.display = "none";
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }

        if (playButton) {
            playButton.style.display = "block";

        }
        isPlaying = false;
    }


    if (playButton) {
        playButton?.addEventListener("click", () => {
            isPlaying ? stopVideo() : playVideo();
        });
    }
    if (block) {
        block?.addEventListener("click", () => {
            isPlaying ? stopVideo() : playVideo();
        });
    }

    if (videoPlayer) {
        videoPlayer.addEventListener("ended", stopVideo);
    }
});



document.querySelectorAll('.gradient-hover').forEach(btn => {
    const iconVoice = btn.parentElement.querySelector('.icon-voice');
    const mainActions = btn.closest('.gradient-hover');

    btn.addEventListener('mouseenter', () => {
        if (iconVoice) {
            iconVoice.classList.add('icon-hover');
        }
        mainActions.classList.add('active');

    });

    btn.addEventListener('mouseleave', () => {
        if (iconVoice) {
            iconVoice.classList.remove('icon-hover');
        }
        mainActions.classList.remove('active');

    });
});


handleScroll();

function handleScroll() {
    const elements = document.querySelectorAll('.animation');
    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const isElementVisible = elementRect.top < window.innerHeight && elementRect.bottom >= 0;

        if (isElementVisible) {
            if (!element.classList.contains('active')) {
                element.classList.add('active');
            }
        } else {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', handleScroll);




document.querySelectorAll('.peculiarities-column--one').forEach((column) => {
    column.addEventListener('mouseover', () => {
        column.style.animationPlayState = 'paused';
    });

    column.addEventListener('mouseout', () => {
        column.style.animationPlayState = 'running';
    });
});


document.querySelectorAll('.peculiarities-column--two').forEach((column) => {
    column.addEventListener('mouseover', () => {
        column.style.animationPlayState = 'paused';
    });

    column.addEventListener('mouseout', () => {
        column.style.animationPlayState = 'running';
    });
});

document.querySelectorAll('.peculiarities-column--tree').forEach((column) => {
    column.addEventListener('mouseover', () => {
        column.style.animationPlayState = 'paused';
    });

    column.addEventListener('mouseout', () => {
        column.style.animationPlayState = 'running';
    });
});


$(document).ready(function () {
    $(".avatar-hero-style .avatar-style-item").hide();
    $(".avatar-hero-style .avatar-style-item[data-id='original']").show();
    $(".avatar-card").on("click", function () {
        const selectedId = $(this).attr("data-id");
        $(".avatar-hero-style .avatar-style-item").hide();
        $(`.avatar-hero-style .avatar-style-item[data-id='${selectedId}']`).show();
    });
});







document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".photo-tools-item");
    const videos = document.querySelectorAll(".enhance-tools-images");

    if (items.length > 0 && videos.length > 0) {
        items[0].classList.add("active");
        videos[0].classList.add("visible");
        initializeTwentyTwenty(videos[0]);

    }

    items.forEach(item => {
        item.addEventListener("click", () => {
            const selectedId = item.getAttribute("data-id");

            // Убираем активные классы
            items.forEach(i => i.classList.remove("active"));
            videos.forEach(video => video.classList.remove("visible"));

            // Добавляем активные классы
            item.classList.add("active");

            const videoToShow = document.querySelector(`.enhance-tools-images[data-id="${selectedId}"]`);
            if (videoToShow) {
                videoToShow.classList.add("visible");
                initializeTwentyTwenty(videoToShow);

            }
        });
    });
});
function initializeTwentyTwenty(container) {
    $(container).find(".possibilities-slider-picture").twentytwenty();
}







document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".photo-tools-item");
    const videos = document.querySelectorAll(".photo-tools-picture");

    if (items.length > 0 && videos.length > 0) {
        items[0].classList.add("active");
        videos.forEach((video, index) => {
            video.style.display = index === 0 ? "block" : "none";
        });
    }

    items.forEach(item => {
        item.addEventListener("click", () => {
            const selectedId = item.getAttribute("data-id");

            items.forEach(i => i.classList.remove("active"));
            videos.forEach(video => video.style.display = "none");

            item.classList.add("active");

            const videoToShow = document.querySelector(`.photo-tools-picture[data-id="${selectedId}"]`);
            if (videoToShow) {
                videoToShow.style.display = "block";
            }
        });
    });
});








document.addEventListener("DOMContentLoaded", () => {
    const mockup = document.querySelector(".improve-hero-mockup");
    const cards = document.querySelectorAll(".improve-hero-card img");

    // Проверка, находится ли элемент в блоке мокапа
    function isInMockup(element) {
        const rect = element.getBoundingClientRect();
        const mockupRect = mockup.getBoundingClientRect();
        return (
            rect.top < mockupRect.bottom &&
            rect.bottom > mockupRect.top &&
            rect.left < mockupRect.right &&
            rect.right > mockupRect.left
        );
    }

    // Функция для замены изображений
    function updateImages() {
        cards.forEach((img) => {
            if (isInMockup(img) && img.dataset.highSrc) {
                img.src = img.dataset.highSrc; // Меняем src на high-quality
                img.dataset.highSrc = ""; // Убираем, чтобы повторно не менять
            }
        });
        requestAnimationFrame(updateImages); // Постоянно вызываем проверку
    }

    // Запуск постоянного рендера
    updateImages();
});






document.querySelectorAll('.video-block').forEach(block => {
    const videoPlayer = block.querySelector('.videoPlayer');

    function playVideo() {
        if (videoPlayer) {
            videoPlayer.play().catch(error => {
                console.error('Ошибка воспроизведения видео:', error);
            });
        }
    }

    videoPlayer.addEventListener('canplay', playVideo);

    videoPlayer.addEventListener('ended', playVideo);

    videoPlayer.addEventListener('pause', playVideo);
});




const cardsContainer = document.querySelector('.avatar-cards');
const containerWrapper = document.querySelector('.avatar-cards-cnt');
let speedAvatars = 1;
let animationAvatarsId;

function infiniteScroll() {
    if(cardsContainer && containerWrapper){
        const firstCardWidth = cardsContainer.firstElementChild.offsetWidth + 20 ;

        let currentPosition = parseFloat(getComputedStyle(cardsContainer).transform.split(',')[4]) || 0;

        // Сдвигаем контейнер влево
        currentPosition -= speedAvatars;

        // Когда первая карточка полностью уходит за пределы
        if (Math.abs(currentPosition) >= firstCardWidth) {
            const firstCard = cardsContainer.firstElementChild;
            cardsContainer.appendChild(firstCard);  // Перемещаем первую карточку в конец
            currentPosition = 0;  // Сбрасываем позицию, но не резко
        }

        // Применяем новый сдвиг
        cardsContainer.style.transform = `translateX(${currentPosition}px)`;

        // Повторяем анимацию
        animationAvatarsId = requestAnimationFrame(infiniteScroll);
    }


}

function stopScroll() {
    cancelAnimationFrame(animationAvatarsId);
}

function startScroll() {
    animationAvatarsId = requestAnimationFrame(infiniteScroll);
}
if(containerWrapper){
    containerWrapper.addEventListener('mouseenter', stopScroll);
    containerWrapper.addEventListener('mouseleave', startScroll);
}


startScroll();



const columnsAnimate = document.querySelectorAll('.peculiarities-column--one'); // Выбираем все колонки
let speed1 = 1;
let animationId1;
function infiniteScrollColumns() {
    columnsAnimate.forEach(columns => {
        const firstCardWidth = columns.firstElementChild.offsetWidth + 10;
        let currentPositionColumns = parseFloat(getComputedStyle(columns).transform.split(',')[4]) || 0;

        currentPositionColumns -= speed1;

        if (Math.abs(currentPositionColumns) >= firstCardWidth) {
            const firstCard = columns.firstElementChild;
            columns.appendChild(firstCard);
            currentPositionColumns = 0;
        }

        columns.style.transform = `translateX(${currentPositionColumns}px)`;  // Применяем сдвиг
    });

    // Повторяем анимацию
    animationId1 = requestAnimationFrame(infiniteScrollColumns);
}

function stopScrollColumns() {
    cancelAnimationFrame(animationId1);
}

function startScrollColumns() {
    animationId1 = requestAnimationFrame(infiniteScrollColumns);
}
columnsAnimate.forEach(columns => {
    columns.addEventListener('mouseenter', stopScrollColumns);
    columns.addEventListener('mouseleave', startScrollColumns);
});

infiniteScrollColumns();





const columnsAnimate3 = document.querySelector('.peculiarities-column--tree');
let animationI3;
let speed3 = 1;

function infiniteScrollRight() {

    if (columnsAnimate3) {

        const firstCardWidth = columnsAnimate3.firstElementChild.offsetWidth + 10; // Ширина первой карточки с отступом
        let currentPosition3 = parseFloat(getComputedStyle(columnsAnimate3).transform.split(',')[4]) || 0; // Текущая позиция
        currentPosition3 -= speed3;

        // Когда первая карточка выходит за пределы, перемещаем её в конец
        if (Math.abs(currentPosition3) >= firstCardWidth) {
            const firstCard = columnsAnimate3.firstElementChild;
            columnsAnimate3.appendChild(firstCard);  // Перемещаем первую карточку в конец
            currentPosition3 = 0;  // Сбрасываем позицию
        }

        // Применяем новый сдвиг
        columnsAnimate3.style.transform = `translateX(${currentPosition3}px)`;  // Двигаем вправо

        // Продолжаем анимацию
        animationI3 = requestAnimationFrame(infiniteScrollRight);
    }
}

function stopScrollRight() {
    cancelAnimationFrame(animationI3); // Останавливаем анимацию
}

function startScrollRight() {
    animationI3 = requestAnimationFrame(infiniteScrollRight); // Запускаем анимацию
}

if (columnsAnimate3) {
    columnsAnimate3.addEventListener('mouseenter', stopScrollRight);  // Останавливаем на наведении
    columnsAnimate3.addEventListener('mouseleave', startScrollRight);  // Возобновляем на выходе
}

infiniteScrollRight();


const container = document.querySelector('.peculiarities-column--two');
if(container){
    const speedColumn = container.getAttribute('data-speed') || 20;
    container.style.animationDuration = `${speedColumn}s`;
}









