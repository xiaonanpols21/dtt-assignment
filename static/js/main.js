const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "lDFCyh4KEikWVdOsZYetvp50_QSX2Rnq");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        changeData(result);
    })
  .catch(error => console.log('error', error));

function changeData(result) {

}