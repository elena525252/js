const form = () => {
    const form = document.querySelector('.main-form')
    const inputEmail = form.querySelector('.form-email')
    const inputPhone = form.querySelector('.form-phone')
    const inputName = form.querySelector('.form-name')

    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        let error = false
        if(/[^а-яА-Я\-\s]/g.test(inputName.value)){
            alert('имя введено неверно')
        }
        if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(inputEmail.value)) {
            alert('email введен неверно')
        }
        if(!/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g.test(inputPhone.value)){
            alert('телефон введен неверно')
        }
        else if(!error){
            alert ('Данные отправлены')
        }
    })
}


export default form