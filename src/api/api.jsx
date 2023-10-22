import axios from "axios";
const BASE_URL = 'http://185.8.172.145:88/swagger/index.html';

const FormSubmit = async (path, data) => {
    const response = await axios.post(`${BASE_URL}/ ${path}`, {
        method: "POST",
        body: JSON.stringify(data),
        Headers: { "Content-Type": "application/json" },
    });
    const json = await response.json()
    return json;
}


export { FormSubmit };
