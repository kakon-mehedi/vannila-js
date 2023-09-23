function onClick(){
    const body = document.querySelector('body');
    body.setAttribute('inert', 'true');
    console.log(body.getAttribute('inert'))
	
}