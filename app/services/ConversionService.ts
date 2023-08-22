const getTime = (val: string): string => {
  const hour = parseInt(val, 10);
  if (hour < 12) {
    return val + ' am';
  }
  return val + ' pm';
};

export {getTime};
