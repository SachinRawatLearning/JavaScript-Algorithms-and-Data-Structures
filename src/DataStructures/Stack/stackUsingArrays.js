//Last In First Out (LIFO)

const stack = [];

//Using push and pop

stack.push(1); //push
stack.push(2);
stack.push(3);

stack.pop(); //remove last
stack.pop();
stack.pop();

//Using unshift and shift

stack.unshift(1); // add
stack.unshift(2);
stack.unshift(3);

stack.shift(); //remove last added - [2,1]
stack.shift();
stack.shift();

//Better to use push/pop as unshift/shift will cause reindexing.
