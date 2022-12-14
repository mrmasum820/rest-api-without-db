const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routers/users.route');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', userRouter);

//home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

//route not found error
app.use((req, res, next) => {
    res.status(404).json({ message: "route not found" })
})

//server error
app.use((err, req, res, next) => {
    res.status(500).json({ message: "server error" })
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})