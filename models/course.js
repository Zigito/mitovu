const Joi = require('joi');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    category: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    }
});

/* //adds method generateAuthToken to user object
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
    return token;
}
 */

const User = mongoose.model('Customer', courseSchema);

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        category: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;