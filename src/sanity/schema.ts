import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import product from './schemas/product'
import event from './schemas/event'
import siteSettings from './schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [product, category, event, siteSettings, blockContent],
}
