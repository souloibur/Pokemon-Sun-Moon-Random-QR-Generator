function makeid(){

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 20; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
	
}

function generateQR(){
	document.getElementById("qrcode").innerHTML = "";
	new QRCode(document.getElementById("qrcode"), makeid());
}

window.setInterval(function(){
	generateQR();
}, 10000);