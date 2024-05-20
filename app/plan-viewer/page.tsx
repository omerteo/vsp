//import planResponse from './sampleData'
import Plan from "@/components/planList"
import { getAllPlans } from "../utils"
import { PlanMeta } from "@/types/plan"

export const revalidate = 3600

export default async function Plans() {
	const plansResponse = await getAllPlans()
	const plans: any = plansResponse

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			List of plans
			{!!plans && Array.isArray(plans) && (
				<>
					<Plan plans={plans} />
				</>
			)}
		</main>
	)
}
