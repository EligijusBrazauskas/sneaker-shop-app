import BaseProductModel from "./base-product";

interface ProductInterface {
  id: number | string;
  title: string;
  brand: string;
  image: string;
  price: number;
  discountPercentage: number;
  averageRating: number;
  reviewsAmount: number;
  stockAmount: number;
  description: string;
}

class ProductModel extends BaseProductModel {
  averageRating: number;
  reviewsAmount: number;
  stockAmount: number;
  description: string;

  constructor(data: ProductInterface) {
    super(data);
    this.averageRating = data.averageRating;
    this.reviewsAmount = data.reviewsAmount;
    this.stockAmount = data.stockAmount;
    this.description = data.description;
  }
}

export default ProductModel;
