import SidebarButtons from "./buttons";

function Sidebar() {
  return (
    <div className="flex flex-col min-w-[230px] h-full border-r border-black/20 bg-white">
      <img
        src="/assets/loan-market-logo.svg"
        className="w-full h-[110px] -translate-y-3"
      />
      <div className="w-full px-2 pb-5 overflow-y-auto">
        <SidebarButtons icon="home" name="Dashboard" path="/" />
        <SidebarButtons icon="contact" name="Contact" path="/contact" />
        <SidebarButtons icon="file" name="Loan" path="/loan" />
        <SidebarButtons icon="shop" name="Product" path="/product">
          <SidebarButtons
            icon="empty"
            name="Bank Product"
            path="/product/bank_product"
          />
          <SidebarButtons icon="empty" name="Product" path="/product/product" />
          <SidebarButtons
            icon="empty"
            name="Category Product"
            path="/product/category_product"
          />
        </SidebarButtons>
        <SidebarButtons icon="bank" name="Bank" path="/bank" />
        <SidebarButtons
          icon="speedo"
          name="Credit Scoring"
          path="/credit_scoring"
        />
        <SidebarButtons icon="question" name="FAQ's" path="/faq" />
        <SidebarButtons icon="stack" name="Pipeline" path="/pipeline" />
        <SidebarButtons
          icon="stack"
          name="Pipeline Developer"
          path="/pipeline_developer"
        />
        <SidebarButtons
          icon="marketing"
          name="Marketing Tools"
          path="/marketing_tools"
        />
        <SidebarButtons icon="whatsapp" name="Whatsapp" path="/whatsapp" />
      </div>
    </div>
  );
}

export default Sidebar;
