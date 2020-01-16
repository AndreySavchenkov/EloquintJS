'use strict'

const roads = [
    "Дом Алисы-Дом Боба", "Дом Алисы-Почта", "Дом Дарии-Дом Эрни", "Дом Эрни-Дом Греты", "Дом Греты-Магазин", "Рынок-Почта", 
    "Рынок-Ратуша", "Дом Алисы-Склад", "Дом Боба-Ратуша", "Дом Дарии-Ратуша", "Дом Греты-Ферма", "Рынок-Ферма", "Рынок-Магазин",
    "Магазин-Ратуша"
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);


class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map( p => {
                if (p.place != this.place) return p;
                return {place: destination, adress: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Выполнено за  ${turn} ходов`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Переход в направление ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCont = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadFraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == adress);
        parcels.push({place, address});
    }
    return new VillageState("Почта", parcels);
};