import { tong, trungBinh, max, min } from "./modules/tinhToan.js";
import dinhDangTien from "./modules/dinhDang.js";

const chiTieu = [
    { ten: "Ăn uống", soTien: 3500000 },
    { ten: "Nhà ở", soTien: 4000000 },
    { ten: "Đi lại", soTien: 800000 },
    { ten: "Học tập", soTien: 1500000 },
    { ten: "Giải trí", soTien: 650000 },
];

const cacKhoan = chiTieu.map((muc) => muc.soTien);

document.getElementById("tong").textContent = dinhDangTien(tong(cacKhoan));
document.getElementById("trungBinh").textContent = dinhDangTien(trungBinh(cacKhoan));
document.getElementById("max").textContent = dinhDangTien(max(cacKhoan));
document.getElementById("min").textContent = dinhDangTien(min(cacKhoan));

const bangChiTieu = document.getElementById("bangChiTieu");
for (const muc of chiTieu) {
    const dong = document.createElement("tr");
    const ten = document.createElement("td");
    ten.textContent = muc.ten;
    const soTien = document.createElement("td");
    soTien.textContent = dinhDangTien(muc.soTien);
    dong.append(ten, soTien);
    bangChiTieu.appendChild(dong);
}

const nutBieuDo = document.getElementById("nutBieuDo");
const khungBieuDo = document.getElementById("khungBieuDo");

nutBieuDo.addEventListener("click", async () => {
    nutBieuDo.disabled = true;
    nutBieuDo.textContent = "Đang tải biểu đồ...";
    try {
        const { veBieuDo } = await import("./modules/bieuDo.js");
        veBieuDo(khungBieuDo, chiTieu);
        nutBieuDo.textContent = "Đã hiển thị biểu đồ";
    } catch (loi) {
        khungBieuDo.textContent = `Không tải được biểu đồ: ${loi.message}`;
        nutBieuDo.disabled = false;
        nutBieuDo.textContent = "Xem biểu đồ";
    }
});
