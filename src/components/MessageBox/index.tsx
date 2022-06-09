import { Alert, AlertDescription, AlertIcon, Box } from "@chakra-ui/react";
import React from "react";
import { EnumType } from "typescript";

interface IMessageBox {
   message: string;
   status: "info" | "warning" | "success" | "error";
}

const MessageBox = (props: IMessageBox) => {
   const { status, message } = props;

   return (
      <Box my={2}>
         <Alert status={status}>
            <AlertIcon />
            <AlertDescription>{message}</AlertDescription>
         </Alert>
      </Box>
   );
};

export default MessageBox;
