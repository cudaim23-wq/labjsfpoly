import dinhDangTien from "./dinhDang.js";

export function veBieuDo(khung, duLieu) {
    khung.innerHTML = "";
    const giaTriLonNhat = Math.max(...duLieu.map((muc) => muc.soTien));

    for (const muc of duLieu) {
        const dong = document.createElement("div");
        dong.className = "dong-bieu-do";

        const nhan = document.createElement("span");
        nhan.className = "nhan";
        nhan.textContent = muc.ten;

        const thanh = document.createElement("div");
        thanh.className = "thanh";
        thanh.style.width = `${(muc.soTien / giaTriLonNhat) * 100}%`;

        const giaTri = document.createElement("span");
        giaTri.className = "gia-tri";
        giaTri.textContent = dinhDangTien(muc.soTien);

        const ray = document.createElement("div");
        ray.className = "ray";
        ray.appendChild(thanh);

        const vungThanh = document.createElement("div");
        vungThanh.className = "vung-thanh";
        vungThanh.append(ray, giaTri);

        dong.append(nhan, vungThanh);
        khung.appendChild(dong);
    }
}
