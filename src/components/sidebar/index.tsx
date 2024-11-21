import { useState } from "react";
import SidebarButtons from "./buttons";
import { Icon } from "../icon";
import { profileInfo } from "../../dummy/profile";

function Sidebar() {
  const [sidebarHidden, setsidebarHidden] = useState(true);

  return (
    <div id="sidebar_container">
      <button
        className="flex 1280p:hidden fixed top-[10px] left-2 p-2 active:scale-90 active:ring active:ring-primary-blue/50 transition-all rounded-full"
        onClick={e => { e.preventDefault(); setsidebarHidden(false); }}
      >
        <Icon name="burger" className="size-7 text-sidebar-text" />
      </button>
      <div className="hidden 1280p:block h-full">
        <RenderSidebar barHidden={setsidebarHidden} />
      </div>
      <div id="sidebar_container_mobile">
        <div className={`block 1280p:hidden fixed top-0 bottom-0 ${sidebarHidden ? "-left-full" : "left-0"} z-20 transition-all duration-500`}>
          <RenderSidebar barHidden={setsidebarHidden} />
        </div>
        <div
          className={`block 1280p:hidden fixed top-0 bottom-0 right-0 left-0 ${sidebarHidden ? "opacity-0 invisible" : "opacity-100 visible"} bg-black/30 z-10 transition-all duration-500`}
          onClick={_ => setsidebarHidden(true)}
        />
      </div>
    </div>
  );
}

function RenderSidebar(props: { barHidden: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [currentPath, setcurrentPath] = useState(location.pathname);
  const { barHidden } = props;
  return (
    <div className="flex flex-col min-w-[250px] 1280p:min-w-[230px] h-full border-r border-black/20 bg-white">
      <img
        src="/assets/loan-market-logo.svg"
        className="w-full h-[110px] -translate-y-3"
      />
      <div className="w-full px-2 pb-5 overflow-y-auto">
        <div className="md:hidden border-t border-b border-black/10 w-full mb-5">
          <SidebarButtons icon="person" name={profileInfo.formal_name} path="" currentPath={currentPath} onClick={() => { }} barHidden={() => { }} >
            <div className="pl-5">
              <SidebarButtons icon="logout" name="Logout" path="" currentPath={currentPath} onClick={() => { }} barHidden={() => { }} />
            </div>
          </SidebarButtons>
        </div>
        <SidebarButtons icon="home" name="Dashboard" path="/" currentPath={currentPath} onClick={setcurrentPath} barHidden={barHidden} />
        <SidebarButtons icon="contact" name="Contact" path="/contact" currentPath={currentPath} onClick={setcurrentPath} barHidden={barHidden} />
        <SidebarButtons icon="file" name="Loan" path="/loan/edit_application" currentPath={currentPath} onClick={setcurrentPath} barHidden={barHidden} />
        <SidebarButtons icon="shop" name="Product" path="/product" currentPath={currentPath} onClick={setcurrentPath} barHidden={barHidden}>
          <SidebarButtons
            icon="empty"
            name="Bank Product"
            path="/product/bank_product/bank"
            currentPath={currentPath}
            onClick={setcurrentPath}
            barHidden={barHidden}
          />
          <SidebarButtons icon="empty" name="Product" path="/product/product" currentPath={currentPath} onClick={setcurrentPath} barHidden={barHidden} />
          <SidebarButtons
            icon="empty"
            name="Category Product"
            path="/product/category_product"
            currentPath={currentPath}
            onClick={setcurrentPath}
            barHidden={barHidden}
          />
        </SidebarButtons>
        <SidebarButtons icon="bank" name="Bank" path="/bank" currentPath={currentPath} onClick={setcurrentPath} barHidden={barHidden} />
        <SidebarButtons
          icon="speedo"
          name="Credit Scoring"
          path="/credit_scoring"
          currentPath={currentPath}
          onClick={setcurrentPath}
          barHidden={barHidden}
        />
        <SidebarButtons icon="question" name="FAQ's" path="/faq" currentPath={currentPath} onClick={setcurrentPath} barHidden={barHidden} />
        <SidebarButtons icon="stack" name="Pipeline" path="/pipeline" currentPath={currentPath} onClick={setcurrentPath} barHidden={barHidden} />
        <SidebarButtons
          icon="stack"
          name="Pipeline Developer"
          path="/pipeline_developer"
          currentPath={currentPath}
          onClick={setcurrentPath}
          barHidden={barHidden}
        />
        <SidebarButtons
          icon="marketing"
          name="Marketing Tools"
          path="/marketing_tools"
          currentPath={currentPath}
          onClick={setcurrentPath}
          barHidden={barHidden}
        />
        <SidebarButtons icon="whatsapp" name="Whatsapp" path="/whatsapp" currentPath={currentPath} onClick={setcurrentPath} barHidden={barHidden} >
          <SidebarButtons
            icon="empty"
            name="Whatsapp Child"
            path="/whatsapp/child"
            currentPath={currentPath}
            onClick={setcurrentPath}
            barHidden={barHidden}
          />
        </SidebarButtons>
      </div>
    </div>
  )
}

export default Sidebar;
