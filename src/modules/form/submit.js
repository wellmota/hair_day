import dayjs from "dayjs"
const form = document.querySelector("form")

const selectedDate = document.getElementById("date")

// Today's date

const today = dayjs(new Date()).format("YYYY-MM-DD")

// Load actual date on the date input

selectedDate.value = dayjs(today)

// Define min date on the date input

selectedDate.min = dayjs(new Date()).format(today)

form.onsubmit = (event) => {
  // Prevent the default form submission
  event.preventDefault()
  console.log("enviado")
}
