export interface Product {
  // columns
  id: number
  brand_id: number|null
  product_type_id: number
  status: string
  attribute_data: Record<string, unknown>
  created_at: Date|null
  updated_at: Date|null
  deleted_at: Date|null
  // relations
  product_type: ProductType
  variants: ProductVariants
  collections: Collections
  associations: ProductAssociations
  inverse_associations: ProductAssociations
  customer_groups: CustomerGroups
  brand: Brand
  thumbnail: Medium
  media: Media
  activities: Activities
  channels: Channels
  tags: Tags
  urls: Urls
  default_url: Url
}
export type Products = Product[]
export type ProductResults = Modify<api.MetApiResults, { data: Products }>
