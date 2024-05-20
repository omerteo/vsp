import { PlanMeta } from "@/types/plan"
import Link from "next/link"

export default async function Plans({ plans }: { plans: PlanMeta[] | any }) {
	return (
		<>
			{!!plans && Array.isArray(plans) && (
				<>
					{plans.map((plan) => (
						<Link key={plan.id} href={`/plan-viewer/${plan.id}`}>
							{plan.name}
						</Link>
					))}
				</>
			)}
		</>
	)
}
