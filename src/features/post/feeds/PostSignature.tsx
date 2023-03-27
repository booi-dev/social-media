import React from "react";
import useGetProperties from "../../../hooks/useGetProperties";
import VerificationBadge from "../../../components/ui/VerificationBadge";

type TweetCreatorPicType = {
  tweetCreatorUid: string;
};

type TweetSignatureType = TweetCreatorPicType & {
  tweetTimespan: number;
};

function TweetCreatorPic({ tweetCreatorUid }: TweetCreatorPicType) {
  const { getTweetCreator } = useGetProperties();
  const tweetCreator = getTweetCreator(tweetCreatorUid);
  return (
    <img
      src={tweetCreator?.displayPicURL}
      alt=""
      className="h-full w-full rounded-full object-cover"
    />
  );
}

function TweetSignature(props: TweetSignatureType) {
  const { tweetCreatorUid, tweetTimespan } = props;

  const { getTweetCreator, getTimeElapse } = useGetProperties();

  const tweetCreator = getTweetCreator(tweetCreatorUid);

  return (
    <>
      <h2 className="font-bold text-inherit">{tweetCreator?.displayName}</h2>
      {tweetCreator?.verification.state && (
        <VerificationBadge type={tweetCreator?.verification.type} />
      )}
      <h2 className="text-inherited">{`@${tweetCreator?.userName}`}</h2>
      <div className="mx-.5 text-inherited">·</div>
      <h2 className="text-inherited">{getTimeElapse(tweetTimespan)}</h2>
    </>
  );
}

export { TweetCreatorPic };
export default TweetSignature;
