const submitBtns =Array.from(document.querySelectorAll('.submit-btn'));
const smallModal = document.querySelector('.js-small-modal')
const jsModalWindow = document.querySelector('.js-dialog-modal-window')
const smallModalBtn = document.querySelector('.js-small-modal-btn')
const dialog = document.querySelector('.js-dialog')

//responsible for updating the progress
const jsBacked = parseInt(document.querySelector('.js-backed').textContent)
const jsBackers = parseInt(document.querySelector('.js-backers').textContent)
const progress = document.querySelector('.progress-bar')


//set the progress value when the page loads
progress.value =Math.floor(jsBacked/1000)


const updateProgress=(amount)=>{
    //thinking of using local storage here
    let newBacked = jsBacked + amount
    let newBackers = jsBackers+1
    let newProgress = Math.floor(newBacked/1000)

    progress.value = newProgress
    document.querySelector('.js-backed').textContent = newBacked
    document.querySelector('.js-backers').textContent = newBackers
}


submitBtns.forEach((btn, indx)=>{
    btn.addEventListener('click',() =>{
        let submittedPledge
        let rawPledge = parseInt(btn.parentNode.previousElementSibling.children[0].value)
        let fixedPledge = parseInt(btn.previousElementSibling.firstChild.nextSibling.textContent)
    
        rawPledge > fixedPledge ? submittedPledge = rawPledge : submittedPledge = fixedPledge
    
        updateProgress(submittedPledge)

        smallModal.classList.add('show-modal')
        jsModalWindow.classList.add('hide')
    })
})

smallModalBtn.addEventListener('click', ()=>{
    dialog.classList.remove('opened')
    document.body.classList.remove('menu-active')

    jsModalWindow.classList.remove('hide')
    smallModal.classList.remove('show-modal')  
})
