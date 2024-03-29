import { ViewIcon } from "../../../components/icons";
import { AppIcon } from "../../../components/ui";

function ViewUI() {
  return (
    <div className="hidden sm:block">
      <AppIcon icon={ViewIcon} rotateDeg={90} hoverColor="pri" />
    </div>
  );
}

export default ViewUI;
