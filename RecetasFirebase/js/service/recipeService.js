import {db} from './firebase.js';
import { addDoc, collection, serverTimestamp, query, orderBy, getDocs} from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js';


const COLLECTION_NAME='recetas';

// Funcion para crear recetas
export async function createRecipe(recipeData){
    try{
        const docId= addDoc(collection(db,COLLECTION_NAME),{
            ...recipeData,
            createAt: serverTimestamp(),
            updateAt: serverTimestamp(),
        })
        return {succes: true, id:docId.id};
    }
    catch(error){
        console.log('Error creando la recetas');
        return{succes: false, error: error.message};
    }
    
}

//Funcion para retornar todas las recetas

export async function getAllRecipes(){
    try{
        const q =query(
            collection(db, COLLECTION_NAME),
            orderBy('createdAt', 'desc')
        );
        const result= await getDocs(q);
        const recipes = [];
        result.forEach(doc => {
            recipes.push({
                id: doc.id,
                ...doc.data()
            })
            
        });
        return {success:true, data:recipes};
    }
    catch(error){
        console.log('Error creando la recetas');
        return{succes: false, error: error.message};
    }
}

export async function getRecipeById(recipeId){
    
}

export async function updateRecipe(recipeId, recipeData){
    
}

export async function deleteRecipe(recipeId){
    
}