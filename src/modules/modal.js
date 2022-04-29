const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    const modalContent = document.querySelector('.popup-content')
    
    let intervalID
    let count = -100
    
    modal.style.display = ''
    modalContent.style.transform = `translateX(${count}%)`

    const counter = () => {
        count += 4
        console.log(count);
    }

    const modalOpen = () => {
        counter()
        modalContent.style.transform = `translateX(${count}%)`
        if (count >= 0) {
            clearInterval(intervalID)
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () =>{
            if (innerWidth <= 768){
                modal.style.display = 'block'
                modalContent.style.transform = `translateX(-15%)`
                modalContent.style.display = 'block'
            } else {
            modal.style.display = 'block'
            intervalID = setInterval(() => {
                modalOpen()
            }, 5);
            }
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = ''
        count = -100
        modalContent.style.transform = `translateX(${count}%)`
    })

    
}

export default modal