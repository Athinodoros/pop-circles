

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var BASE_URL= "http://192.168.8.116:3000"

var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
};
let downVote = () => {

    var raw = JSON.stringify({ "id": "6029a69b3a47a21f64fab7cb", "vote": -1 });
    requestOptions['body'] = raw;

    fetch(BASE_URL+"/message/vote", requestOptions)
        .then(response => response.text())
        .then(result => result)
        .catch(error => error);

}
let skip = () => {

    var raw = JSON.stringify({ "id": "6029a69b3a47a21f64fab7cb", "vote": 0 });
    requestOptions['body'] = raw;

    fetch(BASE_URL+"/message/vote", requestOptions)
        .then(response => response.text())
        .then(result => result)
        .catch(error => error);

}

let ignore = () => {

    var raw = JSON.stringify({ "id": "6029a69b3a47a21f64fab7cb" });
    requestOptions['body'] = raw;

    fetch(BASE_URL+"/message/vote", requestOptions)
        .then(response => response.text())
        .then(result => result)
        .catch(error => error);

}

let upVote = () => {

    console.log("Sending reqiest");

    fetch(BASE_URL+"/message/vote", {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "id": "6029a69b3a47a21f64fab7cb", "vote": 1 }),
    });

    // fetch("localhost:3000/message/vote", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log(error));

}

const voteRoutes = {
    upVote,
    downVote,
    ignore,
    skip
}
export default voteRoutes;