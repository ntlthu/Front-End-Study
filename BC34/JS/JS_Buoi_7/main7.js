// var u1 = "Nguyen";
// var u2 = "Tung";
// var u3 = "Thien";
// var u4 = "Van";
// var u5 = "Tuan";

/**
 * Array (mảng) - giúp tạo danh sách, giá trị của array được đóng bằng dấu ngoặc vuông
 */

var listUser = ["Nguyen", "Tung", "Thien", "Van", "Tuan"];
console.log(listUser);
console.log("Độ dài mảng: " + listUser.length);
// phần tử đầu tiên trong mảng là 0, phần tử cuối cùng trong mảng là length - 1
//Xuất từng phần tử:
// console.log(listUser[0]);
// console.log(listUser[1]);
// console.log(listUser[2]);
// console.log(listUser[3]);
// console.log(listUser[4]);

// Sử dụng vòng lặp:
for (var i = 0; i < listUser.length; i++) {
  //   console.log(listUser[i]);
  console.log("listUser[" + i + "]: " + listUser[i]);
}
/**
 * cách viết ở trên là
 * List ra dạng sau:
 * listUser[0]: Nguyen
 * listUser[1]: Tung
 * listUser[2]: Thien
 */

var listNumber = [];
// phương thức thêm phần tử mình mong muốn vào array (muốn push bao nhiêu số cũng được):
listNumber.push(10);
listNumber.push(50);
listNumber.push(100);
console.log(listNumber);

for (var i = 0; i < listNumber.length; i++) {
  console.log(listNumber[i]);
}
