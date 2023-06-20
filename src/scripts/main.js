AOS.init();

const dateEvent = new Date("Apr 13 2024 19:00:00");
const timeStampEvent = dateEvent.getTime();

setInterval(function(){
    const nowTime = new Date();
    const timeStampNow = nowTime.getTime();

    if(timeStampNow>timeStampEvent){
        document.getElementById('counter').innerHTML = `O evento já ocorreu.`;
        
        const btn = document.querySelector('.btn');
        if(!btn.classList.contains('btn--disabled')){
            btn.classList.add('btn--disabled');
        }

    }
    else{

        const dayInMS = 1000 * 60 * 60 * 24;
        const hourInMS = 1000 * 60* 60;
        const minInMS = 1000 * 60;
        const secInMS = 1000;

        const daysToEvent = Math.floor((timeStampEvent-timeStampNow)/dayInMS);
        const hoursToEvent = Math.floor(((timeStampEvent-timeStampNow)%dayInMS)/hourInMS);
        const minutesToEvent = Math.floor((((timeStampEvent-timeStampNow)%dayInMS)%hourInMS)/minInMS);
        const secondsToEvent = Math.floor(((((timeStampEvent-timeStampNow)%dayInMS)%hourInMS)%minInMS)/secInMS);
        
        document.getElementById('counter').innerHTML = `Faltam apenas <br> ${daysToEvent} dias, ${hoursToEvent} horas, ${minutesToEvent} minutos e ${secondsToEvent} segundos<br>
                                                            para comemorarmos juntos meu aniversário!`
        
    }
    }, 1000);