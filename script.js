setInterval(setDate, 1000);

const hour = document.querySelector('[data-hour-hand]');
const min = document.querySelector('[data-minute-hand]')
const sec = document.querySelector('[data-second-hand]');

function setDate(){
    const currentDate = new Date(); //date de hj
    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) /60;
    const hours = ((minutes + currentDate.getHours())/12);
    
    setRotation(sec,seconds);
    setRotation(min, minutes);
    setRotation(hour, hours);


}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

















/*pra que serve cada div?
transform:rotate
paramentros div
query selector
funções que já existem na js - date */