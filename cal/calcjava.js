var exp='',number,decimal,equal=true,operator=false,allowSr= true;

function insertNum(num)
{
if(equal)
{exp=num;
document.getElementById("val").innerHTML=exp;
number=true;
equal=false;
}
else
{
exp=document.getElementById("val").innerHTML+num;
document.getElementById("val").innerHTML=exp;
number=true;
}
if(operator) 
{decimal=false;}
SR('a');
}
function insertOp(op)
{
exp=exp+op;
document.getElementById("val").innerHTML=exp;
operator=true;
equal=false;
allowSR=false;
SR('a');
}
function insertDec()
{
if(number&&!decimal)
{exp=exp+".";
document.getElementById("val").innerHTML=exp;
decimal=true;
operator=false;
}
}
function equalTo(){
if(exp)
{
exp=eval(exp);
document.getElementById("val").innerHTML=exp;
equal=true;
decimal=false;
number=false;
allowSR=true;
SR('a');
}
}
function cle()
{
exp='result';
document.getElementById("val").innerHTML=exp;
decimal=false;
equal=true;}
function back(){
exp=document.getElementById("val").innerHTML;
exp=exp.substring(0,exp.length-1);
document.getElementById("val").innerHTML=exp;
}
function SR(x)
{
if(x=='r')
{exp=Math.sqrt(exp);
document.getElementbyId("val").innerHTML=exp;}
else if(x=='s')
{exp=exp*exp;
document.getElementbyId("val").innerHTML=exp;
}
else if(x=='a'&&allowSR)
{document.getElementById('r').disabled=false;
document.getElementById('s').disabled=false;
}
else if(!allowSR){
document.getElementById('r').disabled=true;
document.getElementById('s').disabled=true;
}

}


