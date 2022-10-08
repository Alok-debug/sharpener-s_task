console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log(`wife: i have the ticket`);
    console.log(`husband: we should go in`);
    console.log(`Wife: No! I'm hungry`);
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});
const getbutter = getPopcorn.then((t) => {
    console.log('husband:I hot some popcorn');
    console.log(`husband: we should go in`);
    console.log(`Wife: No! I need butter on my popcorn`);
    return new Promise((resolve, reject) => resolve(`${t}, butter`));
});

const getColdDrink = getbutter.then((t) => {
    console.log('husband:I have taken butter');
    console.log(`husband: we should go in now?`);
    console.log(`Wife: If you dont mind, Can i have some cold drinks`);
    return new Promise((resolve, reject) => resolve(`${t} ,coldDrink`));
    
});

getColdDrink.then((t)=> console.log(t))
console.log('person4: shows ticket');
console.log('person5: shows ticket');