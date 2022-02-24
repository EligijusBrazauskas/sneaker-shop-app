export const activeFilterHandler = (active: string, type: string): string => {
  if (active === 'all' && type === 'all') {
    return 'active';
  }
  if (active === 'adidas' && type === 'adidas') {
    return 'active';
  }
  if (active === 'nike' && type === 'nike') {
    return 'active';
  }
  if (active === 'new_balance' && type === 'new_balance') {
    return 'active';
  }
  return '';
};
