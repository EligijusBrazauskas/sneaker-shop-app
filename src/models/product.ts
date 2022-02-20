interface ProductInterface {
  id: number | string,
  title: string,
  brand: string,
  image: string,
  price: number,
  discountPercentage: number,
  averageRating: number,
  reviewsAmount: number,
  stockAmount: number,
  description: string
}

class ProductModel {
  id: number | string;
  title: string;
  brand: string;
  image: string;
  price: number;
  discountPercentage: number;
  averageRating: number;
  reviewsAmount: number;
  stockAmount: number;
  description: string

  constructor(data: ProductInterface) {
    this.id = data.id;
    this.title = data.title;
    this.brand = data.brand;
    this.image = data.image;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
    this.averageRating = data.averageRating;
    this.reviewsAmount = data.reviewsAmount;
    this.stockAmount = data.stockAmount;
    this.description = data.description
  }
}

export default ProductModel;