import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Healthcare</title>
      </Head>
      <Box maxW="2xl" my="8" mx="auto">
        <Flex justifyContent="space-between" mb="4">
          <Text align="left" fontSize="3xl" fontWeight="bold" mb="4">
            Diễn đàn
          </Text>

          <Button colorScheme="teal" onClick={() => router.push("/forum/post")}>
            Đặt câu hỏi
          </Button>
        </Flex>
        <Box mb="4">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input placeholder="Tìm kiếm câu hỏi..." />
          </InputGroup>
        </Box>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Câu hỏi</Th>
                <Th>Đăng bởi</Th>
                <Th>Ngày đăng</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Tôi bị đau họng, làm sao để chữua</Td>
                <Td>Hieu Tran</Td>
                <Td>01/01/2022</Td>
              </Tr>
              <Tr>
                <Td>Đau khớp có chữa được không?</Td>
                <Td>Thang Tran</Td>
                <Td>01/04/2022</Td>
              </Tr>
              <Tr>
                <Td>Ăn gì để bổ não</Td>
                <Td>Nam Nguyen</Td>
                <Td>26/04/2000</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
