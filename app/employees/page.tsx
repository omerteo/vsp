import prisma from "@/prisma/prisma"
import { DataTable } from "@/components/tables/AssetTable"
import { userColumns } from "@/components/tables/columns"
import { auth } from "@/auth"
import { cookies } from "next/headers"

export const revalidate = 0

interface IndexPageProps {
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}

// use this for migration

// async function getEmp() {
// 	const token = cookies().get("token")

// 	const response = await fetch("https://apitoss.teo-intl.com/api/EmployeeAttendance/Employees", {
// 		headers: {
// 			"Content-Type": "application/json",
// 			Authorization: `Bearer ${token?.value}`,
// 		},
// 	})

// 	const data = await response.json()
// 	return data
// }

// async function runMigration(employees) {
// 	const employeesData = employees.map((employee) => ({
// 		employeeId: employee.EmployeeId,
// 		name: employee.NAME,
// 		yearsExperience: employee.YearsExperience,
// 		joinedOn: new Date(employee.JoinedOn).toISOString(),
// 		imagePath: employee.ImagePath,
// 		employeeCode: employee.EmployeeCode,
// 		designationName: employee.DesignationName,
// 		checkedInAt: new Date(employee.CheckedInAt).toISOString(),
// 		checkedOutAt: new Date(employee.CheckedOutAt).toISOString(),
// 		currentWeekHours: employee.CurrentWeekHours,
// 		lastWeekHours: employee.LastWeekHours,
// 		modifiedTimeStamp: employee.ModifiedTimeStamp,
// 		statusType: employee.StatusType,
// 		statusReason: employee.StatusReason,
// 		// data: employee.data,
// 	}))
// 	const migratedData = await prisma.employee.createMany({
// 		data: employeesData,
// 	})

// 	return migratedData
// }

export default async function AssetsPage({ searchParams }: IndexPageProps) {
	// const session = await auth()

	const { page, per_page } = searchParams
	const limit = typeof per_page === "string" ? parseInt(per_page) : 10
	const offset = typeof page === "string" ? (parseInt(page) > 0 ? (parseInt(page) - 1) * limit : 0) : 0

	// const users = await prisma.user.findMany({
	// 	skip: offset,
	// 	take: limit,
	// })

	// const employees = await getEmp()

	const employees = await prisma.employee.findMany({
		skip: offset,
		take: limit,
		include: {
			assets: true,
			schedules: {
				include: {
					days: true,
				},
			},
		},
	})

	const total = await prisma.employee.count()

	const pageCount = Math.ceil(total / limit)

	return (
		<>
			<section className="bg-white dark:bg-gray-800 min-h-screen pt-20">
				<div>
					<DataTable columns={userColumns} data={employees} pageCount={pageCount} />
				</div>
			</section>
		</>
	)
}
