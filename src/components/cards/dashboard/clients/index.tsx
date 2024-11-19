import { ClientCardProps } from "../../../../utils/types"
import { Icon } from "../../../icon"

function DashboardClientsCard(props: ClientCardProps) {
    const { name, icon, count } = props;
    return (
        <div className="flex items-center justify-between p-5 w-[250px] rounded-md bg-white shadow-md">
            <div className="flex justify-center items-center p-[7px] rounded-full bg-secondary-blue size-12">
                <Icon name={icon} className="size-8 text-primary-blue" />
            </div>
            <div className="text-center space-y-1">
                <h3 className="font-semibold text-lg">{name.toUpperCase()}</h3>
                <p className="font-semibold text-xl text-primary-blue">{count}</p>
            </div>
        </div>
    )
}

export default DashboardClientsCard