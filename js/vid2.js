// for loops

for(let i =0; i< 5; i++){
    console.log('in loop:', i);
    
}

console.log('loop finished');

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
    
}

//while loops
let i = 0;
while(i< 5){
    console.log('in loop: ', i);
    i++;
}

//do while loopd

let o=3

do{
    console.log(';val of i is: ', o);
    o++;
} while(o<5);

//if statements

//const age = 25;

//if(age > 20){
//  console.log('you are over 20 years old');
//}

//const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

//if(ninjas.length > 4){
//  console.log('that's a lot of ninjas')
//}

const password = 'p@ss';

if(password.length >= 8){
    console.log('that password is long enough!');
}