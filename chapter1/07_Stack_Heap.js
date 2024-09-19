// Stack (Primitives ) and Heap (Non Primitives)

//____________Stack ________________________________

let myYoutubeChannelName="sania fida"

let anotherName=myYoutubeChannelName

anotherName="sani"

console.log(myYoutubeChannelName);


console.log(anotherName);

//_________________Heap________________________________

let userOne = {

    email:"sani@google.com",
    password:"123456",
}

let userTwo = {
    email:"sania261@gmail.com",
    password:"654321",
}

userTwo=userOne

userTwo.email="sani261@gmail.com"

console.log(userOne.email);

console.log(userTwo.email);