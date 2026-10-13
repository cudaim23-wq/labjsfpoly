# Lab 6 — Phần đọc-hiểu code

```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
```

## Thứ tự in ra

```
1
4
3
2
```

## Giải thích

JavaScript chạy trên một luồng duy nhất và dùng **event loop** để sắp xếp thứ tự công việc. Có ba nhóm:

1. **Code đồng bộ** chạy ngay, từ trên xuống dưới.
2. **Microtask** (callback của Promise: `.then`, `await`) được đưa vào hàng đợi microtask.
3. **Macrotask** (`setTimeout`, `setInterval`, sự kiện...) được đưa vào hàng đợi macrotask.

Sau khi code đồng bộ chạy xong, event loop xử lý **toàn bộ** hàng đợi microtask trước, rồi mới lấy một macrotask ra chạy.

Áp dụng vào đoạn code:

- `console.log(1)` là code đồng bộ, in `1` ngay.
- `setTimeout(..., 0)` không chạy ngay. Callback được đưa vào hàng đợi macrotask. Số `0` chỉ là thời gian chờ **tối thiểu**, không có nghĩa là chạy liền.
- `Promise.resolve().then(...)`: Promise đã resolve sẵn, nên callback được đưa vào hàng đợi microtask.
- `console.log(4)` là code đồng bộ, in `4`.
- Code đồng bộ đã hết, event loop chạy microtask trước, in `3`.
- Hàng đợi microtask đã trống, event loop mới chạy macrotask, in `2`.

Vì vậy thứ tự là `1, 4, 3, 2`.
