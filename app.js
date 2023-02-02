function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

function CookieStore(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
}

CookieStore.prototype.calcCustPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let numCust = randomNum(this.minCust, this.maxCust);
    this.custPerHour.push(numCust);
  }
};

CookieStore.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < this.custPerHour.length; i++) {
    let cookiesSold = Math.floor(this.custPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(cookiesSold);
  }
};

CookieStore.prototype.render = function () {
  this.calcCustPerHour();
  this.calcCookiesPerHour();

  const table = document.getElementById("myTable");

  const tr = document.createElement("tr");
  table.appendChild(tr);

  let td = document.createElement("td");
  td.textContent = this.name;
  tr.appendChild(td);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }
};

function makeHeaderRow() {
  const table = document.getElementById("myTable");

  const tr = document.createElement("tr");
  table.appendChild(tr);

  let th = document.createElement("th");
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }
}

makeHeaderRow();
const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
const dubai = new CookieStore("Dubai", 11, 38, 3.7);
const paris = new CookieStore("Paris", 20, 38, 2.3);
const lima = new CookieStore("Lima", 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

const form = document.getElementById("new-store-info");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const storeNameInput = event.target.name.value;
  const minCustInput = event.target.minCust.value;
  const maxCustInput = event.target.maxCust.value;
  const avgCookieInput = event.target.avgCookies.value;

  console.log(storeNameInput);
  console.log(minCustInput);
  console.log(maxCustInput);
  console.log(avgCookieInput);

  form.reset();

  const newStore = new CookieStore(
    storeNameInput,
    minCustInput,
    maxCustInput,
    avgCookieInput
  );
  newStore.render();
});

function makeTotalColumn() {
  const table = document.getElementById("myTable");

  const th = document.createElement("th");
  th.textContent = "Total";
  table.rows[0].appendChild(th);

  for (let i = 1; i < table.rows.length; i++) {
    let total = 0;

    total += parseInt(table.rows[i].cells[1].textContent);
    total += parseInt(table.rows[i].cells[2].textContent);
    total += parseInt(table.rows[i].cells[3].textContent);
    total += parseInt(table.rows[i].cells[4].textContent);
    total += parseInt(table.rows[i].cells[5].textContent);

    const td = document.createElement("td");
    td.textContent = total;
    table.rows[i].appendChild(td);
  }
}

makeTotalColumn();
