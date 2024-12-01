import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert('./serviceAccountKey.json')
});

export const firestore = admin.firestore();