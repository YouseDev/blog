"use client"

import { TProject } from "@/types/ClientTypes"
import {
    Box,
    Heading,
    VStack,
    SimpleGrid,
    Text,
    Stack,
    Link,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import Image from "next/image"

const ProjectContainer = ({ projects }: { projects: TProject[] }) => {
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
                mt="12"
                mb="200px"
                spacing="6"
            >
                <SimpleGrid
                    columns={1}
                    spacing={16}
                    w="100%"
                    justifyContent="center"
                >
                    {projects.map((project, i) => (
                        <Link
                            isExternal
                            key={i}
                            href={project.link}
                            _hover={{ textDecoration: "none" }}
                        >
                            <ProjectCard project={project} />
                        </Link>
                    ))}
                </SimpleGrid>
            </VStack>
        </motion.div>
    )
}

const ProjectCard = ({ project }: { project: TProject }) => {
    return (
        <Stack
            overflow="hidden"
            borderRadius="lg"
            bg="gray.900"
            w="100%"
            h={{ base: "auto", md: "200px" }}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            maxW="container.md"
            mx="auto"
        >
            <Box
                maxW={{ base: "100%", md: "264px" }}
                w="100%"
                h={{ base: "200px", md: "200px" }}
                position="relative"
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    style={{ objectFit: "cover" }}
                />
            </Box>
            <VStack
                spacing={{ base: "4", md: "6" }}
                w="100%"
                bottom="0"
                justifyContent="center"
                alignItems="flex-start"
                pb={{ base: "6", md: "4" }}
                pt="6"
                px={{ base: "2", md: "4" }}
            >
                <Heading as="h3" size="lg">
                    {project.title}
                </Heading>
                <Text>{project.description}</Text>
            </VStack>
        </Stack>
    )
}

export default ProjectContainer
