import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/* 
const config = {
  apiKey: 'AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14',
  authDomain: 'crwn-db.firebaseapp.com',
  databaseURL: 'https://crwn-db.firebaseio.com',
  projectId: 'crwn-db',
  storageBucket: 'crwn-db.appspot.com',
  messagingSenderId: '850995411664',
  appId: '1:850995411664:web:7ddc01d597846f65'

};
 */
const config = {
  apiKey: "AIzaSyAUcZBVRt_R52G-vsLDUecFROdJUaiw5rg",
  authDomain: "crow-clothing-d1895.firebaseapp.com",
  projectId: "crow-clothing-d1895",
  storageBucket: "crow-clothing-d1895.appspot.com",
  messagingSenderId: "601888871109",
  appId: "1:601888871109:web:e56f071b76f285d17b96ac",
  measurementId: "G-3KDHE99GVB"
};

firebase.initializeApp(config);

const db = firebase.firestore();


export const createCollectionDocument = async (name,InputData)=>
{
    InputData.forEach(element => {
        db.collection(`${name}`).doc(element.tittle).set(
            {
                title: element.title,
                items: element.items
            }
        );
    });
    

}

export const getCollectionDocument = async(name) =>
{
    const fixer = [];

      db.collection(`${name}`).get()
     .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
        fixer.push(doc.data());
     });})
    
    /*
        //if as object     
     
        return Object.assign({},[fixer[1]]);
    
     */

    return fixer;
}