"use client"

import Theme from "@/settings/theme"
import { ChakraProvider } from "@chakra-ui/react"

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={Theme}>{children}</ChakraProvider>
}
