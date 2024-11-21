import { useEffect, useState } from "react";
import { DropdownProps, WilayahDotIdResponse } from "../../../utils/types"
import { Icon } from "../../icon";

function Dropdown(props: DropdownProps) {
    const { children, labelLoc, placeholder, selections, onValueChange, value, ...rest } = props;
    const [selected, setselected] = useState(new WilayahDotIdResponse());
    const [searchQuery, setsearchQuery] = useState("");
    const [search, setsearch] = useState<WilayahDotIdResponse[]>([]);

    useEffect(() => {
        setsearch(selections);
    }, [selections])

    useEffect(() => {

    }, [selected])

    function handleSearch(query: string) {
        setsearchQuery(query);
        let filtered: WilayahDotIdResponse[];
        if (query) {
            const regex = new RegExp(query.split("").join("*"), "i");
            filtered = selections.filter(selection => regex.test(selection.name))
        } else {
            filtered = selections;
        }
        setsearch(filtered);
    }

    return (
        <div {...rest} className={`relative flex ${labelLoc === "top" ? "flex-col" : "items-center justify-between space-x-5"} space-y-1`}>
            {children && <p className="font-semibold min-w-fit">{[children]}</p>}
            <div className="relative">
                <input
                    type="text"
                    disabled={/true/.test(String(props["aria-disabled"])) || value === null}
                    placeholder={placeholder}
                    value={value ?? searchQuery}
                    onChange={e => handleSearch(e.currentTarget.value)}
                    className="w-full border-2 rounded-md py-2 px-4 focus:ring focus:ring-gray-300 outline-none transition-all peer/input enabled:cursor-pointer"
                />
                <div className="absolute top-0 right-12 w-1 h-full border-l-2" />
                <Icon name="chevron_down" className="absolute size-4 top-1/2 -translate-y-1/2 right-5 peer-focus/input:rotate-180 transition-all pointer-events-none" />
                <div className="absolute top-full left-0 z-20 w-full max-h-52 overflow-y-auto invisible opacity-0 peer-focus/input:visible peer-focus/input:opacity-100 peer-focus/input:translate-y-1 transition-all bg-white shadow-md rounded-lg border-2">
                    {search && search.map(wilayah => (
                        <button
                            className="px-4 py-2 w-full text-left hover:bg-gray-200 transition-all"
                            onClick={e => { e.preventDefault(); setselected(wilayah); onValueChange(wilayah); setsearchQuery(wilayah.name); setsearch(selections) }}
                        >
                            {wilayah.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dropdown