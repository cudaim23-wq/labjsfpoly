# Lab 7 — Phần đọc-hiểu code

## 1. Cú pháp import của named export và default export khác nhau thế nào?

- **Named export:** phải đặt tên trong dấu ngoặc nhọn `{ }`, và tên phải **trùng** với tên đã export. Muốn đổi tên thì dùng `as`. Một module có thể có nhiều named export.

  ```js
  import { tong, trungBinh } from "./modules/tinhToan.js";
  ```

- **Default export:** **không** dùng dấu ngoặc nhọn, và nơi import được **tự đặt tên tùy ý**. Mỗi module chỉ có tối đa một default export.

  ```js
  import dinhDangTien from "./modules/dinhDang.js";
  ```

## 2. Vì sao mỗi module có phạm vi riêng?

Mỗi file được nạp dưới dạng module (`<script type="module">` hoặc `import`) được JavaScript chạy trong một **phạm vi module** (module scope) riêng, giống như mỗi file được bọc trong một hàm. Vì vậy:

- Biến, hàm khai báo ở cấp cao nhất của module **không** được gắn vào đối tượng toàn cục `window`. Ví dụ `const chiTieu` trong `main.js` không trở thành `window.chiTieu`.
- Hai module cùng khai báo một biến tên giống nhau cũng không đè lên nhau, vì mỗi biến nằm trong phạm vi của file mình.
- Bên ngoài chỉ dùng được những gì module **chủ động `export`**, và nơi dùng phải **chủ động `import`**. Mọi thứ khác là riêng tư của module.

Cơ chế này giúp tránh xung đột tên biến khi dự án có nhiều file, và mỗi module chỉ lộ ra đúng phần cần chia sẻ. Ngược lại, với `<script>` thường, mọi biến cấp cao nhất đều nằm chung một phạm vi toàn cục, nên rất dễ bị ghi đè lẫn nhau.

## Ghi chú khi chạy

Module ES không chạy được khi mở file trực tiếp (`file://`), vì trình duyệt chặn vì lý do bảo mật (CORS). Cần mở qua một máy chủ, ví dụ Live Server trong VS Code/Cursor, hoặc:

```
npx serve lab7
```

Để kiểm chứng dynamic import: mở DevTools, tab **Network**, tải lại trang. Lúc đầu chỉ thấy `main.js`, `tinhToan.js`, `dinhDang.js`. Bấm **Xem biểu đồ** thì `bieuDo.js` mới xuất hiện trong danh sách request.
