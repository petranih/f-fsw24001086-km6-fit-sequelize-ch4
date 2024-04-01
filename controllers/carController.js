const { Cars } = require("../models");

const createCar = async (req,res) => {
    // desctructing Object
    const {name, sewa} = req.body

    try {
        const newCar = await Cars.create({
            name,
            sewa
        })

        res.status(200).json({
            status: "success",
            data : {
                newCar
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}


    module.exports =  {
        createCar,
    }