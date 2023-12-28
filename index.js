require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.get('/', (req, resp) => {
    resp.json({ message: 'Welcome back Samsuddin Ansari' });
});

app.listen(PORT, () => {
    console.log(`Server is live at ${PORT}`);
});
