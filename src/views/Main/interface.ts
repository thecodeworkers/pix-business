interface CircleProps {
  result: any
}

export interface StateProps {
  circle: CircleProps
}

export interface Props extends StateProps {
  action: any
}
