export function getCounting() {
    return (dispatch) => {
        dispatch({ type: "Fetched_Counting", payload: countingData })
        
    }
}

let countingData = [1,2,3]