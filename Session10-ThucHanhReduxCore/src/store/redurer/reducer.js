
const cart = []

export const addToCart = (state = cart, action)=>{
    switch (action.type) {
        case "ADD":
            /* Kiểm tra xem trong cart có sản phẩm đó chưa nếu có thì thêm số lượng, 
            không có thì thêm bình thường
            */
            let check = -1
            console.log("aaaaaa",action.payload.quantity);
            for (let index = 0; index < state.length; index++) {
                if (state[index].id == action.payload.id) {
                    check = index;
                    break;
                }                
            }
            if (check == -1) {
                // Không có item nào trong cart thêm bình thường
                const newCart = [...state]
                newCart.push(action.payload)
                return newCart
            }
            else{
                state[check].quantity = Number(state[check].quantity) + Number(action.payload.quantity) ; 
                // a+=b <=> a=a+b 
                console.log("111111", state);
                const newCart = [...state]
                return newCart
            }
            case "DELETE-ITEM":
                console.log("11111",action.payload);
                console.log("state",state);
                let deleteConfirm = confirm("bạn có muốn xóa công việc này");
                if (deleteConfirm) {
                    const index = state.findIndex((item)=>{
                        return item.id = action.payload
                    })
                    console.log("index", index);
                    state.splice(index,1);
                    state = [...state];
                    return state;
                }

        default:
            return state;
    }
}