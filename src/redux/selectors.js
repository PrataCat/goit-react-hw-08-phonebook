export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilterValue = state => state.filter;

export const selectVisibleContacts = state => {
  const items = selectContacts(state);
  const filterValue = selectFilterValue(state);
  const visibleContacts = items.filter(item =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return visibleContacts;
};
