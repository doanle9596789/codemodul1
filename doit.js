function doit(){


let a=document.getElementById('amount').value;
let b=document.getElementById('from').value;
let c=document.getElementById('to').value;
if (c==b){
    alert(a);
}
if (b == "VND" && c== "USD"){
    alert(a/24000+"$")
}
if (b=="USD" && c=="VND"){
    alert(a*24000+"đ")
}

}