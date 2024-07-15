import { ZodError } from "zod"
import { assetSchema } from "@/lib/asset-schema"

export async function createAsset(prevState: State, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateAsset.safeParse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
  
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Asset.',
      };
    }
  
    // Prepare data for insertion into the database
    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];
  
    // Insert data into the database
    try {
      await sql`
        INSERT INTO Assets (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      `;
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Create Asset.',
      };
    }
  
    // Revalidate the cache for the Assets page and redirect the user.
    revalidatePath('/dashboard/Assets');
    redirect('/dashboard/Assets');
  }