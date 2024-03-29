import { Image } from "./Image"
import { Meta } from "./Meta"




export interface CarouselItems {
  data: CarouselItemData[]
  meta: Meta
}

export interface CarouselItemData {
  id: number
  attributes: CarouselItemAttributes
}

export interface CarouselItemAttributes {
  createdAt: string
  updatedAt: string
  publishedAt: string
  priority: boolean
  name: string
  price: number
  productID: number
  desktop_image: Image
  mobile_image: Image
}