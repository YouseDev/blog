import HomeContainer from "@/ui/containers/HomeContainer"
import { getAllPostMetaData } from "@/utils/DataUtils"
import SEO from "@/config/SEO"

// metadata for the home page
export const metadata = {
    metadataBase: new URL(SEO.siteUrl),
    title: `الرئيسية | ${SEO.siteName}`,
    description: SEO.siteDescription,
    language: "ar",
    contentType: "website",
    alternates: {
        canonical: SEO.siteUrl,
    },
    openGraph: {
        title: `الرئيسية | ${SEO.siteName}`,
        description: SEO.siteDescription,
        url: SEO.siteUrl,
        siteName: SEO.siteName,
        locale: "ar_SA",
        type: "website",
        images: [
            {
                url: SEO.ogImage,
                width: 1200,
                height: 630,
                alt: SEO.siteName + " " + SEO.siteDescription,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@yousefxdev",
        title: `الرئيسية | ${SEO.siteName}`,
        description: SEO.siteDescription,
        images: SEO.ogImage,
    },
}

// main component for the home page
const HomePage = () => {
    const allPostsData = getAllPostMetaData()
    return <HomeContainer allPostsData={allPostsData} />
}

export default HomePage
