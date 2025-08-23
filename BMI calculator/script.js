const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const show = document.querySelector(".add");

  let bmi;

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `${height} Not Valid`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `${weight} Not Valid`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }

if (bmi <= 18.6) {
    show.innerHTML = `Your BMI ${bmi} is Under Weight`;
} else if (bmi > 18.6 && bmi <= 24.9) {
    show.innerHTML = `Your BMI ${bmi} is Normal`;
} else if (bmi > 24.9) {
    show.innerHTML = `Your BMI ${bmi} is OverWeight`;
}
});
