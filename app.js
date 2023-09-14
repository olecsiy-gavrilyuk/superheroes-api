const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Підключення до бази даних MongoDB
const uri = "mongodb+srv://inferno:QjHR9Y7e1Mo9gzP3@cluster0.l9jjbcu.mongodb.net/";

// Підключення до бази даних
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log("Connected to MongoDB Atlas");

    })
    .catch(err => {
    console.error("Error connecting to MongoDB Atlas:", err);
    });


app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Використовувані маршрути
app.use('/api', require('./routes/routesSuperHero'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
