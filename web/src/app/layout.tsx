import { Providers } from "@/ui/global/Provider"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ar-SA">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

export default Layout
