export interface TPostData {
    slug: string
    title: string
    date: string
    description: string
    image: string
}

export interface TPostDataWithContent extends TPostData {
    content: string
}

export interface TProject {
    title: string
    description: string
    image: string
    link: string
}
