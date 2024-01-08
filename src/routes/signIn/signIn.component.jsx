import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
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
