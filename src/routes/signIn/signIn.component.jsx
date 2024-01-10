import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
    </div>
  );
};

export default SignIn;
