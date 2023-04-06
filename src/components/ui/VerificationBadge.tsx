import { VerifiedIcon } from "../icons";

type VerificationBadgeType = {
  type?: string;
};

function VerificationBadge(props: VerificationBadgeType) {
  const { type: color } = props;

  const badgeColorVariant: Record<string, string> = {
    pri: "text-pri-clr-1",
    blue: "text-sky-600",
    gold: "text-yellow-500",
    gray: "text-gray-500",
  };

  return <VerifiedIcon className={`${color && badgeColorVariant[color]}`} />;
}

VerificationBadge.defaultProps = {
  type: "",
};

export default VerificationBadge;
