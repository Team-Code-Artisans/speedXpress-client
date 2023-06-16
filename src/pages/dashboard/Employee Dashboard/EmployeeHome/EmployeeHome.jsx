import Announcement from "./Announsment"
import DeliverySummary from "./DeliveriesSummary"
import EarningSummary from "./EarningSummary"
import EmployeeHeader from "./EmployeeHeader"


export const EmployeeHome = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-4'>
      <EmployeeHeader />
      <Announcement />
      <DeliverySummary />
      <EarningSummary />
    </div>
  )
}
