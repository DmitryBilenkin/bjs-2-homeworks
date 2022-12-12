class AlarmClock{
    constructor(){
    this.alarmCollection = [];
    this.timerId = null;
    }

    addClock(time,callback,id){        
        if (id === undefined){
            throw new Error ('error text');
        } else if (this.alarmCollection.some((element) => element.id === id)){
            return console.error('Такой id уже существует');
        } else {
           this.alarmCollection.push({time: time, callback: callback, id: id});  
        }
    }   

    removeClock(id){      
        let alarmCollectionLengthBeforeRemove = this.alarmCollection.length; 
        let indexOfRemoveClock = this.alarmCollection.findIndex((element) => element.id === id);
       
        if(indexOfRemoveClock >= 0){    
            this.alarmCollection.splice(indexOfRemoveClock,1);
        }
        return this.alarmCollection.length !== alarmCollectionLengthBeforeRemove; 
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString('ru-Ru', {hour: '2-digit', minute:'2-digit'});
    }

    start(){
        let checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()){
                return alarm.callback();
            }             
        };

        if (this.timerId === null){
            this.timerId = 1;
            setInterval(() => {
                this.alarmCollection.forEach((element) => checkClock(element));
            }, 1000);            
        };        
    }   

    stop(){
        if (this.timerId !== null){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        if (this.alarmCollection.length > 0) {
            this.alarmCollection.forEach((alarm) => console.log(`Будильник № ${alarm.id} заведен на ${alarm.time}`));
        }
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase(){
    let phoneAlarm = new AlarmClock();

    let currentTime = new Date();
    let hour = currentTime.getHours();
    let min1 = (currentTime.getMinutes() + 1);
    let min2 = (currentTime.getMinutes() + 2);

    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Пора вставать'), 1);
    phoneAlarm.addClock(`${hour}:${min1}`, () => {console.log('Давай вставай уже!'); phoneAlarm.removeClock(2)}, 2);
    phoneAlarm.addClock(`${hour}:${min2}`, () => {console.log('Вставай, а то проспишь!'); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms()}, 3);
    
    phoneAlarm.printAlarms();
    phoneAlarm.start();
}


