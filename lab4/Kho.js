import { SanPham } from "./SanPham.js";
export class Kho {
    #sanPham = [];
    constructor(){
        this.#sanPham = [];
    }
    themSanPham(sanPham){
        this.#sanPham.push(sanPham);
    }
    xoaSanPham(sanPham){
        this.#sanPham = this.#sanPham.filter(s => s !== sanPham);
    }
    getSanPham(){
        return this.#sanPham;
    }
    tongGiaTriSanPham(){
        return this.#sanPham.reduce((total, sanPham) => total + sanPham.giaTri, 0);

    }
    timTheoTen(ten){
        return this.#sanPham.find(s => s.ten === ten);
    }
}