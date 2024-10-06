"use client"

import Theme from "@/config/Theme"
import { Box } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"
import { useMemo } from "react"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"

const ChakraProvider = dynamic(
    () => import("@chakra-ui/provider").then((mod) => mod.ChakraProvider),
    { ssr: false },
)

const Container = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    const hideHeader = useMemo(() => {
        return pathname?.startsWith("/post/")
    }, [pathname])

    return (
        <ChakraProvider theme={Theme}>
            {!hideHeader && <Header />}
            <Box as="main">{children}</Box>
            {!hideHeader && <Footer />}
        </ChakraProvider>
    )
}

export default Container
