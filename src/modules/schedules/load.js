import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "../schedules/show.js"

// select date input
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  // get date input
  const date = selectedDate.value

  // fetch API Schedules

  const dailySchedules = await scheduleFetchByDay({ date })

  // render schedules

  schedulesShow({ dailySchedules })

  // render available schedules
  hoursLoad({ date, dailySchedules })
}
