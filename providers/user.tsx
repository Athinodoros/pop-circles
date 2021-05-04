

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var BASE_URL= "http://192.168.8.116:3000"

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
};
let createUser = (userID:string|number[]) => {

    var raw = JSON.stringify({ "_id": userID });
    requestOptions['body'] = raw;

    fetch(BASE_URL+"/user", requestOptions)
        .then(response => response.text())
        .then(result => result)
        .catch(error => error);

}

export default createUser;