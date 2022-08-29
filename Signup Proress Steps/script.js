progress = document.querySelector(".progress")
circeles = document.querySelectorAll(".circle")
nextBtn = document.getElementById("next")
prevBtn = document.getElementById("prev")

count = 0

nextBtn.addEventListener('click', e => {
    count++
    prevBtn. disabled = false
    prevBtn.classList.remove("disable")
    
    width = Math.round(100/(circeles.length -1))*count    

    if(count > circeles.length - 2){
        nextBtn.disabled = true
        count =  circeles.length -1
        nextBtn.classList.add("disable") 
    }

    progress.style.width = `${width}%`
    circeles[count].classList.add('active')
       
})


prevBtn.addEventListener('click', e => {
    circeles[count].classList.remove('active')
    count--
    nextBtn. disabled = false
    nextBtn.classList.remove("disable")
     
    width = Math.round(100/(circeles.length -1))*count    

    if(count < 1){
        prevBtn.disabled = true
        count = 0
        prevBtn.classList.add("disable") 
    }

    progress.style.width = `${width}%`
           
})