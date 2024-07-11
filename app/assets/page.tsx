import prisma from "@/prisma/prisma"
import { AssetForm } from "./assetForm"


import { DialogCommon } from "@/components/common/Dialog"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Search from "@/components/common/Search"
import AssetTable from "@/components/tables/AssetTable"
import Pagination from "@/components/common/Pagination"
import { Suspense } from "react"
import { ITEMS_PER_TABLE } from "@/lib/constants"

export const revalidate = 0 // no cache

interface IndexPageProps {
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}

export default async function AssetsPage({ searchParams }: IndexPageProps) {
	const query = searchParams?.query || '';
	const currentPage = Number(searchParams?.page) || 1;
   
	const totalPages = Math.ceil(await prisma.asset.count() / ITEMS_PER_TABLE); // TODO: pass this query too!

	return (
		<>
			<section className="bg-white dark:bg-gray-800 min-h-screen pt-20">
				<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
					<Search placeholder="Search assets..." />
				</div>
				<Suspense key={query + String(currentPage)} fallback={<p>loading...</p>}>
					<AssetTable query={query as string} currentPage={currentPage} />
				</Suspense>
				<div className="mt-5 flex w-full justify-center">
					<Pagination totalPages={totalPages} />
				</div>
			</section >
		</>
	)
}
