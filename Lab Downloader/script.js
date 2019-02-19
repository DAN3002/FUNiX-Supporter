function download(data, filename, type) {
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
}

var text = "";
$(".CodeMirror-code>div>.CodeMirror-line").each(function(index, el) {
    text = text + $(el).text() + "\r\n";
});
var title = $(".hr_tour-challenge-name").text();
title = title.replace(/\s/g,"");
download(text, title + ".java", "text");