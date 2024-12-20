let a = [1, 2, 3, 4]
async function doll() {

    return new Promise(resolve => setTimeout(resolve, getRandomDelay()));

}

function getRandomDelay() {
    return Math.floor(Math.random() * 5000) + 1000; // Generates a random integer in the range [1000, 10000]
}

async function startFollow() {
    for (let i = 0; i <= a.length; i++) {
        console.log(i)
        await doll()
    }



}



startFollow();
