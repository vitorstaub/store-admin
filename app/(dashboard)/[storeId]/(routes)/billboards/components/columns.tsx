'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CellAction } from './cell-action'

export type BillboardColumn = {
  id: string
  label: string
  createdAt: string
}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: 'label',
    header: 'Nome',
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
