const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.getCustPerHour();
console.log(seattle);

const Tokyo = {
  name: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++);
    let numCusts = randomNum(this.minCust, this.maxCust);
    this.custPerHour.push(numCusts);
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Tokyo.getCustPerHour();
console.log(Tokyo);

const Dubai = {
  name: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++);
    let numCusts = randomNum(this.minCust, this.maxCust);
    this.custPerHour.push(numCusts);
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Dubai.getCustPerHour();
console.log(Dubai);

const Paris = {
  name: "Paris",
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++);
    let numCusts = randomNum(this.minCust, this.maxCust);
    this.custPerHour.push(numCusts);
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Paris.getCustPerHour();
console.log(Paris);

const Lima = {
  name: "Lima",
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++);
    let numCusts = randomNum(this.minCust, this.maxCust);
    this.custPerHour.push(numCusts);
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Lima.getCustPerHour();
console.log(Lima);

let data = ["seattle", "tokyo", "dubai", "lima", "paris"];
let list = document.getElementById("myList");
for (i = 0; i < data.length; i++) {
  let li = document.createElement("li");
  li.innerText = data[i];
  list.appendChild(li);
}
