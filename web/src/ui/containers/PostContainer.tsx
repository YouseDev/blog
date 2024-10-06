"use client"

import { TPostDataWithContent } from "@/types/ClientTypes"
import {
    Heading,
    Text,
    VStack,
    Breadcrumb,
    BreadcrumbItem,
    HStack,
    Icon,
    Box,
    Divider,
    List,
    ListItem,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaChevronLeft, FaHome } from "react-icons/fa"
import { FaCalendarDays } from "react-icons/fa6"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Image from "next/image"
import AnimationConfig from "@/config/AnimationConfig"

const PostContainer = ({ postData }: { postData: TPostDataWithContent }) => {
    return (
        <motion.div {...AnimationConfig}>
            <VStack
                mt="8"
                w="100%"
                mx="auto"
                spacing="6"
                mb="100px"
                maxW="860px"
            >
                <HStack
                    alignItems="flex-start"
                    w="100%"
                    spacing="3"
                    maxW="860px"
                    px={{ base: "2", md: "0" }}
                >
                    <PostBreadcrumb title={postData.title} />
                    <HStack w="100%" justifyContent="flex-end">
                        <Icon mb="2" as={FaCalendarDays} color="gray.500" />
                        <Text fontSize="sm" color="gray.500">
                            {postData.date}
                        </Text>
                    </HStack>
                </HStack>
                <Box
                    w="100%"
                    position="relative"
                    borderRadius="lg"
                    overflow="hidden"
                    h={{ base: "420px", md: "420px" }}
                >
                    <Image
                        src={postData.image}
                        alt={`صورة ${postData.title}`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 860px) 100vw, 860px"
                        priority
                    />
                    <VStack
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-start"
                        position="absolute"
                        bottom="0"
                        left="0"
                        right="0"
                        bg="blackAlpha.800"
                        pb="4"
                        py="2"
                        px="4"
                    >
                        <Heading pt="3" as="h1" size="xl" color="white">
                            {postData.title}
                        </Heading>
                    </VStack>
                </Box>

                <Divider mt="-2" borderColor="gray.800" />

                {/* Add the content of the post here */}
                <PostContent content={postData.content} />
            </VStack>
        </motion.div>
    )
}

const PostBreadcrumb = ({ title }: { title: string }) => {
    return (
        <Breadcrumb
            separator={<Icon as={FaChevronLeft} mt="1" />}
            color="gray.500"
            w="100%"
            mt="-1"
        >
            <BreadcrumbItem>
                <Link href="/">
                    <HStack spacing="2" alignItems="center">
                        <Icon mb="2" as={FaHome} />
                        <Text>الرئيسية</Text>
                    </HStack>
                </Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <Text noOfLines={1}>{title}</Text>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

const PostContent = ({ content }: { content: string }) => {
    return (
        <VStack
            w="100%"
            spacing="6"
            justifyContent="flex-start"
            alignItems="flex-start"
            mt="6"
            px={{ base: "2", md: "0" }}
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h2: ({ node, ...props }) => (
                        <Heading as="h2" size="xl" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                        <Heading as="h3" size="lg" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                        <List mr={6} styleType="disc" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                        <List mr={6} styleType="decimal" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                        <Text
                            lineHeight="1.8"
                            fontSize={{ base: "lg", md: "xl" }}
                            mb={2}
                            {...props}
                        />
                    ),
                    hr: ({ node, ...props }) => (
                        <Divider my="4" opacity="0" {...props} />
                    ),
                    li: ({ node, ...props }) => <ListItem pb="4" {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </VStack>
    )
}

export default PostContainer
