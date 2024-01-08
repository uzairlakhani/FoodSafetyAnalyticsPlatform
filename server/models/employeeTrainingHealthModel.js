const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EmployeeHealthHygieneRecord = sequelize.define('EmployeeHealthHygieneRecord', {
    employee_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    health_status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hygiene_training_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    next_scheduled_training_date: {
        type: DataTypes.DATE
    },
    comments: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false,
    tableName: 'employee_health_hygiene_records'
});

const FoodSafetyTrainingLog = sequelize.define('FoodSafetyTrainingLog', {
    employee_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    training_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    training_topic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    trainer_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comments: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false,
    tableName: 'food_safety_training_logs'
});

module.exports = {
    EmployeeHealthHygieneRecord,
    FoodSafetyTrainingLog
};
