cards = document.querySelectorAll(".card");

document.addEventListener('scroll', s =>{
    triggerPoint = window.innerHeight/5*3.5

    cards.forEach(card => {
        cardTop = card.getBoundingClientRect().top
       
        console.log(cardTop)
        console.log(triggerPoint)

        if(cardTop < triggerPoint){card.classList.add("show")}
        else{card.classList.remove("show")}
    });

   
    
    
} )