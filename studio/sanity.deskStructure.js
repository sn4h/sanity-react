export const useStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')),
      ...S.documentTypeListItems()
        .filter(listItem => !['siteSettings']
          .includes(listItem.getId()))
    ])