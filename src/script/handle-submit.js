
const submitBtns =Array.from(document.querySelectorAll('.submit-btn'));


const updateProgress=(amount)=>{
    const jsBacked = parseInt(document.querySelector('.js-backed').textContent)
    const jsBackers = parseInt(document.querySelector('.js-backers'))
    const progress = document.querySelector('.progress-bar')

    let newBacked = jsBacked + amount
    let newBackers = jsBackers+1
    let newProgress = Math.floor(newBacked/1000)

    progress.value = newBacked
}

// const handleSubmit = () =>{
//     let submittedPledge
//     let rawPledge = parseInt(submitBtn.parentNode.previousElementSibling.children[0].value)
//     let fixedPledge = parseInt(submitBtn.previousElementSibling.firstChild.nextSibling.textContent)

//     rawPledge > fixedPledge ? submittedPledge = rawPledge : submittedPledge = fixedPledge

//     updateProgress(submittedPledge)
// }

submitBtns.forEach((btn, indx)=>{
    btn.addEventListener('click',() =>{
        let submittedPledge
        let rawPledge = parseInt(btn.parentNode.previousElementSibling.children[0].value)
        let fixedPledge = parseInt(btn.previousElementSibling.firstChild.nextSibling.textContent)
    
        rawPledge > fixedPledge ? submittedPledge = rawPledge : submittedPledge = fixedPledge
    
        updateProgress(submittedPledge)
    } )
})


