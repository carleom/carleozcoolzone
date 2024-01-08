import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { sortUpdatedPosts, sortCreatedPosts } from "@/utils";
import Intro from "@/components/intro";

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
  const recentPosts = sortCreatedPosts(posts)
  return(
    <div>
      <h3 className="text-blue text-3xl">recent posts</h3>
      <Container>
      {recentPosts.map(post => {
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
  const recentUpdates = sortUpdatedPosts(posts)
  return(
    <div>
      <h3 className="text-green text-3xl">recent updates</h3>
      <Container>
      {recentUpdates.map(post => {
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