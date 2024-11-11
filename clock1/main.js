const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("how are you? \n", answer => {
    console.log("fine  ", answer);
    setInterval(() => {
        const miau = new Date();
        console.log(`Ora:  ${miau.getHours()} : ${miau.getMinutes()} : ${miau.getSeconds()}`);
    }, 1000);
    rl.close();
});
