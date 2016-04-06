function Building() {
    this.floors = [];
    this.addFloor = function (floor) {
        this.floors.push(floor);
    };
}

function Floor() {
    this.rooms = [];
    this.addRoom = function (room) {
        this.rooms.push(room);
    };
}

function Room() {
    this.people = [];
    this.tools = [];
    this.addPerson = function (person) {
        this.people.push(person);
    };
    this.addTool = function (tool) {
        this.tools.push(tool);
    };
}

function Person(name) {
    this.name = name;
    this.tools = [];
    this.addTool = function (tool) {
        this.tools.push(tool);
    };
}

function Equipment(name) {
    this.name = name;
}

function TechSupport(building) {
    var cache = {};
    this.building = building;

    this.find = function (type, name) {
        if (cache[name] != null) {
            return cache[name];
        }
        var target;
        
        (function recurse(currentNode) {
            if (currentNode instanceof Building) {
                for (var i = 0, length = currentNode.floors.length; i < length; i++) {
                    if (recurse(currentNode.floors[i])) {
                        break;
                    }
                }
            } else if (currentNode instanceof Floor) {
                for (var i = 0, length = currentNode.rooms.length; i < length; i++) {
                    if (recurse(currentNode.rooms[i])) {
                        break;
                    }
                }
            } else if (currentNode instanceof Room) {
                for (var i = 0, length = currentNode.people.length; i < length; i++) {
                    if (recurse(currentNode.people[i])) {
                        break;
                    }
                }
            } else if (currentNode instanceof Person) {
                if (type == "person") {
                    if (currentNode.name == name) {
                        cache[name] = currentNode;
                        target = currentNode;
                        return true;
                    } else {
                        return false;
                    }
                } else if (type == "equipment") {
                    for (var i = 0, length = currentNode.tools.length; i < length; i++) {
                        if (recurse(currentNode.tools[i])) {
                            break;
                        }
                    }
                }
            } else if (currentNode instanceof Equipment) {
                if (currentNode.name == name) {
                    cache[name] = currentNode;
                    target = currentNode;
                    return true;
                } else {
                    return false;
                }
            }
        })(this.building);

        if (target === undefined) {
            console.log("Not found in building");
        }
        return target;
    };
}

var building = new Building();
var floor1 = new Floor();
var floor2 = new Floor();
var floor3 = new Floor();
var floor4 = new Floor();
var floor5 = new Floor();
var room11 = new Room();
var room12 = new Room();
var room13 = new Room();
var room21 = new Room();
var room22 = new Room();
var room23 = new Room();
var room31 = new Room();
var room32 = new Room();
var room41 = new Room();
var room51 = new Room();
var room52 = new Room();
var room53 = new Room();
var person1 = new Person("Manuel");
var person2 = new Person("Jose");
var person3 = new Person("Shardul");
var person4 = new Person("Cesar");
var person5 = new Person("Manni");
var person6 = new Person("Daniel");
var tool1 = new Equipment("Laptop");
var tool2 = new Equipment("Printer");
var tool3 = new Equipment("Desk");
var tool4 = new Equipment("Keyboard");
var tool5 = new Equipment("Mouse");

building.addFloor(floor1);
building.addFloor(floor2);
building.addFloor(floor3);
building.addFloor(floor4);
building.addFloor(floor5);
floor1.addRoom(room11);
floor1.addRoom(room12);
floor1.addRoom(room13);
floor2.addRoom(room21);
floor2.addRoom(room22);
floor2.addRoom(room23);
floor3.addRoom(room31);
floor3.addRoom(room32);
floor4.addRoom(room41);
floor5.addRoom(room51);
floor5.addRoom(room52);
floor5.addRoom(room53);
room12.addPerson(person1);
room21.addPerson(person2);
room32.addPerson(person3);
room41.addPerson(person4);
room51.addPerson(person5);
room53.addPerson(person6);
person1.addTool(tool1);
person1.addTool(tool2);
person3.addTool(tool3);
person5.addTool(tool4);
person5.addTool(tool5);

var techguy = new TechSupport(building);

console.log(techguy.find("person", "Shardul"));
console.log(techguy.find("person", "Shardul"));
console.log(techguy.find("equipment", "Desk"));
console.log(techguy.find("equipment", "Laptop"));
console.log(techguy.find("equipment", "Desk"));