class TaiKhoan {
    #soDu;

    constructor(chuTk, soDuBanDau = 0) {
        this.chuTk = chuTk;
        this.#soDu = soDuBanDau;
    }

    get soDu() {
        return this.#soDu;
    }

    // Số tiền được phép rút xuống âm tối đa. Lớp con ghi đè để đổi luật rút tiền.
    get gioiHanRut() {
        return 0;
    }

    napTien(x) {
        if (x <= 0) {
            console.warn("Số tiền nạp phải lớn hơn 0");
            return false;
        }
        this.#soDu += x;
        return true;
    }

    rutTien(x) {
        if (x <= 0) {
            console.warn("Số tiền rút phải lớn hơn 0");
            return false;
        }
        if (x > this.#soDu + this.gioiHanRut) {
            console.warn(`${this.chuTk}: không thể rút ${x}, vượt quá giới hạn cho phép`);
            return false;
        }
        this.#soDu -= x;
        return true;
    }

    thongTin() {
        return `Chủ TK: ${this.chuTk} | Số dư: ${this.#soDu.toLocaleString("vi-VN")} đ`;
    }
}

class TaiKhoanTietKiem extends TaiKhoan {
    constructor(chuTk, soDuBanDau = 0, laiSuat = 0) {
        super(chuTk, soDuBanDau);
        this.laiSuat = laiSuat;
    }

    thongTin() {
        return `${super.thongTin()} | Lãi suất: ${this.laiSuat * 100}%`;
    }

    tinhLai() {
        return this.soDu * this.laiSuat;
    }
}

class TaiKhoanTinDung extends TaiKhoan {
    constructor(chuTk, soDuBanDau = 0, hanMuc = 0) {
        super(chuTk, soDuBanDau);
        this.hanMuc = hanMuc;
    }

    get gioiHanRut() {
        return this.hanMuc;
    }

    thongTin() {
        return `${super.thongTin()} | Hạn mức: ${this.hanMuc.toLocaleString("vi-VN")} đ`;
    }
}

// ===== Chạy thử =====
console.log("--- Tài khoản thường ---");
const tk = new TaiKhoan("Bình", 1000000);
console.log(tk.napTien(500000), tk.soDu); // true 1500000
console.log(tk.rutTien(2000000), tk.soDu); // false 1500000
console.log(tk.rutTien(500000), tk.soDu); // true 1000000
console.log(tk.thongTin());

console.log("\n--- Tài khoản tiết kiệm ---");
const tietKiem = new TaiKhoanTietKiem("Cường", 10000000, 0.06);
console.log(tietKiem.thongTin());
console.log("Tiền lãi:", tietKiem.tinhLai()); // 600000
console.log(tietKiem.rutTien(20000000), tietKiem.soDu); // false 10000000

console.log("\n--- Tài khoản tín dụng (tiêu chí nghiệm thu) ---");
const td = new TaiKhoanTinDung("An", 0, 1000000);
console.log(td.rutTien(500000), td.soDu); // true -500000
console.log(td.rutTien(600000), td.soDu); // false -500000
console.log(td instanceof TaiKhoan); // true
console.log(td.thongTin());

console.log("\n--- Phân loại bằng instanceof ---");
const dsTaiKhoan = [tk, tietKiem, td];
for (const taiKhoan of dsTaiKhoan) {
    let loai;
    if (taiKhoan instanceof TaiKhoanTietKiem) {
        loai = "Tài khoản tiết kiệm";
    } else if (taiKhoan instanceof TaiKhoanTinDung) {
        loai = "Tài khoản tín dụng";
    } else {
        loai = "Tài khoản thường";
    }
    console.log(`${taiKhoan.chuTk}: ${loai}`);
}
