import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Singleton Home
      S.listItem()
        .title('Home')
        .icon(() => '🏠')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')
        ),

      // Divider
      S.divider(),

      // Other document types
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'home'
      ),
    ])
