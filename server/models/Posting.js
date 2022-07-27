const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postingSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    cost: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
      applications: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
    ],
      chosenWorker: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
  }
);

const Posting = model('Posting', postingSchema);

module.exports = Posting;