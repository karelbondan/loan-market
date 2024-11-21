import DashboardBankApprovalCard from "../components/cards/dashboard/bank";
import DashboardClientsCard from "../components/cards/dashboard/clients";
import DashboardNotificationCard from "../components/cards/dashboard/notification";
import DashboardPinjamanCard from "../components/cards/dashboard/pinjaman";
import DashboardProfileCard from "../components/cards/dashboard/profile/index";

// dashboard
// you would get and pass the data here to the components
// based on the data from the database
function Dashboard() {
  return (
    <div className="overflow-y-auto">
      <DashboardProfileCard
        profile_photo=""
        name="Yohannes Affandy (Jojo)"
        office="Loan Market Office Dev"
        id="LM9990001"
        email="it@loanmarket.co.id"
        phone={6281234567890}
      />
      <div className="flex justify-between p-10">
        <div className="w-full space-y-10 pr-10">
          <div className="flex justify-around gap-10 h-fit">
            <DashboardClientsCard name="Contact" icon="contact" count={51} />
            <DashboardClientsCard name="Loan" icon="file" count={56} />
            <DashboardClientsCard name="Product" icon="shop" count={80} />
            <DashboardClientsCard name="Bank" icon="bank" count={30} />
          </div>
          <DashboardPinjamanCard />
          <DashboardBankApprovalCard />
        </div>
        <DashboardNotificationCard />
      </div>
    </div>
  );
}

export default Dashboard;
