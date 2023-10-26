import React from 'react'
import styles from './productCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { getProductInfo } from '@/http/digisellerAPI'


interface Props {
  product: {
    id: number, 
      attributes: {
        name: string,
        productID: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        buyURL: string,
        price: number
        image: {
          data: [{
            attributes: {
              url:string
            }}
          ]
        }
      }
  }
}


const ProductCard: React.FC<Props> = async ({product}) => {
  
 

  const image = product?.attributes.image?.data[0].attributes.url
  
  
  return (
    <div className={styles.root}>
       <Link href={product?.attributes.buyURL}>
      <div className={styles.image}>
       <Image src={process.env.NEXT_PUBLIC_CMS_IMG_URL+image
         }
        width={300} height={300} alt={product?.attributes.name}></Image>
      </div>
      {/* <div  className={styles.name}>{product.attributes.name}</div> */}
      <div className={styles.btn}>
       <div className={styles.price} >{product?.attributes.price} <span>₽</span></div>
        </div>
        </Link>
    </div>
  )
}

export default ProductCard