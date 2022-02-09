import { rest } from 'msw';
import { deals } from './data/deals';
import { products } from './data/products';

const dealsData = deals;
const productsData = products;

export const handlers = [
  rest.get('/deals', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json(
        Object.entries(dealsData).map(([name, data]) => {
          return { name, ...data }
        })
      )
    )
  }),

  rest.get('/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json(
        Object.entries(productsData).map(([name, data]) => {
          return { name, ...data }
        })
      )
    )
  }),

  rest.get('/products/:product', (req, res, ctx) => {
    const id = req.params.product;
    const data = productsData[id];

    if (typeof data === 'undefined') {
      return res(ctx.status(404));
    }

    return res(
      ctx.status(200),
      ctx.delay(200),
      ctx.json({id, ...data })
    )
  })
]