import { apiConfig } from "./api-config"

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    })

    alert("Agendamento realizado com sucesso")
  } catch (error) {
    console.error(error)
    alert("Não foi possível realizar o agendamento")
  }
}
