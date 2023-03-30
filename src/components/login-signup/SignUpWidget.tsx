import SignUpForm from "./SingUpForm";

function SignUpWidget() {
  return (
    <div className="mt-4 rounded-sm border border-app-gray-1 p-4 dark:border-app-gray-3">
      <h1 className="text-xl font-bold">New to Socia?</h1>
      <p className="text-app-font-13 text-app-gray-3">
        Sign up now to get your own personalized timeline!
      </p>
      <SignUpForm />
    </div>
  );
}

export default SignUpWidget;
