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
    Image,
    Divider,
    List,
    ListItem,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaCalendar, FaChevronLeft, FaHome } from "react-icons/fa"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const PostContainer = ({ postData }: { postData: TPostDataWithContent }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <VStack w="100%" mx="auto" spacing="6" mb="100px">
                <Box w="100%" position="relative">
                    <Image
                        src={postData.image}
                        alt={postData.title}
                        w="100%"
                        h={{ base: "300px", md: "300px" }}
                        objectFit="cover"
                    />
                    <VStack
                        display="flex"
                        justifyContent="center"
                        alignItems="flex-start"
                        position="absolute"
                        bottom="0"
                        left="0"
                        right="0"
                        bg="blackAlpha.700"
                        pb="4"
                        py="2"
                        px="4"
                    >
                        <Heading pt="3" as="h1" size="xl" color="white">
                            {postData.title}
                        </Heading>
                        <Text fontSize="lg" fontWeight="medium">
                            {postData.description}
                        </Text>
                    </VStack>
                </Box>

                <HStack alignItems="flex-start" w="100%" spacing="3" px="4">
                    <PostBreadcrumb title={postData.title} />
                    <HStack w="100%" justifyContent="flex-end">
                        <Icon mb="2" as={FaCalendar} color="gray.500" />
                        <Text fontSize="sm" color="gray.500">
                            {postData.date}
                        </Text>
                    </HStack>
                </HStack>

                <Divider mt="-2" borderColor="blackAlpha.900" />

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
            px="4"
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
                        <Text lineHeight="1.8" mb={2} {...props} />
                    ),
                    hr: ({ node, ...props }) => (
                        <Divider
                            my="4"
                            borderColor="blackAlpha.900"
                            {...props}
                        />
                    ),
                    li: ({ node, ...props }) => <ListItem {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </VStack>
    )
}

export default PostContainer
