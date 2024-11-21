import { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import ApplicationHeaderDots from "../../components/header/application/header/dots";
import { Icon } from "../../components/icon";
import { formatPathname } from "../../utils/funcs";
import { applicationPathStack } from "../../routes/application/route";

function ApplicationLayout() {
    const pathStack = applicationPathStack;
    const pathStackList = Object.keys(pathStack);
    const [currentStack, setcurrentStack] = useState(pathStackList.slice(0, 3));
    const [currentPath, setcurrentPath] = useState(currentStack.slice(-1)[0]);
    const [subtitle, setsubtitle] = useState(pathStack[currentPath as keyof typeof pathStack].subtitle);
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();
    const basePath = "/loan/edit_application/";

    useEffect(() => {
        const last = pathname.split("/").slice(-1)[0];
        // redirect to /edit_application/alamat if current path
        // is "/../edit_application" or if the last path after /
        // is an empty string.
        if (["edit_application", ""].includes(last)) {
            navigate(`${basePath}${"alamat"}`);
            return;
        }
        let newStack: string[] = [];
        Object.keys(pathStack).some(path => {
            newStack.push(path);
            return path === last;
        })
        setcurrentStack(newStack);
        setcurrentPath(last);
        setsubtitle(pathStack[last as keyof typeof pathStack].subtitle);
        console.log("invoked");
    }, [location.pathname]);

    function handleNavigation(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: "next" | "back") {
        e.preventDefault();
        // ===full implementation===
        // let target = "";
        // if (type === "next") {
        //     target = pathStack[currentStack.length];
        // } else {
        //     target = pathStack[currentStack.length - 2];
        // }

        // ===tes praktek implementation===
        const demoStack = ["alamat", "upload_dokumen", "pilihan_produk_dan_bank"];
        let target = "";
        if (type === "next") {
            const nextIdx = demoStack.indexOf(currentPath) + 1;
            console.log(nextIdx);
            if (nextIdx > 2) return;
            target = demoStack[nextIdx % demoStack.length];
        } else {
            const prevIdx = demoStack.indexOf(currentPath) - 1;
            console.log(prevIdx);
            if (prevIdx < 0) return;
            target = demoStack[prevIdx];
        }
        console.log(target);
        navigate(`${basePath}${target}`);
    }

    return (
        <div className="overflow-y-auto">
            <div className="flex justify-center max-w-full px-10 py-5 bg-white border-b border-black/20">
                {pathStackList.map(path => {
                    return (
                        <ApplicationHeaderDots
                            name={path}
                            filled={currentStack.includes(path)}
                            isCurrent={path === currentPath}
                            last={path === pathStackList.slice(-1)[0]}
                        />
                    )
                })}
            </div>
            <div className="flex items-center px-10 min-h-24 justify-between">
                <button className="p-2 bg-primary-blue text-white rounded-full scale-90 hover:scale-100 active:scale-90 transition-all" onClick={e => handleNavigation(e, "back")}>
                    <Icon name="arrow-left" strokeWidth={2.5} className="size-7" />
                </button>
                <div className="text-center space-y-1">
                    <h2 className="text-2xl font-semibold">{formatPathname(currentPath)}</h2>
                    {subtitle && <p className="text-sidebar-text font-medium">{subtitle}</p>}
                </div>
                <button className="p-2 bg-primary-blue text-white rounded-full rotate-180 scale-90 hover:scale-100 active:scale-90 transition-all" onClick={e => handleNavigation(e, "next")}>
                    <Icon name="arrow-left" strokeWidth={2.5} className="size-7" />
                </button>
            </div>
            <Outlet />
        </div>
    )
}

export default ApplicationLayout