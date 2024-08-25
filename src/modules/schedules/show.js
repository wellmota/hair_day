import dayjs from "dayjs"

// selection sections morning, afternoon and night

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
  try {
    //clear schedules list
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // render schedules

    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // add id of schedule
      item.setAttribute("data-id", schedule.id)
      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      //Add cancel icon

      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar agendamento")

      // add time and item name and icon

      item.append(time, name, cancelIcon)

      // get hour

      const hour = dayjs(schedule.when).hour()

      // render schedule on the right period condition(morning, afternoon or night)

      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour < 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    alert("Não foi possível carregar a agenda")
    console.error(error)
  }
}
