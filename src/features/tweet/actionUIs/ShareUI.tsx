import { useState } from "react";
import { RxShare2 } from "react-icons/rx";

import SharePanel from "../actions/SharePanel";
import AppIcon from "../../../components/ui/AppIcon";

function ShareUI() {
  const [isSharePanelShow, setIsSharePanelShow] = useState(false);

  return (
    <div className="relative">
      <button type="button" onClick={() => setIsSharePanelShow(true)}>
        <AppIcon icon={RxShare2} hoverColor="coral" />
      </button>
      {isSharePanelShow && (
        <SharePanel closeHandler={() => setIsSharePanelShow(false)} />
      )}
    </div>
  );
}

export default ShareUI;
