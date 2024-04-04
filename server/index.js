const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./src/Routes/UserRoute.js');
const presenceRouter = require('./src/Routes/PresenceRoute');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;




app.use(bodyParser.json());

app.use(cors());

// Routes
app.use("/", userRouter);
app.use("/", presenceRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
