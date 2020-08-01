import { DispatchProps } from '../../interfaces'
import { MANAGE_SERVICE } from './action-types'

const initialState: any = {
  services: {
    serviceFood: {
      value: 'Service Food',
      selected: false
    },
    servicesAuto: {
      value: 'Service Auto',
      selected: false
    },
    servicesMedicine: {
      value: 'Service Medicene',
      selected: false
    },
    servicesEntertaiment: {
      value: 'Service Entertaiment',
      selected: false
    },
    servicesRent: {
      value: 'Service Rent',
      selected: false
    },
    servicesBeauty: {
      value: 'Service Beauty',
      selected: false
    }
  }
}

export default (state = initialState, { type, payload }: DispatchProps) => {
  switch(type) {
    case MANAGE_SERVICE:
    return { ...payload };

    default:
    return state;
  }
}
