import ProductModel from '../models/product';
import CartItemModel from '../models/cart-item';

export const discountedPrice = (
  product: ProductModel | CartItemModel
): number => {
  let newPrice: number;

  if (product) {
    const fullPrice = product.price;
    let percentage = product.discountPercentage;
    percentage /= Math.pow(10, 2);

    newPrice = fullPrice - fullPrice * percentage;
    return newPrice;
  }

  newPrice = 0;
  return newPrice;
};