import { Asset } from "@/types/user"
import { ColumnDef } from "@tanstack/react-table"

export const columns: any = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "name",
		header: "Name",
	},

	{
		accessorKey: "createdAt",
		header: "Created At",
	},

	{
		accessorKey: "updatedAt",
		header: "Updated At",
	},
]

export const userColumns: any = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "email",
		header: "Email",
	},

	{
		accessorKey: "createdAt",
		header: "Created At",
	},

	{
		accessorKey: "updatedAt",
		header: "Updated At",
	},
]

export const scheduleColumns: any = [
	{
		accessorKey: "userId",
		header: "User",
	},
	{
		accessorKey: "assetId",
		header: "Asset Type",
	},
	{
		accessorKey: "startDate",
		header: "Start Date",
	},
	{
		accessorKey: "endDate",
		header: "End Date",
	},

	{
		accessorKey: "createdAt",
		header: "Created At",
	},

	{
		accessorKey: "updatedAt",
		header: "Updated At",
	},
]
