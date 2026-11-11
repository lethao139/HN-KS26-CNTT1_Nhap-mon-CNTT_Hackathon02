# BÀI LÀM – HACKATHON 02

- **Mã đề:** 04
- **Họ tên:**Lê Minh Thảo
- **Lớp:**
- **Link repository:**
- **Hệ điều hành (Windows/macOS):**

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
pwd
 Get-ChildItem -Force
 Move-Item noi_quy_khu_choi.txt docs\
mkdir backup
 Copy-Item data\ve_vao_cong_thang_4.xlsx backup\
 Remove-Item temp_404.tmp
  cd logs
 Get-ChildItem
 cd ..
tree /f   
```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text
Folder PATH listing
Volume serial number is BCA7-8821
C:.
│   .env
│   bai_lam.md
│
├───backup
│       ve_vao_cong_thang_4.xlsx
│
├───data
│       ve_vao_cong_thang_4.xlsx
│
├───docs
│       noi_quy_khu_choi.txt
│
├───evidence
├───logs
│       entry.log
│
└───web
    │   app.js
    │   index.html
    │   style.css
    │
    └───images
            logo-kidland.png

```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=500

```shell
Get-Content logs\entry.log | Select-String "status=500" > logs\loi_500.txt

```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
2026-04-28 08:11:50 POST /api/thanh-toan status=500
2026-04-28 08:21:23 POST /api/dat-tiec status=500
```

### b) Lệnh đếm số dòng status=404 và kết quả

```shell
Get-Content logs\entry.log | Select-String "status=404" | Measure-Object

```

```text
Count    : 4
Average  :
Sum      :
Maximum  :
Minimum  :
Property :

```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\tong_hop.ps1
```

### Nội dung file logs/tong_hop.txt

```text
=== BAO CAO SU CO WEBSITE ===

2026-04-28 08:23:34 GET /ve-tet-2025 status=404
2026-04-28 08:29:56 GET /images/nha-bong-2.jpg status=404
2026-04-28 08:49:51 GET /images/nha-bong-2.jpg status=404
2026-04-28 09:00:35 GET /tin-tuc status=404

2026-04-28 08:11:50 POST /api/thanh-toan status=500
2026-04-28 08:21:23 POST /api/dat-tiec status=500
2026-04-28 08:41:29 POST /api/mua-ve status=500
2026-04-28 08:45:40 POST /api/dat-tiec status=500
2026-04-28 08:53:13 POST /api/dat-tiec status=500
2026-04-28 09:03:46 POST /api/dat-tiec status=500
```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [x] README.md: Heading 1, mô tả có **in đậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [x] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | --- | --- | --- |
| 1 | Network | ERR_FILE_NOT_FOUND | Sửa lại đường dẫn ảnh thành logo-kidland.png |
| 2 | Console | Uncaught ReferenceError: hienThiGoi is not defined | Kiểm tra và sửa dữ liệu hoặc biến được sử dụng trong app.js:18 |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:** Mở file web/index.html bằng Chrome và tải lại trang bằng Ctrl + Shift + R.
- **Expected:** Logo hiển thị đúng và bảng giá hiển thị dữ liệu.
- **Actual:** Logo không hiển thị, bảng giá không có dữ liệu.
- **Log:** Uncaught ReferenceError: hienThiGoi is not defined

### Câu tìm kiếm Google

```text
site:stackoverflow.com "Uncaught ReferenceError: hienThiGoi is not defined"
```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/ve_vao_cong_thang_4.xlsx`, không cần ghi vào đây.
