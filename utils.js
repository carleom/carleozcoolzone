import fs from "fs";
import { marked } from "marked";
import path from "path";
import matter from 'gray-matter';

const getPosts = () => {
    const files = fs.readdirSync('posts')
    const filesWithMetaData = files.map(file => fs.readFileSync(path.join('posts', file)).toString())
    const parsedMarkdown = filesWithMetaData.map(file => matter(file))
    const posts = parsedMarkdown.map(post => post.data)
    return posts
}

// Sort by latest updates
export const getLatestUpdates = () => {
    let posts = getPosts()
    console.log(posts)

}

// Sort by latest updates
export const getLatestPosts = () => {

}