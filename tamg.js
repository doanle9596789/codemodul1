function D(){
    let a=document.getElementById("n1").value;
    let b=document.getElementById("n2").value;
    let c=document.getElementById("n3").value;
    if((parseInt(a)+parseInt(b))>parseInt(c)
    &&(parseInt(b)+parseInt(c))>parseInt(a)
     &&(parseInt(a)+parseInt(c)) >parseInt(b)
    )
        alert(true)
    else {
        alert(false)
    }


}