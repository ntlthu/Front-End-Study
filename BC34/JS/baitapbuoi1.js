// Bài 1:tính tiền lương nhân viên
console.log("Bài 1: Tính tiền lương nhân viên");
 // SƠ ĐỒ 3 KHỐI
 //INPUT: luongMotNgay = 100000
 // soNgayLam
 // PROCESS: 1) Tìm cách lấy được input (hardcode)
 // 2) Tính lương: số ngày làm * lương 1 ngày
 // 3) In lương tính được ra màn hình
 //OUTPUT: tính tongLuong = luongMotNgay * soNgayLam
 

var luongMotNgay = 100000;
var soNgayLam = 28;
var tongLuong = luongMotNgay * soNgayLam;
console.log("Lương 1 ngày =", luongMotNgay, "VND");
console.log("Số ngày làm việc = ", soNgayLam);
console.log("Tổng Lương = ", tongLuong, "VND");

//Bài 2: Tính giá trị trung bình
 //SƠ ĐỒ 3 KHỐI
 //INPUT: giả sử 5 số thực được nhập là: 20 , 21, 22, 23, 24, 25
 //soNgayLam
 //PROCESS: 1) Đặt biến cho các số thực
 //2) Đặt biến công thức tính số thực var averageValue = (num1 + num2 + num3 + num4 + num5) / 5
 //3) In lương tính được ra màn hình
 //OUTPUT: averageValue = (num1 + num2 + num3 + num4 + num5) / 5

console.log("Bài 2: Tính giá trị trung bình 5 số thực");
console.log("5 số thực được nhập vào là: 20 , 21, 22, 23, 24, 25");
var num1 = 20;
var num2 = 21;
var num3 = 22;
var num4 = 23;
var num5 = 25;
var averageValue = (num1 + num2 + num3 + num4 + num5) / 5;
console.log("Giá trị trung bình 5 số thực = ", averageValue);

//Bài 3: Quy đổi tiền
 //INPUT: Hardcode số tiền cần đổi = 10USD
 //Tỷ giá = 1USD = 23.500VND
 //PROCESS:
 //B1. Đặt biến USDrate, totalUSD
 //B2. Đặt biến công thức tính quy đổi = totalUSD * USDrate
 //OUTPUT: exchangeToVND = totalUSD * USDrate

console.log("Bài 3: Quy đổi tiền");
console.log("Tỷ giá 1USD = 23.500VND");
var USDrate = 23500;
var totalUSD = 10;
var exchangeToVND = totalUSD * USDrate;
console.log("10 USD đổi được:", exchangeToVND, "VND");

//Bài 4: Tính diện tích, chu vi hình chữ nhật
/**
 * INPUT: Hardcode chiều dài = 40, chiều rộng =30
 * PROCESS:
 *   B1. Đặt biến chieuDai, chieuRong
 *   B2. Đặt biến công thức tính của dienTich = chieuDai * chieuRong
 *       Đặt biến công thức tính của chuVi =  (chieuDai + chieuRong) * 2
 * OUTPUT: dienTich = chieuDai * chieuRong; chuVi = (chieuDai + chieuRong) * 2
 */

console.log("Bài 4: Tính diện tích, chu vi hình chữ nhật có:");
var chieuDai = 40;
var chieuRong = 30;
var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;
console.log("Chiều Dài = ", chieuDai);
console.log("Chiều Rộng = ", chieuRong);
console.log("Diện Tích = ", dienTich);
console.log("Chu vi = ", chuVi);

/**Bài 5: Tính tổng 2 ký số
 * INPUT: Hardcode number = 

// var n = 42;
// var number1 = n % 10;//2
// var number 2 = Math.floor(n / 10);
// //Math.floor là làm tròn xuống của phép chia lấy hết
