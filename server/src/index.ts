import express from 'express';

import cors from 'cors';

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.listen(PORT, async () => {
	console.log('Веб-сервер слушает порт', PORT);
});
