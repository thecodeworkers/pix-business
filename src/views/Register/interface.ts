import { RouteComponentProps } from '@reach/router';

export interface StateProps extends RouteComponentProps {
  register: any
}

export interface Props extends StateProps {
  action: any
}
