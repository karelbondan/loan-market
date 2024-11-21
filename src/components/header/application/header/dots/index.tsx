import { formatPathname } from "../../../../../utils/funcs";
import { AppHeaderDotsProps } from "../../../../../utils/types"

function ApplicationHeaderDots(props: AppHeaderDotsProps) {
    const { name, filled, isCurrent, last } = props;

    const bgColor = filled ? isCurrent ? "bg-primary-blue" : "bg-tertiary-blue" : "bg-app-header-gray"
    const textColor = filled ? isCurrent ? "text-primary-blue" : "text-tertiary-blue" : "text-app-header-gray"
    const connectorBg = ["bg-primary-blue", "bg-app-header-gray"].includes(bgColor) ? "bg-app-header-gray" : "bg-tertiary-blue"

    return (
        <div className={`${last ? "w-fit" : "w-full"} h-20`}>
            <div className="flex items-center">
                <div className={`min-w-4 min-h-4 rounded-full ${bgColor} relative`}>
                    <p className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+5px)] text-center font-semibold text-sm ${textColor}`}>
                        {formatPathname(name)}
                    </p>
                </div>
                {!last && <div className={`h-1.5 w-full ${connectorBg}`} />}
            </div>
        </div>
    )
}

export default ApplicationHeaderDots