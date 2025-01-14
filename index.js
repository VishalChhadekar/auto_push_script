const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.get('/api', (req, res) => {
    res.json({ message: 'This is the API endpoint' });
});
app.get('/tickets', (req, res) => {
    res.json({ message: 'This is the tickets endpoint' });
});