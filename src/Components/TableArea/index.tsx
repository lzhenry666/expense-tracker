import React from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'
type Props = {
    list: Item[]
    }

export const TableArea = ({list}:Props) => {
  return (
<C.Table>
    <thead>
        <tr>
            <C.TableHeadColumn>Data</C.TableHeadColumn>
            <C.TableHeadColumn>Categoria</C.TableHeadColumn>
            <C.TableHeadColumn>Título</C.TableHeadColumn>
            <C.TableHeadColumn>Valor</C.TableHeadColumn>
        </tr>
    </thead>
    <tbody>
        {list.map((item, index) => {
            return (
              <TableItem key={index} item={item} />
            );
        })}
    </tbody>

</C.Table>
  )
}
