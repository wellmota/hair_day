import dayjs from "dayjs"
import { hoursClick } from "./hour.click.js"
import { openingHours } from "../../utils/opening-hours.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")

    // add hour and verify if is on past

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    return {
      hour,
      available: !isHourPast,
    }
  })

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.textContent = hour

    if (hour === "9:00") {
      hourHeaderAdd("Manhã")
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde")
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })
  // adiciona o evento de click nos horarios
  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title
  hours.append(header)
}
