"use client";
import * as React from 'react'
import { Asset, Plan } from "@/types";
import AssetComposer from "@/components/renderer/assets";

function locateElementInPlans(id: string, selectedLevel: Asset|undefined) {
  console.log(id)
  
}

export default function PlanViewer({plan}: {plan: Plan | null}) {
  console.log(plan)
    const [selectedSite, setSelectedSite] = React.useState<Asset | undefined>(plan?.sites[0] || {} as Asset);
  
    const handleClick = (event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      let el = event.target as HTMLElement
      while (el.getAttribute('data-type') === null) {
        //this will help us reach the parent element with a data-attribute, because only those can be edited
        el = el.parentNode as HTMLElement
      }
  
      if (el.getAttribute('data-editable') === 'true') {
        locateElementInPlans(el.getAttribute('data-asset-id') || '', selectedSite)
      }
    }
  
    const onLevelSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = parseInt(event.target.value) as number;
      if (value) {
        setSelectedSite(plan?.sites[value]);
      }      
    };
    return (
<>
      <h1>{plan?.title}</h1>
        <select onChange={onLevelSelect}>
        {plan?.sites.map((site, i) => <option value={i} key={site.id}>{site.label}</option>
        )} </select>
        <div onClick={handleClick}>
          <AssetComposer asset={selectedSite} />
       </div>
       </>    
    );
  }