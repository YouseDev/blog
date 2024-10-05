import { Box, Link } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box
            as="footer"
            w="100%"
            bg="gray.900"
            p="1rem"
            minH="24px"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Link
                mt="1"
                _hover={{ textDecoration: "none" }}
                isExternal
                rel="nofollow"
                href="https://github.com/YouseDev/blog"
            >
                Source Code
            </Link>
        </Box>
    )
}

export default Footer
