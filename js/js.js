// first vid 
console.log(1)
console.log(2)

//second vid
let age = 25;
let year = 2019;

//log things to console
// console.log(age, year);

/*age = 30;
console.log(age);

const points = 100;
console.log(points);*/

var score = 75;
console.log(score);

//strings
console.log('hello world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

//string concatenation
let firstName = 'Brandon'
let lastName = 'Sanderson'

let fullName = dirstName + ' ' + lastName;

console.log(fullName);

//getting charecters
console.log((fullName[2]));

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

//common string methods
// let result2 = email.lastIndexOf('n');

// let result2 = email.slice(2,5);
// let result2 = email.substring(4,10);
// let result2 = email.replace('m','W');
let result2 = email.replace('n','w')

console.log(result2);

let radius = 10;
const pi = 3.14;
// console.log(radius, pi);

//math opperators +, -, *, /, **, %
// console.log(10/2);
// let result3 = radius % 3;
// let result3 = pi * radius**2

//order of operations P E M D A S
// let result3 = 5*(10-3)**2

// console.log(radius3);
let likes = 10
// likes = likes+1
// likes++;
// likes--
// likes+=10
// likes-=5
// likes*=2
// likes/=2
// console.log(likes);

//NaN - not a number
// console.log(5/'hello');
// console.log(5*'hello');


let result4 = 'the blog has '+ likes+' likes';


//template strings
const title = 'best reads of 2019'
const author = 'mario'
const likes2 = 30

//concatination way
// let result5 = 'the blog called ' + title + ' by ' + author + ' has ' + likes2 + ' likes'
// console.log(result5);


//template literal way
let result5 = `the blog called ${title} by ${author} has ${likes2} likes`
console.log(result5);

//creating html templates
let html = `
<h2>${title}</h2>
<p>by ${author}</p>
<span>this blog has ${likes2} likes</span>
`;
console.log(html);


let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35]
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// array methods
// let result6 = ninjas.join('-');
// let result6 = ninjas.indexOf('chun-li');
// let result6 = ninjas.concat(['ken', 'crystal'])
let result6 = ninjas.push('ken');
result6 = ninjas.pop()
console.log(ninjas);

