const sendFormData = () => {
    const errorMessage = 'Произошла ошибка',
        loadingMessage = 'Идет отправка...',
        successMessage = 'Заявка успешно отправлена';


    const form = document.querySelector('[name="form-callback"]');
    const message = document.createElement('div');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        form.appendChild(message);
        const inputs = form.querySelectorAll('input');
        for(let i = 0; i < inputs.length; i++){

            if(inputs[i].matches('[name="tel"]')){
                if(!inputs[i].value.match(/^\+?([78])?\d{6,10}$/)){
                    message.textContent = 'Введите корректный номер телефона';
                    return;
                }
            }
            if(inputs[i].matches('[name="fio"]')){
                if(!inputs[i].value.match(/^[а-яА-Я\s]{2,}$/ug)){
                    message.textContent = 'Введите "Ваше Имя"';
                    return;
                }
            }
        }
            
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
                setTimeout(() => {
                    message.textContent = '';
                }, 3000) 
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
