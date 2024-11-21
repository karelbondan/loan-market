export function capitalize(inp: string) {
  return inp
    ?.replace(/dan/g, "&")
    .split(" ")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatPathname(inp: string) {
  const last = inp.split("/").pop()?.replace(/_/g, " ");
  return capitalize(last!);
}

export async function getProvinsi() {
  return await fetch("https://loanmarketapi.karel.id/provinces", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    return res.json();
  });
}

export async function getWilayah(code: string, type: "regencies" | "districts" | "villages") {
  return await fetch(`https://loanmarketapi.karel.id/${type}/${code}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    return res.json();
  });
}

export function initializeAlamatFormDataAlamat() {
  return {
    alamat: "",
    kelurahan: null,
    kecamatan: null,
    kota: null,
    provinsi: null,
    kodePos: 0,
  }
}

export function initializeAlamatFormDataExtension() {
  return {
    detailAlamat: initializeAlamatFormDataAlamat(),
    alamatSesuaiKTP: false,
  }
}
