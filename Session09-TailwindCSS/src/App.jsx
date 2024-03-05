import Register from "./register/Register";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import UIAdmin from "./uiAdmin/UIAdmin";

export default function App() {
  return (
    <div className="h-screen w-full bg-[#E6EFFA] flex items-center justify-center">
      {/* <Register></Register> */}
      {/* <ShoppingCart></ShoppingCart> */}
      <UIAdmin></UIAdmin>
    </div>
  )
}