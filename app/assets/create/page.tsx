import { fetchCustomers } from '@/app/lib/data';
import Form from '@/components/assets/create-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Form assetTypes={assetTypes} users={users} />
    </main>
  );
}