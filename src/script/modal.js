const modalRadioBtn = document.querySelectorAll('.js-radio-btn')
const jsModalSelect = Array.from(document.querySelectorAll('.js-modal-select'))
//closing the modal
const jsCloseModal = document.querySelector('.js-close-modal-btn')
const jsDialog = document.querySelector('.js-dialog')
//opening the modal
const jsOpenModalBtns = Array.from(document.querySelectorAll('.js-open-modal'))
const dialogMask = document.querySelector('.js-dialog-mask')

//inputs
const   KEYCODE = {
    ESC: 27
}

modalRadioBtn.forEach((btn, indx)=>{ 
    btn.addEventListener('click', ()=>{
        jsModalSelect.forEach(el => {
            el.classList.remove('show')
        })

        if(btn.checked){
            jsModalSelect[indx].classList.add('show')
            
        } else{
            
            jsModalSelect[indx].classList.remove('show')
        }
    })
})



//close dialog
const closeDialog = () =>{
    jsDialog.classList.remove('opened')
    document.body.classList.remove('menu-active')
}

const closeDialogKey = (e) =>{
    if(e.key=== KEYCODE.ESC){
      closeDialog()  
    }
}

jsCloseModal.addEventListener('click', ()=>{
    closeDialog()
})

document.addEventListener('keyup', closeDialog)

document.querySelector('.js-dialog-modal-window').addEventListener('click', (e)=>{
    e.stopPropagation()
})

dialogMask.addEventListener('click', closeDialog)


//click to open the modal
jsOpenModalBtns.forEach((btn, indx)=>{
    btn.addEventListener('click', ()=>{
        jsDialog.classList.add('opened')
        document.body.classList.add('menu-active')
    })
})



