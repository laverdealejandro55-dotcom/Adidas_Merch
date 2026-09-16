import { DataType, DataTypes, INTEGER, Sequelize } from "sequelize"
import conn from "../config/database.js"

const Categoria = conn.define("Categoria", {
    id_categoria: {
        type: DataTypes, INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    descripcion: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: "categorias",
    timestamps: false
});

export default Categoria;