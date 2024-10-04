"use client"

import Theme from "@/config/Theme"
import { Box, ChakraProvider } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"
import { useMemo } from "react"
import { usePathname } from "next/navigation"

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
