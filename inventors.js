const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

handleFilterByYear1500 = arr => {
  arr.filter(el =>
    el.year >= 1500 && el.year <= 1600
      ? console.log(`${el.first} was born in ${el.year}`)
      : null
  );
};

handleFirstLastName = arr => {
  arr.map(el => console.log(`First Name: ${el.first} Last Name: ${el.last}`));
};

handleSortedYears = arr => {
  const years = arr.map(el => el.year);
  const sortedYears = years.sort((a, b) => b - a);
  console.log(sortedYears);
};

handleYearsLived = arr => {
  let yearsArray = [];

  arr.forEach(el => {
    yearsArray.push(el.passed - el.year);
  });
  let totalYears = yearsArray.reduce((a, b) => a + b);
  console.log(
    `The total amout of years lived by all of them is: ${totalYears}`
  );
};

handleSortYearsLived = arr => {
  let newArr = [];

  arr.forEach(el => {
    newArr.push({
      first: el.first,
      last: el.last,
      yearsLived: el.passed - el.year
    });
  });

  let sortedArr = newArr.sort((a, b) => {
    return b.yearsLived - a.yearsLived;
  });

  console.log("SORTED", sortedArr);
};

const filterByYearButton = document
  .getElementById("yearBorn")
  .addEventListener("click", () => handleFilterByYear1500(inventors));

const mapfirstLastNameButton = document
  .getElementById("firstLastName")
  .addEventListener("click", () => handleFirstLastName(inventors));

const sortedYearsButton = document
  .getElementById("sortedYears")
  .addEventListener("click", () => handleSortedYears(inventors));

const yearsLivedButton = document
  .getElementById("totalYearsLived")
  .addEventListener("click", () => handleYearsLived(inventors));

const sortedByYearsLived = document
  .getElementById("sortedYearsLived")
  .addEventListener("click", () => handleSortYearsLived(inventors));
