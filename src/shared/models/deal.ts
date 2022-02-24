interface DealInterface {
  id: number | string,
  title: string,
  color: string,
  image: string
}

class DealModel {
  id: number | string;
  title: string;
  color: string;
  image: string;

  constructor(data: DealInterface) {
    this.id = data.id;
    this.title = data.title;
    this.color = data.color;
    this.image = data.image;
  }
}

export default DealModel;