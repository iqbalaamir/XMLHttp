function flags() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].flags);
            }
        }
    };
    xhr.send();

}

function details() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            for (var i = 0; i < data.length; i++) {
                console.log("Names:-",data[i].name);
                console.log("Region:-",data[i].region);
                console.log("SubRegion:-",data[i].subregion);
                console.log("Population:-",data[i].population);
            }
        }
    };
    xhr.send();  
}
