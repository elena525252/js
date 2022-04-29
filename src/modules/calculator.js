const calculator = () => {
    const textInputs = document.querySelectorAll('.calc-item')
    
    const number = (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")  
    }
    textInputs.forEach(textInput => {
        textInput.addEventListener('input', number)
    })
}


export default calculator