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
