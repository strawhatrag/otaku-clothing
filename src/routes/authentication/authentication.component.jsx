import SignInForm from "../../components/category-item/sign-in-form/sign-in-component";
import SignUpForm from "../../components/category-item/sign-up-form/sign-up-component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
