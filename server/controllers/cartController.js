import User from "../models/User.js"

// update User CartData : /api/cart/update

export const updateCart = async (req, res)=>{
    try {
        const { cartItems } = req.body
        await User.findByIdAndUpdate(req.user.id, {cartItems})
        res.json({ success: true, message: "Cart Updates"})

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message})
    }
}