function SimInt() {
	var p = parseInt(document.getElementById('p').value);
	var r = parseInt(document.getElementById('r').value);
	var t = parseInt(document.getElementById('t').value);
	document.getElementById("si").innerHTML =p*r*t/100;
}
function ComInt(){
    var p = parseInt(document.getElementById('p').value);
	var r = parseInt(document.getElementById('r').value);
	var t = parseInt(document.getElementById('t').value);
    document.getElementById("ci").innerHTML= p*Math.pow(1+(r/100),t)-p;
}
function sip(){
    var p = parseInt(document.getElementById('p').value);
	var r = parseInt(document.getElementById('r').value);
	var t = parseInt(document.getElementById('t').value)*12;
    var i= r/100/12;
    var sip = document.getElementById("sip").innerHTML= p*[Math.pow((1+i),t)-1]*((1+i)/i);
    document.getElementById("int").innerHTML=p*[Math.pow((1+i),t)-1]*((1+i)/i)-(p*t);
    document.getElementById("inv").innerHTML=p*t;
}
function Lumpsum(){
	var p = parseInt(document.getElementById('p').value);
	var r = parseInt(document.getElementById('r').value);
	var t = parseInt(document.getElementById('t').value);
	var lum=document.getElementById("lump").innerHTML=p*Math.pow((1+r/100),t);
	document.getElementById("int_lump").innerHTML=lum-p;
}