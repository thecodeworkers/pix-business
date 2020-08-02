import { DispatchProps } from '../../interfaces';
import { CREATE_PRODUCT } from './action-types';

const initialState: any = {
  products : [
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      rate: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      rate: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      rate: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      rate: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      rate: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
    {
      name: 'Holly Chicken',
      sku: 'EF52000',
      tag: 'Inventory',
      description: 'chicken burger',
      rate: '10 USDC',
      cost: 66.245,
      quantity: 5
    },
  ],
  sales: [
    {
      date: '22/04/2020',
      type: 'invoice',
      invoice: 'inventory',
      customer: 'Gerard Miot',
      memo: 'Burger',
      balance: 66.24,
      status: 'closed'
    },
    {
      date: '22/04/2020',
      type: 'invoice',
      invoice: 'inventory',
      customer: 'Gerard Miot',
      memo: 'Burger',
      balance: 66.24,
      status: 'closed'
    },
    {
      date: '22/04/2020',
      type: 'invoice',
      invoice: 'inventory',
      customer: 'Gerard Miot',
      memo: 'Burger',
      balance: 66.24,
      status: 'closed'
    },
    {
      date: '22/04/2020',
      type: 'invoice',
      invoice: 'inventory',
      customer: 'Gerard Miot',
      memo: 'Burger',
      balance: 66.24,
      status: 'closed'
    },
    {
      date: '22/04/2020',
      type: 'invoice',
      invoice: 'inventory',
      customer: 'Gerard Miot',
      memo: 'Burger',
      balance: 66.24,
      status: 'closed'
    },
    {
      date: '22/04/2020',
      type: 'invoice',
      invoice: 'inventory',
      customer: 'Gerard Miot',
      memo: 'Burger',
      balance: 66.24,
      status: 'closed'
    },
  ],
  expenses: [
    {
      date: '22/04/2020',
      invoice: '00025ED',
      payee: 'inventory',
      category: 'Chicken Burger',
      memo: '10 USDC',
      total: 66.24
    },
    {
      date: '22/04/2020',
      invoice: '00025ED',
      payee: 'inventory',
      category: 'Chicken Burger',
      memo: '10 USDC',
      total: 66.24
    },
    {
      date: '22/04/2020',
      invoice: '00025ED',
      payee: 'inventory',
      category: 'Chicken Burger',
      memo: '10 USDC',
      total: 66.24
    },
    {
      date: '22/04/2020',
      invoice: '00025ED',
      payee: 'inventory',
      category: 'Chicken Burger',
      memo: '10 USDC',
      total: 66.24
    },
    {
      date: '22/04/2020',
      invoice: '00025ED',
      payee: 'inventory',
      category: 'Chicken Burger',
      memo: '10 USDC',
      total: 66.24
    },
    {
      date: '22/04/2020',
      invoice: '00025ED',
      payee: 'inventory',
      category: 'Chicken Burger',
      memo: '10 USDC',
      total: 66.24
    },
    {
      date: '22/04/2020',
      invoice: '00025ED',
      payee: 'inventory',
      category: 'Chicken Burger',
      memo: '10 USDC',
      total: 66.24
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
