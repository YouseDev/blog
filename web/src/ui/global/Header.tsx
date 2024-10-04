import {
    VStack,
    Box,
    Heading,
    Text,
    Image,
    HStack,
    Link,
    Icon,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import NextLink from "next/link"
import { RxDividerVertical } from "react-icons/rx"

const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <VStack
                w="100%"
                maxW="container.md"
                mx="auto"
                justifyContent="center"
                alignItems="center"
                spacing="8"
                py="8"
                pb="8"
            >
                <Box>
                    <Image
                        src="/imgs/1.png"
                        alt="Developer Avatar"
                        width={120}
                        height={120}
                        borderRadius="full"
                    />
                </Box>
                <Box>
                    <Heading textAlign="center" size="2xl" color="gray.200">
                        مدونة يوسف
                    </Heading>
                </Box>
                <Box px="1">
                    <Text textAlign="center" fontSize="xl" color="gray.500">
                        مبرمج منذ 2010 | شغوف بتطوير تطبيقات ذكية | أشارك أفكار
                        عن البرمجة والذكاء الاصطناعي
                    </Text>
                </Box>
                <HStack
                    as="nav"
                    spacing="6"
                    justifyContent="center"
                    w="100%"
                    mx="auto"
                >
                    <NextLink href="/">
                        <Text fontSize={"lg"} color={"gray.200"}>
                            الرئيسية
                        </Text>
                    </NextLink>
                    <Icon as={RxDividerVertical} color="gray.500" />
                    <NextLink href="/projects">
                        <Text fontSize={"lg"} color={"gray.200"}>
                            مشاريع
                        </Text>
                    </NextLink>
                    <Icon as={RxDividerVertical} color="gray.500" />
                    <Link
                        _hover={{ textDecoration: "none" }}
                        href="https://x.com/yousefxdev"
                        isExternal
                        rel="nofollow"
                    >
                        <Text fontSize={"lg"} color={"gray.200"}>
                            تواصل
                        </Text>
                    </Link>
                </HStack>
            </VStack>
        </motion.div>
    )
}

export default Header
