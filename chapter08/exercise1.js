function displayRandomSentence() {
    var nouns1 = ["Michael Jackson", "Edward Cullen", "a penguin", "a cat", "my teacher", "my best friend", "a porn star", "myself", "Barney", "Santa Claus", "Chicharito"];
    var nouns2 = ["Britney Spears", "Madonna", "Obama", "the Pope", "Hugh Hefner", "Spiderman", "Darth Vader"];
    var actions = ["Went to party with", "Punched", "Had babies with", "Pissed on", "Kidnapped", "Dressed like", "Killed", "Slept with", "Ran naked with", "Married"];
    var reasons = ["because I smoked crack with", "while eating pizza with", "while kissing", "because I am son of", "because I am a slave of", "while killing", "because I had a coffee with", "because I want to be like", "because I want to lick", "because I want to get hit by", "while sleeping with"];
    var result = [];

    result.push(actions[parseInt(Math.random() * actions.length)]);
    result.push(nouns1[parseInt(Math.random() * nouns1.length)]);
    result.push(reasons[parseInt(Math.random() * reasons.length)]);
    result.push(nouns2[parseInt(Math.random() * nouns2.length)]);
    

    return result.join(" ");

}

console.log(displayRandomSentence());