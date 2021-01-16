const toggleModal = () => {
    const btnCallback = document.querySelectorAll('.callback-btn'),
        btnServices = document.querySelector('.button-services'),
        modalCallback = document.getElementById('callback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        modalClose = document.querySelector('.modal-close');


        btnCallback.forEach((btn) => {
            btn.addEventListener('click', () => {
                modalCallback.style.display = 'flex';
                modalOverlay.style.display = 'block';
          
            });
        });

        btnServices.addEventListener('click', () => {
            modalCallback.style.display = 'flex';
            modalOverlay.style.display = 'block';
        });

        modalClose.addEventListener('click', () => {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
        });
        modalOverlay.addEventListener('click', () => {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
        });

};

export default toggleModal;