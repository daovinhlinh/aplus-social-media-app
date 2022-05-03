import {
    Flex,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface ISuffixIcon {
    icon: ReactElement;
    onPress: () => void;
}

interface IInputField {
    image?: string;
    variant?: Variant;
    suffixIcons?: ISuffixIcon[];
    prefixIcons?: ReactElement[];
    placeholder?: string;
}

export enum Variant {
    filled = "filled",
    flushed = "flushed",
    unstyled = "unstyled",
    outline = "outline",
}

const InputField = (props: IInputField) => {
    const { image, variant, suffixIcons, prefixIcons, placeholder } = props;

    return (
        <Flex>
            {image && (
                <Image
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    height="40px"
                    width="40px"
                    borderRadius={100}
                    mr="20px"
                />
            )}
            <InputGroup variant={variant} pr="1">
                {prefixIcons && (
                    <InputLeftElement
                        children={prefixIcons.map((icon) => icon)}
                        ml={1}
                    />
                )}
                <Input
                    borderRadius={15}
                    paddingRight={suffixIcons ? 38 * suffixIcons.length : 3}
                    placeholder={placeholder}
                    // variant="outline"
                />
                {suffixIcons && (
                    <InputRightElement
                        justifyContent={"space-between"}
                        alignItems="center"
                        w={35 * suffixIcons.length}
                        mr={3}
                        children={suffixIcons.map((item: ISuffixIcon) => {
                            return (
                                <IconButton
                                    style={{
                                        lineHeight: 0,
                                        minWidth: 0,
                                    }}
                                    variant="unstyled"
                                    aria-label="icon"
                                    icon={item.icon}
                                    onClick={item.onPress}
                                />
                            );
                        })}
                    />
                )}
            </InputGroup>
        </Flex>
    );
};

export default InputField;
