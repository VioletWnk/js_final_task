const scrolltoTop = () => {
    const up = document.querySelector('.up'),
        blockServices = document.getElementById('services');

    up.addEventListener('click', () => {
        const scrollTarget = document.querySelector('body');
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
    });

    document.addEventListener('scroll', () => {

        let yes = blockServices.getBoundingClientRect().top;
 
            if(yes < 16){
                up.style.display = 'block';
            } else {
                up.style.display = 'none';
            }
    });

};
export default scrolltoTop;