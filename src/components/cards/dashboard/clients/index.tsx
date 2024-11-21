import { ClientCardProps } from "../../../../utils/types"
import { Icon } from "../../../icon"

function DashboardClientsCard(props: ClientCardProps) {
    const { name, icon, count } = props;
    return (
        <div className="relative flex items-center justify-between 525p:space-x-5 p-5 w-full rounded-md bg-white shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex justify-center items-center p-[7px] rounded-full bg-secondary-blue size-12">
                <Icon name={icon} className="size-8 text-primary-blue" />
            </div>
            <div className="text-center space-y-1">
                <h3 className="font-semibold text-lg hidden 525p:block">{name.toUpperCase()}</h3>
                <p className="font-bold text-xl text-primary-blue">{count}</p>
            </div>
            <div id="popup" className="absolute bottom-[calc(100%+5px)] left-1/2 -translate-x-1/2 block 525p:hidden bg-white border-2 rounded-lg shadow-md text-center py-2 px-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
                <h3 className="font-semibold text-md">{name.toUpperCase()}</h3>
            </div>
        </div>
    )
}

export default DashboardClientsCard