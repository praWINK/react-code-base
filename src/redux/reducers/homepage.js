const INITIAL_STATE = {
   
    homeBanners:{
        data: [],
        error:null,
        loading: true
    }

};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        
        case 'Fetched_Home_Banners':
            return {
                ...state,
                homeBanners:{ 
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