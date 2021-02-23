async function start(){
  const app = require("./app").app
  const tp = require("typeorm")

  await tp.createConnection().then( () => {console.log(">>>>>> Connected with MySQL sucessfuly!")})
  app.listen(3080, () => {console.log(">>>>>> Backend initalized sucessfuly!")})
}
start()