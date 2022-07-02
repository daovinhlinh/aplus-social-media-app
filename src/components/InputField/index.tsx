import React from "react";
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
  width?: string;
  type?: string;
  onChange: (text: string) => void;
  [x: string]: any; //rest props
}

export enum Variant {
  filled = "filled",
  flushed = "flushed",
  unstyled = "unstyled",
  outline = "outline",
}

const InputField = (props: IInputField) => {
  const {
    image,
    variant,
    suffixIcons,
    prefixIcons,
    placeholder,
    width,
    type,
    onChange,
    ...rest
  } = props;

  return (
    <Flex w={width} justifyContent="center" alignItems="center" {...rest}>
      {image && (
        <Image
          src="https://www.w3schools.com/howto/img_avatar.png"
          height="35px"
          width="35px"
          borderRadius={100}
          mr="20px"
        />
      )}
      <InputGroup variant={variant} pr="1" height="40px" alignItems="center">
        {prefixIcons && (
          <InputLeftElement children={prefixIcons.map((icon) => icon)} ml={1} />
        )}
        <Input
          focusBorderColor="red.500"
          borderColor="gray.200"
          borderRadius={15}
          paddingRight={suffixIcons ? 38 * suffixIcons.length : 3}
          placeholder={placeholder}
          height="40px"
          fontWeight="400"
          onChange={(e) => onChange(e.target.value)}
          type={type}
        />
        {suffixIcons && (
          <InputRightElement
            justifyContent={"space-between"}
            alignItems="center"
            w={35 * suffixIcons.length}
            mr={3}
            children={suffixIcons.map((item: ISuffixIcon, index) => (
              <IconButton
                key={index}
                style={{
                  lineHeight: 0,
                  minWidth: 0,
                }}
                _focus={{
                  boxShadow: "none",
                }}
                variant="unstyled"
                aria-label="icon"
                icon={item.icon}
                onClick={item.onPress}
              />
            ))}
          />
        )}
      </InputGroup>
    </Flex>
  );
};

export default InputField;
