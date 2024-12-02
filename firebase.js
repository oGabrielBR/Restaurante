import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";


  const addDish = async () => {
    try {
      const dish = {
        name: "Churrasco",
        price: 24,
        description: "Churrasco com Abacaxi",
        category: "Churrasco",
        imageUrl: "churrasco.jpg",
      };
      const docRef = await addDoc(collection(db, "pratos"), dish);
      console.log("Prato adicionado com ID:", docRef.id);
    } catch (error) {
      console.error("Erro ao adicionar prato:", error);
    }
  };

  const getDishes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "pratos"));
      const dishes = [];
      querySnapshot.forEach((doc) => {
        dishes.push({ id: doc.id, ...doc.data() });
      });
      console.log(dishes);
    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
    }
  };

  const updateDish = async (id) => {
    try {
      const dishRef = doc(db, "pratos", id);
      await updateDoc(dishRef, { price: 35 });
      console.log("Prato atualizado!");
    } catch (error) {
      console.error("Erro ao atualizar prato:", error);
    }
  };

  const deleteDish = async (id) => {
    try {
      const dishRef = doc(db, "pratos", id);
      await deleteDoc(dishRef);
      console.log("Prato excluído!");
    } catch (error) {
      console.error("Erro ao excluir prato:", error);
    }
  };