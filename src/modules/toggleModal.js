const toggleModal = () => {
    const modalCallback = document.getElementById('callback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        body = document.querySelector('body');


        body.addEventListener('click', (event) => {
            let target = event.target;
            if(target.matches('.callback-btn') || target.matches('.button-services') || target.matches('[href="#application"]')){
                modalCallback.style.display = 'block';
                modalOverlay.style.display = 'block';
            } else if(target.closest('.modal-close') || target.matches('.modal-overlay')){
                modalCallback.style.display = 'none';
                modalOverlay.style.display = 'none';
            }
        });

};

export default toggleModal;