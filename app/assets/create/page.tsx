import Form from '@/components/assets/create-form';
import { assetTypes, getEmployees } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Asset',
};

export default async function Page() {
  const availableAssetTypes = await assetTypes();
  const employees = await getEmployees();

  return (
    <section className="bg-white dark:bg-gray-800 min-h-screen pt-20">
      <Form assetTypes={availableAssetTypes} users={employees} />
    </section>
  );
}