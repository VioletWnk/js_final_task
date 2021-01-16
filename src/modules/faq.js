const faq = () => {
    const accordeon = document.querySelector('.accordeon'),
        element = accordeon.querySelectorAll('.element');

    accordeon.addEventListener('click', (event) => {
        let target = event.target.closest('.element');

        element.forEach((elem) => {
            elem.classList.remove('active');
            elem.querySelector('.element-content').style.display = 'none';
        })

        target.classList.add('active');
        target.querySelector('.element-content').style.display = 'block';
    });

};

export default faq;