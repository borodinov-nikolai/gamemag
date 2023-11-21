'use client'
import React, { useState } from 'react'
import styles from './mobile_platforms.module.scss'
import { useAppDispatch, useAppSelector } from '@/redux_toolkit/hooks';
import { setPlatform } from '@/redux_toolkit/slices/filtersSlice';
import { setPage } from '@/redux_toolkit/slices/paginationSlice';
import { PlatformData } from '@/interfaces/Platforms';
import Image from 'next/image';


interface Props {
  data: PlatformData[],
  defaultValue: string | undefined
}


const Mobile_platforms : React.FC<Props> = ({defaultValue, data}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const { platform } = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch()
 const cmsURL = process.env.NEXT_PUBLIC_CMS_IMG_URL


console.log(defaultValue)

  if(!defaultValue) {
    defaultValue = 'Все'
  }

  const change = (name:string)=> {
 

    dispatch(setPlatform(name));
    dispatch(setPage(1))
    setShowMenu(!showMenu)
  }
 
 const handleShow = ()=> {
  setShowMenu(!showMenu)
 }



 const changedItem = data?.find(item=>item.attributes.name === defaultValue)
 const changedItem_iconUrl = changedItem?.attributes.icon?.data?.attributes?.url

  return (
       
            <div className={styles.root} >
              <div className={styles.current_platform} >
                <div className={styles.change_title} >Платформа:</div>
                <div onClick={handleShow}  className={[styles.item, styles.changed_item].join(' ')}>
                         {changedItem_iconUrl && <div className={styles.icon}>{<Image src={cmsURL + changedItem_iconUrl} width={30} height={30} alt={changedItem?.attributes.name}/>}</div>}
                         <div className={styles.name} >{changedItem?.attributes.name}</div>
                         </div>
              </div>
              <div className={[styles.menu, styles[showMenu? 'menu_show' : 'menu_hide' ]].join(' ')} >
                <ul className={styles.menu_list} >
                  {
                    data?.map(({id, attributes})=> {
                      const iconURL = attributes.icon?.data?.attributes?.url
                      return ( <li  key={id} className={styles.item} style={(platform ? platform : defaultValue) === attributes.name ? { background: 'rgb(255, 255, 255)', color: 'black', borderRadius: '10px' } : undefined}
                       onClick={ ()=>change(attributes.name)}>
                         { iconURL && <div className={styles.icon}>{<Image src={cmsURL + iconURL} width={30} height={30} alt={attributes.name}/>}</div>}
                         <div className={styles.name} >{attributes.name}</div>
                         </li>)
                
                    })
                  }
                </ul>
              </div>
            </div>
            
   
  )
}

export default Mobile_platforms