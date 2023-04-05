import useGetProperties from "../../../hooks/useGetProperties";
import { VerificationBadge } from "../../../components/UI";
import { useGetDataFromDb } from "../../../data";
import { UserType } from "../../../types";

type PostCreatorPicType = {
  postCreatorUid: string;
};

type PostSignatureType = PostCreatorPicType & {
  postTimespan: number;
};

function PostCreatorPic({ postCreatorUid }: PostCreatorPicType) {
  const postCreator = useGetDataFromDb<UserType>("users", postCreatorUid);

  return (
    <img
      src={postCreator?.displayPicURL}
      alt=""
      className="h-full w-full rounded-full object-cover"
    />
  );
}

function PostSignature(props: PostSignatureType) {
  const { postCreatorUid, postTimespan } = props;

  const { getTimeElapse } = useGetProperties();

  const postCreator = useGetDataFromDb<UserType>("users", postCreatorUid);

  return (
    <>
      <h2 className="w-[70px] truncate font-bold text-inherit sm:w-full">
        {postCreator?.displayName}
      </h2>
      {postCreator?.verification.state && (
        <VerificationBadge type={postCreator?.verification.type} />
      )}
      <h2 className="text-inherited w-[70px] truncate sm:w-full">{`@${postCreator?.userName}`}</h2>
      <div className="mx-.5 text-inherited">·</div>
      <h2 className="text-inherited">{getTimeElapse(postTimespan)}</h2>
    </>
  );
}

export { PostCreatorPic };
export default PostSignature;
