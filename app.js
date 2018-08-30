require('dotenv').config();
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

const port = 3000;

const assistant = new AssistantV1({
  username: 'b4d74b7f-8e70-494d-8658-bac48fb91f82',
  password: 'yB4JXPOAvIP7',
  url: 'https://gateway.watsonplatform.net/assistant/api/',
  version: '2018-02-16',
});

app.post('/conversation/', (req, res) => {
  const { text, context = {} } = req.body;

  const params = {
    input: { text },
    workspace_id: '6fa21cad-09c7-4910-b34d-d02275796785',
    context,
  };

  assistant.message(params, (err, response) => {
    if (err) res.status(500).json(err);

    res.json(response);
  });
});

app.listen(port, () => console.log(`Running on port ${port}`));
