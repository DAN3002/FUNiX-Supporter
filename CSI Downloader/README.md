## CSI Downloader
One bookmarklet to quick save file assignment on stanford for CSI.
## Installing
**Step 1: **Creat one bookmark on your browser.
**Step 2: **Copy code into `URL` .
**Step 3: **Save and Enjoy.

##  Code
```
javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3Bfunction%20download(data%2C%20filename%2C%20type)%20%7Bvar%20file%20%3D%20new%20Blob(%5Bdata%5D%2C%20%7Btype%3A%20type%7D)%3Bif%20(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(file%2C%20filename)%3Belse%20%7Bvar%20a%20%3D%20document.createElement(%22a%22)%2Curl%20%3D%20URL.createObjectURL(file)%3Ba.href%20%3D%20url%3Ba.download%20%3D%20filename%3Bdocument.body.appendChild(a)%3Ba.click()%3BsetTimeout(function()%20%7Bdocument.body.removeChild(a)%3Bwindow.URL.revokeObjectURL(url)%3B%7D%2C%200)%3B%7D%7Dvar%20name%20%3D%20prompt(%22Input%20file%20name%22)%3Bdownload(%24(%22textarea%22).val()%2Cname%20%2B%20%22.txt%22%2C%22.txt%22)%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.11.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```
## Demo
![Demo](https://github.com/DAN3002/FUNiX-Supporter/blob/master/CSI%20Downloader/Demo.gif "Demo")
## Build With

* JavaScript.

## Author
D.A.N_3002

* Youtube Channel: https://www.youtube.com/channel/UCp8h46TWMs1qjeepv_QWJkA
* Gmail: dinhanh300229@gmail.com
