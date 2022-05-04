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
          Thông tin về sức khỏe
        </Text>
        <InputGroup>
          <InputLeftAddon w="28">Chiều cao</InputLeftAddon>
          <Input placeholder="Ví dụ: 160" />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon w="28">Cân nặng</InputLeftAddon>
          <Input placeholder="Ví dụ: 55" />
        </InputGroup>

        <Box>
          <Text fontSize="sm" fontWeight="semibold" mb="1">
            Lịch sử bệnh lý
          </Text>
          <Textarea
            value=""
            // onChange={handleInputChange}
            placeholder="Nhập lịch sử bệnh lý của bạn để hệ thống có thể đưa ra đánh giá chính xác hơn"
            size="sm"
          />
        </Box>

        <Box>
          <Text fontSize="sm" fontWeight="semibold" mb="1">
            Số đo 3 vòng (cm)
          </Text>
          <Flex gap="4">
            <InputGroup size="sm">
              <InputLeftAddon w="20">Vòng 1</InputLeftAddon>
              <Input placeholder="Vd. 90" />
            </InputGroup>
            <InputGroup size="sm">
              <InputLeftAddon w="20">Vòng 2</InputLeftAddon>
              <Input placeholder="Vd. 60" />
            </InputGroup>
            <InputGroup size="sm">
              <InputLeftAddon w="20">Vòng 3</InputLeftAddon>
              <Input placeholder="Vd. 90" />
            </InputGroup>
          </Flex>
        </Box>

        <Button colorScheme="teal" variant="solid">
          Gửi
        </Button>
      </Flex>
    </>
  );
}
