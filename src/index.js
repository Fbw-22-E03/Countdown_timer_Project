import "./styles/main.scss"; // Don't delete :)
import Count from "./scripts/smile.js";
import { DateTime } from "luxon";

const storage = {
  year: null,
  month: null,
  day: null,
  hour: null,
  minute: null,
};

const getDifference = () =>
  DateTime.fromObject(storage)
    .diff(DateTime.now(), [
      "years",
      "months",
      "days",
      "hours",
      "minutes",
      "seconds",
    ])
    .toObject();

const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");

const years_text = document.querySelector("#years_text");
const months_text = document.querySelector("#months_text");
const days_text = document.querySelector("#days_text");
const hours_text = document.querySelector("#hours_text");
const minutes_text = document.querySelector("#minutes_text");
const seconds_text = document.querySelector("#seconds_text");

const form = document.querySelector("form");

let stopInt = null;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  storage.year = year.value;
  storage.month = month.value;
  storage.day = day.value;
  storage.hour = hour.value;
  storage.minute = minute.value;

  stopInt = setInterval(() => {
    const difference = getDifference();

    years_text.textContent = difference.years;
    months_text.textContent = difference.months;
    days_text.textContent = difference.days;
    hours_text.textContent = difference.hours;
    minutes_text.textContent = Math.floor(difference.minutes);
    seconds_text.textContent = Math.floor(difference.seconds);
  }, 100);
});

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
  years_text.textContent = "";
  months_text.textContent = "";
  days_text.textContent = "";
  hours_text.textContent = "";
  minutes_text.textContent = "";
  seconds_text.textContent = "";
  clearInterval(stopInt);
});
