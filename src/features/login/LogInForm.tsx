import { createPortal } from "react-dom";

function LogInForm() {
  const portal = document.getElementById("portal");

  let LogInFormPortal: React.ReactPortal | React.ReactElement = <div />;

  if (portal) {
    LogInFormPortal = createPortal(
      <div>
        <h1>Login here</h1>
      </div>,
      portal
    );
  }

  return LogInFormPortal;
}

export default LogInForm;
