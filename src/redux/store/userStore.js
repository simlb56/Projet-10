/**
 * c'est utiliser axios pour envoyer des requêtes HTTP vers le serveur backend pour gérer
 *  l'authentification de l'utilisateur et la gestion de son profil (connexion, récupération du profil, mise à jour du profil).
 */
/*Axios est une bibliothèque pour faire des requêtes HTTP*/
import axios from 'axios';


export const signInUser = async (formDataSignIn) => {
  const response = await axios.post(
    `http://localhost:3001/api/v1/user/login`,
    formDataSignIn
  );
  return response.data;
};

export const getUserProfile = async (token) => {
  const axiosInstance = axios.create({
    baseURL: `http://localhost:3001/api/v1`,
    headers: { Authorization: `Bearer ${token}` }
  });
  const response = await axiosInstance.post(`/user/profile`);
  return response.data;
};

export const editUserProfile = async (token, updatedProfile) => {
  const axiosInstance = axios.create({
    baseURL: `http://localhost:3001/api/v1`,
    headers: { Authorization: `Bearer ${token}` }
  });
  const response = await axiosInstance.put(`/user/profile`, updatedProfile);
  return response.data;
};

export default {
  signInUser,
  getUserProfile,
  editUserProfile
};
