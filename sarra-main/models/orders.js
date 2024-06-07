const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    
    userId: { type: mongoose.Types.ObjectId,ref:'User'},
    orderDetails:[{
        qty:Number,
        productId:{
            type:mongoose.Types.ObjectId,
            ref:'Prod'
        },
        payed:{
            type:Boolean,
            default:false
        }
    }]
  },
  { timestamps: true }
);

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;