const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const HealthAndSafetyInspection = sequelize.define('HealthAndSafetyInspection', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    inspection_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    compliance_status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    safety_concerns: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    corrective_actions: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    follow_up_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    additional_comments: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'health_and_safety_inspections'
});

const SupplierQualityAssessmentForm = sequelize.define('SupplierQualityAssessmentForm', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    assessment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    supplier_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_evaluated: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quality_rating: {
        type: DataTypes.STRING,
        allowNull: false
    },
    delivery_timeliness: {
        type: DataTypes.STRING,
        allowNull: false
    },
    improvement_areas: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    overall_satisfaction: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reviewer_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reviewer_comments: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'supplier_quality_assessment_forms'
});

module.exports = { HealthAndSafetyInspection, SupplierQualityAssessmentForm };

