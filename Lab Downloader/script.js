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

$('.CodeMirror-foldgutter-open').each(function(index, el) {
   $(el).trigger('click');
});

var text = "";
$(".CodeMirror-code>div>.CodeMirror-line").each(function(index, el) {
    text = text + $(el).text() + "\r\n";
});
var title = $(".hr_tour-challenge-name").text();
title = title.replace(/\s/g,"");
text = text.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000]/g,'');
text = text.replace(/[^\x00-\x7F]/g, "");
download(text, title + ".java", "text");