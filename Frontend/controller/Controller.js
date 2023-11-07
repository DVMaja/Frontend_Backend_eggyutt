import DataService from "../modell/DataService.js";


class Controller {

    constructor() {       
        this.DATASERVICE = new DataService()
        this.DATASERVICE.getAxiosData("http://localhost:8000/writers", this.megjelenit);

        this.DATASERVICE.postAxiosData("http://localhost:8000/writers", {
            "nev": "Jenő",
            "szul": 2000
        })
    }

    megjelenit(list){
        console.log(list)
        new View(list);
    }

    hibaMegj(error){
        //console.log(error)
        new HibaView(error, $(".lista"));
    }
}

export default Controller;