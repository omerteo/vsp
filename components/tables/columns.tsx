"use client"

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
		row: ({ row }: any) => {
			return new Date(row?.original.createdAt).toLocaleDateString()
		},
	},

	{
		accessorKey: "updatedAt",
		header: "Updated At",
		row: ({ row }: any) => {
			return new Date(row?.original?.updatedAt).toLocaleDateString()
		},
	},
]

export const assetColumns: any = [
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
		row: ({ row }: any) => {
			return new Date(row?.original.createdAt).toLocaleDateString()
		},
	},

	{
		accessorKey: "updatedAt",
		header: "Updated At",
		row: ({ row }: any) => {
			return new Date(row?.original.updatedAt).toLocaleDateString()
		},
	},
	{
		accessorKey: "employee",
		header: "Allocated To",
		cell: ({ row }: any) => {
			return row?.original.employee.name
		},
	},
]

export const userColumns: any = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "employeeId",
		header: "Employee ID",
	},
	{
		accessorKey: "employeeCode",
		header: "Employee Code",
	},
	{
		accessorKey: "designationName",
		header: "Designation",
	},
	{
		accessorKey: "joinedOn",
		header: "Joined On",
	},
	{
		accessorKey: "checkedInAt",
		header: "Checked In At",
	},
	{
		accessorKey: "statusType",
		header: "Status Type",
	},
	{
		accessorKey: "statusReason",
		header: "Status Reason",
	},
	{
		accessorKey: "currentWeekHours",
		header: "Current Week Hours",
	},
	{
		accessorKey: "lastWeekHours",
		header: "Last Week Hours",
	},
	{
		header: "Assets",
		accessorKey: "assets",

		cell: ({ row }: any) => {
			return row?.original.assets
				.map((asset: Asset) => {
					return asset.name
				})
				.join(", ")
		},
	},

	{
		accessorKey: "checkedOutAt",
		header: "Checked Out At",
		cell: ({ row }: any) => {
			return new Date(row?.original.checkedOutAt).toLocaleDateString()
		},
	},
	{
		accessorKey: "modifiedTimeStamp",
		header: "Last Modified",
		cell: ({ row }: any) => {
			return new Date(row?.original.modifiedTimeStamp).toLocaleDateString()
		},
	},
]

export const scheduleColumns: any = [
	{
		accessorKey: "asset",
		header: "Asset",
		cell: ({ row }: any) => {
			return row?.original.asset.name
		},
	},
	{
		accessorKey: "employee",
		header: "Allocated To",
		cell: ({ row }: any) => {
			return row?.original.employee.name
		},
	},
	{
		accessorKey: "scheduleType",
		header: "Schedule Type",
	},

	{
		accessorKey: "startDate",
		header: "Start Date",

		cell: ({ row }: any) => {
			return new Date(row?.original.startDate).toLocaleDateString()
		},
	},
	{
		accessorKey: "endDate",
		header: "End Date",
	},

	{
		accessorKey: "createdAt",
		header: "Created At",
		cell: ({ row }: any) => {
			return new Date(row?.original.createdAt).toLocaleDateString()
		},
	},

	{
		accessorKey: "updatedAt",
		header: "Updated At",
		cell: ({ row }: any) => {
			if (row?.original.updatedAt) {
				return new Date(row?.original.updatedAt).toLocaleDateString()
			}
		},
	},
	{
		accessorKey: "days",
		header: "Days",
		cell: ({ row }: any) => {
			return row?.original.days
				.map((day: any) => {
					return day.dayOfWeek.toUpperCase()
				})
				.join(", ")
		},
	},
]
