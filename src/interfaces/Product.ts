import { Validation } from 'monet'
import { SpreeError } from '../errors'
import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'

export interface ProductAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    name: string
    description: string
    price: string
    currency: string
    display_price: string
    available_on: Date
    meta_description: string
    meta_keywords: string
    updated_at: Date
    purchasable: boolean
    in_stock: boolean
    backorderable: boolean
    slug: string
  }
  relationships: IRelationships
}

export interface IProduct extends JsonApiSingleResponse {
  data: ProductAttr
}

export interface IProducts extends JsonApiListResponse {
  data: ProductAttr[]
}

export interface IProductResult extends Validation<SpreeError, IProduct> {}

export interface IProductsResult extends Validation<SpreeError, IProducts> {}
