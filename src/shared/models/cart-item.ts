import BaseProductModel from "./base-product";

interface CartItemInterface {
  id: number | string;
  title: string;
  brand: string;
  image: string;
  price: number;
  discountPercentage: number;
  amount: number;
}

class CartItemModel extends BaseProductModel {
  amount: number;

  constructor(data: CartItemInterface) {
    super(data);
    this.amount = data.amount;
  }
}

export default CartItemModel;
