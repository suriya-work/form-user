// import axios from "axios";
// const BASE_URL = 'http://185.8.172.145:88';

const FormSubmit = async (data) => {
    return await fetch('https://fakestoreapi.com/auth/login', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-Type": "application/json" },
    })
    // response.json()
    .then(res=>res.json())
    // return res;
    // console.log(response) 
    // const json = await response.json()
    // return json;
}


export { FormSubmit };
