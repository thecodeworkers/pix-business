import { DispatchProps } from '../../interfaces';

const initialState = {
  optionalResuls: []
}

export default (state = initialState, { type }: DispatchProps) => {
  switch(type) {
    default:
    return state;
  }  
}
