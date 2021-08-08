const ligar = document.getElementById ( 'btnLigado' );
const desligar = document.getElementById ( 'btnDesligado' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

ligar.addEventListener ( 'click', lampOn );
desligar.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'click', lampBroken );