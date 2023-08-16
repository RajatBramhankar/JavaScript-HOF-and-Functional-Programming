function generateRandomNumber(){
    const delayInSeconds = 3;
    let remainingTime = delayInSeconds;

    const countdownInterval = setInterval(() =>{
        if(remainingTime > 0){
            console.log(`Random number generate in ${remainingTime} seconds...`);
            remainingTime --;
        }
        else{
            clearInterval(countdownInterval);
            const randomNum = Math.floor(Math.random() * 100) + 1;
            console.log(`Generated random number: ${randomNum}`);
        }
    }, 1000);
}

generateRandomNumber();
