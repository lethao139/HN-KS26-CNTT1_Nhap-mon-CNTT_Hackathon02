const danhSachBangGia = [
  { ma: "G-1H", ten: "Goi choi 1 gio", gia: 60000 },
  { ma: "G-2H", ten: "Goi choi 2 gio", gia: 100000 },
  { ma: "G-NGAY", ten: "Goi ca ngay", gia: 150000 },
  { ma: "G-SN", ten: "Goi sinh nhat", gia: 300000 },
];

function hienThiGoiChoi() {
  const bang = document.getElementById("bang-gia");
  for (const muc of danhSachBangGia) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = muc.ma;
    dong.insertCell().textContent = muc.ten;
    dong.insertCell().textContent = muc.gia.toLocaleString("vi-VN");
  }
}

hienThiGoi();
