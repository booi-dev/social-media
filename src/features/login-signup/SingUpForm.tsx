import { AppleIcon, GoogleIcon } from "../../components/icons";

function SignUpForm() {
  return (
    <div
      className="mt-4 flex flex-col gap-4 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:gap-2 [&>button]:rounded-sm [&>button]:bg-app-white-1 [&>button]:py-2 
      [&>button]:text-app-black-1"
    >
      <button type="button">
        <GoogleIcon />
        Sign up with Google
      </button>
      <button type="button">
        <AppleIcon />
        Sign up with apple
      </button>
      <div
        className="flex w-full items-center py-3 text-center
          before:mr-1 before:h-2 before:w-full before:border-b-2 before:border-app-gray-2 before:content-[''] after:ml-1  after:h-2 after:w-full after:border-b-2 after:border-app-gray-2 after:content-['']"
      >
        or
      </div>
      <button type="button"> Create account</button>
    </div>
  );
}

export default SignUpForm;
