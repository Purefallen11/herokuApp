const dotenv = require('dotenv').config();

const express = require('express');
const app = express()
const port = process.env.PORT || 9000

app.use(cores());
app.use(express.json())

app.use('/api/*', (req, res) => {
    res.json(
        {
"people": [
    {
    "craft": "ISS",
    "name": "Mark Vande Hei"
    },
    {
    "craft": "ISS",
    "name": "Pyotr Dubrov"
    },
    {
    "craft": "ISS",
    "name": "Anton Shkaplerov"
    },
    {
    "craft": "Shenzhou 13",
    "name": "Zhai Zhigang"
    },
    {
    "craft": "Shenzhou 13",
    "name": "Wang Yaping"
    },
    {
    "craft": "Shenzhou 13",
    "name": "Ye Guangfu"
    },
    {
    "craft": "ISS",
    "name": "Raja Chari"
    },
    {
    "craft": "ISS",
    "name": "Tom Marshburn"
    },
    {
    "craft": "ISS",
    "name": "Kayla Barron"
    },
    {
    "craft": "ISS",
    "name": "Matthias Maurer"
    }
    ],
"message": "success",
"number": 10
        }
    )
})

app.listen(port, () => {
    console.log(`server running on ${port}`);
})