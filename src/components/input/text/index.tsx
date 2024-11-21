import { GeneralInputProps } from "../../../utils/types"

function GeneralInput(props: GeneralInputProps) {
    const { children, labelLoc, ...rest } = props;
    return (
        <div className={`flex ${labelLoc === "top" ? "flex-col" : "items-center justify-between space-x-5"} space-y-1`}>
            {children && <p className="font-semibold min-w-fit">{[children]}</p>}
            <input
                {...rest}
                className="border-2 rounded-md py-2 px-4 focus:ring focus:ring-gray-300 outline-none transition-all"
            />
        </div>
    )
}

export default GeneralInput