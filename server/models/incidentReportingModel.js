const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FoodborneIllnessReport = sequelize.define('FoodborneIllnessReport', {
    incident_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    incident_location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    affected_individuals: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    symptoms: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    suspected_food: {
        type: DataTypes.STRING,
        allowNull: true
    },
    corrective_action_taken: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    additional_comments: {
        type: DataTypes.TEXT,
        allowNull: true
    },
}, {
    timestamps: false,
    tableName: 'foodborne_illness_reports'
});

const ContaminationIncident = sequelize.define('ContaminationIncident', {
    incident_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    corrective_action: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    reported_by: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'contamination_incidents'
});

const AccidentInjuryReport = sequelize.define('AccidentInjuryReport', {
    accident_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    accident_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    injured_person_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description_of_accident: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    first_aid_provided: {
        type: DataTypes.STRING,
        allowNull: true
    },
    medical_attention_required: {
        type: DataTypes.STRING,
        allowNull: true
    },
    witness_names: {
        type: DataTypes.STRING,
        allowNull: true
    },
    additional_comments: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'accident_injury_reports'
});

module.exports = {
    FoodborneIllnessReport,
    ContaminationIncident,
    AccidentInjuryReport
};


