const mongoose = require('mongoose');

const userAssociationSchema = new mongoose.Schema({
    _id: { 
        type: String, 
        required: true 
    },
    // Array of associated user IDs
    associatedUsers: [
        { 
            type: String, 
        }
    ],
    requests: [
        { 
            type: String, 
        }
    ] 
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('UserAssociation', userAssociationSchema);
