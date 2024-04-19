const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

const userSchema = mongoose.Schema({
    username: String,
    profileImage: {
        type: String,
        default: 'https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg',
    },
    socketId: String,
});

userSchema.plugin(plm);

module.exports = mongoose.model('user',userSchema);