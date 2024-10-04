import { getPostContent, getPostMetaData } from "@/utils/PostTools"
import { getManyPostMetaData } from "@/utils/PostTools"
import PostContainer from "@/ui/containers/PostContainer"
import { notFound } from "next/navigation"

// force static generation
export const dynamic = "force-static"

// generate static params for all posts
export const generateStaticParams = async () => {
    const posts = getManyPostMetaData()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

// generate metadata for a single post
export const generateMetadata = async ({
    params,
}: {
    params: { slug: string }
}) => {
    // get the post data
    const postData = getPostMetaData(params.slug)
    // if the post is not found, return a 404 page
    if (!postData) {
        return {
            title: "Post not found",
        }
    }

    // return the post metadata
    return {
        title: postData.title,
    }
}

// main component for a single post page
const PostPage = ({ params }: { params: { slug: string } }) => {
    // get the post data
    const postData = getPostContent(params.slug)

    // if the post is not found, return a 404 page
    if (!postData) {
        return notFound()
    }

    // return the post container
    return <PostContainer postData={postData} />
}

export default PostPage
