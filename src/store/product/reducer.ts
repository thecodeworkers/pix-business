import { DispatchProps } from '../../interfaces';
import { CREATE_PRODUCT } from './action-types';

const initialState: any = {
  products : [
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      selfPrice: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      selfPrice: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      selfPrice: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      selfPrice: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      selfPrice: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      selfPrice: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
  ]
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case CREATE_PRODUCT:
    return {
      products: [
        ...state.products,
        ...payload.product
      ]
    }

    default:
    return state;
  }
}
