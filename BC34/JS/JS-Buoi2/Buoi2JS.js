//khi người dùng click thì hành động trong function mới diễn ra

function thayDoiNoiDung() {
  // document.getElementById ():là lệnh dùng để truy xuất đến thẻ html thông qua id
  var tagContent = document.getElementById("content");

  // .innerHTML: Thay đổi nội dung giữa 2 thẻ đóng mở <div>innerHTML</div>
  tagContent.innerHTML = "Hello BC34";
  // .value: thay đổi nội dung của thẻ input (text)
  var tagInput = document.getElementById("text");
  tagInput.value = "12345678";
  // .src : là thuộc tính quy định source của hình
  var tagImg = document.getElementById("imageB4");
  tagImg.src = "./img/b5.jpg";
  //nếu máy mac ko nhắc lệnh thì bấm option + esc, còn window thì bấm control + space hoặc tab
  // className: là thuộc tính thay đổi tên class
  tagImg.className = "mt-2";
}

//để hàm chạy khi người dùng click vào thì để onclick ="" trong thẻ html

// Bài tập 1
//Các bước khi làm bài tập:
// - dàn layout hoàn chỉnh (code html, css)
//- xác định xử lý của người dùng

function changeContentOfP() {
  // alert(123); lệnh này dùng để check xem nhấn button nó có ăn không
  var changePContent = document.getElementById("noiDung");
  changePContent.innerHTML = "Đã change rồi nhé";
  // dùng js để thay đổi css: .style.[thuộc_tính_css]
  changePContent.style.color = "red";
  changePContent.style.border = "1px solid red";
  // các thẻ có thuộc tính css từ 2 từ trở lên thì from từ thứ 2 trở đi sẽ viết hoa ký tự đầu tiên
  changePContent.style.borderRadius = "5px";
}

function changeColor() {
  //input: color mà user chọn: string
  var color = document.getElementById("color").value;
  //output: màu của ngôi nhà : string
  var output = "";
  //process
  output = color;
  //Hiển thị output lên giao diện
  document.getElementById("home").style.color = output;
}
//Bài Tập 3: Xây dựng ứng dụng khi người dùng bấm vào nút bật đèn thì hiển thị đèn sáng và ngược lại
function batDen() {
  document.getElementById('lightBulb').src = './img/BAT_TAT_DEN/pic_bulbon.gif';
  document.getElementById('btnBatDen').className = 'btn btn-success';
  document.getElementById('btnTatDen').className = '';
}
function tatDen() {
  document.getElementById('lightBulb').src = './img/BAT_TAT_DEN/pic_bulboff.gif';
  document.getElementById('btnTatDen').className = 'btn btn-success';
  document.getElementById('btnBatDen').className = '';
}

// //Bài tập 4: Xây dựng ứng dụng để disable xử lý của 1 button
// function handleDisabledButton() {
//   var btn = document.getElementById('btn');
//   btn.disabled = true;
// }
// // .onclick: Định nghĩa sự kiện click cho thẻ button. Lưu ý giá trị nhận là 1 hàm chưa gọi (không có ())
// // var btnClick = document.getElementById('btnClick');
// // btnClick.onclick = handleDisabledButton;

//Viết tắt:
document.getElementById('btnClick').onclick = function () {
  var btn = document.getElementById('btn');
  btn.disabled = true;
}

//Bài tập 5:
// document.getElementById("btnDangNhap").onclick = function () {
//   //Xử lý
//   //input: taiKhoan: string, matKhau: string
//   var taiKhoan = document.getElementById('taiKhoan').value;
//   var matKhau = document.getElementById('matKhau').value;
//   // output:
//   var ketQua = '';
//   //process:
//   ketQua = 'Tài khoản:' + taiKhoan + '-' + 'Mật Khẩu:' + matKhau;
//   //Hiển thị output ra giao diện
//   document.getElementById('thongBao').innerHTML = ketQua;
//   document.getElementById('thongBao').className = 'bg-success text white p-2 rounded';
// }
document.getElementById("btnDangNhap").onclick = function () {
  var taiKhoan = document.getElementById('taiKhoan').value;
  var matKhau = document.getElementById('matKhau').value;
  var ketQua = '';
  ketQua += "<p>Tài khoản: " + taiKhoan + " </p>";
  ketQua += "<p>Mật khẩu: " + matKhau + " </p>";
  document.getElementById('thongBao').innerHTML = ketQua;
  document.getElementById('thongBao').className = 'bg-success text white p-2 rounded';
}


function taoTheP() {
  // console.log(123);
  //Tạo thẻ p, cách 1:
  // var tagP = '<p>Thẻ p</p>';
  // document.getElementById('myDiv').innerHTML = tagP;
  //Tạo thẻ p, cách 2:
  var tagP = document.createElement('p');
  //Tạo nội dung cho thẻ p
  tagP.innerHTML = 'Thẻ p';
  //gắn thẻ p vào div:
  document.getElementById('myDiv').appendChild(tagP);
}

//Tính tiền tip
document.getElementById('btnTinhNao').onclick = function () {
  // đầu vào: dom lấy value từ người dùng nhập
  var tienThanhToan = document.getElementById('tienThanhToan').value;
  var slTip = document.getElementById('slTip').value;
  var share = document.getElementById('share').value;
  // xử lý: 100 * 30/100 / 3
  var tongSoTienTip = '';
  tongSoTienTip = (tienThanhToan * slTip) / 100 / share;
  // // Hiển thị kết quả ra màn hình:
  var showInfo = '';
  showInfo += "<p>TIP AMOUNT</p>";
  showInfo += "<p>" + tongSoTienTip + "</p>";
  showInfo += "<p>Mỗi người</p>";

  document.getElementById('thongBaoTienTip').innerHTML = showInfo;
  //style cho thẻ div thông báo
  // document.getElementById('thongBaoTienTip').className = 'bg-success text-white p-2 rounded mt-2';
  //tốt nhất là không nên dùng .className vì nó sẽ bỏ các class trước đó đã set cho thẻ, nếu trước đó thêm quá nhiều class thì sẽ ko thể control hết được, ko thể đi copy lại hết các class đã có ở trước được.
  // giải pháp là xài .classList.add();
  document.getElementById('thongBaoTienTip').classList.add('bg-success');
  document.getElementById('thongBaoTienTip').classList.add('text-white');
  document.getElementById('thongBaoTienTip').classList.add('p-2');
  document.getElementById('thongBaoTienTip').classList.add('rounded');
  // nhưng xài .classList.add() thì mỗi lần chỉ add được 1 class thôi, còn TH muốn add thêm 1 class mới thì phải viết thêm 1 dòng mới
}
