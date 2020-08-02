import { DispatchProps } from '../../interfaces'
import { MANAGE_SERVICE } from './action-types'

const initialState: any = {
  services: {
    serviceFood: {
      value: 'Food Services',
      selected: false
    },
    servicesAuto: {
      value: 'Auto Service',
      selected: false
    },
    servicesMedicine: {
      value: 'Medicine Service ',
      selected: false
    },
    servicesEntertaiment: {
      value: 'Entertaiment Service ',
      selected: false
    },
    servicesRent: {
      value: 'Rent Service ',
      selected: false
    },
    servicesBeauty: {
      value: 'Beauty Service ',
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
