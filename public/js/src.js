
fetch('/get_random_pic?search=random').then((response) => {
    response.json().then((data) => {
        // console.log(data.datalist);
        for (i = 0; i < data.datalist.length; i++) {
            document.getElementById('image_container').innerHTML += '<div class="col-4"><img class="desk-image" src="https://live.staticflickr.com/' + data.datalist[i].server + '/' + data.datalist[i].id + '_' + data.datalist[i].secret + '_w.jpg"></div>'
        }
    })
    document.getElementById('loader-desk').style.display = "none";
    document.getElementById('image_container').style.display = "flex";
})


function myFunction(val) {
    // alert(val)
    document.getElementById('loader-desk').style.display = "inline-block";
    document.getElementById('image_container').style.display = "none";
    fetch('/get_random_pic?search=' + val).then((response) => {
        response.json().then((data) => {
            if (data.datalist.length == 0) {
                document.getElementById('image_container').innerHTML = '<div style="width:100%;text-align:center;font-size:30px;color:#000;font-weight:500">No Result Found!</div>'
            } else {
                console.log(data.datalist);
                document.getElementById('image_container').innerHTML = " "
                for (i = 0; i < data.datalist.length; i++) {
                    document.getElementById('image_container').innerHTML += '<div class="col-4"><img class="desk-image" src="https://live.staticflickr.com/' + data.datalist[i].server + '/' + data.datalist[i].id + '_' + data.datalist[i].secret + '_w.jpg"></div>'
                }
            }

        })
        document.getElementById('loader-desk').style.display = "none";
        document.getElementById('image_container').style.display = "flex";
    })
}