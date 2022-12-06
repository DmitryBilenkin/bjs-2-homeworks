class AlarmClock{
    constructor(){
    this.alarmCollection = [];
    this.timerId = null;
    }

    addClock(time,callback,id){
        this.time = time;
        this.callback = callback;

        if (id === undefined){
            throw new Error ('error text');
        } else {
            for(let alarms of this.alarmCollection){
                if(alarms.indexOf(id) != -1){
                    return console.error('Такой id уже существует'); 
                }
            }
           
        }
        this.timerId = id;
        this.alarmCollection.push([this.time, this.callback, this.timerId]);

    }

    removeClock(id){
        let alarmCollectionLength = this.alarmCollection.length;

        for(let alarms of this.alarmCollection){
            if (alarms.indexOf(id) != -1){
                this.alarmCollection.splice(this.alarmCollection[alarms.indexOf(id)], 1);
            }
        } 
        return this.alarmCollection.length !== alarmCollectionLength;
    }

    getCurrentFormattedTime(){
        let currentTime = new Date();
        return `${currentTime.getHours()}:${currentTime.getMinutes()}`;
    }

    start(){
        let currentTime = this.getCurrentFormattedTime();

        for (let alarm of this.alarmCollection){
            function checkClock(alarm){
                if (currentTime === alarm[0]){
                    alarm[1]();
                }
            } 
            checkClock(alarm);
        
        if (alarm[2] === null){
            
                setInterval(() => {
                    for (let alarm of this.alarmCollection){
                    checkClock(alarm);
                }

                }, 3000);
            }
        }
    }

    stop(){
        for (let alarm of this.alarmCollection){
            if(alarm[2] !== null){
                clearInterval();
                delete this.timerId;
            }
        }   
            
    }

    printAlarms(){
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        if (this.alarmCollection.length > 0) {
            for (let i = 0; i < this.alarmCollection.length; i++){
                console.log(`Будильник № ${i + 1} заведен на ${this.alarmCollection[i][0]}` );
            }
        }
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }

}


