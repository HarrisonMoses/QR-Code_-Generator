function genQR() {
  //Parameter for removing the white background from the QR [chf=bg,s,65432100&]
  var gapi = "https://chart.googleapis.com/chart?cht=qr&chs=";
  var myimg = document.getElementById("img");
  var mytext = document.getElementById("qrtext").value;
  var mysize = document.getElementById("size").value;

  if (mytext !== "") {
    myimg.src = gapi + mysize + "&chl=" + mytext;
    // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
  } else {
    alert("Please Enter Text");
  }
}
