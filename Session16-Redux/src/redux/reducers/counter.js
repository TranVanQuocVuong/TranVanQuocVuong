const initialCount = 0

const counter = (state = initialCount, action) =>{
    switch (action.type) {
        case "increase":
            return state +1;            
    
        default:
            return state;
    }

} 