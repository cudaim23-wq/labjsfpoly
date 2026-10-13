const sanPham = [
    { ten: "Bút bi", gia: 5000, soLuong: 100, danhMuc: "vpp" },
    { ten: "Vở", gia: 12000, soLuong: 50, danhMuc: "vpp" },
    { ten: "Chuột", gia: 150000, soLuong: 8, danhMuc: "dientu" },
    { ten: "Bàn phím", gia: 300000, soLuong: 5, danhMuc: "dientu" },
];
const tongGia = sanPham.reduce((acc, item) => acc + item.gia * item.soLuong, 0);
console.log(tongGia);
const locSanPhamSapHet = (nguong = 10) => {
    return sanPham.filter((item) => item.soLuong < nguong);   
}
console.log(locSanPhamSapHet(10).map((item) => item.ten));
const tenSanPham = sanPham.map((item) => item.ten);
console.log(tenSanPham);
const nhomSanPham = sanPham.reduce((acc, item) => {
    if (!acc[item.danhMuc]) {
        acc[item.danhMuc] = [];
    }
    acc[item.danhMuc].push(item);
    return acc;
}, {});
console.log(nhomSanPham);
