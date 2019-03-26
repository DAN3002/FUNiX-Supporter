# Lab Downloader
One bookmarklet to quick save Lab assignment on Hacker Rank.
## Installing

<<<<<<< HEAD
**Step 1: **Creat one bookmark on your browser.
**Step 2: **Copy code into `URL` .
**Step 3: **Save and Enjoy.
=======
**Step 1:** Creat one bookmark on your browser.

**Step 2:** Copy code into `URL` .

**Step 3:** Save and Enjoy.
>>>>>>> b3a1d2d9e7d983b20e27e5a676362f5942609974

## Code
```
javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3Bfunction%20download(data%2C%20filename%2C%20type)%20%7Bvar%20file%20%3D%20new%20Blob(%5Bdata%5D%2C%20%7Btype%3A%20type%7D)%3Bif%20(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(file%2C%20filename)%3Belse%20%7Bvar%20a%20%3D%20document.createElement(%22a%22)%2Curl%20%3D%20URL.createObjectURL(file)%3Ba.href%20%3D%20url%3Ba.download%20%3D%20filename%3Bdocument.body.appendChild(a)%3Ba.click()%3BsetTimeout(function()%20%7Bdocument.body.removeChild(a)%3Bwindow.URL.revokeObjectURL(url)%3B%7D%2C%200)%3B%7D%7D%24('.CodeMirror-foldgutter-open').each(function(index%2C%20el)%20%7B%24(el).trigger('click')%3B%7D)%3Bvar%20text%20%3D%20%22%22%3B%24(%22.CodeMirror-code%3Ediv%3E.CodeMirror-line%22).each(function(index%2C%20el)%20%7Btext%20%3D%20text%20%2B%20%24(el).text()%20%2B%20%22%5Cr%5Cn%22%3B%7D)%3Bvar%20title%20%3D%20%24(%22.hr_tour-challenge-name%22).text()%3Btitle%20%3D%20title.replace(%2F%5Cs%2Fg%2C%22%22)%3Btext%20%3D%20text.replace(%2F%5B%5Cu00A0%5Cu1680%E2%80%8B%5Cu180e%5Cu2000-%5Cu2009%5Cu200a%E2%80%8B%5Cu200b%E2%80%8B%5Cu202f%5Cu205f%E2%80%8B%5Cu3000%5D%2Fg%2C'')%3Btext%20%3D%20text.replace(%2F%5B%5E%5Cx00-%5Cx7F%5D%2Fg%2C%20%22%22)%3Bdownload(text%2C%20title%20%2B%20%22.java%22%2C%20%22text%22)%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.11.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```
## Demo
![Demo](https://github.com/DAN3002/FUNiX-Supporter/blob/master/Lab%20Downloader/Demo.gif "Demo")
## Build With

* JavaScript.

## Author
D.A.N_3002

* Youtube Channel: https://www.youtube.com/channel/UCp8h46TWMs1qjeepv_QWJkA
* Gmail: dinhanh300229@gmail.com

