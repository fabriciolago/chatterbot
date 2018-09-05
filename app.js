require('dotenv').config();
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');
const Question = require('./model/question');
const contexto = require('./config/context');
const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

const port = 3000;

const assistant = new AssistantV1({
  username: contexto.watson.username,
  password: contexto.watson.password,
  url: contexto.watson.url,
  version: contexto.watson.version
});

app.post('/conversation/', (req, res) => {
  const { text, context = {} } = req.body;

  const params = {
    input: { text },
    workspace_id: contexto.watson.workspace_id,
    context,
  };

  assistant.message(params, (err, response) => {
    if (err) res.status(500).json(err);

    Question.create(response, (error, success) => {
      if (error)
        console.log("Erro: " + error);
      //else
        //console.log("Sucesso: " + success);
    });

    res.json(response);
  });
});

app.listen(port, () => console.log(`Running on port ${port}`));
