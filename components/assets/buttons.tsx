import Link from 'next/link';
// import { deleteAsset } from '../../lib/actions';

export function CreateAsset() {
  return (
    <Link
      href="/assets/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Asset</span>{' '}
    </Link>
  );
}

export function UpdateAsset({ id }: { id: string }) {
  return (
    <Link
      href={`/Assets/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
    </Link>
  );
}

export function DeleteAsset({ id }: { id: string }) {
  return null;
  // const deleteAssetWithId = deleteAsset.bind(null, id);

  // return (
  //   <form action={deleteAssetWithId}>
  //     <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
  //       <span className="sr-only">Delete</span>
  //     </button>
  //   </form>
  // );
}