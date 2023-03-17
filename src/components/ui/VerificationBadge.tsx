import { MdVerified } from "react-icons/md";

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

  return <MdVerified className={`${color && badgeColorVariant[color]}`} />;
}

VerificationBadge.defaultProps = {
  type: "",
};

export default VerificationBadge;
