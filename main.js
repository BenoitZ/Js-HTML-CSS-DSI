const background = document.getElementById('ensemblePourBlur');

let fermeture1 = document.getElementById('fermeture1');
let ouverture1 = document.getElementById('carte1');
let popUp1 = document.getElementById('carteUne');

    ouverture1.addEventListener('click', () => {     
        background.style.filter = 'blur(6px)';
        background.style.position = 'fixed';
        popUp1.style.display = 'block';
    });

    fermeture1.addEventListener('click', () => {     
        background.style.filter = 'none';
        background.style.position = '';
        popUp1.style.display = 'none';
    });


let fermeture2 = document.getElementById('fermeture2');
let ouverture2 = document.getElementById('carte2');
let popUp2 = document.getElementById('carteDeux');

    ouverture2.addEventListener('click', () => {     
        background.style.filter = 'blur(6px)';
        background.style.position = 'fixed';
        popUp2.style.display = 'block';
    });

    fermeture2.addEventListener('click', () => {     
        background.style.filter = 'none';
        background.style.position = '';
        popUp2.style.display = 'none';
    });

let fermeture3 = document.getElementById('fermeture3');
let ouverture3 = document.getElementById('carte3');
let popUp3 = document.getElementById('carteTrois');

    ouverture3.addEventListener('click', () => {     
        background.style.filter = 'blur(6px)';
        background.style.position = 'fixed';
        popUp3.style.display = 'block';
    });

    fermeture3.addEventListener('click', () => {     
        background.style.filter = 'none';
        background.style.position = '';
        popUp3.style.display = 'none';
    });

    
// let background = document.getElementById('ensemblePourBlur');

// let fermeture = document.getElementsByClassName('fermeture');
// let ouverture = document.getElementsByClassName('carteMin');
// let popUp = document.getElementsByClassName('carte');

// let popUpAction = function(action, index){
//     action.addEventListener('click', function(){    
//         if(action == ouverture) { 
//             background.style.filter = 'blur(6px)';
//             popUp.style.display = 'block';
//         }
//         else if(action == fermeture){
//             background.style.filter = 'none';
//             popUp.style.display = 'none';
//         }
//         else{}
//     });
// }

// for (let index = 0; index < popUp.length; index++) {
//     popUpAction(fermeture, index);
//     popUpAction(ouverture, index);
// }



// const popUpAction = (action, index) => {
//     action.addEventListener('click', () => {     
//         (action == ouverture) ? background.style.filter = 'blur(6px)' : background.style.filter = 'none';
//         (action == ouverture) ? popUp.style.display = 'block' : popUp.style.display = 'none';
//     });
// }


