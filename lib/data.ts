import prisma from "@/prisma/prisma"
import { ITEMS_PER_TABLE } from "./constants";

type Search = {
    skip: number;
    take?: number;
    include: {
        employees: {
            include: {
                employee: boolean;
            };
        };
    };
    where?: {
        name: {
            contains: string;
            mode?: string; // SQL server is case-insensitive by default
        };
    };
}

function buildQuery(query: string, currentPage?: number) {
    let search: Search = {
        include: {
            employees: {
                include: {
                    employee: true,
                },
            },
        },
        skip: 0
    };
    if (currentPage) {
        search["skip"] = (currentPage - 1) * ITEMS_PER_TABLE;
        search["take"] = ITEMS_PER_TABLE;
    }
    if (query) {
        search["where"] = {
            name: {
                contains: query
            },
        };
    }
    return search;
}

export async function getAssets(query: string,
    currentPage: number,) {
    
    const assets = await prisma.asset.findMany(buildQuery(query, currentPage));
    return assets;
}

export async function getAssetPageCount(query: string) {
    const assetsLength = await prisma.asset.count({
        where: {
            name: {
                contains: query
            }
        }
    });
    return Math.ceil(assetsLength / ITEMS_PER_TABLE);
}

export async function assetTypes() {
    const assetTypes = await prisma.assetType.findMany();
    return assetTypes;
}

export async function getEmployees() {
    const employees = await prisma.employee.findMany();
    return employees;
}