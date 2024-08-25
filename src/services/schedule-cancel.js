import { apiConfig } from "./api-config.js"

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    alert("Horário cancelado com sucesso")
  } catch (error) {
    console.error(error)
    alert("Erro ao cancelar horário")
  }
}
