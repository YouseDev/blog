import { TPostData } from "@/types/ClientTypes"
import { getAllPostMetaData, getPostMetaData } from "@/utils/DataUtils"
import { GetServerSideProps } from "next"
import { join } from "path"

const Page = () => null

const generateSitemap = (posts: TPostData[]) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://yousef.blog</loc>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>https://yousef.blog/projects</loc>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
        ${posts
            .map(
                (post) => ` 
            <url>
                <loc>https://yousef.blog/post/${post.slug}</loc>
                <changefreq>daily</changefreq>
                <priority>0.8</priority>
            </url>
        `,
            )
            .join("")}
    </urlset>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    try {
        // get all posts
        const posts = getAllPostMetaData()

        // Generate sitemap
        const sitemap = generateSitemap(posts)

        res.setHeader("Content-Type", "text/xml")
        res.write(sitemap)
        res.end()

        return {
            props: {},
        }
    } catch (error) {
        console.error(error)
        res.statusCode = 500
        res.end()
        return {
            props: {},
        }
    }
}

export default Page
