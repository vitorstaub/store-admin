'use client'

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

import { ApiList } from '@/components/ui/api-list'
import { ColorColumn, columns } from './columns'

interface ColorsClientProps {
  data: ColorColumn[]
}

export const ColorsClient: React.FC<ColorsClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Cores(${data.length})`}
          description="Ajustar cores da loja"
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar novo
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Chamadas API para cores" />
      <Separator />
      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  )
}
