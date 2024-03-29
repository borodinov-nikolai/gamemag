'use client'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setSort } from '@/store/slices/filtersSlice'
import { Select } from 'antd'
import React from 'react'


const Sort = ({defaultValue}:{defaultValue:string|undefined}) => {
  const {sortValue} = useAppSelector((state)=>state.filters)
  const dispatch = useAppDispatch();
 

  return (
 <Select
    defaultValue={'price:asc'}
    value={defaultValue || sortValue || 'price:asc'}
    style={{ width: 180 }}
    onChange={(e)=> dispatch(setSort(e))}
    options={[
      { value: 'price:asc', label: 'Цена по возрастанию' },
      { value: 'price:desc', label: 'Цена по убыванию' }
    ]}
  />
  )
}

export default Sort