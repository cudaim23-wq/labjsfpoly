const API_URL = "https://jsonplaceholder.typicode.com/users";

const oTimKiem = document.getElementById("oTimKiem");
const nutTaiLai = document.getElementById("nutTaiLai");
const trangThai = document.getElementById("trangThai");
const danhSach = document.getElementById("danhSach");

let tatCaUser = [];

async function layDanhSachUser() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
}

function hienTrangThai(noiDung, laLoi = false) {
    trangThai.textContent = noiDung;
    trangThai.classList.toggle("loi", laLoi);
}

function renderDanhSach(users) {
    danhSach.innerHTML = "";

    if (users.length === 0) {
        hienTrangThai("Không tìm thấy người dùng nào.");
        return;
    }
    hienTrangThai(`Hiển thị ${users.length} người dùng`);

    for (const user of users) {
        const li = document.createElement("li");

        const ten = document.createElement("span");
        ten.className = "ten";
        ten.textContent = user.name;

        const email = document.createElement("span");
        email.className = "email";
        email.textContent = user.email;

        const thanhPho = document.createElement("span");
        thanhPho.className = "thanh-pho";
        thanhPho.textContent = user.address.city;

        li.append(ten, email, thanhPho);
        danhSach.appendChild(li);
    }
}

function locTheoTen() {
    const tuKhoa = oTimKiem.value.trim().toLowerCase();
    const ketQua = tatCaUser.filter((user) => user.name.toLowerCase().includes(tuKhoa));
    renderDanhSach(ketQua);
}

async function taiDuLieu() {
    nutTaiLai.disabled = true;
    danhSach.innerHTML = "";
    hienTrangThai("Đang tải...");

    try {
        tatCaUser = await layDanhSachUser();
        locTheoTen();
    } catch (loi) {
        tatCaUser = [];
        hienTrangThai(`Không tải được danh sách người dùng (${loi.message}). Kiểm tra kết nối mạng rồi bấm "Tải lại".`, true);
    } finally {
        nutTaiLai.disabled = false;
    }
}

nutTaiLai.addEventListener("click", taiDuLieu);
oTimKiem.addEventListener("input", locTheoTen);

taiDuLieu();
