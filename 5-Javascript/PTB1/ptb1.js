function giaiptb1(){
    //alert("chien")
    //alert(myform.a.value)
    a=eval(myform.a.value)
    b=eval(myform.b.value)
    ketqua=document.getElementById("result")
    if(a==0 && b==0)
    {
        ketqua.innerHTML="Tùm lum nghiệm"
    }
    else if(a==0&&b!=0)
    {
        ketqua.innerHTML="Vô nghiệm"
    }
    else
    {
        ketqua.innerHTML=-b*1.0/a
    }
}