import { extendTheme } from "@chakra-ui/react"
import { Tajawal } from "next/font/google"

export const customFont = Tajawal({
    weight: ["400", "700", "900"],
    subsets: ["arabic"],
    display: "swap",
    preload: true,
})

const Theme = extendTheme({
    fonts: {
        heading: `${customFont.style.fontFamily}`,
        body: `${customFont.style.fontFamily}`,
    },

    styles: {
        global: {
            "html, body": {
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                overflowX: "hidden",
                overscrollBehavior: "none",
                backgroundColor: "#000",
                direction: "rtl",
                color: "gray.200",
            },
        },
    },
})

export default Theme
