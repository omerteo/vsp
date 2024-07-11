import { getAssets } from '@/lib/data';
import { Asset } from '@prisma/client';
import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function AssetTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const assets = await getAssets(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Asset
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Assigned To
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  
                </th>
              
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {assets?.map((asset) => (
                <tr
                  key={asset.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  {asset.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {asset.employees.map((employee) => (
                        <div key={employee.employee.name} className="flex items-center gap-2">
                            {/* <Image
                                src={employee.employee.avatar}
                                alt={employee.employee.name}
                                width={30}
                                height={30}
                                className="rounded-full"
                            /> */}
                            <span>{employee.employee.name}</span>
                        </div>
                    ))}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                   
                  </td>

                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}