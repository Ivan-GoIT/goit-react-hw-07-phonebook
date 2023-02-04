export const contactsAddContactAction=(payload)=>({
    type: 'app/addContact',
    payload,
  })

  export const contactsDeleteContactAction=(payload)=>({
    type: 'app/deleteContact',
    payload,
  })