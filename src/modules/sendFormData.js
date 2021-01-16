const sendFormData = () => {
    const errorMessage = 'Произошла ошибка',
        loadingMessage = 'Идет отправка...',
        successMessage = 'Заявка успешно отправлена';


    const form = document.querySelector('[name="form-callback"]');
    const message = document.createElement('div');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        form.appendChild(message);
        message.textContent = loadingMessage;
        const data = new FormData(form);
        postData(data)
        .then((response) => {
            if(response.status !== 200){
                throw new Error('status network is not 200'); 
            }
            message.textContent = successMessage;
            form.querySelectorAll('input').forEach((input) => {
                if(input.type != 'submit'){
                    input.value = '';
                }
                
            }); 
        })
        .catch((error) => {
            message.textContent = errorMessage;
            console.error(error);
        });
    });

    const postData = (userData) => {

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
    };


};

export default sendFormData;
