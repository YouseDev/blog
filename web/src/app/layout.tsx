import Container from "@/ui/global/Container"
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ar-SA">
            <body>
                <Container>{children}</Container>
            </body>
        </html>
    )
}

export default Layout
