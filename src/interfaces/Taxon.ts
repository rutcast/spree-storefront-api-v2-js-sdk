import { Validation } from 'monet'
import { SpreeError } from '../errors'
import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'

export interface TaxonAttr extends JsonApiDocument {
  type: string
  id: string,
  attributes: {
    name: string
    pretty_name: string
    permalink: string
    seo_title: string
    meta_title: string
    meta_description: string
    meta_keywords: string
    left: number
    right: number
    position: number
    depth: number
    is_root: boolean
    is_child: boolean
    is_leaf: string
    updated_at: Date
  }

  relationships: IRelationships
}

export interface ITaxon extends JsonApiSingleResponse {
  data: TaxonAttr
}

export interface ITaxons extends JsonApiListResponse {
  data: TaxonAttr[]
}

export interface ITaxonResult extends Validation<SpreeError, ITaxon> { }

export interface ITaxonsResult extends Validation<SpreeError, ITaxons> { }
