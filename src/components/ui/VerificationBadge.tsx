import { VerifiedIcon } from "../icons";

type VerificationBadgeType = {
  type?: string;
};

type BadgeColorVariant = {
  [key: string]: string;
  blue: string;
  gold: string;
  gray: string;
};

function VerificationBadge(props: VerificationBadgeType) {
  const { type: color } = props;

  const badgeColorVariant: BadgeColorVariant = {
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
