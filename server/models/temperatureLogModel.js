const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const RefrigerationTemperatureLog = sequelize.define('RefrigerationTemperatureLog', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
item: {
    type: DataTypes.STRING,
    allowNull: false
},
temperature: {
    type: DataTypes.INTEGER,
    allowNull: false
},
log_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
},
log_time: {
    type: DataTypes.TIME,
    allowNull: false
},
comments: {
    type: DataTypes.STRING,
    allowNull: true
},
}, {
    timestamps: false,
    tableName: 'refrigeration_temperature_logs'
});


const FreezerTemperatureLog = sequelize.define('FreezerTemperatureLog', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
item: {
    type: DataTypes.STRING,
    allowNull: false
},
temperature: {
    type: DataTypes.INTEGER,
    allowNull: false
},
log_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
},
log_time: {
    type: DataTypes.TIME,
    allowNull: false
},
comments: {
    type: DataTypes.STRING,
    allowNull: true
},
}, {
    timestamps: false,
    tableName: 'freezer_temperature_logs'
});


const CookingTemperatureLog = sequelize.define('CookingTemperatureLog', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
item: {
    type: DataTypes.STRING,
    allowNull: false
},
temperature: {
    type: DataTypes.INTEGER,
    allowNull: false
},
log_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
},
log_time: {
    type: DataTypes.TIME,
    allowNull: false
},
comments: {
    type: DataTypes.STRING,
    allowNull: true
},
}, {
    timestamps: false,
    tableName: 'cooking_temperature_logs'
});


const FoodHoldingTemperatureLog = sequelize.define('FoodHoldingTemperatureLog', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
item: {
    type: DataTypes.STRING,
    allowNull: false
},
temperature: {
    type: DataTypes.INTEGER,
    allowNull: false
},
log_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
},
log_time: {
    type: DataTypes.TIME,
    allowNull: false
},
comments: {
    type: DataTypes.STRING,
    allowNull: true
},
}, {
    timestamps: false,
    tableName: 'food_holding_temperature_logs'
});



module.exports = {
    RefrigerationTemperatureLog,
    FreezerTemperatureLog,
    CookingTemperatureLog,
    FoodHoldingTemperatureLog
};
