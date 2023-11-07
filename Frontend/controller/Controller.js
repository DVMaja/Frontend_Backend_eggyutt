import DataService from "../modell/DataService.js";


class Controller {

    constructor() {       
        this.DATASERVICE = new DataService()
        this.DATASERVICE.getAxiosData("http://localhost:8000/writers", this.megjelenit);
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