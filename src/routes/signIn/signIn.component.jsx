import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/category-item/sign-up-form/sign-up-component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="">
      <h2>Sign In</h2>
      <button className="" onClick={logGoogleUser}>
        Sign in with google
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
