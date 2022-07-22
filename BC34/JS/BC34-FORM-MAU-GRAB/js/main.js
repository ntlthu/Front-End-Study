const GRAB_X_1 = 8000;
const GRAB_X_2 = 7500;
const GRAB_X_3 = 7000;
const GRAB_X_WAIT = 2000;

const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;

var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tienCho = 0;
var tongTien = 0;

/**
 * Check Loai Xe
 */
function loaiXe() {
  var loaiXe = "";
  var grabX = document.getElementById("grabX");
  var grabSUV = document.getElementById("grabSUV");
  var grabBlack = document.getElementById("grabBlack");

  if (grabX.checked) {
    loaiXe = "grabX";
  } else if (grabSUV.checked) {
    loaiXe = "grabSUV";
  } else if (grabBlack.checked) {
    loaiXe = "grabBlack";
  }

  return loaiXe;
}

/**
 * Tinh tien
 */
document.getElementById("btnTinhTien").onclick = function () {
  var xe = loaiXe();
  var soKm = document.getElementById("soKm").value;
  var tgCho = document.getElementById("tgCho").value;

  switch (xe) {
    case "grabX":
      //tinh tien
      break;

    case "grabSUV":
      //tinh tien
      break;

    case "grabBlack":
      //tinh tien
      break;

    default:
      alert("Vui long chon loai xe");
      break;
  }
};
