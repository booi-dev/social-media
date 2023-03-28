import { useState } from "react";

import { ShareIcon } from "../../../components/icons";
import { AppIcon } from "../../../components/UI";

import SharePanel from "../actions/SharePanel";

function ShareUI() {
  const [isSharePanelShow, setIsSharePanelShow] = useState(false);

  return (
    <div className="relative">
      <button type="button" onClick={() => setIsSharePanelShow(true)}>
        <AppIcon icon={ShareIcon} hoverColor="pri" />
      </button>
      {isSharePanelShow && (
        <SharePanel closeHandler={() => setIsSharePanelShow(false)} />
      )}
    </div>
  );
}

export default ShareUI;
