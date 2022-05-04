import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Healthcare</title>
      </Head>
      <Flex direction="column" gap="4" maxW="xl" my="8" mx="auto">
        <Text align="center" fontSize="3xl" fontWeight="bold" mb="4">
          Tạo câu hỏi
        </Text>
        <InputGroup>
          <InputLeftAddon w="28">Tiêu đề</InputLeftAddon>
          <Input placeholder="Ví dụ: Làm thế nào để chữa bệnh tiểu đường?" />
        </InputGroup>

        <Box>
          <Text fontSize="sm" fontWeight="semibold" mb="1">
            Nội dung câu hỏi
          </Text>
          <Textarea
            value=""
            // onChange={handleInputChange}
            placeholder="Mô tả chi tiết câu hỏi của bạn"
            size="sm"
          />
        </Box>

        <Button colorScheme="teal" variant="solid">
          Gửi
        </Button>
      </Flex>
    </>
  );
}
