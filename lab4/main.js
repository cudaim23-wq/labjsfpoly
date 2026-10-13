import { SanPham } from "./SanPham.js";
import { Kho } from "./Kho.js";
const sp = new SanPham("Chuột", 150000, 8);
console.log(sp.giaTri); // 1200000
console.log(sp.giaFormat); // "150.000"
sp.banSanPham(10); // in cảnh báo: không đủ hàng để bán
sp.banSanPham(3); // bán thành công
console.log(sp.soLuong); // 5
const kho = new Kho();
kho.themSanPham(sp);
console.log(kho.getSanPham().length); // 1