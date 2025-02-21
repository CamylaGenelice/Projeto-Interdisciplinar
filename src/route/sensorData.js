import express from "express" 
import sensorController from "../controller/sensorController.js"


const route = express.Router()

route.post("/sensorData", sensorController.postSensorData())
route.get("/sensorData", sensorController.getSensorData())

export default route