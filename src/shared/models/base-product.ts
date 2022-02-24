interface BaseProductInterface {
  id: number | string;
  title: string;
  brand: string;
  image: string;
  price: number;
  discountPercentage: number;
}

class BaseProductModel {
  id: number | string;
  title: string;
  brand: string;
  image: string;
  price: number;
  discountPercentage: number;

  constructor(data: BaseProductInterface) {
    this.id = data.id;
    this.title = data.title;
    this.brand = data.brand;
    this.image = data.image;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
  }
}

export default BaseProductModel;
