import { axiosInstanceToken } from "../utils/axiosCreate";

class ProductApi {
  endPoints = {
    loadProducts: "/products/all",
  };

  loadProducts = async () => {
    console.log("url ----------- ", this.endPoints.loadProducts);
    let data = await axiosInstanceToken.get(this.endPoints.loadProducts);
    return data;
  };
}

export default new ProductApi();
