export const nameAlphabeticSort = (user1, user2) => {
  if (user1.name < user2.name) return -1;
  if (user1.name > user2.name) return 1;
  return 0;
};
export const emailAlphabeticSort = (user1, user2) => {
  if (user1.email < user2.email) return -1;
  if (user1.email > user2.email) return 1;
  return 0;
};
export const cityAlphabeticSort = (user1, user2) => {
  if (user1.address.city < user2.address.city) return -1;
  if (user1.address.city > user2.address.city) return 1;
  return 0;
};
