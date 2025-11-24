const express = require('express');
const { sum } = require('./calculator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/sum', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    const result = sum(a, b);

    res.json({
        a,
        b,
        result
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
