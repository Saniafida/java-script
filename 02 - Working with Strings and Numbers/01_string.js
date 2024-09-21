const name = "sanii"
const repocount = 50

//console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String( "Freedom Fighters");

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));


console.log(gameName.indexOf("m"));

const newString=gameName.substring(0,4);

console.log(newString);

const anotherString = gameName.slice(1 , -6);

console.log(anotherString);

const stringOne = "   sanii   "
console.log(stringOne);
console.log(stringOne.trim());

const url = "http://Sanifida.com"

console.log(url.replace('%25',"-"));
