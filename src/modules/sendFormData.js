const sendFormData = () => {
    const errorMessage = 'Произошла ошибка',
        loadingMessage = 'Идет отправка...',
        successMessage = 'Заявка успешно отправлена',
        errorData = 'Введите корректные данные';


    const form = document.querySelector('[name="form-callback"]');
    const message = document.createElement('div');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let validInputs = false;
        form.querySelectorAll('input').forEach((input)  => {

            if(input.matches('[name="tel"]')){
                if(!input.value.match(/^\+?([78])?\d{6,10}$/)){
                    return;
                }
            }
            if(input.matches('[name="fio"]')){
                if(!input.value.match(/^[а-яА-Я\s]{2,}$/ug)){
                    return;
                }
            }
            validInputs = true;
        });

        if(validInputs){
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
        } else {
            message.textContent = errorData;
        }

        
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
