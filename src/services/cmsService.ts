// src/services/cmsService.ts
'use server';

import { db } from '@/lib/firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, serverTimestamp, QueryDocumentSnapshot, DocumentData, orderBy, query } from 'firebase/firestore';

export interface CmsPage {
  id: string; // The document ID, which is the slug (e.g., "about")
  title: string;
  path: string;
  content: string;
  createdAt: string;
  updatedAt: string | null;
}

const pagesConfig = [
    { id: "about", title: "About Us", path: "/about" },
    { id: "privacy-policy", title: "Privacy Policy", path: "/privacy-policy" },
    { id: "conference-faq", title: "Conference FAQs", path: "/conference/faq" },
];

async function initializePages() {
  for (const page of pagesConfig) {
    const pageRef = doc(db, 'pages', page.id);
    const docSnap = await getDoc(pageRef);
    if (!docSnap.exists()) {
      let initialContent = `<p>This is the initial content for the ${page.title} page. Please edit it in the CMS.</p>`;
      if (page.id === 'conference-faq') {
        initialContent = `
          <h2>General Questions</h2>
          <p><strong>How do I submit an abstract?</strong><br>You can submit your abstract through the specific conference's page. Look for the 'Submit Paper' or 'Call for Papers' button.</p>
          <p><strong>What are the registration fees?</strong><br>Registration fees vary depending on the conference and your category (e.g., student, academic, industry). Please check the individual conference page for details.</p>
          <h2>Publishing</h2>
          <p><strong>Will the conference proceedings be published?</strong><br>Yes, all accepted and presented papers will be published in the official conference proceedings, which are typically indexed in major scientific databases.</p>
          <p><strong>Can I get a visa invitation letter?</strong><br>Yes, we provide visa invitation letters to registered authors and attendees who require one. You can request it during the registration process.</p>
        `;
      }
      await setDoc(pageRef, {
        title: page.title,
        path: page.path,
        content: initialContent,
        createdAt: serverTimestamp(),
        updatedAt: null,
      });
    }
  }
}

export async function getPages(): Promise<CmsPage[]> {
  try {
    await initializePages(); // Ensure pages exist before fetching
    const q = query(collection(db, "pages"));
    const querySnapshot = await getDocs(q);
    const pages: CmsPage[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      const data = doc.data();
      // Only include pages that are in our config
      if (pagesConfig.some(p => p.id === doc.id)) {
        pages.push({
          id: doc.id,
          title: data.title,
          path: data.path,
          content: data.content,
          createdAt: data.createdAt?.toDate().toISOString() || new Date().toISOString(),
          updatedAt: data.updatedAt?.toDate().toISOString() || null,
        });
      }
    });
    // Sort based on the config order
    return pages.sort((a, b) => pagesConfig.findIndex(p => p.id === a.id) - pagesConfig.findIndex(p => p.id === b.id));
  } catch (error) {
    console.error("Error fetching CMS pages: ", error);
    return [];
  }
}

export async function getPageContent(pageId: string): Promise<{ success: boolean; content?: string; message: string }> {
  try {
    const pageRef = doc(db, 'pages', pageId);
    const docSnap = await getDoc(pageRef);

    if (docSnap.exists()) {
      return { success: true, content: docSnap.data().content, message: "Content fetched." };
    } else {
      await initializePages();
      const newDocSnap = await getDoc(pageRef);
      if(newDocSnap.exists()) {
        return { success: true, content: newDocSnap.data().content, message: "Content fetched after initialization." };
      }
      return { success: false, message: "Page not found." };
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unexpected error occurred.";
    return { success: false, message };
  }
}


export async function updatePageContent(pageId: string, content: string): Promise<{ success: boolean; message: string }> {
  try {
    if (!pageId) {
      return { success: false, message: 'Page ID is required.' };
    }
    const pageRef = doc(db, 'pages', pageId);
    await updateDoc(pageRef, {
      content,
      updatedAt: serverTimestamp(),
    });
    return { success: true, message: 'Page content updated successfully.' };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return { success: false, message: `Failed to update page: ${message}` };
  }
}
