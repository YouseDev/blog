import HomeContainer from "@/ui/containers/HomeContainer"
import { getManyPostMetaData } from "@/utils/DataUtils"

// metadata for the home page
export const metadata = {
    title: "Blog",
    description: "Blog",
}

// main component for the home page
const HomePage = () => {
    const allPostsData = getManyPostMetaData()
    return <HomeContainer allPostsData={allPostsData} />
}

export default HomePage
