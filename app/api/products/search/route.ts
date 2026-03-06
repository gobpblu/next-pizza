import {NextResponse} from "next/dist/server/web/spec-extension/response";
import {NextRequest} from "next/dist/server/web/spec-extension/request";
import {prisma} from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get("query") || ''

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query,
                mode: 'insensitive'
            }
        },
        take: 5,
    })

    return NextResponse.json(products);
}