export const currentIconHandler = (type: string): string | void => {
  switch (type) {
    case 'all':
      return;
    case 'adidas':
      return 'adidas';
    case 'nike':
      return 'nike';
    case 'new_balance':
      return 'new_balance';
    default:
      return;
  }
};
