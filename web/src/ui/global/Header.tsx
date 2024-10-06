import {
    VStack,
    Box,
    Heading,
    Text,
    HStack,
    Link,
    Icon,
} from "@chakra-ui/react"
import NextLink from "next/link"
import Image from "next/image"
import { RxDividerVertical } from "react-icons/rx"
import { motion } from "framer-motion"
import AnimationConfig from "@/config/AnimationConfig"
import CustomHeading from "../shared/CustomHeading"

const Header = () => {
    return (
        <Box as="header">
            <motion.div {...AnimationConfig}>
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
                    <Box position="relative" width={120} height={120}>
                        <Image
                            src="/imgs/logo.png"
                            alt="logo"
                            fill
                            sizes="120px"
                            priority
                            style={{
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}
                        />
                    </Box>
                    <Box>
                        <CustomHeading
                            size="3xl"
                            props={{
                                textAlign: "center",
                                color: "gray.200",
                            }}
                        >
                            مدونة يوسف
                        </CustomHeading>
                    </Box>
                    <Box px="1">
                        <Text textAlign="center" fontSize="xl" color="gray.500">
                            مبرمج منذ 2010 | شغوف بتطوير تطبيقات ذكية | أشارك
                            أفكار عن البرمجة والذكاء الاصطناعي
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
        </Box>
    )
}

export default Header
