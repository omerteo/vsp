"use client"

import { createAsset, State } from "@/lib/actions/assets"
import { useActionState } from "react"
import toast from "react-hot-toast"
import { Button } from "../ui/button"

async function increment(previousState, formData) {
    return previousState + 1;
  }

export default function Form({ assetTypes, users }: { assetTypes: any; users: any }) {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(increment, initialState);

    const input_style =
        "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white dark:bg-gray-800 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus: outline-none focus:border-blue-500 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:text-gray-300 dark:focus:bg-gray-700 "

    const select_style =
        "form-control block w-full px-4 py-4 text-sm font-normal text-gray-700 bg-white dark:bg-gray-800 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus: outline-none focus:border-blue-500 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-500 dark:focus:text-gray-300 dark:focus:bg-gray-700 appearance-none"

    
    return (
        <form action={formAction}>
            <div className="mb-6 flex flex-col gap-2">
                <input id="name" placeholder="Name" className={`${input_style}`} />
                <select className={`${select_style} `} id="typeId">
                    <option selected disabled>
                        Select asset
                    </option>
                    {assetTypes?.map((assetType: any, index: number) => (
                        <option key={index} value={assetType.id}>
                            {assetType.name}
                        </option>
                    ))}
                </select>
                
                <select className={`${select_style}`} id="employeeId">
                    <option selected disabled>
                        Select user
                    </option>
                    {users?.map((user: any, index: number) => (
                        <option key={index} value={user.employeeId}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
            <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>

            <Button type="submit">Create Invoice</Button>
        </form>
    )
}
