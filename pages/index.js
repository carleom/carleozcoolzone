import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from 'gray-matter';

const Home = ({ posts }) => {
  return(
    <>
      <Intro />
      <div className="space-y-8">
        <RecentPosts posts={posts}/>
        <RecentUpdates posts={posts}/>
        <DirectLinks/>
      </div>
    </>
  )
};

const RecentPosts = ({posts}) => {
  return(
    <div>
      <h3 className="text-blue text-3xl">recent posts</h3>
      <Container>
      {posts.map(post => {
            return (
              <div key={post.slug}>
                <Link href={"/blog/" + post.slug} className="text-xl">
                  {post.title}
                </Link>
              </div>
            );
      })}
      </Container>
    </div>
  )
}

const RecentUpdates = ({posts}) => {
  return(
    <div>
      <h3 className="text-purpleDim text-3xl">recent updates</h3>
      <Container>
      {posts.map(post => {
            return (
              <div key={post.slug}>
                <Link href={"/blog/" + post.slug}>
                  {post.title}
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
  const filesWithMetaData = files.map(file => fs.readFileSync(path.join('posts', file)).toString())
  const parsedMarkdown = filesWithMetaData.map(file => matter(file))
  const posts = parsedMarkdown.map(post => post.data)
  return {
    props: {
      posts: posts,
      slugs: files.map(filename => ({
        slug: filename.replace(".md","")
      }))
    }
  };
};



export default Home;