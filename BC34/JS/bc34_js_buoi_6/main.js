/**
 * Vòng lặp
 * while: là vòng lặp vô tận, ko biết chính xác số lần lặp, vậy nên quan trọng là bước nhảy để vòng lặp dừng lại
 * do while
 * for
 */
var n = 0;

while (n < 3) {
  //hanh dong
  console.log("Hello Cybersoft");
  //Buoc nhay
  n++;
}

/**
 * Chạy bằng tay
 * . n = 0; n < 3 => "Hello Cybersoft"; n = 1
 * . n = 1; n < 3 => "Hello Cybersoft"; n = 2
 * . n = 2; n < 3 => "Hello Cybersoft"; n = 3
 * . n = 3; n < 3 => false => stop
 */

/**
 * Chia cho 2
 */
document.getElementById("btnSubmit").onclick = function () {
  var number = document.getElementById("number").value;
  // đặt biến var number xem như là
  var content = "";

  while (number > 1) {
    number = Math.floor(number / 2);
    // lấy lại tên biến number đặt lại cho biểu thức trên để xem number là bước nhảy, chặn vòng lặp khi điều kiện trở thành false
    content += "<p>Number: " + number + "</p>";
  }

  document.getElementById("thongBao").innerHTML = content;
};

//do while
var m = 0;

do {
  //hanh dong
  console.log("Hello Cybersoft");
  m++;
} while (m < 3);

/**
 * . m = 0 => "Hello Cybersoft"; m = 1
 * . m = 1; m < 3 => "Hello Cybersoft"; m = 2;
 * . m = 2; m < 3 => "Hello Cybersoft"; m = 3;
 * . m = 3; m < 3 => false => stop
 */

/**
 * Tinh tong
 */
document.getElementById("btnSubmit2").onclick = function () {
  var number = document.getElementById("number2").value;
  var total = 0;
  var count = 0;

  do {
    total += count;
    count++;
  } while (count <= number);

  console.log(total);
};

//for
// for (var i = 0; i < 3; i++) {
//   console.log("Hello Cybersoft");
// }

/**
 * i = 0; i < 3 => "Hello Cybersoft"; i = 1
 * i = 1; i < 3 => "Hello Cybersoft"; i = 2
 * i = 2; i < 3 => "Hello Cybersoft"; i = 3
 * i = 3; i < 3 => false => stop
 */

/**
 * Tim so chan le
 */

document.getElementById("btnSubmit3").onclick = function () {
  var number = document.getElementById("number3").value;
  var soChan = "";
  var soLe = "";

  for (var i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      //so chan
      soChan += i + " ";
    } else {
      //so le
      soLe += i + " ";
    }
  }

  console.log(soChan);
  console.log(soLe);
};
