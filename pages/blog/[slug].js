import React from "react";
import fs from 'fs';
import path from "path";
import matter from 'gray-matter';
import Head from "next/head";
import { marked } from "marked";
import Container from "@/components/container";
import Intro from "@/components/intro";


const Post = ({htmlString, data}) => {
    return( 
        <div>
            <Head>
                <title>{data.title}</title>
            </Head>
            <Intro />
            <PostHeader
                data={data}
            />
            <Container>
                <div dangerouslySetInnerHTML={{__html: htmlString}}></div>
            </Container>
        </div>
    )
};

const PostHeader = ({data}) => {
    return(
        <div className="text-fg">
            <h2 className="text-blue text-3xl">{data.title}</h2>
            <p>{data.description}</p>
            <p>Date Created: {data.created}</p>
            <p>Last Updated: {data.updated}</p>
        </div>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync('posts')
    return {
        paths: files.map(filename => ({
            params: {
                slug: filename.replace(".md","")
            }
        })),
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    // posts/faq.md
    const markdownWithMetadata = fs.readFileSync(path.join('posts', slug + ".md")).toString();
    const parsedMarkdown = matter(markdownWithMetadata)
    const htmlString = marked(parsedMarkdown.content)

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data
        } 
    }
}

export default Post;