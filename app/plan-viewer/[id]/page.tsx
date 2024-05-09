//import planResponse from './sampleData'
import PlanViewer from '@/components/planViewer';

import { getPlan } from '../utils'
import { Plan } from '@/types/plan';

export const revalidate = 3600

export default async function FloorPlan() {
  const planResponse = await getPlan(4);
  let plan: Plan | null = null;

  if (planResponse && planResponse.sites) {
    plan = { ...planResponse, sites: JSON.parse(planResponse.sites) };
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {plan !== null && (
        <>
          <PlanViewer plan={plan} />
        </>
      )}
    </main>
  );
}
