// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCct-70ftZJIcv8uW6BFhR0nByfZu9SXNI',
  authDomain: 'tickets-app-5cc80.firebaseapp.com',
  projectId: 'tickets-app-5cc80',
  storageBucket: 'tickets-app-5cc80.appspot.com',
  messagingSenderId: '756365005567',
  appId: '1:756365005567:web:9d430e4d0590bcfc97b2ca'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
