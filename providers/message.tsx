import { Alert } from "react-native";
import { getValueFor, USER_ID } from "../Store/secureStore";


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var BASE_URL= "http://192.168.8.116:3000"

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
};
let createMessage = (content:string) => {
    
    getValueFor(USER_ID).then(userID=>{
        console.log(userID);
        
        var raw = JSON.stringify({
            "content":content,
            "User" : userID.toString(),
            "initialPoint": {"longitude":33.3333,"latitude":22.2222},
            "upVotes":0,
            "downVotes":0
        });
        requestOptions['body'] = raw;

        fetch(BASE_URL+"/message", requestOptions)
            .then(response => response.text())
            .then(result => result)
            .catch(error => error);
    }).catch(error=>{
         alert("Failed to write message"+error)
    })
  
  

}

export default createMessage;