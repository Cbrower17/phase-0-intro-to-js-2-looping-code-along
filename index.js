// Code your solutions in this file
function writeCards(names, giftType){
    const messages = [];
 for(let index = 0;index< names.length; index++){
    console.log(names);
    console.log("Thank you, " + names[index] + " for the wonderful " + giftType + " gift!");
    messages.push(`Thank you, ${names[index]}, for the wonderful ${giftType} gift!`)
 }
 return messages;
}

function countDown(){

    let count = 10;

    while (count >= 0) {
        console.log(count);
        count--;
    }
}
