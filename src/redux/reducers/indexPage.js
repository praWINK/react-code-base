const INITIAL_STATE = {
   
    receivedWidgets:{
        data: [],
        error:null,
        loading: true
    }

};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        
        case 'Fetched_Widgets':
            return {
                ...state,
                receivedWidgets:{ 
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