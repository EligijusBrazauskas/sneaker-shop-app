import Repository from "./repository";

const resource = '/products';

export default {

  get() {
    return Repository.get(`${ resource }`)
  },

  getProduct(product: string | undefined) {
    return Repository.get(`${ resource }/${ product }`)
  }

}