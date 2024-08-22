import { hoursLoad } from "../form/hours-load.js"

// select date input
const selectedDate = document.getElementById("date")

export function schedulesDay() {
  // get date input
  const date = selectedDate.value

  // available schedules
  hoursLoad({ date })
}
