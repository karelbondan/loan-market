import { Icon } from "../../../../components/icon"
import Checkbox from "../../../../components/input/checkbox"
import { pilihanProdukBank } from "../../../../dummy/pilihan_produk_bank";

function ApplicationEditPilihanProdukBank() {
    const bankData = pilihanProdukBank;
    return (
        <div className="mx-5 mb-10 p-10 space-y-5 bg-white rounded-lg shadow-md">
            <div className="flex justify-between space-x-5">
                <div className="relative w-full">
                    <input
                        placeholder="Cari Nama Bank"
                        className="w-full px-5 py-3 border-2 outline-none focus:ring focus:ring-gray-300 rounded-lg transition-all" />
                    <button className="absolute right-5 top-1/2 -translate-y-1/2 flex justify-center items-center">
                        <Icon name="search" className="size-6 text-primary-blue" />
                    </button>
                </div>
                <button className="flex items-center space-x-5 px-5 py-3 border-2 rounded-lg hover:scale-95 active:scale-90 transition-all">
                    <Icon name="sort-ascending" className="size-6" />
                    <span className="font-semibold">Sort</span>
                </button>
            </div>
            <form id="form_alamat" className="space-y-5">
                <div className="flex space-x-2">
                    <Checkbox>
                        Send to Pool (Pilih opsi ini jika Anda ingin mengirim leads ke semua bank rekanan Loan Market)
                    </Checkbox>
                    <div className="relative cursor-pointer hover:-translate-y-1 transition-all group">
                        <Icon name="question-solid" className="text-primary-blue size-8" />
                        <span className="absolute top-full left-1/2 -translate-x-1/2 min-w-max group-hover:opacity-100 group-hover:visible opacity-0 invisible bg-black text-white text-sm p-2 z-10 rounded-sm transition-all">
                            Tulis tooltip yang berguna di sini
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-7">
                    {bankData.map(bank => (
                        <BankCheckbox {...bank} />
                    ))}
                </div>
            </form>
            <div className="flex justify-end mt-5" >
                <button className="px-4 py-1 bg-tertiary-blue text-white rounded-sm">
                    UPDATE
                </button>
            </div>
        </div>
    )
}

function BankCheckbox(props: typeof pilihanProdukBank[0]) {
    const baseImgPath = "/assets/images/logos/"
    const { logo_url, rating, reviews, title, description } = props;
    const ratingInteger = Math.floor(rating);
    let ratingRemainder = rating % ratingInteger;
    return (
        <label className="inline-block select-none p-5 shadow-md shadow-black/20 cursor-pointer rounded-md hover:-translate-y-1 transition-all">
            <Checkbox className="z-0" />
            <span className="flex flex-col items-center">
                <img
                    src={`${baseImgPath}${logo_url}.png`}
                    style={{
                        objectFit: "contain"
                    }}
                    className="w-full h-32 px-5" />
                <span className="flex flex-col items-center space-y-1">
                    <span className="flex -space-x-1 text-yellow-500">
                        {[...Array(5).keys()].map(idx => {
                            if (idx < ratingInteger) {
                                return <Icon name="star" className="size-7" />
                            } else if (ratingRemainder) {
                                ratingRemainder = 0;
                                return <Icon name="star-half" className="size-7" />
                            } else {
                                return <Icon name="star-outline" className="size-7" />
                            }
                        })}
                    </span>
                    <span>{reviews.toLocaleString("id-ID")} Reviews</span>
                </span>
                <span className="flex flex-col w-full space-y-2 py-5">
                    <span className="text-primary-blue text-lg font-semibold">{title}</span>
                    <span className="text-sm">{description}</span>
                </span>
            </span>
        </label>
    )
}

export default ApplicationEditPilihanProdukBank