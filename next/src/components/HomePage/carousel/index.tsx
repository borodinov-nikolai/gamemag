import React from 'react';
import { Carousel as CarouselAntd } from 'antd';
import Image from 'next/image';
import styles from './carousel.module.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { CarouselItemData } from '@/interfaces/CarouselItems';



interface Props {
  data: CarouselItemData[]
}

const Carousel: React.FC<Props> = ({ data }) => {







  const SlickButtonFix = (
    props: {
      children: React.ReactNode;
      slideCount?: number;
      currentSlide?: number;
    }
  ) => {
    const { children, currentSlide, slideCount, ...others } = props;
    return (
      <span {...others}>
        {children}
      </span>
    );
  };


  return (
    <CarouselAntd prevArrow={<SlickButtonFix> <LeftOutlined />  </SlickButtonFix>} nextArrow={<SlickButtonFix> <RightOutlined />  </SlickButtonFix>}
     fade={true} arrows={true} autoplay={true} className={styles.root} >

      {
        data.map((item) => {
          const imageURL = process.env.NEXT_PUBLIC_CMS_IMG_URL
          const attributes = item.attributes
          const desktop_image = item.attributes.desktop_image.data.attributes?.url
          const mobile_image = item.attributes.mobile_image.data.attributes?.url
          const mobile_image_medium = item.attributes.mobile_image.data.attributes.formats.medium?.url
    

          return (
            <div key={item.id} className={styles.item} >
              <Link href={`/catalog/${attributes.productID}`}>
                <div className={styles.image} >
                  <Image priority={item.attributes.priority} className={styles.img_desktop} src={imageURL + desktop_image} width={1920} height={720} quality={80} alt={attributes.name}></Image>
                  <Image priority={item.attributes.priority}  className={styles.img_mobile} src={imageURL + (mobile_image_medium ||mobile_image)} width={576} height={580} quality={80}  alt={attributes.name}></Image>
                </div>

                <div className={styles.info} >
                  <div className={styles.info_name}>{attributes.name}</div>
                  <div className={styles.info_price} > {attributes.price} <span>₽</span>  </div>
                </div>
              </Link>
            </div>

          )
        })
      }

    </CarouselAntd>
  );
};

export default Carousel;