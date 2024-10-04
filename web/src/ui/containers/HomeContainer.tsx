"use client"

import { TPostData } from "@/types/ClientTypes"
import {
    Box,
    Heading,
    VStack,
    Text,
    SimpleGrid,
    Divider,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "next/link"

const HomeContainer = ({ allPostsData }: { allPostsData: TPostData[] }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <VStack
                w="100%"
                minH="100vh"
                maxW="container.lg"
                mx="auto"
                mt="10"
                mb="200px"
                spacing="6"
            >
                <SimpleGrid
                    columns={{ base: 1, md: 1 }}
                    w="100%"
                    justifyContent="center"
                    spacing="20"
                >
                    {allPostsData.map((post) => (
                        <Link key={post.slug} href={`/post/${post.slug}`}>
                            <PostCard post={post} />
                        </Link>
                    ))}
                </SimpleGrid>
            </VStack>
        </motion.div>
    )
}

const PostCard = ({ post }: { post: TPostData }) => {
    return (
        <Box
            as="article"
            key={post.slug}
            overflow="hidden"
            borderRadius="lg"
            bg="gray.700"
            w="100%"
            aspectRatio="16/9"
            backgroundImage={`url(${post.image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            maxW="container.md"
            mx="auto"
        >
            <VStack
                w="100%"
                bg="blackAlpha.800"
                bottom="0"
                justifyContent="center"
                alignItems="flex-start"
                px="4"
                pb={{ base: "4", md: "4" }}
                pt={{ base: "4", md: "6" }}
            >
                <Heading as="h3" size="lg">
                    {post.title}
                </Heading>
            </VStack>
        </Box>
    )
}

export default HomeContainer
