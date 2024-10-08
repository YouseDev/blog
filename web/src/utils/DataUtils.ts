import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { TPostData, TPostDataWithContent, TProject } from "@/types/ClientTypes"

// Directory containing all markdown posts
const postsDirectory = path.join(process.cwd(), "src/data/posts")

// Directory containing all markdown projects
const projectsDirectory = path.join(process.cwd(), "src/data/projects")

// Retrieves and sorts all post metadata from markdown files
export const getAllPostMetaData = (): TPostData[] => {
    try {
        const fileNames = fs.readdirSync(postsDirectory)
        const allPostsData = fileNames
            .filter((fileName) => fileName.endsWith(".md"))
            .map((fileName) => {
                const slug = fileName.replace(/\.md$/, "")
                const fullPath = path.join(postsDirectory, fileName)
                const fileContents = fs.readFileSync(fullPath, "utf8")
                const matterResult = matter(fileContents)

                return {
                    slug,
                    ...matterResult.data,
                } as TPostData
            })

        // Sort posts by date in descending order
        return allPostsData.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        )
    } catch (error) {
        console.error("getManyPostMetaData => ", error)
        return []
    }
}

// Retrieves post content for a single post by its slug
export const getPostContent = (slug: string): TPostDataWithContent | null => {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const matterResult = matter(fileContents)

        return {
            slug,
            content: matterResult.content,
            ...matterResult.data,
        } as TPostDataWithContent
    } catch (error) {
        console.error(`getPostContent / Error slug = ${slug} =>  `, error)
        return null
    }
}

// Retrieves metadata for a single post by its slug
export const getPostMetaData = (slug: string): TPostData | null => {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const matterResult = matter(fileContents)

        return {
            slug,
            ...matterResult.data,
        } as TPostData
    } catch (error) {
        console.error(`getPostMetaData / slug = ${slug} => `, error)
        return null
    }
}

// Retrieves metadata for a single post by its slug
export const getProjectsMetaData = (): TProject[] => {
    console.log(projectsDirectory)
    try {
        const fileNames = fs.readdirSync(projectsDirectory)
        const allProjectsData = fileNames
            .filter((fileName) => fileName.endsWith(".md"))
            .map((fileName) => {
                const slug = fileName.replace(/\.md$/, "")
                const fullPath = path.join(projectsDirectory, fileName)
                const fileContents = fs.readFileSync(fullPath, "utf8")
                const matterResult = matter(fileContents)

                return {
                    ...matterResult.data,
                } as TProject
            })

        return allProjectsData
    } catch (error) {
        console.error("getProjectsMetaData => ", error)
        return []
    }
}
