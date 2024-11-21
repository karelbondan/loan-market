import { useState } from "react";
import { GeneralInputProps } from "../../../utils/types"
import { Icon } from "../../icon";

function FileUpload(props: GeneralInputProps) {
    const { labelLoc, children, placeholder, ...rest } = props;
    const [uploadedFile, setuploadedFile] = useState("");
    const randomId = String(Math.floor(Math.random() * 100000 + 10000));
    return (
        <div className={`${labelLoc === "top" ? "flex flex-col" : "flex flex-col 865p:grid 865p:grid-cols-[60%_40%]"} justify-between 865p:space-x-5 space-y-1`}>
            {children && <p className="font-semibold min-w-fit">{[children]}</p>}
            <input
                {...rest}
                type="file"
                id={randomId}
                className="hidden"
                onChange={e => setuploadedFile(e.currentTarget.value)}
            />
            <button
                className="flex items-center justify-between space-x-10 border-2 rounded-md py-1.5 px-4 hover:ring hover:ring-gray-300 outline-none transition-all"
                onClick={e => { e.preventDefault(); document.getElementById(randomId)?.click(); }}
            >
                <span className={`line-clamp-1 text-left ${uploadedFile ? "text-black" : "text-gray-400"}`}>
                    {uploadedFile ? uploadedFile.replace(/\\/g, "/").split("/").slice(-1)[0] : placeholder}
                </span>
                <Icon name="upload" className="text-sidebar-text min-h-5 min-w-5 865p:min-h-7 865p:min-w-7" />
            </button>
        </div>
    )
}

export default FileUpload