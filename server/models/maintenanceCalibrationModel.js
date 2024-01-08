const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CalibrationRecord = sequelize.define('CalibrationRecord', {
    equipment_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calibration_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    technician: {
        type: DataTypes.STRING,
        allowNull: true
    },
    calibration_results: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'calibration_records'
});


const EquipmentMaintenanceRepairLog = sequelize.define('EquipmentMaintenanceRepairLog', {
    equipment_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    maintenance_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    repair_details: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    performed_by: {
        type: DataTypes.STRING,
        allowNull: true
    },
    next_scheduled_maintenance: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'equipment_maintenance_repair_logs'
});

module.exports = { CalibrationRecord, EquipmentMaintenanceRepairLog };