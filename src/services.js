import axios from "axios";

const services = {
    getUser: async (data, callback) => {
        axios({
            method: 'GET',
            url: "https://api.airtable.com/v0/appBTaX8XIvvr6zEC/Users?"+data,
            headers: {
                Authorization: 'Bearer key4v56MUqVr9sNJv',
            },
        }).then((result) => {
            return callback(result.data)
        }).catch(err => {
            return err
        })
    },
 
};
export default services;



