require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
    res.json({ message: 'hi', value: 0 });
});
app.listen(PORT, () => {
    console.log(`Server avviato`);
});
