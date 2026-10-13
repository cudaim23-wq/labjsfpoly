# Lab 5 — Phần đọc-hiểu code

```js
class A { constructor() { console.log("A"); } }
class B extends A {
  constructor() { super(); console.log("B"); }
}
new B();
```

## 1. Thứ tự in ra

```
A
B
```

## 2. Thứ tự chạy constructor

Khi `new B()` được gọi, constructor của lớp con `B` bắt đầu chạy trước. Nhưng dòng đầu tiên trong đó là `super()`, nên chương trình nhảy sang chạy constructor của lớp cha `A` (in ra `A`). Chạy xong lớp cha, chương trình quay lại phần còn lại của constructor lớp con (in ra `B`).

Vì vậy, phần khởi tạo của lớp cha luôn hoàn tất trước phần khởi tạo của lớp con. Điều này hợp lý: lớp con được xây dựng dựa trên lớp cha, nên phần chung (ví dụ `chuTk`, `#soDu` trong `TaiKhoan`) phải có trước thì lớp con mới bổ sung phần riêng (`laiSuat`, `hanMuc`) lên trên được.

## 3. Nếu bỏ `super()` trong lớp B

Khi chạy thử, chương trình vẫn in ra `B`, rồi báo lỗi:

```
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

Lý do: trong lớp con (lớp có `extends`), đối tượng `this` chưa tồn tại cho đến khi `super()` được gọi, vì chính constructor của lớp cha là nơi tạo ra đối tượng. JavaScript bắt buộc lớp con phải gọi `super()` trước khi dùng `this` hoặc trước khi constructor kết thúc. Ở đây constructor của `B` chạy hết (nên `B` vẫn được in) mà không gọi `super()`, nên tới lúc trả về đối tượng thì báo lỗi `ReferenceError`.
