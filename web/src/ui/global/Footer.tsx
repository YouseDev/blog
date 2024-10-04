import { Box, Link } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box
            w="100%"
            bg="gray.800"
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
                href="https://github.com/YouseDev/blog"
            >
                Source Code
            </Link>
        </Box>
    )
}

export default Footer
