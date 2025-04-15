function commanderPizza() {
    return new Promise((resolve, reject) => {
        const pizzaDispo = Math.random() > 0.3;
        console.log(pizzaDispo);

        setTimeout(() => {
            if (pizzaDispo) {
                resolve("La pizza est prête");
            } else {
                reject("Le four est en panne");
            }
        }, 2000);
    });
}
commanderPizza()
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    });
