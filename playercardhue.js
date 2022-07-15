function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function changePlayerCard() {
    for (let step = 0; step < 70; step++) {
        var randint = Math.ceil(Math.random() * 1000) * (Math.round(Math.random()) ? 1 : -1)
        fetch('https://penguins.me/api/manager/update_tweaks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'token': 'playertoken',
                'action': 'update_playercard',
                'value': randint
            })
        });
        await sleep(200);
    }
}
changePlayerCard();