const scrolltoTop = () => {
   const up = document.querySelector('.up');

   up.addEventListener('click', () => {
    
    const scrollTarget = document.querySelector('body');
    const elementPosition = scrollTarget.getBoundingClientRect().top;
        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });

   });
};
export default scrolltoTop;