function doit() {


    let a = document.getElementById('amount').value;
    let b = document.getElementById('from').value;
    let c = document.getElementById('to').value;
    let result=0;
    if (c == b) {
     result=a;
     document.getElementById("ip").value=result;
    }
    if (b == "VND" && c == "USD") {

    }
    if (b == "USD" && c == "VND") {
        result=(a*24000)
    }
}