import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const addProduct = (p)=>
  addDoc(collection(db,"products"),p);

export const getProducts = async ()=>{
  let snap = await getDocs(collection(db,"products"));
  let arr=[];
  snap.forEach(d=>arr.push({id:d.id,...d.data()}));
  return arr;
};

export const deleteProduct = (id)=>
  deleteDoc(doc(db,"products",id));
