import Link from "next/link";
import fs from "fs";

const Home = ({ slugs }) => {
  return(
    <>
      <Intro />
      <div className="space-y-8">
        <RecentPosts slugs={slugs}/>
        <RecentUpdates slugs={slugs}/>
        <DirectLinks/>
      </div>
    </>
  )
};

const RecentPosts = ({slugs}) => {
  return(
    <div>
      <h3 className="text-blue text-3xl">recent posts</h3>
      <Container>
      {slugs.map(slug => {
            return (
              <div key={slug}>
                <Link href={"/blog/" + slug} className="text-xl">
                  {slug}
                </Link>
              </div>
            );
      })}
      </Container>
    </div>
  )
}

const RecentUpdates = ({slugs}) => {
  return(
    <div>
      <h3 className="text-purpleDim text-3xl">recent updates</h3>
      <Container>
      {slugs.map(slug => {
            return (
              <div key={slug}>
                <Link href={"/blog/" + slug}>
                  {slug}
                </Link>
              </div>
            );
          })}
      </Container>
    </div>
  )
}

const Container = (props) => {
  return (
    <div className="
    bg-bg_h
      rounded-lg
      m-1 p-3 
      text-fg1 
      border-2 border-black 
      shadow-lg 
      flex flex-col
      text-xl">
      {props.children}
    </div>
  )
}

const Intro = () => {
  return (
    <div className="mb-6">
      <h1 className="text-orange text-4xl pl-1 pt-6 pb-4"><span>carleo</span>'s cool-zone</h1>
      <p className="text-fg ml-2">hi, this my blog where I post stuff like projects, thoughts, and stuff I like</p>
    </div>
  )
}

const DirectLinks = () => {
  return (
    <div>
      <h3 className="text-3xl text-yellow">direct links</h3>
      <Container>
        <Link href={"/blog"}>blog</Link>
        <Link href={"/about"}>about</Link>
      </Container>
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