'use client'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

import { ApiList } from '@/components/ui/api-list'
import { BillboardColumn, columns } from './columns'

interface BillboardClientProps {
  data: BillboardColumn[]
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Destaques(${data.length})`}
          description="Ajustar destaques da loja"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Adicionar novo
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="Chamadas API para Destaques" />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  )
}
