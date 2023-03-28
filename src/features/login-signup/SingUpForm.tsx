import { AppleIcon, GoogleIcon } from "../../components/icons";

function SignUpForm() {
  return (
    <div
      className="mt-4 flex flex-col gap-4 bg-app-white-1 dark:bg-app-black-1
      [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:gap-2 [&>button]:rounded-sm [&>button]:py-2 
      [&>button]:text-app-black-1"
    >
      <button type="button" className="bg-app-white-2">
        <GoogleIcon />
        Sign up with Google
      </button>
      <button type="button" className="bg-app-white-2">
        <AppleIcon />
        Sign up with apple
      </button>
      <div
        className="flex w-full items-center bg-inherit py-3 text-center
          text-app-gray-3 before:mr-1 before:h-2 before:w-full before:border-b  before:border-app-gray-3 before:content-[''] after:ml-1 after:h-2 after:w-full  after:border-b after:border-app-gray-3 after:content-['']"
      >
        or
      </div>
      <button type="button" className="bg-pri-clr-1">
        Create account
      </button>
    </div>
  );
}

export default SignUpForm;
