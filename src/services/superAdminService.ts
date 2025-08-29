// src/services/superAdminService.ts
'use server';

import { db } from '@/lib/firebase';
import { collection, getDocs, doc, setDoc, limit, query } from 'firebase/firestore';
import { z } from 'zod';

export interface SuperAdmin {
  id: string;
  email: string;
  password?: string;
}

const defaultSuperAdmin = {
    email: 'superadmin@pureresearchinsights.com',
    password: 'password',
};

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

async function getSuperAdminCredentials(): Promise<Omit<SuperAdmin, 'id'> | null> {
    await initializeSuperAdmin(); // Ensure the default admin exists if none do

    const superAdminRef = collection(db, 'super-admins');
    const q = query(superAdminRef, limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
        return null;
    }
    const adminDoc = snapshot.docs[0];
    return adminDoc.data() as Omit<SuperAdmin, 'id'>;
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
