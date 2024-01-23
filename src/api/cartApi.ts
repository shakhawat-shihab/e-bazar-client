import { axiosInstanceToken } from "../utils/axiosCreate";

class CartApi {
  endPoints = {
    addToCart: "/cart/add-to-cart",
    removeFromCart: "/cart/remove-from-cart",
    viewCart: "/cart/view",
  };

  addToCart = async (userId: string, productId: string) => {
    let data = await axiosInstanceToken.patch(this.endPoints.addToCart, {
      userId,
      productId,
    });
    return data;
  };

  removeFromCart = async (userId: string, productId: string) => {
    let data = await axiosInstanceToken.patch(this.endPoints.removeFromCart, {
      userId,
      productId,
    });
    return data;
  };

  viewCart = async (userId: string) => {
    console.log("view cart api ", this.endPoints.viewCart);
    let data = await axiosInstanceToken.patch(this.endPoints.viewCart, {
      userId: userId,
    });
    console.log("viewCart ", data);
    return data;
  };
}

export default new CartApi();
