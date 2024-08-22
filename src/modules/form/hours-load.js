import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

export function hoursLoad({ date }) {
  openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")

    // add hour and verify if is on past

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

   return{
      hour,
      available: !isHourPast,
    }
  })
}
