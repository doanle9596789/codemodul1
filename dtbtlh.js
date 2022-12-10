 function A(){
    let x=document.getElementById("n1").value;
     let y=document.getElementById("n2").value;
     let z=document.getElementById("n3").value;
     //alert(( parseInt(x)+parseInt(y)+parseInt(z))/3)
     let result=0;
     result= (parseInt(x)+parseInt(y)+parseInt(z))/3;
    document.getElementById("ip").value=result;


 }