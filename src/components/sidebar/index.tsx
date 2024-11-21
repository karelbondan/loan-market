import { useState } from "react";
import SidebarButtons from "./buttons";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [currentPath, setcurrentPath] = useState(location.pathname);

  return (
    <div className="flex flex-col min-w-[230px] h-full border-r border-black/20 bg-white">
      <img
        src="/assets/loan-market-logo.svg"
        className="w-full h-[110px] -translate-y-3"
      />
      <div className="w-full px-2 pb-5 overflow-y-auto">
        <SidebarButtons icon="home" name="Dashboard" path="/" currentPath={currentPath} onClick={setcurrentPath} />
        <SidebarButtons icon="contact" name="Contact" path="/contact" currentPath={currentPath} onClick={setcurrentPath} />
        <SidebarButtons icon="file" name="Loan" path="/loan/edit_application" currentPath={currentPath} onClick={setcurrentPath} />
        <SidebarButtons icon="shop" name="Product" path="/product" currentPath={currentPath} onClick={setcurrentPath}>
          <SidebarButtons
            icon="empty"
            name="Bank Product"
            path="/product/bank_product/bank"
            currentPath={currentPath}
            onClick={setcurrentPath}
          />
          <SidebarButtons icon="empty" name="Product" path="/product/product" currentPath={currentPath} onClick={setcurrentPath} />
          <SidebarButtons
            icon="empty"
            name="Category Product"
            path="/product/category_product"
            currentPath={currentPath}
            onClick={setcurrentPath}
          />
        </SidebarButtons>
        <SidebarButtons icon="bank" name="Bank" path="/bank" currentPath={currentPath} onClick={setcurrentPath} />
        <SidebarButtons
          icon="speedo"
          name="Credit Scoring"
          path="/credit_scoring"
          currentPath={currentPath}
          onClick={setcurrentPath}
        />
        <SidebarButtons icon="question" name="FAQ's" path="/faq" currentPath={currentPath} onClick={setcurrentPath} />
        <SidebarButtons icon="stack" name="Pipeline" path="/pipeline" currentPath={currentPath} onClick={setcurrentPath} />
        <SidebarButtons
          icon="stack"
          name="Pipeline Developer"
          path="/pipeline_developer"
          currentPath={currentPath}
          onClick={setcurrentPath}
        />
        <SidebarButtons
          icon="marketing"
          name="Marketing Tools"
          path="/marketing_tools"
          currentPath={currentPath}
          onClick={setcurrentPath}
        />
        <SidebarButtons icon="whatsapp" name="Whatsapp" path="/whatsapp" currentPath={currentPath} onClick={setcurrentPath} >
          <SidebarButtons
            icon="empty"
            name="Whatsapp Child"
            path="/whatsapp/child"
            currentPath={currentPath}
            onClick={setcurrentPath}
          />
        </SidebarButtons>
      </div>
    </div>
  );
}

export default Sidebar;
