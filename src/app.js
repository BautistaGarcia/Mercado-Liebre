const path = require("path");


const express = require("express");

const app = express();

const publicPath = path.resolve(__dirname, "../public");

app.use(express.static(publicPath));

// app.listen(3000, () =>            ESTE COMANDO ES PARA GUARDAR EN LA VARIABLE PORT EL LOCALHOST O SERVIDOR   LOCAL QUE MODIFIQUE EN LA LINEA DE ABAJO PARA QUE SE CONECTE AL RENDER, EL SERVIDOR REMOTO GRATUITO
//     console.log("Tamo en vivo mi brothel: http://localhost:3000/")
// );

const port =process.env.PORT || 3000;
app.listen(port, () => 
    console.log("Tamo en vivo mi brothel: http://localhost:3000/ $(port)")
);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
});


