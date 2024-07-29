"use server";

import { string, z } from "zod"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "../db";

const FormSchema = z.object({
  id: string(),
  name: string({ required_error: "Name is required" }).min(1, "Name is required"),
  typeId: string({ required_error: "Type Id is required" }),
  employeeId: string().optional()
});

const CreateAsset = FormSchema.omit({ id: true });
const UpdateAsset = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    typeId?: string[];
    employeeId?: string[];
  };
  message?: string | null;
};


export async function createAsset(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateAsset.safeParse({
    name: formData.get('name'),
    typeId: formData.get('typeId'),
    employeeId: formData.get('employeeId'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  console.log(formData.get('name'))
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Asset.',
    };
  }

  // Prepare data for insertion into the database
  const { name, typeId, employeeId } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    const data: { name: string; typeId: number; employees?: { create: { employeeId: number } } } = {
      name,
      typeId: Number(typeId),
    };

    console.log(employeeId)

    if (employeeId) {
      data['employees'] = {create : {employeeId : Number(employeeId)}}
    } 
    await db.asset.create({
      data
    })
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Asset.',
    };
  }

  // Revalidate the cache for the Assets page and redirect the user.
  revalidatePath('/assets');
  redirect('/assets');
}