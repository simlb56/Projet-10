 import userStore from '../store/userStore';

 import { showError, getProfile } from '../slices/userSlice';

 
 const userProfileMiddleware = (token) => {
  /*l'utilisateur est authentifié.*/
   return async (dispatch) => {
     try {
       const data = await userStore.getUserProfile(token);
       const status = data.status;
       if (status === 200) {
        const profil = { ...data.body };
         dispatch(getProfile(profil));
       }
     } catch (error) {
       const status = error.response.status;
       if (status === 400) {
        dispatch(showError(error.response.data.message));
      } else {
         throw new Error(error.message);
      }
     }
   };
 };

 export default userProfileMiddleware;
