import prisma from "@/prisma/prisma"
import { DialogCommon } from "@/components/common/Dialog"
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Search from "@/components/common/Search"
import AssetTable from "@/components/tables/AssetTable"
import Pagination from "@/components/common/Pagination"
import { Suspense } from "react"
import { getAssetPageCount } from "@/lib/data"
import { CreateAsset } from "@/components/assets/buttons"

export const revalidate = 0 // no cache

export default async function AssetsPage({
	searchParams,
  }: {
	searchParams?: {
	  query?: string;
	  page?: string;
	};
  }) {
	const query = searchParams?.query || '';
	const currentPage = Number(searchParams?.page) || 1;
   
	const totalPages = await getAssetPageCount(query);

	return (
		<>
			<section className="bg-white dark:bg-gray-800 min-h-screen pt-20">
				<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
					<Search placeholder="Search assets..." />
					<CreateAsset />
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
