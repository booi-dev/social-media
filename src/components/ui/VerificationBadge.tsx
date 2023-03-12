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
    blue: "text-sky-700",
    gold: "text-yellow-700",
    gray: "text-gray-600",
  };

  return <MdVerified className={`${color && badgeColorVariant[color]}`} />;
}

VerificationBadge.defaultProps = {
  type: "",
};

export default VerificationBadge;
