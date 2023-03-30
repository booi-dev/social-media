import { useEffect, useState } from "react";
import useGetProperties from "../../../hooks/useGetProperties";
import { VerificationBadge } from "../../../components/UI";

type PostCreatorPicType = {
  postCreatorUid: string;
};

type PostSignatureType = PostCreatorPicType & {
  postTimespan: number;
};

function PostCreatorPic({ postCreatorUid }: PostCreatorPicType) {
  const { useGetPostCreator } = useGetProperties();
  // const postCreator = useGetPostCreator(postCreatorUid);
  const [postCreator, setPostCreator] = useState();

  useEffect(() => {
    const getProperty = async () => {
      const creator = await useGetPostCreator(postCreatorUid);
      setPostCreator(creator);
    };
    getProperty();
  }, []);

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

  const { useGetPostCreator, getTimeElapse } = useGetProperties();

  const postCreator = useGetPostCreator(postCreatorUid);

  return (
    <>
      <h2 className="font-bold text-inherit">{postCreator?.displayName}</h2>
      {postCreator?.verification.state && (
        <VerificationBadge type={postCreator?.verification.type} />
      )}
      <h2 className="text-inherited">{`@${postCreator?.userName}`}</h2>
      <div className="mx-.5 text-inherited">·</div>
      <h2 className="text-inherited">{getTimeElapse(postTimespan)}</h2>
    </>
  );
}

export { PostCreatorPic };
export default PostSignature;
