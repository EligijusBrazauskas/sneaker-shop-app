import * as variables from '../../variables';

export const backgroundColorHandler = (props: any) => {
  switch (props.backgroundColor || props.cardColor) {
    case 'white':
      return `background-color: white`;
    case 'orange':
      return `background-color: white`;
    case 'pink':
      return `background-color: white`;
    case 'gray':
      return `background-color: ${ variables.lightGray }`;
    case 'gray-darker':
      return `background-color: ${ variables.lightGrayHover }`;
    case 'blue':
      return `background-color: ${ variables.violetPrimary }`;
    case 'orange-primary':
      return `background-color: ${ variables.orangePrimary }`;
    default:
      return `background-color: white`;
  }
};

export const spanColorHandler = (props: any) => {
  switch (props.backgroundColor || props.cardColor) {
    case 'blue':
      return `color: white`;
    case 'orange-primary':
      return `color: white`;
    default:
      return `color: black`;
  }
};