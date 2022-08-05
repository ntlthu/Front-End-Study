var listNumber = []; // khai báo mảng
document.getElementById("themSo").onclick = function () {
  var themSo = document.getElementById("inputNumber1").value * 1; // lấy input từ người dùng nhập

  // Thêm number vào mảng listNumber ( lấy value từ người dùng nhập và tích hợp vào mảng)
  listNumber.push(themSo); //nếu khai cách này thì mỗi lần thêm nó sẽ tạo thành 1 mảng riêng, ko tích hợp vào chung 1 mảng được, lý do là var listNumber đang được khai báo ở local bên trong mảng đó thôi, nên mỗi lần chạy nó tạo ra 1 mảng khác nhau, cần phải mang mảng đó ra khai báo ở global thì các value sẽ được tích hợp khi người dùng nhập số
};

document.getElementById("xuatSo").onclick = function () {
  //cách 1   document.getElementById("showInfo").innerHTML = listNumber;
};
