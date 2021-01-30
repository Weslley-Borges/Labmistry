import { app } from "./app"
import { createConnection } from "typeorm"

const start = async () => {
  try {
    await createConnection().then( () => {
      console.log(">>>>>> Connected with MySQL sucessfuly!")
    })
    app.listen(3080, () => {
      console.log(">>>>>> Backend initalized sucessfuly!")
    })

  } catch (error) {
    console.log(">>>>>> Algo deu errado :(\n",error)
  }
}

start()