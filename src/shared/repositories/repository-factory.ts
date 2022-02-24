import DealsRepository from './deals-repository';
import ProductsRepository from './products-repository';

const repositories: any = {
  deals: DealsRepository,
  products: ProductsRepository,
};

export const RepositoryFactory = {
  get: (name: any) => repositories[name],
};
