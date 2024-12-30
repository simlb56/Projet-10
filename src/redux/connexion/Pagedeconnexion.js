import userStore from '../store/userStore';

import { signIn, showError } from '../slices/userSlice';


const logInMiddleware = (formDataSignIn) => {
  return async (dispatch) => {/*pour envoyer des actions */
    try {
      const data = await userStore.signInUser(formDataSignIn);
      const status = data.status;
      if (status === 200) {
        const tokenObject = data.body;
        dispatch(signIn(tokenObject));
      }
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        dispatch(showError(error.response.data.message));
        alert("L'identifiant ou mot de passe n'est pas correct");
      } else {
        throw new Error(error.message);
      }
    }
  };
};

export default logInMiddleware;