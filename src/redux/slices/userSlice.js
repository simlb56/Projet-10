import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: '',
  firstName: '',
  lastName: '',
  token: undefined,
  error: false,
  errorMessage: '',
  isConnected: false
};
/*ce userSlice sert à stocker et gérer les données utilisateur dans le store Redux pendant que je navigue sur le site.*/
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => { /*Stocke le token pour maintenir la session utilisateur */
      state.token = action.payload.token;
      state.isConnected = true;
      state.error = false;
    },
    logOut: () => initialState,/*L'utilisateur se déconnecte */
    getProfile: (state, action) => { 
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.id = action.payload.id;
    },
    editProfile: (state, action) => { // Met à jour le prénom/nom
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    showError: (state, action) => {
      state.error = true;
      state.errorMessage = action.payload.errorMessage;
    }
  }
});

// Export the action creators
export const { signIn, showError, getProfile, editProfile, logOut } =
  userSlice.actions;
export default userSlice.reducer;
