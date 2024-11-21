import { useState } from "react";
import { UploadDocumentSectionProps } from "../../../../utils/types"
import { Icon } from "../../../../components/icon";
import FileUpload from "../../../../components/input/file";

function ApplicationEditAddDocument() {
    return (
        <div className="mx-5 mb-10 p-5 bg-white rounded-lg shadow-md">
            <form id="form_alamat" className="space-y-3">
                <UploadDocumentSection title="Data Pribadi" >
                    <FileUpload labelLoc="left" placeholder="--Upload Fotokopi KTP Pemohon--">
                        Fotokopi KTP Pemohon
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload Fotokopi KTP Pemohon--" >
                        Fotokopi KTP Pemohon
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload Fotokopi KTP Suami / Istri--" >
                        Fotokopi KTP Suami/Istri
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload Fotokopi Kartu Keluarga--" >
                        Fotokopi Kartu Keluarga
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload Fotokopi Akte Nikah/Cerai--" >
                        Fotokopi Akte Nikah/Cerai
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload Fotokopi NPWP Pemohon--" >
                        Fotokopi NPWP Pemohon
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload Akta Pisah Harga Notaril--" >
                        Akta Pisah Harga Notaril dan didaftarkan ke KUA atau catatan sipil (Jika Ada)
                    </FileUpload>
                </UploadDocumentSection>
                <UploadDocumentSection title="Data Jaminan" >
                    <FileUpload labelLoc="left" placeholder="--Upload Fotokopi Dokumen Jaminan--" >
                        Fotokopi Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload PDF Surat Pengajuan Bank--" >
                        Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload Fotokopi Perjanjian Kredit--" >
                        Fotokopi Perjanjian Kredit (Jika Over Kredit)
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload Dokumen PPJB--" >
                        Dokumen PPJB (Jika Developer)
                    </FileUpload>
                </UploadDocumentSection>
                <UploadDocumentSection title="Data Keuangan" >
                    <FileUpload labelLoc="left" placeholder="--Upload Fotokopi SPT / PPh21--" >
                        Fotokopi SPT / PPh21
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload Asli Slip Gaji 1 Bulan Terakhir--" >
                        Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload Fotokopi R/K 6 Bulan Terakhir--" >
                        Fotokopi R/K atau tabungan 6 bulan terakhir
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload Surat Keterangan Perusahaan--" >
                        Surat Keterangan / Rekomendasi Perusahaan
                    </FileUpload>
                </UploadDocumentSection>
                <UploadDocumentSection title="Data Tambahan" >
                    <FileUpload labelLoc="left" placeholder="--Upload File Kekurangan 1--" >
                        File Kekurangan 1
                    </FileUpload>
                    <FileUpload labelLoc="left" placeholder="--Upload File Kekurangan 2--" >
                        File Kekurangan 2
                    </FileUpload>
                </UploadDocumentSection>
            </form>
            <div className="flex justify-end mt-5">
                <button className="flex items-center space-x-3 px-5 py-2 bg-tertiary-blue text-white rounded-sm scale-95 hover:scale-100 active:scale-90 transition-all"
                    onClick={e => e.preventDefault()}>
                    <Icon name="save" className="size-6" />
                    <span>UPDATE</span>
                </button>
            </div>
        </div>
    )
}

function UploadDocumentSection(props: UploadDocumentSectionProps) {
    const [expanded, setexpanded] = useState(true);
    const { title, children } = props;

    return (
        <div className="border-2 border-black/10">
            <div className="flex items-center px-4 py-3 space-x-3 bg-tertiary-blue text-white cursor-pointer select-none" onClick={_ => setexpanded(!expanded)}>
                <Icon
                    name="arrow-triangle-right"
                    className={`text-white size-8 ${expanded && "rotate-90"} transition-all duration-200`} />
                <h2 className="font-medium text-lg">
                    {title}
                </h2>
            </div>
            {children && <div className={`px-6 space-y-3 ${expanded ? "max-h-[500px] py-3" : "max-h-0"} overflow-hidden transition-all duration-300`}>{children}</div>}
        </div>
    )
}

export default ApplicationEditAddDocument