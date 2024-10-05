"use client"

import { TPostData } from "@/types/ClientTypes"
import { Box, Heading, VStack, SimpleGrid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

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
                mt="2"
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
            position="relative"
            maxW="container.md"
            mx="auto"
        >
            <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
            <VStack
                w="100%"
                bg="blackAlpha.800"
                position="absolute"
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
