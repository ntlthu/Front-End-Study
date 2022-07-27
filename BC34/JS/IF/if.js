document.getElementById("chuyendoiSo").onclick = function () {
  var number1 = document.getElementById("number1").value * 1;

  var ketQua = 0;

  ketQua = number1;

  if (ketQua < 0) {
    ketQua = -ketQua;
  } else {
    ketQua = ketQua;
  }
  document.getElementById("thongBaoSo").innerHTML = "Số quy đổi = " + ketQua;
};

document.getElementById("baoKetQua").onclick = function () {
  var getNumber = document.getElementById("getNumber").value * 1;
  var chanLe = "";
  if (getNumber % 2 == 0) {
    chanLe = "Đây là số chẵn";
  } else {
    chanLe = "Đây là số lẻ";
  }

  document.getElementById("showKetQua").innerHTML = chanLe;
};

document.getElementById("xepLoai").onclick = function () {
  var getDiemTrungBinh = document.getElementById("getDiemTrungBinh").value * 1;
  var ketQuaXepLoai = "";

  if (getDiemTrungBinh >= 5) {
    ketQuaXepLoai = "Đậu";
  } else {
    ketQuaXepLoai = "Rớt";
  }

  document.getElementById("showXepLoai").innerHTML = ketQuaXepLoai;
};

document.getElementById("maxNumber").onclick = function () {
  var getNumber1 = document.getElementById("nhapN1").value * 1;
  var getNumber2 = document.getElementById("nhapN2").value * 1;
  var maxNumber = getNumber1;
  if (maxNumber < getNumber2) {
    maxNumber = getNumber2;
  }
  document.getElementById("printMaxNum").innerHTML = maxNumber;
};

document.getElementById("salary").onclick = function () {
  var soGioLam = document.getElementById("workHour").value * 1;
  var luongMotGio = document.getElementById("luongGio").value * 1;

  //input : soGioLam > 40 , thi luongOT = (soGioLam - 40) *luongMotGio * 1.5
  // tongLuong khi soGioLam > 40 = luongOT + (40 * luongMotGio)
  // nếu số giờ làm <=40 thì tongLuong = soGioLam * luongMotGio

  var luongOT = (soGioLam - 40) * luongMotGio * 1.5;
  var luongKhongOT = soGioLam * luongMotGio;
  var tongLuong = 0;
  if (soGioLam <= 40) {
    tongLuong = luongKhongOT;
  } else {
    tongLuong = 40 * luongMotGio + luongOT;
  }
  document.getElementById("thongBaoLuong").innerHTML =
    "Tổng lương = " + tongLuong;
};

document.getElementById("ToanLyHoa").onclick = function () {
  var diemToan = document.getElementById("diemToan").value * 1;
  var diemLy = document.getElementById("diemLy").value * 1;
  var diemHoa = document.getElementById("diemHoa").value * 1;
  var trungBinh = (diemToan + diemLy + diemHoa) / 3;
  var xepLoaiHocLuc = "";

  //xếp loại:
  if (trungBinh >= 8.5) {
    xepLoaiHocLuc = "Giỏi";
  } else if (6.5 <= trungBinh && trungBinh < 8.5) {
    xepLoaiHocLuc = "Khá";
  } else if (5 <= trungBinh && trungBinh < 6.5) {
    xepLoaiHocLuc = "TB";
  } else {
    xepLoaiHocLuc = "Yếu";
  }
  document.getElementById("inXepLoai").innerHTML = "Xếp loại: " + xepLoaiHocLuc;
};
