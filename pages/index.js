import Link from "next/link";
import fs from "fs";

const Home = ({ slugs }) => {
  return(
    <RecentPosts slugs={slugs}/>
  )
};

const RecentPosts = ({slugs}) => {
  return(
    <div>
    <h3 className="bg_h">recent posts</h3>
    {slugs.map(slug => {
      return (
        <div className="" key={slug}>
          <Link href={"/blog/" + slug}>
            {"/blog/" + slug}
          </Link>
        </div>
      );
    })}
  </div>
  )
}


export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default Home;