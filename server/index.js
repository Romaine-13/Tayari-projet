
const express = require('express');
const userRouter = require('./src/Routes/UserRoute.js');
const presenceRouter = require('./src/Routes/PresenceRoute');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.use("/", userRouter);
app.use("/", presenceRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
