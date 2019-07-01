const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: false }));
app.use(require("./routes/auth"));
app.use(require("./routes/posts"));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
