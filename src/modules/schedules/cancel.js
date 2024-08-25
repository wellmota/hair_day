import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Generate click event to all lists

periods.forEach((period) => {
  //capture event clicks on lists

  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      //get the parent element of the clicked icon
      const item = event.target.closest("li")

      //get the id of the clicked item
      const { id } = item.dataset
      //confirm the cancellation of the schedule

      if (id) {
        //confirm the cancellation of the schedule
        const isConfirm = confirm("Deseja cancelar este horário?")

        //if the user confirms the cancellation, the schedule is canceled
        if (isConfirm) {
          //call the scheduleCancel function passing the id of the schedule to be canceled
          await scheduleCancel({ id })

          //reload the schedules
          schedulesDay()
        }
      }
    }
  })
})
