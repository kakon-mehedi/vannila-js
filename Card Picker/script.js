cards = document.querySelectorAll(".card")
cards.forEach(card => {

    card.addEventListener('click' , () => {
        removeActiveClasses()
        card.classList.add("card-active")
        //addActiveClass(card)
    } )
    
});


removeActiveClasses = () => {
    cards.forEach(card => {
        card.classList.remove("card-active")
    });    
}


//addActiveClass = card => card.classList.addClass("card-active")