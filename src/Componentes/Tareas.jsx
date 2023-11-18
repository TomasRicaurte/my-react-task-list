import { Box, Button, ModalFocusScope, SimpleGrid, Text, useColorMode } from "@chakra-ui/react";
import TaskList from "./TaskList";
import { MoonIcon } from "@chakra-ui/icons";

function Tareas() {
    const { toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bgGradient="radial(yellow.300, , pink.200)"
        justifyContent="center"
        alignItems="center"
        display="flex"
        w="auto"
        h="100vh"
      >
        <SimpleGrid>
          <Box
            boxShadow="dark-lg"
            display="flex"
            flexDirection="column"
            border="solid"
            borderRadius="15px"
            w="550px"
            maxH="500px"
            maxW="750px"
            overflow="auto"
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                fontSize="40px"
                letterSpacing="5px"
                fontWeight="bold"
                margin="10px"
              >
                TODO LIST
              </Text>
              <Button
                display="flex"
                justifyContent="center"
                bg="none"
                alignItems="center"
                margin="10px"
                onClick={toggleColorMode}
              >
                <MoonIcon boxSize="30px" />
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-evenly"
              alignItems="center"
              margin="20px"
            >
              <TaskList />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Tareas