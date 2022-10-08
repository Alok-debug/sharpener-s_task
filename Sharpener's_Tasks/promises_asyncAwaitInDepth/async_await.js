console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => { 
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000)
    });
    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const getbutter =new Promise((resolve, reject) => resolve(` butter`));
    const getColdDrink = new Promise((resolve, reject) => resolve(`coldDrink`));

    
    let ticket = await promiseWifeBringingTicks;
    console.log(`wife: i have the ${ticket}`);
    console.log(`husband: we should go in`);
    console.log(`Wife: No! I'm hungry`);
    
    let popcorn = await getPopcorn;
    console.log(`husband:I hot some ${popcorn}`);
    console.log(`husband: we should go in`);
    console.log(`Wife: No! I need butter on my popcorn`);
    
    let butter = await getbutter;
    console.log(`husband:I have taken ${butter}`);
    console.log(`husband: we should go in now?`);
    console.log(`Wife: If you dont mind, Can i have some cold drinks`);

    let coldDrinks = await getColdDrink;
    


    return ticket;
}


preMovie().then((m) => console.log(m));


console.log('person4: shows ticket');
console.log('person5: shows ticket');