const defaultAttributeSCores = [15,14,13,12,10,8];

function shuffleArray(targetArray){
    let shuffled  = Array.from(targetArray); // that targetArray Array.from 可以改变from这里的数据
    for (let i = shuffled.length -1 ; i > 0;i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled [j];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;

}
function sumArrayElements(array){
    return array.reduce((total,currentNumber) => total + currentNumber);
}
function diceRoller(times,sides) {
    let results = [];
    for(let i = 0; i < times; i ++){
        results.push(Math.floor(Math.random() * sides +1 ));
    }
    return results;
}
class Player {
    constructor(characterName = 'Naruto'){
        this.name = characterName;
        this.attributes = {
            strength : 0,
            dexterity : 0,
            constitution : 0,
            intelligence : 0,
            wisdom : 0,
            charisma :0
        };

        let shuffledResult = shuffleArray(defaultAttributeSCores);
        for (const [key, value] of Object.entries(this.attributes)){
            let attributeValue = shuffledResult.pop();
            this.attributes[key] = attributeValue;
        }

    }


    rollAttributes () {
        for (const key in this.attributes){
            let result = diceRoller(4,6);
            result.sort(function(a,b){return a - b});
            result.shift(); // this move the first element
            let sum = sumArrayElements(result);
            this.attributes[key] = sum;

        }
    }

    printPlayer(){
        console.log(`NAME : ${this.name}`);
        for (const[key,value] of Object.entries(this.attributes)){
            console.log(`${key.slice(0,3).toUpperCase()}: ${value}`);
        }
    }  

}
const player01 = new Player();
player01.printPlayer();
const player02 = new Player('Son Goku');
player02.rollAttributes();
player02.printPlayer();