const userService = require("../services/user.services")


exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password){
        res.status(500).send({ staus: 404, message: "pass proper data", })   
    }
    try {
        console.log("1111")
        const data = await userService.signup({ name, email, password })
        res.status(500).send({ staus: 200, message: "ok", data })

    } catch (err) {
        res.status(500).send({ staus: 500, message: "failed", message: err })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if( !email || !password){
        res.status(500).send({ staus: 404, message: "pass proper data", })   
    }
    try {
        const data = await userService.login({  email, password })
        res.status(500).send({ staus: 200, message: "ok", data })

    } catch (err) {
        res.status(500).send({ staus: 500, message: "failed", message: err })
    }
}

exports.assignProduct=async (req, res) => {
    console.log("=========")
    const { empId, productId ,quanity} = req.body;
    if(!empId || !productId || !quanity){
        res.status(500).send({ staus: 404, message: "pass proper data", })   
    }
    try {
        const data = await userService.assignProduct({   empId, productId,quanity })
        res.status(500).send({ staus: 200, message: "ok", data })

    } catch (err) {
        res.status(500).send({ staus: 500, message: "failed", message: err })
    }
}

exports.getAssignProduct=async (req, res) => {
    console.log("req.body",req.body)
    if(!empId || !productId || !quanity){
        res.status(500).send({ staus: 404, message: "pass proper data", })   
    }
    const empId = req.body.empId;
    console.log("empId",empId)
    try {
        const data = await userService.getAssignProduct(empId)
        res.status(500).send({ staus: 200, message: "ok", data })

    } catch (err) {
        res.status(500).send({ staus: 500, message: "failed", message: err })
    }
}