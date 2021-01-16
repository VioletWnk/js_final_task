const scrollNav = () => {

    const header = document.querySelector('.header');

    header.addEventListener('click', (event) => {
        if(event.target.matches('a')){
            scroll(event);
        }
    });

    const scroll = (e) => {
        e.preventDefault();
        let href = e.target.getAttribute('href');
    
        const scrollTarget = document.querySelector(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
            window.scrollBy({
                top: elementPosition,
                behavior: 'smooth'
            });
    };
};


export default scrollNav;