import { collection, getDocs, query, orderBy } from 'firebase/firestore';

import { CLIENTS } from 'firebase/collections';
import firebaseData from 'firebase/firebase';

const { firebaseDb } = firebaseData;

export const getClients = async ({ name: nameFilter, triggerError }) => {
  const clients = [];
  try {
    const q = query(collection(firebaseDb, CLIENTS), orderBy('name'));
    const docs = await getDocs(q);
    docs.forEach(doc => {
      const client = doc.data();
      const { address, description, name, photo } = client;
      if (name.toUpperCase().includes(nameFilter.toUpperCase())) {
        clients.push({ address, description, name, photo, id: doc.id });
      }
    });
  } catch (error) {
    console.error(error);
    triggerError({ error });
  }
  return { clients };
};
