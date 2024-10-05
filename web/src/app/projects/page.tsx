import SEO from "@/config/SEO"
import { TProject } from "@/types/ClientTypes"
import ProjectContainer from "@/ui/containers/ProjectContainer"
import { getProjectsMetaData } from "@/utils/DataUtils"

// metadata
export const metadata = {
    metadataBase: new URL(SEO.siteUrl),
    title: `مشاريع | ${SEO.siteName}`,
    description: SEO.siteDescription,
    openGraph: {
        title: `مشاريع | ${SEO.siteName}`,
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
        title: `مشاريع | ${SEO.siteName}`,
        description: SEO.siteDescription,
        images: SEO.ogImage,
    },
}

export const dynamic = "force-static"

// main component
const ProjectsPage = () => {
    const projects = getProjectsMetaData()
    return <ProjectContainer projects={projects} />
}

export default ProjectsPage
