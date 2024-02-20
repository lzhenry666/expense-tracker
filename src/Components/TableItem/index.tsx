import React from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'
import { categories } from '../../data/categories'
export type Props = {
    item: Item
    key: number
    }
export const TableItem = ({item,key}:Props) => {
  return (
    <C.TableLine>
          <C.TableLine key={key}>
    <C.TableColumn>{item.date.toLocaleDateString()}</C.TableColumn>

    <C.TableColumn>
        <C.Category color={categories[item.category]?.color}>{item.category}</C.Category>
        </C.TableColumn>

    <C.TableColumn>{item.title}</C.TableColumn>
    <C.TableColumn>

    <C.Value color={categories[item.value]?.color}>{item.value}</C.Value>
R$ {item.value}</C.TableColumn>
</C.TableLine></C.TableLine>
  )
}
