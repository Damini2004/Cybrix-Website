
// src/services/superAdminService.ts
'use server';

import { db } from '@/lib/firebase';
import { collection, getDocs, doc, setDoc, limit, query, updateDoc } from 'firebase/firestore';
import { z } from 'zod';

export interface SuperAdmin {
  id: string;
  email: string;
  password?: string;
}

const defaultSuperAdmin = {
    email: 'superadmin@cybrix.com',
    password: 'password',
};

// Zod schema for updating credentials
const updateAdminSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

// Function to ensure the default super admin exists
async function initializeSuperAdmin(): Promise<void> {
  const superAdminRef = collection(db, 'super-admins');
  const q = query(superAdminRef, limit(1));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    console.log("No super admin found, creating default super admin...");
    // Use a specific ID for the default document to prevent duplicates
    const defaultAdminDocRef = doc(db, 'super-admins', 'default-admin');
    await setDoc(defaultAdminDocRef, defaultSuperAdmin);
  }
}

async function getSuperAdminCredentials(): Promise<SuperAdmin | null> {
    await initializeSuperAdmin(); // Ensure the default admin exists if none do

    const superAdminRef = collection(db, 'super-admins');
    const q = query(superAdminRef, limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
        return null;
    }
    const adminDoc = snapshot.docs[0];
    const data = adminDoc.data();
    return {
        id: adminDoc.id,
        email: data.email,
        password: data.password
    };
}

export async function getSuperAdmin(): Promise<{ success: boolean; admin: SuperAdmin | null; message: string }> {
    try {
        const admin = await getSuperAdminCredentials();
        if (admin) {
            return { success: true, admin, message: "Super admin found." };
        }
        return { success: false, admin: null, message: "Super admin account not found or configured." };
    } catch (error) {
        const message = error instanceof Error ? error.message : "An unexpected error occurred.";
        return { success: false, admin: null, message };
    }
}


export async function verifySuperAdminCredentials(email: string, password_provided: string): Promise<{ success: boolean; message: string }> {
  try {
    const adminCredentials = await getSuperAdminCredentials();

    if (!adminCredentials) {
      return { success: false, message: 'Super admin configuration not found.' };
    }

    if (adminCredentials.email === email && adminCredentials.password === password_provided) {
      return { success: true, message: 'Login successful!' };
    } else {
      return { success: false, message: 'Invalid credentials for super admin.' };
    }
  } catch (error) {
    console.error("Error verifying super-admin credentials:", error);
    return { success: false, message: 'An unexpected error occurred during super admin login.' };
  }
}

export async function updateSuperAdmin(id: string, data: z.infer<typeof updateAdminSchema>): Promise<{ success: boolean; message: string }> {
    try {
        const validation = updateAdminSchema.safeParse(data);
        if (!validation.success) {
            return { success: false, message: validation.error.errors[0].message };
        }
        
        const adminRef = doc(db, 'super-admins', id);
        await updateDoc(adminRef, validation.data);
        
        return { success: true, message: "Super admin credentials updated." };
    } catch (error) {
        const message = error instanceof Error ? error.message : "An unexpected error occurred.";
        return { success: false, message };
    }
}
