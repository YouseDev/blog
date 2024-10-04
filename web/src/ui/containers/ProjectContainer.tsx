"use client"

import { TProject } from "@/types/ClientTypes"
import {
    Box,
    Heading,
    VStack,
    SimpleGrid,
    Text,
    Stack,
    Image,
    Link,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

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
            h={{ base: "100%", md: "200px" }}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            maxW="container.md"
            mx="auto"
        >
            <Box
                maxW={{ base: "100%", md: "300px" }}
                h={{ base: "100%", md: "200px" }}
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />
            </Box>
            <VStack
                spacing="6"
                w="100%"
                bottom="0"
                justifyContent="center"
                alignItems="flex-start"
                px="4"
                pb={{ base: "4", md: "4" }}
                pt={{ base: "4", md: "6" }}
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
