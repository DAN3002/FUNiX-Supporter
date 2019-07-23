javascript:(function(){
   newWindow = window.open("", null, "height=600,width=600,status=yes,toolbar=no,menubar=no,location=no");
   newWindow.download = function(data, filename, type) {
       var file = new Blob([data], {type: type});
       if (window.navigator.msSaveOrOpenBlob)
           window.navigator.msSaveOrOpenBlob(file, filename);
       else {
           var a = document.createElement("a"),
                   url = URL.createObjectURL(file);
           a.href = url;
           a.download = filename;
           document.body.appendChild(a);
           a.click();
           setTimeout(function() {
               document.body.removeChild(a);
               window.URL.revokeObjectURL(url);
           }, 0);
       }
   };
   newWindow.title = document.getElementsByClassName("challenge-title")[0].textContent;
   newWindow.save = function() {
      let str = newWindow.document.getElementsByTagName('textarea')[0].value;
      newWindow.download(str, newWindow.title + ".html", "text");
      newWindow.close();
   };
   newWindow.document.write("<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css' integrity='sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu' crossorigin='anonymous'>");
   newWindow.document.write("<h1 class = 'display-4' style='width:600px;text-align:center;'>Input your code here!</h1>");
   newWindow.document.write("<textarea class = 'form-control' style='width:560px;height:400px;margin:10px 20px;font-size:20px;'></textarea>");
   newWindow.document.write("<br>");
   newWindow.document.write("<button class='btn btn-success' onclick='save();' type='button' style='font-size:20px;width:200px;margin-left:200px;margin-right:200px;'>Download Code</button>");
})()
