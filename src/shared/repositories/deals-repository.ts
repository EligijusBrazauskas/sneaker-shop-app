import Repository from './repository';

const resource = '/deals-swiper';

export default {
  get() {
    return Repository.get(`${resource}`);
  },
};
