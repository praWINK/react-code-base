import w3schools from '../../resources/images/w3schools.jpg';
import warning from '../../resources/images/warning.png';

export function getProductList() {
    return (dispatch) => {
        dispatch({ type: "Fetched_Home_Banners", payload: homeBanners })
        
    }
}


let homeBanners = [{
    '_id': 1,
    'imgSrc': w3schools,
    'path': ""
},
{
    '_id': 2,
    'imgSrc': warning,
    'path': ""
},
{
    '_id': 3,
    'imgSrc': w3schools,
    'path': ""
}]