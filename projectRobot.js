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