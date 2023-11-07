class DataService {
    constructor() {
    }

    getAxiosData(url, callback) {
        axios.get(url)
            .then(function (response) {
                //console.log("HElló");
                // handle success
                console.log(response);
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
                callback(response.data);
            })
            .catch(function (error) {
                //console.log("HElló");
                console.log(error);
            })
            .finally(function () {
                //console.log("HElló");
                console.log("finally")
            });

    }
}
export default DataService;