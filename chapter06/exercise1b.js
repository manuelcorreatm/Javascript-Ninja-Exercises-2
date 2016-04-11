function Human() { };
Human.prototype.heads = 1;
Human.prototype.arms = 2;
Human.prototype.legs = 2;
Human.prototype.breathe = function () {

};

function Mutant(heads, arms, legs) {
    this.heads = heads;
    this.arms = arms;
    this.legs = legs;
}
Mutant.prototype = new Human();
Mutant.prototype.superPower = function () { };


function Lupine() {
    this.currentForm = "human";
    this.transform = function () {
        this.currentForm == "human" ? this.currentForm = "wolf" : this.currentForm = "human";
    }
}
Lupine.prototype = new Mutant(1, 2, 2);
Lupine.prototype.olfaction = function () { };


function Magical() {

}
Magical.prototype = new Human();
Magical.prototype.spell = function () { };

function Jedi(midiclorians) {
    this.midicloriansCount = midiclorians;
}
Jedi.prototype = new Magical();
Jedi.prototype.useForce = new function () { };

function MartialArtist() {
    this.techniques = [];
}
MartialArtist.prototype = new Human();
MartialArtist.prototype.useTechnique = function () { };


var batman = new MartialArtist();
var luke = new Jedi();
var twilightLink = new Lupine();
var spiderman = new Mutant();
var voldemort = new Magical();
var manuel = new Human();

console.log(batman instanceof Human);
console.log(luke instanceof Magical);
console.log(luke instanceof Human);
console.log(twilightLink instanceof Mutant);
console.log(spiderman instanceof Human);
console.log(voldemort instanceof Human);
console.log(manuel instanceof Human);