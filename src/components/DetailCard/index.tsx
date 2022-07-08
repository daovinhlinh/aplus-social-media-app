import {
  Box,
  Button,
  HStack,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Spacer,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { ReactChild } from "react";
import { useRecoilValue } from "recoil";
import Edit from "../../assets/Icons/Edit";
import { userDataState } from "../../store/user";
import React from "react";
import { Link } from "react-router-dom";

interface DetailCardProps {
  leftImg?: string;
  imgSize?: number;
  rightIcon?: ReactChild;
  userId: string;
  label2: string;
  deletePost: () => void;
  editPost: () => void;
  [x: string]: any; //rest props
}

const DetailCard = (props: DetailCardProps) => {
  const {
    leftImg,
    imgSize,
    rightIcon,
    userId,
    label2,
    deletePost,
    editPost,
    ...buttonStyle
  } = props;
  const userData = useRecoilValue(userDataState);
  const imgFolder = import.meta.env.VITE_CDN_URL;
  const [isOpen, setIsOpen] = useBoolean(false);

  const handleDeletePost = () => {
    deletePost();
    setIsOpen.off();
  };

  const handleEditPost = () => {
    // deletePost();
    setIsOpen.on;
  };

  return (
    <HStack width={"100%"} {...buttonStyle}>
      <Link to={`/profile/${userId}`}>
        <Box display="flex">
          <Box>
            <Image
              height={imgSize ?? 50}
              width={imgSize ?? 50}
              borderRadius={100}
              marginRight={3}
              src={leftImg}
            />
          </Box>
          <Box textAlign={"start"}>
            <Text color="black" fontWeight="bold" fontSize={"md"}>
              {userId}
            </Text>
            <Text color="gray.500" fontSize={"sm"}>
              {label2}
            </Text>
          </Box>
        </Box>
      </Link>
      <Spacer />
      {rightIcon && (
        <Popover
          offset={[-60, -10]}
          isOpen={isOpen}
          onOpen={setIsOpen.on}
          onClose={setIsOpen.off}
        >
          <PopoverTrigger>
            <Button
              bg="transparent"
              variant="unstyled"
              _expanded={{ boxShadow: "none" }}
              _focus={{ boxShadow: "none" }}
            >
              {rightIcon}
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent
              border="none"
              _focus={{ boxShadow: "#ccc" }}
              width="fit-content"
            >
              <PopoverBody
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                {/* <Button colorScheme='blue'>{rightIcon}</Button> */}
                <Button
                  bg="none"
                  _hover={{ bg: "gray.200" }}
                  leftIcon={<Edit />}
                  w="100%"
                >
                  Chỉnh sửa bài viết
                </Button>
                {userData.username === userId && (
                  <Button
                    onClick={handleDeletePost}
                    bg="none"
                    _hover={{ bg: "gray.200" }}
                    leftIcon={<Edit />}
                    w="100%"
                    justifyContent="flex-start"
                  >
                    Xóa
                  </Button>
                )}
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      )}
    </HStack>
  );
};

export default DetailCard;
