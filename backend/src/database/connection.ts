import { createConnection } from "typeorm"

createConnection().then( () => {console.log(">>>>>> Sucessfuly connected with MySQL database!")} )