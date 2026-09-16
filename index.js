import express from "express";
import sequelize from "./src/config/database.js";

import "./models/Producto.js";
// aquí importamos los demás modelos

const app = express();

app.use(express.json());

const PORT = 3000;

async function iniciarServidor() {
    try {
        await sequelize.authenticate();

        console.log("✅ Conexión con MySQL establecida");

        await sequelize.sync();

        console.log("✅ Tablas creadas correctamente");

        app.listen(PORT, () => {
            console.log(`🚀 Servidor funcionando en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Error al conectar con la base de datos:");
        console.error(error);
    }
}

iniciarServidor();