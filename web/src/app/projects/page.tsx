import { TProject } from "@/types/ClientTypes"
import ProjectContainer from "@/ui/containers/ProjectContainer"
import { getProjectsMetaData } from "@/utils/DataUtils"

// metadata
export const metadata = {
    title: "Projects",
    description: "Projects",
}

export const dynamic = "force-static"

// main component
const ProjectsPage = () => {
    const projects = getProjectsMetaData()
    return <ProjectContainer projects={projects} />
}

export default ProjectsPage
