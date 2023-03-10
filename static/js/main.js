const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "lDFCyh4KEikWVdOsZYetvp50_QSX2Rnq");

const formdata = new FormData();
formdata.append("price", "20");
formdata.append("bedrooms", "1");
formdata.append("bathrooms", "1");
formdata.append("size", "1");
formdata.append("streetName", "Overtoom");
formdata.append("houseNumber", "21");
formdata.append("numberAddition", "1");
formdata.append("zip", "1181TY");
formdata.append("city", "Amsterdam");
formdata.append("constructionYear", "1960");
formdata.append("hasGarage", "false");
formdata.append("description", "Nice house!");

const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
};

fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
.then((response) => response.json())
.then((result) => {
    console.log(result);
    changeData(result);
});

function changeData(result) {
    
}