const background = document.getElementById('ensemblePourBlur');

let fermeture = document.getElementById('fermeture1');
let ouverture = document.getElementById('carte1');
let popUp     = document.getElementsByClassName('carte');

console.log(popUp);

// function popUp(){
    // let fermeture = document.getElementById('fermeture1');
    // let ouverture = document.getElementById('carte1');
    // let popUp = document.getElementById('carteUne');

//     ouverture.addEventListener('click', () => {     
//         background.style.filter = 'blur(6px)';
//         popUp.style.display = 'block';
//     });

//     fermeture.addEventListener('click', () => {     
//         background.style.filter = 'none';
//         popUp.style.display = 'none';
//     });
// }

const popUpAction = (action, index) => {
    action.addEventListener('click', () => {     
        (action == ouverture) ? background.style.filter = 'blur(6px)' : background.style.filter = 'none';
        (action == ouverture) ? popUp.style.display = 'block' : popUp.style.display = 'none';
    });
}

for (let index = 0; index < popUp.length; index++) {
    popUpAction(fermeture, index);
    popUpAction(ouverture, index);
}


// function popUp(){

//     let fermeture = document.getElementById('fermeture6');
//     let ouverture = document.getElementById('carte6');
//     let popUp = document.getElementById('carteSix');
// }


