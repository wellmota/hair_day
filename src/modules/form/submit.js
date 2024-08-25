import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"

import "dayjs/locale/en" // Import the locale if needed
const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Today's date

const today = dayjs().format("YYYY-MM-DD")

// Load actual date on the date input

selectedDate.value = today

// Define min date on the date input

selectedDate.min = today

form.onsubmit = async (event) => {
  // Prevent the default form submission
  event.preventDefault()

  try {
    // return client name
    const name = clientName.value.trim()

    if (!name) {
      return alert("Por favor, preencha o campo nome")
    }

    // get hour
    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Por favor, selecione um horário")
    }

    // get only hour
    const [hour] = hourSelected.innerText.split(":")

    // generate ID

    const id = new Date().getTime()

    // add hour at date
    const when = dayjs(selectedDate.value).add(hour, "hour")

    await scheduleNew({ id, name, when })
  } catch (error) {
    alert("Não foi possível realizar o agendamento")
    console.error(error)
  }
}
