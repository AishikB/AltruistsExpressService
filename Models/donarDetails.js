const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonarDetailsSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Pg name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Pg name is required']
    },
    gender : {
        type: String,
        required: true
    },
    address: {
        houseNumber: {
            type: Number,
            required: [true, "House number is required"]
        },
        streetName : {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: [true, "Pin code is required"]
        }
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true,
        unique: true
    },
    emailId: {
        type:String,
        required:[true, "Email Id is required"],
        unique: true
    },
    occupation: {
        type: String,
        required: [true, "Occupation is required"]
    }
});

const donarDetails = mongoose.model('donarDetails', DonarDetailsSchema);
module.exports = donarDetails;
