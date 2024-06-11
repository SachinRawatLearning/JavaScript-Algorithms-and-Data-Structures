//First In First Out (FIFO)

const queue = [];

//push/shift :
queue.push(11); //Add last
queue.push(22);
queue.push(33);
//[11,22,33]

queue.shift(); //Remove from begining - [22,33]
queue.shift(); //[33]
queue.shift(); //[]

//unshift/pop :

queue.unshift(11); //Add begining
queue.unshift(22);
queue.unshift(33);
//[33,22,11]

queue.pop(); //Remove from last - [33,22]
queue.pop(); //[33]
queue.pop(); //[]
console.log(queue);
