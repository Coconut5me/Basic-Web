function giaiptb1(){
    //alert("chien")
    //alert(myform.c.value)
    a=eval(myform.a.value)
    b=eval(myform.b.value)
    c=eval(myform.c.value)
    ketqua=document.getElementById("result")
    d= b*b-4*a*c
    if(d>0)
    {
        x1=(-b + Math.sqrt(d))/(2*a)
        x2=(-b - Math.sqrt(d))/(2*a)
        ketqua.innerHTML="x1 = "+x1+"; x2 = "+x2
    }
    else if(d==0)
    {
        x=-b/(2*a)
        ketqua.innerHTML="x = "+x
    }
    else
    {
        ketqua.innerHTML="No solution"
    }    
}