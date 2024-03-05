// Reducer là những hàm dùng để tính toán lại state mới
const initialState = [1, 2];

export const countReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "increase":
            let newState = [...state]
            newState.push(3)
            return newState;
        case "reduce":
            return state - 1;
        default:
            return state;
    }
}