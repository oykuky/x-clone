import { Feed } from "@/components/feed/Feed";
import { NewPostArea } from "@/components/feed/NewPostArea";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-evenly text-textGray font-semibold border-b-[1px] border-borderGray px-4 pt-4">
        <Link
          className="flex items-center border-b-4 border-iconBlue pb-2"
          href="/"
        >
          For you
        </Link>
        <Link className="flex items-center pb-2" href="/">
          Following
        </Link>
      </div>
      <NewPostArea />
      <Feed />
    </div>
  );
};

export default Homepage;
