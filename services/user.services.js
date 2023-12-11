//const jwtwebtoken = require("jwt")
const User = require("../model/user.model")
const Product = require('../model/product.model')
const SECRETKEY = process.env.SECRETKEY || "sshdjsskks"
const jwt = require("jsonwebtoken")

const UUID = require("uuid");
// const token = jwt.sign(params, SECRETKEY); 
exports.signup = async (params) => {
    try {
        const { name, email, password } = params;
        params._id = UUID.v4(), params
        // console.log("params", params)
        const userData = await User.findOne({ $or: [{ name }, { email }] })
        console.log("userData", userData)
        if (userData) {
            throw new Error("user already present")
        }
        const data = await User.create(params);
        console.log("data", data);
        return true;
    }
    catch (err) {
        throw new Error("user signup failed")
    }
}

exports.login = async (params) => {
    try {
        const { email, password } = params;
        const payload = {
            email, password
        }
        const userData = await User.findOne(payload)
        console.log("userData", userData)
        if (!userData) {
            throw new Error("user not found")
        }
        console.log("=========111===")
        const options = { expiresIn: '1h' }
        return jwt.sign(payload, SECRETKEY, options);
    }
    catch (err) {
        throw new Error("user signup failed")
    }
}

exports.assignProduct = async (params) => {

    try {
        const { empId, productId, quanity } = params;
        const productData = await Product.findOne({ _id: productId })
        if (productData && productData.quanity && productData.quanity > 0) {
            const proObj = {
                productId,
                quanity
            }
            userData = await User.findOne({ _id: empId });

            if (userData) {
                const assignProduct = 
                // userData.assignProduct && userData.assignProduct.length ?
                //     [...userData.assignProduct, proObj] : 
                    [proObj]

               const updata= await User.updateOne({ _id: empId }, { $push: {assignProduct:assignProduct} })
               await Product.updateOne({ _id: productId }, { $set: {quanity: productData.quanity- quanity}})
               console.log("updata",updata)
                return true;
            }else{
                throw new Error("user not found")
  
            }
        } else {
            throw new Error("product not found")
        }
    } catch (err) {
        throw new Error("unabile to assign product")

    }

}

exports.getAssignProduct = async (empId)=>
{
    try {
        const userData = await User.findOne({ _id: empId });
        if (!userData) {
            throw new Error("user not found")
        }
        return userData;

    } catch (err) {
        throw new Error("unabile to assign product")

    }
}