import '../App.css'
import PrimaryFilter from '../components/Filters/PrimaryFilter'
import '../assets/css/home.css'
import LiveFleetTracking from '../components/LiveFleetTracking/LiveFleetTracking'
import { fleetData, violations } from '../Data/LocalData'
import ViolationCards from '../components/ViolationListing/ViolationCards'
import ViolationTracker from '../components/ViolationTracker/ViolationTracker'
import ViolationTrackerGraph from '../components/ViolationTrackerGraph/ViolationTrackerGraph'
import FitnessAssessment from '../components/FitnessAssessment/FitnessAssessment '
import DriverHabits from '../components/DriverHabits/DriverHabits'
import HealthAssessmentSummary from '../components/HealthAssessmentSummary/HealthAssessmentSummary'
import HealthAssessmentTable from '../components/HealthAssessmentTable/HealthAssessmentTable'
import AgeGroupSegregation from '../components/AgeGroupSegregation/AgeGroupSegregation'
import DriverHealthTable from '../components/AgeGroupSegregation/DriverHealthTable'
import DriverHealthTable2 from '../components/AgeGroupSegregation/DriverHealthTable2'
import DriveRatingQuickAction from '../components/DriveRatingQuickActions/DriveRatingQuickAction'
import Overview from '../components/Overview/Overview'

// import Page2 from '../pages/Page2'



const MainContent = () => {
  return (
    <>
      <main className="app-content px-2pb-5 " >
        <PrimaryFilter />
        <Overview />
        <DriveRatingQuickAction/>
        <LiveFleetTracking data={fleetData  } />
             {/* <Page2/> */}
        <ViolationCards violations={violations} />
        <ViolationTracker/>
        <ViolationTrackerGraph/>
        <FitnessAssessment/>
        <DriverHabits/> 
        <HealthAssessmentSummary/> 
        <HealthAssessmentTable/>
        <AgeGroupSegregation/>
        <DriverHealthTable/>
        <DriverHealthTable2/>
 
      </main>
    </>
  )
}

export default MainContent
