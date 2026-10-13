
export class SanPham {
    constructor(ten, giaTri, soLuong) {
        this._ten = ten;
        this._giaTri = giaTri;
        this._soLuong = soLuong;
    }
    get giaTri() {
        return this._giaTri * this._soLuong;
    }
    get giaFormat() {
        return this._giaTri.toLocaleString("vi-VN");
    }
    get ten() {
        return this._ten;
    }
    get soLuong() {
        return this._soLuong;
    }

    banSanPham(soLuong) {
        if (soLuong > this._soLuong) {
            console.log("không đủ hàng để bán");
            return this._soLuong;
        }
        this._soLuong -= soLuong;
        return this._soLuong;
    }
    set giaTri(giaTri) {
        this._giaTri = giaTri;
    }
    set ten(ten) {
        this._ten = ten;
    }
    set soLuong(soLuong) {
        this._soLuong = soLuong;
    }
}
