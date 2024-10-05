import { getPostContent, getPostMetaData } from "@/utils/DataUtils"
import { getAllPostMetaData } from "@/utils/DataUtils"
import PostContainer from "@/ui/containers/PostContainer"
import { notFound } from "next/navigation"
import SEO from "@/config/SEO"
import Script from "next/script"
import { TPostData, TPostDataWithContent } from "@/types/ClientTypes"

// force static generation
export const dynamic = "force-static"

// generate static params for all posts
export const generateStaticParams = async () => {
    const posts = getAllPostMetaData()
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
            title: "المقال غير موجود",
        }
    }

    const postUrl = `${SEO.siteUrl}/post/${params.slug}`

    // return the post metadata
    return {
        metadataBase: new URL(SEO.siteUrl),
        title: `${postData.title} | ${SEO.siteName}`,
        description: postData.description,
        keywords: postData.tags.join(", "),
        language: "ar",
        contentType: "article",
        alternates: {
            canonical: postUrl,
        },
        openGraph: {
            title: `${postData.title} | ${SEO.siteName}`,
            description: postData.description,
            url: postUrl,
            siteName: SEO.siteName,
            locale: "ar_SA",
            type: "article",
            images: [
                {
                    url: postData.image,
                    width: 1200,
                    height: 630,
                    alt: postData.title,
                },
            ],
            article: {
                publishedTime: postData.date,
                modifiedTime: postData.date,
                authors: [SEO.author],
                tags: postData.tags,
            },
        },
        twitter: {
            card: "summary_large_image",
            site: "@yousefxdev",
            title: `${postData.title} | ${SEO.siteName}`,
            description: postData.description,
            images: postData.image,
        },
    }
}

// Generate Schema.org JSON-LD script
const generateSchemaOrgScript = (
    postData: TPostDataWithContent,
    slug: string,
) => {
    const postUrl = `${SEO.siteUrl}/post/${slug}`
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: postData.title,
        description: postData.description,
        image: postData.image,
        author: {
            "@type": "Person",
            name: SEO.author,
        },
        publisher: {
            "@type": "Organization",
            name: SEO.siteName,
            logo: {
                "@type": "ImageObject",
                url: `${SEO.siteUrl}/logo.png`,
            },
        },
        datePublished: postData.date,
        dateModified: postData.date,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": postUrl,
        },
        keywords: postData.tags.join(", "),
        articleBody: postData.content,
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: SEO.siteName,
                    item: SEO.siteUrl,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: postData.title,
                    item: postUrl,
                },
            ],
        },
    }

    return (
        <Script
            id="schema-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    )
}

// main component for a single post page
const PostPage = ({ params }: { params: { slug: string } }) => {
    // get the post data
    const postData = getPostContent(params.slug)

    // if the post is not found, return a 404 page
    if (!postData) {
        return notFound()
    }

    // return the post container with Schema.org script
    return (
        <>
            {generateSchemaOrgScript(postData, params.slug)}
            <PostContainer postData={postData} />
        </>
    )
}

export default PostPage
