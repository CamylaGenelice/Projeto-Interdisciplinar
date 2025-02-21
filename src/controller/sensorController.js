import sensorService from "../services/sensorServices.js"





const postSensorData = async (req,res) => {
    try {
        const data = req.body

        const saveData = await sensorService.saveSensorData(data)

       return res.status(201).send({msg: "Dados dos sensores recebidos e armazenados com sucesso! ", data: saveData})

    } catch (error) {
        console.error("Error ao processar dados dos sensores: ", error)
        return res.status(500).send({error: error.message || "Erro interno do servidor "})
    } // Caso de um erro no terminal e não mostre essa mensagem é por que não esta em json e sim em send**
}

const getSensorData = async (req,res) => {
    try {
        const sensorData = await sensorService.getAllSensorData()

        return res.status(200).send(sensorData)
    } 
    catch (error) {
       console.error("Erro ao buscar dados dos sensores:", error); 
       return res.status(500).send({error: error.message || "Error interno do servidor."})
    }
}

export default {postSensorData, getSensorData}