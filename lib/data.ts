import prisma from "@/prisma/prisma"
import { ITEMS_PER_TABLE } from "./constants";


export async function getAssets(query: string,
    currentPage: number,) {
    const offset = (currentPage - 1) * ITEMS_PER_TABLE;
    const assets = await prisma.asset.findMany({
        skip: offset,
        take: ITEMS_PER_TABLE,
        include: {
            employees: {
                include: {
                    employee: true,
                },
            },
        },
    })
    return assets;
}