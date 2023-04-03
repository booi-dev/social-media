import SignUpForm from "./SingUpForm";

type SignUpWidgetProps = {
  handleGoogleLoginBtn: () => void;
  handleFbLoginBtn: () => void;
  handleEmailLoginBtn: (email, password) => void;
};

function SignUpWidget(props: SignUpWidgetProps) {
  const { handleGoogleLoginBtn, handleFbLoginBtn, handleEmailLoginBtn } = props;

  return (
    <div className="mt-4 rounded-sm border border-app-gray-1 p-4 dark:border-app-gray-3">
      <h1 className="text-xl font-bold">New to Socia?</h1>
      <p className="text-app-font-13 text-app-gray-3">
        Sign up now to get your own personalized timeline!
      </p>
      <SignUpForm
        handleGoogleLoginBtn={handleGoogleLoginBtn}
        handleFbLoginBtn={handleFbLoginBtn}
        handleEmailLoginBtn={handleEmailLoginBtn}
      />
    </div>
  );
}

export default SignUpWidget;
