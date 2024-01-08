const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")


const UserManagement = sequelize.define('UserManagement', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('admin', 'manager', 'staff'),
        allowNull: false,
        defaultValue: 'admin'
    }
}, {
    timestamps: false,
    tableName: 'user_management'
});

module.exports = UserManagement;
