const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'yourUsername',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DATABASE || 'yourDatabase',
  password: process.env.DB_PASSWORD || 'yourPassword',
  port: process.env.DB_PORT || 5432
});

const setupDatabase = async () => {
  const refrigerationTemperatureLogTable = `
    CREATE TABLE IF NOT EXISTS refrigeration_temperature_logs (
      id SERIAL PRIMARY KEY,
      item VARCHAR(255) NOT NULL,
      temperature INTEGER NOT NULL,
      log_date DATE NOT NULL,
      log_time TIME NOT NULL,
      comments VARCHAR(255)
    );
  `;
  const freezerTemperatureLogTable = `
    CREATE TABLE IF NOT EXISTS freezer_temperature_logs (
      id SERIAL PRIMARY KEY,
      item VARCHAR(255) NOT NULL,
      temperature INTEGER NOT NULL,
      log_date DATE NOT NULL,
      log_time TIME NOT NULL,
      comments VARCHAR(255)
    );
  `;
  const foodHoldingTemperatureLogTable = `
    CREATE TABLE IF NOT EXISTS food_holding_temperature_logs (
      id SERIAL PRIMARY KEY,
      item VARCHAR(255) NOT NULL,
      temperature INTEGER NOT NULL,
      log_date DATE NOT NULL,
      log_time TIME NOT NULL,
      comments VARCHAR(255)
    );
  `;

  const coolingTemperatureLogTable = `
    CREATE TABLE IF NOT EXISTS cooking_temperature_logs (
      id SERIAL PRIMARY KEY,
      item VARCHAR(255) NOT NULL,
      temperature INTEGER NOT NULL,
      log_date DATE NOT NULL,
      log_time TIME NOT NULL,
      comments VARCHAR(255)
    );
  `;

  const healthAndSafetyInspectionTable = `
    CREATE TABLE IF NOT EXISTS health_and_safety_inspections (
      id SERIAL PRIMARY KEY,
      inspection_date DATE NOT NULL,
      location VARCHAR(255) NOT NULL,
      compliance_status VARCHAR(255) NOT NULL,
      safety_concerns TEXT,
      corrective_actions TEXT,
      follow_up_date DATE,
      additional_comments TEXT
    );
  `;

  const supplierQualityAssessmentFormTable = `
    CREATE TABLE IF NOT EXISTS supplier_quality_assessment_forms (
      id SERIAL PRIMARY KEY,
      assessment_date DATE NOT NULL,
      supplier_name VARCHAR(255) NOT NULL,
      product_evaluated VARCHAR(255) NOT NULL,
      quality_rating VARCHAR(255) NOT NULL,
      delivery_timeliness VARCHAR(255) NOT NULL,
      improvement_areas TEXT,
      overall_satisfaction INTEGER NOT NULL,
      reviewer_name VARCHAR(255) NOT NULL,
      reviewer_comments TEXT
    );
  `;

  const foodborneIllnessReportTable = `
    CREATE TABLE IF NOT EXISTS foodborne_illness_reports (
      id SERIAL PRIMARY KEY,
      incident_date DATE NOT NULL,
      incident_location VARCHAR(255) NOT NULL,
      affected_individuals INTEGER,
      symptoms TEXT,
      suspected_food VARCHAR(255),
      corrective_action_taken TEXT,
      additional_comments TEXT
    );
  `;

  const contaminationIncidentTable = `
    CREATE TABLE IF NOT EXISTS contamination_incidents (
      id SERIAL PRIMARY KEY,
      incident_date DATE NOT NULL,
      location VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      corrective_action TEXT,
      reported_by VARCHAR(255) NOT NULL
    );
  `;

  const accidentInjuryReportTable = `
    CREATE TABLE IF NOT EXISTS accident_injury_reports (
      id SERIAL PRIMARY KEY,
      accident_date DATE NOT NULL,
      accident_time TIME NOT NULL,
      location VARCHAR(255) NOT NULL,
      injured_person_name VARCHAR(255),
      description_of_accident TEXT,
      first_aid_provided VARCHAR(255),
      medical_attention_required VARCHAR(255),
      witness_names VARCHAR(255),
      additional_comments TEXT
    );
  `;

  const inventoryItemsTable = `
  CREATE TABLE IF NOT EXISTS inventory_items (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    expiration_date DATE NOT NULL
  );
`;

const stockExpirationItemsTable = `
  CREATE TABLE IF NOT EXISTS stock_expiration_items (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    expiration_date DATE NOT NULL
  );
`;

const employeeHealthHygieneRecordTable = `
CREATE TABLE IF NOT EXISTS employee_health_hygiene_records (
  id SERIAL PRIMARY KEY,
  employee_name VARCHAR(255) NOT NULL,
  health_status VARCHAR(255) NOT NULL,
  hygiene_training_date DATE NOT NULL,
  next_scheduled_training_date DATE,
  comments TEXT
);
`;

const foodSafetyTrainingLogTable = `
CREATE TABLE IF NOT EXISTS food_safety_training_logs (
  id SERIAL PRIMARY KEY,
  employee_name VARCHAR(255) NOT NULL,
  training_date DATE NOT NULL,
  training_topic VARCHAR(255) NOT NULL,
  trainer_name VARCHAR(255) NOT NULL,
  comments TEXT
);
`;

const calibrationRecordsTable = `
CREATE TABLE IF NOT EXISTS calibration_records (
  id SERIAL PRIMARY KEY,
  equipment_name VARCHAR(255) NOT NULL,
  calibration_date DATE NOT NULL,
  technician VARCHAR(255),
  calibration_results TEXT,
  comments TEXT
);
`;

const equipmentMaintenanceRepairLogsTable = `
CREATE TABLE IF NOT EXISTS equipment_maintenance_repair_logs (
  id SERIAL PRIMARY KEY,
  equipment_name VARCHAR(255) NOT NULL,
  maintenance_date DATE NOT NULL,
  repair_details TEXT,
  performed_by VARCHAR(255),
  next_scheduled_maintenance DATE
);
`;

const userManagementTable = `
CREATE TABLE IF NOT EXISTS user_management (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL DEFAULT 'admin'
);
`;




  try {
    await pool.query(refrigerationTemperatureLogTable);
    await pool.query(freezerTemperatureLogTable);
    await pool.query(foodHoldingTemperatureLogTable);
    await pool.query(coolingTemperatureLogTable);
    await pool.query(healthAndSafetyInspectionTable);
    await pool.query(supplierQualityAssessmentFormTable);
    await pool.query(foodborneIllnessReportTable);
    await pool.query(contaminationIncidentTable);
    await pool.query(accidentInjuryReportTable);
    await pool.query(inventoryItemsTable);
    await pool.query(stockExpirationItemsTable);
    await pool.query(employeeHealthHygieneRecordTable);
    await pool.query(foodSafetyTrainingLogTable);
    await pool.query(calibrationRecordsTable);
    await pool.query(equipmentMaintenanceRepairLogsTable);
    await pool.query(userManagementTable);

    console.log("Database setup complete.");
  } catch (err) {
    console.error("Error setting up the database: ", err);
  } finally {
    await pool.end();
  }
}

setupDatabase();

module.exports = pool;
