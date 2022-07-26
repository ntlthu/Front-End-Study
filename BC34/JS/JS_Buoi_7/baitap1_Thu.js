// Khai báo mảng
var listNumber = [];

document.getElementById("btnThemso").onclick = function () {
  //   // Khai báo mảng
  //   var listNumber = []; nếu khai bảo mảng bên trong function thì khi chạy mảng nó chỉ lưu được số đã thêm sau cùng thôi, để giải quyết vấn đề thì cần khai báo mảng bên ngoài global luôn
  //Lấy thông tin người dùng nhập
  var number = document.getElementById("number").value * 1;
  //Thêm number vào mảng listNumber
  listNumber.push(number);

  //   console.log(listNumber);
};

/**
 * Xuat so
 */
document.getElementById("btnXuatso").onclick = function () {
  var content = "";
  for (var i = 0; i < listNumber.length; i++) {
    content += listNumber[i] + " ";
  }
  document.getElementById("showInfo").innerHTML = content;
};
