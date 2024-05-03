"use client";

import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Billboard } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

interface BillboardClientProps {
  data: Billboard []
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
  data,
}) => {
  const router = useRouter()
  const params = useParams()
  
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Destaques(${data.length})`}
          description="Ajustar destaques da loja"
        />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="mr-2 h-4 w-4"/>
          Adicionar novo
        </Button>
      </div>
      <Separator />
    </>
  );
};
