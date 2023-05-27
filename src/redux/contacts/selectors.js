export const selectContacts = state => state.contacts.contacts.items;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectError = state => state.contacts.contacts.error;

export const selectFilterValue = state => state.contacts.filter;

export const selectVisibleContacts = state => {
  const items = selectContacts(state);
  const filterValue = selectFilterValue(state);
  const visibleContacts = items.filter(item =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return visibleContacts;
};
