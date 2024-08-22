import dayjs from "dayjs";
import "dayjs/locale/en"; // Import the locale if needed
const form = document.querySelector("form");

const selectedDate = document.getElementById("date");

// Today's date

const today = dayjs().format("YYYY-MM-DD");

// Load actual date on the date input

selectedDate.value = today;

// Define min date on the date input

selectedDate.min = today;

form.onsubmit = (event) => {
  // Prevent the default form submission
  event.preventDefault();
  console.log("enviado");
};
