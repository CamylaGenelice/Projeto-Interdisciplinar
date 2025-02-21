import express from "express"
import productInfoController from "../controller/productInfoController.js"

const route = express.Router()

route.post("/product-info",productInfoController.postProductInfo)

route.get("/product/:productId",productInfoController.getProductInfo)

export default route