function cal_persentage1(){
    let precent =document.getElementById("percent").value;
    let num = document.getElementById("num").value;
    document.getElementById("value1").value=(num/100)*precent;
}
function cal_persentage2(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    document.getElementById("value2").value=(num1*100)/num2+"%";
}