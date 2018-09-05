const mongoose = require('../database');
const QuestionSchema = new mongoose.Schema({
    input: {
        text: {
            type: String,
            require: true,
            lowercase: true
        }
    },
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
    output:{
        nodes_visited:[],
        text: {
            type: String
        }
    }
});

const Question = mongoose.model('question', QuestionSchema);
module.exports = Question;