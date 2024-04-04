
import axios from 'axios';

export const createUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8000/user', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

// Route de connexion
export const loginUser = async (matricule, email, password) => {
  try {
    const response = await axios.post('http://localhost:8000/login', {
      matricule: matricule,
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};




// Service pour modifier un utilisateur
export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`http://localhost:8000/user/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};


// Service pour supprimer un utilisateur
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`http://localhost:8000/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};
