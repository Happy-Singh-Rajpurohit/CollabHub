const { Schema } = require('mongoose');

const TeamFormSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    members: [{
        name: {
            type: String,
            required: true
        }
    }],
    eventName: {
        type: String,
        required: true
    },
    mexMembers: {
        type: Number,
        required: true
    },
    currentMembers: {
        type: Number,
        default: 1
    },
    organization: {
        type: String,
        required: true
    },
    contactDetails: {
        type: String
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = {TeamFormSchema};