inputToan = prompt("Enter the toan");
inputLy = prompt ('Enter the LY' );
inputhoa = prompt ( "en ter the hoa");
inputSinhhoc = prompt ("enter the sinh hoc");
let Toan = parseInt(inputToan);
let ly = parseInt(inputLy);
let hoa = parseInt(inputhoa);
let sinhhoc =parseInt(inputSinhhoc);
let dtb =  (Toan+ly+hoa)/3
document.write(" dtb " +dtb)