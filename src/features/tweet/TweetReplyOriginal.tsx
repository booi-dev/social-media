// import React from "react";
// import useGetProperties from "../../hooks/useGetProperties";
// import TweetSignature, { TweetCreatorPic } from "./TweetSignature";

// import { TweetType } from "../../types";

// type TweetReplyOriginalType = {
//   tweet: TweetType;
// };

// function TweetReplyOriginal({ tweet }: TweetReplyOriginalType) {
//   const { getTweetCreator } = useGetProperties();
//   const tweetCreator = getTweetCreator(tweet.createBy);
//   return (
//     <div className="flex flex-col px-4 ">
//       <div className="flex gap-4 ">
//         <div className="w-14 h-14 shrink-0">
//           <TweetCreatorPic tweetCreatorUid={tweet.createBy} />
//         </div>
//         <div className="flex items-center gap-1.5 text-inherit">
//           <TweetSignature
//             tweetCreatorUid={tweet.createBy}
//             tweetTimespan={tweet.timespan}
//           />
//         </div>
//       </div>

//       <div className="flex gap-4">
//         <div className="flex justify-center w-12">
//           <div className="w-[1px] h-full bg-app-white-3 dark:bg-app-gray-3" />
//         </div>
//         <div>{tweet.tweet}</div>
//       </div>
//       <div className="flex gap-4">
//         <div className="flex justify-center w-12">
//           <div className="w-[1px] h-full bg-app-white-3 dark:bg-app-gray-3" />
//         </div>
//         <h1 className=" py-3 text-app-gray-3">
//           Replying to
//           <span className="text-pri-blue-1"> @{tweetCreator?.userName}</span>
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default TweetReplyOriginal;
