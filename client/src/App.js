import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePageComponents/HomePage';
import TemperatureMonitoringLogsPage from './components/HomePageComponents/TemperatureHomePage';
import UserManagementPage from './components/UserManagementComponents/UserManagementForm';
import InventoryManagementPage from './components/HomePageComponents/InventoryManagementHomePage';
import MaintenanceCalibrationLogsPage from './components/HomePageComponents/MaintenanceCalibrationHomePage';
import SafetyQualityInspectionFormsPage from './components/HomePageComponents/SafetyQualityHomePage';
import EmployeeTrainingHealthRecordsPage from './components/HomePageComponents/TrainingHealthHomePage';
import IncidentComplianceReportingPage from './components/HomePageComponents/IncidentReportingHomePage';
import RefrigerationTemperatureLogsForm from './components/TemperatureFormComponents/RefrigerationTemperatureForm';
import FreezerTemperatureLogsForm from './components/TemperatureFormComponents/FreezerTemperatureForm';
import CookingTemperatureLogsForm from './components/TemperatureFormComponents/CookingTemperatureForm';
import FoodHoldingTemperatureLogsForm from './components/TemperatureFormComponents/FoodHoldingTemperatureForm';
import HealthSafetyInspectionForm from './components/SafetyQualityFormComponents/HealthSafetyInspectionForm';
import SupplierQualityAssessmentForm from './components/SafetyQualityFormComponents/SupplierQualityAssessmentForm';
import FoodborneIllnessReportForm from './components/IncidentReportingFormComponents/FoodborneIllnessReportForm';
import AccidentInjuryReportForm from './components/IncidentReportingFormComponents/AccidentInjuryReportForm';
import ContaminationIncidentForm from './components/IncidentReportingFormComponents/ContaminationIncidentForm';
import FoodInventoryEntryForm from './components/InventoryManagementFormComponents/FoodInventoryEntryForm';
import StockExpirationTrackingForm from './components/InventoryManagementFormComponents/StockExpirationTrackingForm';
import FoodSafetyTrainingLogForm from './components/TrainingHealthFormComponents/FoodSafetyTrainingLogForm';
import EmployeeHealthHygieneRecordForm from './components/TrainingHealthFormComponents/EmployeeHealthHygieneRecordForm';
import EquipmentMaintenanceRepairLogsForm from './components/MaintenanceCalibrationComponents/EquipmentMaintenanceRepairLogsForm';
import CalibrationRecordsForm from './components/MaintenanceCalibrationComponents/CalibrationRecordsForm';




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/temperature-monitoring-logs" element={<TemperatureMonitoringLogsPage />} >
                    <Route path="refrigeration-temperature-logs" element={<RefrigerationTemperatureLogsForm />} />
                    <Route path="freezer-temperature-logs" element={<FreezerTemperatureLogsForm />} />
                    <Route path="cooking-temperature-logs" element={<CookingTemperatureLogsForm />} />
                    <Route path="food-holding-temperature-logs" element={<FoodHoldingTemperatureLogsForm />} />
                </Route>

                <Route path="/user-management" element={<UserManagementPage />} />
                <Route path="/inventory-management" element={<InventoryManagementPage />} >
                    <Route path="food-inventory-entry-forms" element={<FoodInventoryEntryForm />} />
                    <Route path="stock-expiration-tracking-forms" element={<StockExpirationTrackingForm />} />
                </Route>

                <Route path="/maintenance-calibration-logs" element={<MaintenanceCalibrationLogsPage />} >
                    <Route path="equipment-maintenance-repair-logs" element={<EquipmentMaintenanceRepairLogsForm />} />
                    <Route path="calibration-records" element={<CalibrationRecordsForm />} />
                </Route>

                <Route path="/safety-quality-inspection-forms" element={<SafetyQualityInspectionFormsPage />} >
                    <Route path="health-safety-inspection-forms" element={<HealthSafetyInspectionForm />} />
                    <Route path="supplier-quality-assessment-forms" element={<SupplierQualityAssessmentForm />} />
                </Route>


                <Route path="/employee-training-health-records" element={<EmployeeTrainingHealthRecordsPage />} >
                    <Route path="food-safety-training-logs" element={<FoodSafetyTrainingLogForm />} />
                    <Route path="employee-health-hygiene-records" element={<EmployeeHealthHygieneRecordForm />} />
                </Route>
                <Route path="/incident-reporting" element={<IncidentComplianceReportingPage />} >
                    <Route path="foodborne-illness-report-forms" element={<FoodborneIllnessReportForm />} />
                    <Route path="accident-injury-report-forms" element={<AccidentInjuryReportForm />} />
                    <Route path="contamination-incident-forms" element={<ContaminationIncidentForm />} />
                
                </Route>

                



            </Routes>
        </Router>
    );
};

export default App;


