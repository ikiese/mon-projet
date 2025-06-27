//cahregment de l'api scroll

function revealFunction(){

    window.sr = ScrollReveal({duration: 900, distance:'360px', easing:'ease-in-out'});

    
    

    ScrollReveal({ distance: '60px' });
    sr.reveal('.reveal-top', { origin: 'top', rest:false });
    sr.reveal('.reveal-right', { origin: 'right' , rest:false});
    sr.reveal('.reveal-left', { origin: 'left' , rest:false});
    sr.reveal('.reveal-bottom', { origin: 'bottom' , rest:false});
}


window.addEventListener('load', ()=> {
    revealFunction();
}) 

