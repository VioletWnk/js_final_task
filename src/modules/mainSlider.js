const mainSlider = () => {

    const topSlider = document.querySelector('.top-slider'),
        slide = document.querySelectorAll('.item');

    const sliderDots = document.createElement('ul');
    sliderDots.classList.add('slider-dots');
    topSlider.append(sliderDots);

    slide.forEach((item) => {
        let li = document.createElement('li')
        li.classList.add('dot');

        if(item.classList.contains('active')){
            li.classList.add('active');
        }
        sliderDots.append(li);
    });
 

    const dot = document.querySelectorAll('.dot');

    sliderDots.addEventListener('click', (event) => {

        let target = event.target;

        if(!target.matches('.dot')){
            return;
        }
        prevSlide(slide, currentSlide, 'active');
        prevSlide(dot, currentSlide, 'active');
        if(target.matches('.dot')){
            dot.forEach((elem, index) => {
                if (elem === target){
                    currentSlide = index;
                }
            });
        }
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }

        if(currentSlide < 0){
            currentSlide = slide.length - 1
        }
        nextSlide(slide, currentSlide, 'active');
        nextSlide(dot, currentSlide, 'active');
    });

    const prevSlide = (slide, index, strClass) => {
        slide[index].classList.remove(strClass);
    };

    const nextSlide = (slide, index, strClass) => {
        slide[index].classList.add(strClass);
    };

    let currentSlide = 0,
    interval;

    const autoPlay = () => {
        prevSlide(slide, currentSlide, 'active');
        prevSlide(dot, currentSlide, 'active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'active');
        nextSlide(dot, currentSlide, 'active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlay, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };


    sliderDots.addEventListener('mouseover', (event) => {
        if(event.target.matches('.dot')){
            stopSlide();
        }
    });

    sliderDots.addEventListener('mouseout', (event) => {
        if(event.target.matches('.dot')){
            startSlide();
        }
    });


    startSlide();

};

export default mainSlider;