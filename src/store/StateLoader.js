class StateLoader {
    loadState(){
        try{
            let serializedState = sessionStorage.getItem("covidClinic");
            if(serializedState === null){
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }catch(error){
            return this.initializeState();
        }
    }

    saveState(state){
        try{
            let serializedState = JSON.stringify(state);
            sessionStorage.setItem("covidClinic",serializedState);
        }catch(error){

        }
    }

    initializeState(){
        return {
            authenticate :{}
        };
    }
}

export default StateLoader;