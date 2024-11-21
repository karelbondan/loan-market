import { useEffect, useState } from "react"
import Checkbox from "../../../../components/input/checkbox"
import { AlamatFormDataExtension, AlamatFormProps, WilayahData, WilayahDotIdResponse } from "../../../../utils/types";
import GeneralInput from "../../../../components/input/text";
import { getProvinsi, getWilayah } from "../../../../utils/funcs";
import Dropdown from "../../../../components/input/dropdown";
import { Icon } from "../../../../components/icon";

function ApplicationEditAlamat() {
    const [dataKTP, setdataKTP] = useState(new AlamatFormDataExtension());
    const [dataDomisili, setdataDomisili] = useState(new AlamatFormDataExtension());
    const [dataTempatKerja, setdataTempatKerja] = useState(new AlamatFormDataExtension());
    const [dataWilayah, setdataWilayah] = useState<WilayahData>(new WilayahData());

    async function getProvinces() {
        const provinces: { data: WilayahDotIdResponse[] } = await getProvinsi();
        setdataWilayah({ ...dataWilayah, provinces: provinces.data })
    }

    async function updateWilayah(
        type: "regencies" | "districts" | "villages",
        untuk: "ktp" | "domicile" | "work",
        code: string
    ) {
        const acquireData = await getWilayah(code, type);
        const newDataWilayah = dataWilayah;
        newDataWilayah[type][untuk] = acquireData;
        setdataWilayah({ ...newDataWilayah });
    }

    function handleChange(
        value: WilayahDotIdResponse,
        data: AlamatFormDataExtension,
        update: React.Dispatch<React.SetStateAction<AlamatFormDataExtension>>,
        type: "kelurahan" | "kecamatan" | "kota" | "provinsi",
    ) {
        const { detailAlamat: newDetails } = data;
        newDetails[type] = value;
        update({ ...data, detailAlamat: { ...newDetails } });
    }

    useEffect(() => {
        getProvinces();
    }, [])

    return (
        <div className="mx-5 mb-10 p-5 bg-white rounded-lg shadow-md">
            <form id="form_alamat" className="space-y-5">
                <AlamatForm
                    title="Data KTP"
                    formFor="ktp"
                    dataAlamat={dataKTP}
                    updateAlamat={setdataKTP}
                    dataWilayah={dataWilayah}
                    updateWilayah={updateWilayah}
                    handleChange={handleChange} />
                <div className="flex justify-between space-x-5 items-center">
                    <Checkbox onValueChange={e => { setdataDomisili({ ...dataDomisili, alamatSesuaiKTP: e }) }} >
                        Domisili sesuai KTP
                    </Checkbox>
                    <button className="px-4 py-1 h-10 bg-red-500 1280p:hover:bg-red-600 text-white rounded-sm 1280p:scale-95 1280p:hover:scale-100 1280p:active:scale-90 active:scale-90 transition-all"
                        onClick={e => e.preventDefault()}>
                        CLEAR
                    </button>
                </div>
                <AlamatForm
                    title="Data Domisili"
                    formFor="domicile"
                    dataAlamat={dataDomisili}
                    dataKtp={dataKTP}
                    updateAlamat={setdataDomisili}
                    dataWilayah={dataWilayah}
                    updateWilayah={updateWilayah}
                    handleChange={handleChange} />
                <div className="flex justify-between space-x-5 items-center">
                    <Checkbox onValueChange={e => setdataTempatKerja({ ...dataTempatKerja, alamatSesuaiKTP: e })}>
                        Alamat tempat bekerja / perusahaan sesuai KTP
                    </Checkbox>
                    <button className="px-4 py-1 h-10 bg-red-500 1280p:hover:bg-red-600 text-white rounded-sm 1280p:scale-95 1280p:hover:scale-100 1280p:active:scale-90 active:scale-90 transition-all"
                        onClick={e => e.preventDefault()}>
                        CLEAR
                    </button>
                </div>
                <AlamatForm
                    title="Data Alamat Tempat Bekerja"
                    formFor="work"
                    dataAlamat={dataTempatKerja}
                    dataKtp={dataKTP}
                    updateAlamat={setdataTempatKerja}
                    dataWilayah={dataWilayah}
                    updateWilayah={updateWilayah}
                    handleChange={handleChange} />
            </form>
            <div className="flex justify-end mt-5">
                <button className="flex items-center space-x-3 px-5 py-2 bg-tertiary-blue text-white rounded-sm 1280p:scale-95 1280p:hover:scale-100 1280p:active:scale-90 active:scale-90 transition-all"
                    onClick={e => e.preventDefault()}>
                    <Icon name="save" className="size-6" />
                    <span>UPDATE</span>
                </button>
            </div>
        </div>
    )
}

function AlamatForm(props: AlamatFormProps) {
    const { title, dataAlamat, dataKtp, dataWilayah, updateAlamat, updateWilayah, handleChange, formFor } = props;

    function updateAlamatKodePos(inp: string | number, type: "alamat" | "kodePos") {
        const { detailAlamat } = dataAlamat;
        // @ts-expect-error
        detailAlamat[type] = inp;
        updateAlamat({ ...dataAlamat, detailAlamat: { ...detailAlamat } });
    }

    return (
        <div className="border-2 border-black/10">
            <h2 className="px-5 py-3 bg-tertiary-blue text-white font-medium text-lg">
                {title}
            </h2>
            <div className="p-5">
                <div className="grid 865p:grid-cols-2 gap-10">
                    <div className="space-y-3">
                        <GeneralInput
                            labelLoc="top"
                            placeholder="--Isi Alamat Lengkap--"
                            type="text"
                            onChange={e => updateAlamatKodePos(e.currentTarget.value, "alamat")}
                            value={dataAlamat.alamatSesuaiKTP ? dataKtp?.detailAlamat.alamat : dataAlamat.detailAlamat.alamat}
                        >
                            Alamat Lengkap (Jalan, Komplek, RT/RW)
                        </GeneralInput>
                        <Dropdown
                            labelLoc="top"
                            placeholder="--Pilih provinsi--"
                            selections={dataWilayah.provinces}
                            value={dataAlamat.alamatSesuaiKTP && dataKtp?.detailAlamat?.provinsi?.name || undefined}
                            aria-disabled={dataAlamat.alamatSesuaiKTP}
                            onValueChange={e => {
                                handleChange(e, dataAlamat, updateAlamat, "provinsi");
                                updateWilayah("regencies", formFor, e.code);
                            }} >
                            Provinsi
                        </Dropdown>
                        <Dropdown
                            labelLoc="top"
                            placeholder="--Pilih kecamatan--"
                            selections={dataWilayah.districts[formFor]?.data ?? []}
                            value={dataAlamat.alamatSesuaiKTP && dataKtp?.detailAlamat?.kecamatan?.name || undefined}
                            aria-disabled={dataAlamat.detailAlamat?.kota === null || dataAlamat.alamatSesuaiKTP}
                            onValueChange={e => {
                                handleChange(e, dataAlamat, updateAlamat, "kecamatan");
                                updateWilayah("villages", formFor, e.code);
                            }}>
                            Kecamatan
                        </Dropdown>
                    </div>
                    <div className="space-y-3">
                        <GeneralInput
                            labelLoc="top"
                            placeholder="--Isi Kode POS--"
                            type="number"
                            value={dataAlamat.alamatSesuaiKTP ? dataKtp?.detailAlamat?.kodePos : dataAlamat.detailAlamat.kodePos}
                            onChange={e => updateAlamatKodePos(e.currentTarget.value, "kodePos")}
                        >
                            Kode POS
                        </GeneralInput>
                        <Dropdown
                            labelLoc="top"
                            placeholder="--Pilih Kota--"
                            selections={dataWilayah.regencies[formFor]?.data ?? []}
                            value={dataAlamat.alamatSesuaiKTP && dataKtp?.detailAlamat?.kota?.name || undefined}
                            aria-disabled={dataAlamat.detailAlamat?.provinsi === null || dataAlamat.alamatSesuaiKTP}
                            onValueChange={e => {
                                handleChange(e, dataAlamat, updateAlamat, "kota");
                                updateWilayah("districts", formFor, e.code);
                            }}>
                            Kabupaten/Kota
                        </Dropdown>
                        <Dropdown
                            labelLoc="top"
                            placeholder="--Pilih Kelurahan--"
                            selections={dataWilayah.villages[formFor]?.data ?? []}
                            value={dataAlamat.alamatSesuaiKTP && dataKtp?.detailAlamat?.kelurahan?.name || undefined}
                            aria-disabled={dataAlamat.detailAlamat?.kecamatan === null || dataAlamat.alamatSesuaiKTP}
                            onValueChange={e => {
                                handleChange(e, dataAlamat, updateAlamat, "kelurahan");
                            }}>
                            Kelurahan
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationEditAlamat