import DashboardBankApprovalCard from "../components/cards/dashboard/bank";
import DashboardClientsCard from "../components/cards/dashboard/clients";
import DashboardNotificationCard from "../components/cards/dashboard/notification";
import DashboardPinjamanCard from "../components/cards/dashboard/pinjaman";
import DashboardProfileCard from "../components/cards/dashboard/profile/index";
import { profileInfo } from "../dummy/profile";

// dashboard
// you would get and pass the data here to the components
// based on the data from the database
function Dashboard() {
  return (
    <div className="overflow-y-auto">
      <DashboardProfileCard
        {...profileInfo}
      />
      <div className="flex justify-between p-5 md:p-10">
        <div className="w-full space-y-10 md:pr-10">
          <div className="grid grid-cols-2 980p:flex justify-around gap-5 h-fit">
            <DashboardClientsCard name="Contact" icon="contact" count={51} />
            <DashboardClientsCard name="Loan" icon="file" count={56} />
            <DashboardClientsCard name="Product" icon="shop" count={80} />
            <DashboardClientsCard name="Bank" icon="bank" count={30} />
          </div>
          <DashboardPinjamanCard />
          <DashboardBankApprovalCard />
        </div>
        <div className="hidden 865p:block 980p:hidden 1440p:block ">
          <DashboardNotificationCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
