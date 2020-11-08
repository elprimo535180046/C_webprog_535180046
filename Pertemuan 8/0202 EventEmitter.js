var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('Connection Success!');

    //Fire data_received emitter
    eventEmitter.emit('data_received');
}

//Bind connection with handler
eventEmitter.on('connection',connectHandler);

//Bind data_received with anonymous func
eventEmitter.on('data_received',function(){
    console.log('Data received success!');
});

//Fire connection event
eventEmitter.emit('connection');

console.log("Program terminated.");