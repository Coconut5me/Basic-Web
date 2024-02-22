function timmax(){
    a=eval(myform.a.value);
    b=eval(myform.b.value);
    c=eval(myform.c.value);
    ketqua=document.getElementById("result");
    ketqua.innerHTML=Math.max(a,b,c);
}

function timmin(){
    a=eval(myform.a.value);
    b=eval(myform.b.value);
    c=eval(myform.c.value);
    ketqua=document.getElementById("result");
    ketqua.innerHTML=Math.min(a,b,c);
}

function timsin(){
    a=eval(myform.a.value);
    ketqua=document.getElementById("result");
    ketqua.innerHTML=Math.sin(a);
}

function timcos(){
    a=eval(myform.a.value);
    ketqua=document.getElementById("result");
    ketqua.innerHTML=Math.cos(a);
}

function timpow(){
    a=eval(myform.a.value);
    b=eval(myform.b.value);
    ketqua=document.getElementById("result");
    ketqua.innerHTML=Math.pow(a,b);
}