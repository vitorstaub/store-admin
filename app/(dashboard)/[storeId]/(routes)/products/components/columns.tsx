'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

export type ProductColumn = {
  id: string
  name: string
  price: string
  stock: number
  size: string
  color: string
  isFeatured: boolean
  isArchived: boolean
  createdAt: string
}

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'price',
    header: 'Preço',
  },
  {
    accessorKey: 'stock',
    header: 'Estoque',
  },
  {
    accessorKey: 'isArchived',
    header: 'Arquivado',
  },
  {
    accessorKey: 'isFeatured',
    header: 'Em destaque',
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
  },
  {
    accessorKey: 'size',
    header: 'Medida',
  },
  {
    accessorKey: 'color',
    header: 'Cor',
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.color }}
        />
      </div>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Data',
  },
  {
    id: 'action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
]
