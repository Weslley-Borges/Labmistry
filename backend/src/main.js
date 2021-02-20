async function start(){
  const app = require("./app").app
  const tp = require("typeorm")

  try {
    await tp.createConnection().then( () => {console.log(">>>>>> Connected with MySQL sucessfuly!")})
    app.listen(3080, () => {console.log(">>>>>> Backend initalized sucessfuly!")})

  } catch (error) { console.log(">>>>>> Algo deu errado :(\n",error) }
}
start()