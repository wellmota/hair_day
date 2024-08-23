import { schedulesDay } from "../schedules/load"
// Select data input

const selectedDate = document.getElementById("date")

// Load hour list when input changes

selectedDate.onchange = () => schedulesDay()
