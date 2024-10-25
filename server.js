const express = require('express');

const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello World2', value: 0 });
});
app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
