import { useState, useEffect } from "react"

const authHook =()=> {

 const [user, setuser] = {};

 function getAuth (){
const response = fetch("www.google.com/maps/");

    if(response && response.statuscode == 200){
        setuser(response.body);
    }
 }
    
useEffect(()=> {
    getAuth();
})
}

export default authHook;