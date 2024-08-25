import dayjs from "dayjs"
import { apiConfig } from "./api-config"
export async function scheduleFetchByDay({ date }) {
  try {
    //request schedules
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
    const data = await response.json()

    //filter schedules by date
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    )
    return dailySchedules
  } catch (error) {
    console.error(error)
    alert("Não foi possível carregar a agenda")
  }
}
