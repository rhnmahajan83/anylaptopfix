function sendSms() {
    var sender = document.getElementById("name").value;
    // var senderNumber = document.getElementById("senderNumber").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var finalMessage = "Hi this is " + sender + ", My email Id is: " + email + ", Query: " + message;
    // var SenderInfo = "Sender Name: " + sender + "," + "senderNumber: " + senderNumber;
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://www.fast2sms.com/dev/bulk?authorization=Ql4F9ruTKWmcPONnEY1CVqsDfpIvk7XMRUAG2i6otZyzjaH05BkRvUPgVcWmpsAM097FCB2LytGr1lNI&sender_id=FSTSMS&message=" + finalMessage + "&language=english&route=p&numbers=9767057490,8421878407",
      "method": "GET",
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
      alert("Message Sent successfully")
    });
  }