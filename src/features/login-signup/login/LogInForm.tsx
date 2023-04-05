import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "../../../components/icons";

type LogInFormProps = {
  handleEmailLoginBtn: (email: string, password: string) => void;
};

function LogInForm(props: LogInFormProps) {
  const { handleEmailLoginBtn } = props;

  const [inputField, setinputField] = useState("");
  const [passwordField, setpasswordField] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setinputField(val);
    // console.log(val);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setpasswordField(val);
    // console.log(val);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputField, passwordField);
    handleEmailLoginBtn(inputField, passwordField);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="rounded-sm border border-app-gray-3 p-2">
        <label htmlFor="email" className="text-app-font-15 text-pri-clr-1">
          Phone, email, or username
          <input
            type="email"
            id="email"
            value={inputField}
            onChange={handleInput}
            className="w-full rounded-sm bg-app-white-2 p-2"
          />
        </label>
        <label htmlFor="password" className="text-app-font-15 text-pri-clr-1">
          Password
          <div className="flex items-center bg-app-white-2 px-2">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={passwordField}
              onChange={handlePassword}
              className="text-security-disc w-full rounded-sm bg-inherit py-2 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon size={18} />
              ) : (
                <EyeIcon size={18} />
              )}
            </button>
          </div>
        </label>

        <button
          type="submit"
          className="mt-4 w-full gap-4 rounded-sm bg-pri-clr-1 py-2 text-center font-bold text-app-black-1 hover:bg-pri-clr-2 active:bg-pri-clr-3"
        >
          Log in
        </button>
      </div>
    </form>
  );
}

export default LogInForm;
