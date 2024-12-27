// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(ScrollTrigger);
//
//     const initAnimation = () => {
//
//         gsap.fromTo(
//             '.peculiarities-item--one',
//             { rotation: 12 }, // Начальный наклон
//             {
//                 scrollTrigger: {
//                     trigger: '.peculiarities-item--one', // Триггер для первой карточки
//                     start: 'top 80%', // Начать выравнивание чуть раньше
//                     end: 'top center', // Завершить выравнивание
//                     scrub: true,
//                 },
//                 rotation: 0,
//
//             }
//         );
//         gsap.to('.peculiarities-item--one', {
//             scrollTrigger: {
//                 trigger: '.peculiarities-item--one', // Триггером будет сама карточка
//                 start: 'top center', // Анимация начинается, когда карточка достигает центра экрана
//                 end: '+=500', // Длительность анимации на скролле
//                 scrub: true, // Связываем скролл с анимацией
//
//             },
//             xPercent: -200,
//             yPercent: -130,
//             ease: 'power1.inOut',
//             rotation: -25,
//             duration:2
//
//         });
//
//         // Анимация для второй карточки
//         gsap.to('.peculiarities-item--two', {
//             scrollTrigger: {
//                 trigger: '.peculiarities-item--two', // Триггер для второй карточки
//                 start: 'top center-=300', // Начать анимацию немного позже (на 200px)
//                 end: '+=500',
//                 scrub: true,
//             },
//             xPercent: 100,
//             yPercent: -130,
//             ease: 'power1.inOut',
//             rotation: 25,
//             duration: 2,
//         });
//
//     };
//
//     initAnimation();
//
//     // Перезапуск анимации при изменении размеров экрана
//     window.addEventListener('resize', () => {
//         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         initAnimation();
//     });
// });





document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

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
                start: 'top center', // Анимация начинается, когда карточка достигает центра экрана
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
                start: 'top center-=300', // Начать анимацию немного позже (на 200px)
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
    gsap.registerPlugin(ScrollTrigger);

    const initAnimationFace = () => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.face-pin-content',
                start: 'top 10%',
                end: '+=700',
                scrub: true,
                pin: true,
                anticipatePin: 1,
            }
        });

        gsap.to('.face-peculiarities-item--one', {
            scrollTrigger: {
                trigger: '.face-peculiarities-item--one',
                start: 'top center',
                end: '+=500',
                scrub: true,
            },
            yPercent: -250,
            ease: 'power1.inOut',
            duration: 2,
        });

        // gsap.fromTo(
        //     '.face-peculiarities-item--tree',
        //     { opacity: 0 },
        //     {
        //         scrollTrigger: {
        //             trigger: '.face-peculiarities-item--tree', // Триггер для первой карточки
        //             start: 'top 20%', // Начать выравнивание чуть раньше
        //             end: 'top center', // Завершить выравнивание
        //             scrub: true,
        //             ease: 'power1.inOut',
        //
        //         },
        //         opacity: 1,
        //     }
        // );

        gsap.to('.face-peculiarities-item--tree', {
            scrollTrigger: {
                trigger: '.face-peculiarities-item--tree',
                start: 'top center-=300',
                end: '+=500',
                scrub: true,
            },
            yPercent: -250,
            ease: 'power1.inOut',
            duration: 2,
        });


        // gsap.fromTo(
        //     '.face-peculiarities-item--two',
        //     { opacity: 0 },
        //     {
        //         scrollTrigger: {
        //             trigger: '.face-peculiarities-item--tree', // Триггер для первой карточки
        //             start: 'top 10%', // Начать выравнивание чуть раньше
        //             end: 'top center', // Завершить выравнивание
        //             scrub: true,
        //             ease: 'power1.inOut',
        //
        //         },
        //         opacity: 1,
        //     }
        // );

        gsap.to('.face-peculiarities-item--two', {
            scrollTrigger: {
                trigger: '.face-peculiarities-item--tree',
                start: 'top center-=600',
                end: '+=500',
                scrub: true,
            },
            yPercent: -250,
            ease: 'power1.inOut',
            duration: 2,
        });
    };

    const initAnimationFaceMobile = () => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.face-pin-content',
                start: 'top 10%',
                end: '+=300',
                scrub: true,
                pin: true,
                anticipatePin: 1,
            }
        });

        gsap.to('.face-peculiarities-item--one', {
            scrollTrigger: {
                trigger: '.face-peculiarities-item--one',
                start: 'top center',
                end: '+=300',
                scrub: true,
            },
            yPercent: -250,
            ease: 'power1.inOut',
            duration: 2,
        });


        gsap.to('.face-peculiarities-item--tree', {
            scrollTrigger: {
                trigger: '.face-peculiarities-item--tree',
                start: 'top center-=200',
                end: '+=300',
                scrub: true,
            },
            yPercent: -250,
            ease: 'power1.inOut',
            duration: 2,
        });



        gsap.to('.face-peculiarities-item--two', {
            scrollTrigger: {
                trigger: '.face-peculiarities-item--two',
                start: 'top center-=400',
                end: '+=300',
                scrub: true,
            },
            yPercent: -250,
            ease: 'power1.inOut',
            duration: 2,
        });
    };


    ScrollTrigger.matchMedia({
        "(min-width: 769px)": () => {
            // const animationTriggers = initAnimationFace(); // Сохраняем триггеры
            initAnimationFace()
            ScrollTrigger.matchMedia({
                "(max-width: 768px)": () => {
                    // Удаляем только триггеры `initAnimationFace`
                    // animationTriggers.forEach(trigger => trigger.kill());


                }
            });
        },
        "(max-width: 768px)": () => {
            ScrollTrigger.matchMedia({
                "(max-width: 768px)": () => {
                    initAnimationFaceMobile()
                }
            });

        }
    });
    window.addEventListener('resize', () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        initAnimationFace();
    });


});





document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

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