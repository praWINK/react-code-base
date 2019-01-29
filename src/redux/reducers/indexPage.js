const INITIAL_STATE = {
   
    countingData:{
        data: [],
        error:null,
        loading: true
    }

};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        
        case 'Fetched_Counting':
            return {
                ...state,
                countingData:{ 
                    data: action.payload,
                    error: null,
                    loading: false
            }
        }

        
        default:
            return {
                ...state
        }
    }
}