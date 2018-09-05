const mongoose = require('../database');
const QuestionSchema = new mongoose.Schema({
    intents:[
        {
            intent: {
                type: String
            },
            confidence:{
                type: Number
            }
        }
    ],
    input: {
        text: {
            type: String,
            require: true,
            lowercase: true
        }
    }
});

const Question = mongoose.model('question', QuestionSchema);
module.exports = Question;