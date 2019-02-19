# Lab Downloader
One bookmarklet to quick save Lab assignment on Hacker Rank.
## Installing
**Step 1: **Creat one bookmark on your browser.
**Step 2: **Copy code into `URL` .
**Step 3: **Save and Enjoy.
## Code
```
javascript:(function()%7Bfunction callback()%7B(function(%24)%7Bvar jQuery%3D%24%3Bfunction download(data%2C filename%2C type) %7Bvar file %3D new Blob(%5Bdata%5D%2C %7Btype%3A type%7D)%3Bif (window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(file%2C filename)%3Belse %7Bvar a %3D document.createElement("a")%2Curl %3D URL.createObjectURL(file)%3Ba.href %3D url%3Ba.download %3D filename%3Bdocument.body.appendChild(a)%3Ba.click()%3BsetTimeout(function() %7Bdocument.body.removeChild(a)%3Bwindow.URL.revokeObjectURL(url)%3B%7D%2C 0)%3B%7D%7Dvar text %3D ""%3B%24(".CodeMirror-code>div>.CodeMirror-line").each(function(index%2C el) %7Btext %3D text %2B %24(el).text() %2B "%5Cr%5Cn"%3B%7D)%3Bvar title %3D %24(".hr_tour-challenge-name").text()%3Btitle %3D title.replace(%2F%5Cs%2Fg%2C"")%3Bdownload(text%2C title %2B ".java"%2C "text")%7D)(jQuery.noConflict(true))%7Dvar s%3Ddocument.createElement("script")%3Bs.src%3D"https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.11.1%2Fjquery.min.js"%3Bif(s.addEventListener)%7Bs.addEventListener("load"%2Ccallback%2Cfalse)%7Delse if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```
## Demo
![Demo](https://github.com/DAN3002/FUNiX-Supporter/blob/master/Lab%20Downloader/Demo.gif "Demo")
## Build With

* JavaScript.

## Author
D.A.N_3002

* Youtube Channel: https://www.youtube.com/channel/UCp8h46TWMs1qjeepv_QWJkA
* Gmail: dinhanh300229@gmail.com

