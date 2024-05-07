import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import prismadb from '@/lib/prismadb'

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const { userId } = auth()
    const body = await req.json()

    const {
      name,
      price,
      stock,
      categoryId,
      colorId,
      sizeId,
      images,
      isFeatured,
      isArchived,
    } = body

    if (!userId) {
      return new NextResponse('Não autenticado', { status: 401 })
    }

    if (!name) {
      return new NextResponse('Nome é obrigatório', { status: 400 })
    }
    if (!images || images.length === 0) {
      return NextResponse.json(
        { message: 'Pelo menos uma imagem é obrigatória' },
        { status: 400 },
      )
    }
    if (!stock) {
      return new NextResponse('Estoque é obrigatório', { status: 400 })
    }
    if (!price) {
      return new NextResponse('Preço é obrigatório', { status: 400 })
    }
    if (!categoryId) {
      return new NextResponse('Category id é obrigatório', { status: 400 })
    }
    if (!colorId) {
      return new NextResponse('Color id é obrigatório', { status: 400 })
    }
    if (!sizeId) {
      return new NextResponse('Size id é obrigatório', { status: 400 })
    }

    if (!params.storeId) {
      return new NextResponse('Store id é obrigatório', { status: 400 })
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    })

    if (!storeByUserId) {
      return new NextResponse('Não autorizado', { status: 403 })
    }

    const product = await prismadb.product.create({
      data: {
        name,
        price,
        stock,
        categoryId,
        colorId,
        sizeId,
        isFeatured,
        isArchived,
        storeId: params.storeId,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    })

    return NextResponse.json(product)
  } catch (error) {
    console.log('[PRODUCTS_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const { searchParams } = new URL(req.url)
    const categoryId = searchParams.get('categoryId') || undefined
    const colorId = searchParams.get('colorId') || undefined
    const sizeId = searchParams.get('sizeId') || undefined
    const isFeatured = searchParams.get('isFeatured')

    if (!params.storeId) {
      return new NextResponse('Store id é obrigatório', { status: 400 })
    }

    const products = await prismadb.product.findMany({
      where: {
        storeId: params.storeId,
        categoryId,
        colorId,
        sizeId,
        isFeatured: isFeatured ? true : undefined,
        isArchived: false,
      },
      include: {
        images: true,
        category: true,
        color: true,
        size: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(products)
  } catch (error) {
    console.log('[PRODUCTS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
