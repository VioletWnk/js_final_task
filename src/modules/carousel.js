const carousel = () => {
    const servicesCarousel = document.querySelector('.services-carousel'),
    servicesArrow = document.querySelector('.services-arrow'),
    allSlides = servicesCarousel.querySelectorAll('.element');

    let position = 0;
    let slidestoShow = 3;
    let slideWidth = Math.floor( 100 / slidestoShow );


    servicesArrow.addEventListener('click', (event) => {
        let target = event.target;

        if(target.matches('.arrow-left') && position > 0){
            --position;
        } else if(target.matches('.arrow-right') && position < (allSlides.length - 1)){
            ++position;
        }

        servicesCarousel.style.transform = `translateX(-${position * slideWidth}%)`;
    })

};

export default carousel;