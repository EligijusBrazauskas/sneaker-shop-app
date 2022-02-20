interface CartItemInterface {
  id: number | string,
  title: string,
  brand: string,
  image: string,
  price: number,
  discountPercentage: number,
  amount: number
}

class CartItemModel {
  id: number | string;
  title: string;
  brand: string;
  image: string;
  price: number;
  discountPercentage: number;
  amount: number;

  constructor(data: CartItemInterface) {
    this.id = data.id;
    this.title = data.title;
    this.brand = data.brand;
    this.image = data.image;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
    this.amount = data.amount
  }
}

export default CartItemModel;