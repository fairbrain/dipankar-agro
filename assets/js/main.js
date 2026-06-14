Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".ri-menu-4-fill"); // Menu icon
    const closeBtn = document.querySelector(".close-btn"); // Close button
    const mainNav = document.querySelector(".main-nav"); // Navigation menu

    console.log(menuToggle);


    // Function to open menu
    menuToggle.addEventListener("click", function () {
        mainNav.classList.add("active"); // Add active class to show menu
    });

    // Function to close menu
    closeBtn.addEventListener("click", function () {
        mainNav.classList.remove("active"); // Remove active class to hide menu
    });

    /* ==========================================
       Hero Swiper Slider Logic
       ========================================== */
    const heroSwiperElement = document.querySelector(".hero-swiper");
    if (heroSwiperElement) {
        let prevTranslate = 0;
        
        new Swiper('.hero-swiper', {
            speed: 1000,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                setTranslate(swiper, translate) {
                    const velocity = translate - prevTranslate;
                    prevTranslate = translate;
                    
                    // Convert velocity to skew angle
                    let skew = velocity * 0.15;
                    const maxSkew = 10;
                    if (skew > maxSkew) skew = maxSkew;
                    if (skew < -maxSkew) skew = -maxSkew;
                    
                    swiper.slides.forEach(slide => {
                        const card = slide.querySelector('.swiper-slide-card');
                        if (card) {
                            const isActive = slide.classList.contains('swiper-slide-active');
                            const scale = isActive ? 1.02 : 0.85;
                            card.style.transform = `scale(${scale}) skewX(${skew}deg)`;
                        }
                    });
                },
                setTransition(swiper, duration) {
                    swiper.slides.forEach(slide => {
                        const card = slide.querySelector('.swiper-slide-card');
                        if (card) {
                            card.style.transitionDuration = `${duration}ms`;
                            if (duration === 0) {
                                card.style.transitionProperty = 'none';
                            } else {
                                card.style.transitionProperty = 'transform, opacity, filter';
                                card.style.transitionTimingFunction = 'cubic-bezier(0.16, 1, 0.3, 1)'; // Smooth decelerating ease!
                            }
                        }
                    });
                },
                transitionEnd(swiper) {
                    swiper.slides.forEach(slide => {
                        const card = slide.querySelector('.swiper-slide-card');
                        if (card) {
                            const isActive = slide.classList.contains('swiper-slide-active');
                            const scale = isActive ? 1.02 : 0.85;
                            card.style.transform = `scale(${scale}) skewX(0deg)`;
                        }
                    });
                },
                touchEnd(swiper) {
                    // Reset skew to 0 on drag release
                    swiper.slides.forEach(slide => {
                        const card = slide.querySelector('.swiper-slide-card');
                        if (card) {
                            const isActive = slide.classList.contains('swiper-slide-active');
                            const scale = isActive ? 1.02 : 0.85;
                            card.style.transform = `scale(${scale}) skewX(0deg)`;
                        }
                    });
                }
            }
        });
    }
});
