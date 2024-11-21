import { useState } from "react";
import { GeneralInputProps } from "../../../utils/types"
import { Icon } from "../../icon";

function FileUpload(props: GeneralInputProps) {
    const { labelLoc, children, placeholder, ...rest } = props;
    const [uploadedFile, setuploadedFile] = useState("");
    const randomId = String(Math.floor(Math.random() * 100000 + 10000));
    return (
        <div className={`grid grid-cols-[60%_40%]  ${labelLoc === "top" ? "flex-col" : "items-center justify-between space-x-5"} space-y-1`}>
            {children && <p className="font-semibold min-w-fit">{[children]}</p>}
            <input
                {...rest}
                type="file"
                id={randomId}
                className="hidden border-2 rounded-md py-2 px-4 focus:ring focus:ring-gray-300 outline-none transition-all"
                onChange={e => setuploadedFile(e.currentTarget.value)}
            />
            <button
                className="flex items-center justify-between space-x-10 border-2 rounded-md py-1.5 px-4 hover:ring hover:ring-gray-300 outline-none transition-all"
                onClick={e => { e.preventDefault(); document.getElementById(randomId)?.click(); }}
            >
                <span className={`line-clamp-1 text-left ${uploadedFile ? "text-black" : "text-gray-400"}`}>
                    {uploadedFile ? uploadedFile.replace(/\\/g, "/").split("/").slice(-1)[0] : placeholder}
                </span>
                <Icon name="upload" className="text-sidebar-text size-7" />
            </button>
        </div>
    )
}

export default FileUpload