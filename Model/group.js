const mongoose = require("mongoose")

const groupSchema = mongoose.Schema({

    name:
    {
        type: String,
        require: true,
        unique: true
    }
    ,
    profileImage: {
        type: String,
        default: 'https://png.pngtree.com/png-clipart/20190620/original/pngtree-vector-leader-of-group-icon-png-image_4022100.jpg'
    },
    users:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            }

        ]



})

module.exports = mongoose.model("group", groupSchema)