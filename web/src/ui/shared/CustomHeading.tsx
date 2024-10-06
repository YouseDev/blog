import { Text, TextProps } from "@chakra-ui/react"

const CustomHeading = ({
    children,
    size,
    props,
}: {
    children: React.ReactNode
    size: "lg" | "xl" | "2xl" | "3xl"
    props?: TextProps
}) => {
    const sizeToFontSize = {
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
    }

    return (
        <Text fontSize={sizeToFontSize[size]} fontWeight={"bold"} {...props}>
            {children}
        </Text>
    )
}

export default CustomHeading
