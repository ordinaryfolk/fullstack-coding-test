import FirebaseApp from "firebase/app";
import "firebase/auth";

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

if (!(FirebaseApp as any).apps.length) {
  FirebaseApp.initializeApp(FirebaseCredentials);
}

export default FirebaseApp;
