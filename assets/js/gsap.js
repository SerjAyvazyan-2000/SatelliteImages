gsap.registerPlugin(ScrollTrigger);




document.addEventListener("DOMContentLoaded", () => {

    const initAnimation = () => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.pin-content',
                start: 'top 10%', // Начало анимации
                end: '+=700', // Продолжительность скролла
                scrub: true, // Плавность анимации при скролле
                pin: true, // Закрепляем секцию
                anticipatePin: 1,
            }
        });
        gsap.fromTo(
            '.peculiarities-item--one',
            { rotation: 12 },
            {
                scrollTrigger: {
                    trigger: '.peculiarities-item--one',
                    start: 'top 80%',
                    end: 'top center',
                    scrub: true,
                },
                rotation: 0,
            }
        );
        gsap.fromTo(
            '.peculiarities-item--two',
            { opacity: 0 },
            {
                scrollTrigger: {
                    trigger: '.peculiarities-item--two',
                    start: 'top 50%',
                    end: 'top center',
                    scrub: true,
                    ease: 'power1.inOut',
                    duration: 2,
                },
                opacity: 2,
            }
        );

        gsap.fromTo(
            '.peculiarities-item--tree',
            { opacity: 0 },
            {
                scrollTrigger: {
                    trigger: '.peculiarities-item--tree',
                    start: 'top 50%',
                    end: 'top center',
                    scrub: true,
                    ease: 'power1.inOut',
                    duration: 2,
                },
                opacity: 2,
            }
        );


        gsap.to('.peculiarities-item--one', {
            scrollTrigger: {
                trigger: '.peculiarities-item--one', // Триггером будет сама карточка
                start: 'top top', // Анимация начинается, когда карточка достигает центра экрана
                end: '+=500', // Длительность анимации на скролле
                scrub: true, // Связываем скролл с анимацией

            },
            xPercent: -250,
            yPercent: -130,
            ease: 'power1.inOut',
            rotation: -25,
            duration:2

        });

        gsap.to('.peculiarities-item--two', {
            scrollTrigger: {
                trigger: '.peculiarities-item--two', // Триггер для второй карточки
                start: 'top center-=600', // Начать анимацию немного позже (на 200px)
                end: '+=500',
                scrub: true,
            },
            xPercent: 150,
            yPercent: -130,
            ease: 'power1.inOut',
            rotation: 25,
            duration: 2,

        });
    };

    ScrollTrigger.matchMedia({
        "(max-width: 768px)": () => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.pin-content',
                    start: 'top top', // Начало анимации на самом верху
                    end: '+=300', // Продолжительность скролла
                    scrub: true,
                    pin: true, // Закрепляем секцию
                    anticipatePin: 1,
                    // markers: true, // Для дебага можно добавить маркеры
                }
            });

            // Первая карточка на мобильных устройствах
            gsap.fromTo('.peculiarities-item--one',
                { rotation: 0 },
                {
                    scrollTrigger: {
                        trigger: '.peculiarities-item--one',
                        start: 'top center',
                        end: '+=500',
                        scrub: true,
                    },
                    rotation: 0,
                }
            );

            gsap.to('.peculiarities-item--one', {
                scrollTrigger: {
                    trigger: '.peculiarities-item--one',
                    start: 'top center',
                    end: '+=500',
                    scrub: true,
                },
                xPercent: -180,
                yPercent: -130,
                ease: 'power1.inOut',
                rotation: -25,
                duration: 2
            });

            // Вторая карточка на мобильных устройствах
            gsap.to('.peculiarities-item--two', {
                scrollTrigger: {
                    trigger: '.peculiarities-item--two',
                    start: 'top center-=300',
                    end: '+=500',
                    scrub: true,
                },
                xPercent: 80,
                yPercent: -130,
                ease: 'power1.inOut',
                rotation: 25,
                duration: 2,
            });
        },

        // Для десктопных версий
        "(min-width: 769px)": () => {
            initAnimation(); // Запуск анимации для десктопа
        }
    });

    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        initAnimation();
    });
});






document.addEventListener("DOMContentLoaded", () => {

    const initAnimationUsage = () => {
        if (window.innerWidth > 1000) {
            gsap.fromTo(
                '.usage-item',
                {
                    scale: 3.5,
                    opacity: 0,
                    y: -300,
                    z: -200,
                },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    z: 0,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: '.usage-section',
                        start: 'top 20%',
                        end: 'top bottom',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    };

    initAnimationUsage();

    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        initAnimationUsage();
    });
});



document.querySelectorAll('.example').forEach(item => {
    item.addEventListener('click', function () {
        const newImage = this.getAttribute('data-image');
        const backgroundLayer = document.querySelector('.background-layer');

        // Убираем старое правило для ::after, если оно уже существует
        const stylesheet = document.styleSheets[0];
        Array.from(stylesheet.cssRules).forEach((rule, index) => {
            if (rule.selectorText === ".background-layer::after") {
                stylesheet.deleteRule(index);
            }
        });

        stylesheet.insertRule(`
            .background-layer::after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: url('${newImage}');
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                z-index: 1;
                border-radius: 16px;
                transition:  0.6s ease-in-out;
            }
        `, stylesheet.cssRules.length);

    });
});


// const advantagesPictures = document.querySelector('.advantages-collage-pictures');
// const containerAdvantages = document.querySelector('.advantages-collage-fon');
// let speedAdvantages = 1;
// let animationAdvantagesId;
//
// function infiniteScrollAdvantages() {
//     if(advantagesPictures && containerAdvantages){
//         const firstCardWidth = advantagesPictures.firstElementChild.offsetWidth;
//
//         let currentPosition = parseFloat(getComputedStyle(advantagesPictures).transform.split(',')[4]) || 0;
//
//         // Сдвигаем контейнер влево
//         currentPosition -= speedAdvantages;
//
//         // Когда первая карточка полностью уходит за пределы
//         if (Math.abs(currentPosition) >= firstCardWidth) {
//             const firstCard = advantagesPictures.firstElementChild;
//             advantagesPictures.appendChild(firstCard);  // Перемещаем первую карточку в конец
//             currentPosition = 0;  // Сбрасываем позицию, но не резко
//         }
//
//         // Применяем новый сдвиг
//         advantagesPictures.style.transform = `translateX(${currentPosition}px)`;
//
//         // Повторяем анимацию
//         animationAdvantagesId = requestAnimationFrame(infiniteScrollAdvantages);
//     }
//
//
// }
//
// function stopScrollAdvantages() {
//     cancelAnimationFrame(animationAdvantagesId);
// }
//
// function startScrollAdvantages() {
//     animationAdvantagesId = requestAnimationFrame(infiniteScrollAdvantages);
// }
// if(containerAdvantages){
//     containerAdvantages.addEventListener('mouseenter', stopScrollAdvantages);
//     containerAdvantages.addEventListener('mouseleave', startScrollAdvantages);
// }
//
//
// startScrollAdvantages();


new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true
});