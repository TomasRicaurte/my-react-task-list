import React from "react";
import {
  Box,
  Button,
  Link,
  List,
  Stack,
  Switch,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function TaskItem({ task, onDelete, onEdit }) {
  return (
    <UnorderedList display="flex" flexDirection="row">
      <List
        display="flex"
        flexDirection="row"
        border="solid"
        w="475px"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="15px"
        marginTop="10px"
      >
        <Link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></Link>
        <Stack>
          <Switch colorScheme="green" size="lg" />
        </Stack>
        <Text w="200px" textAlign="center">
          {task.title}
        </Text>
        <Box justifyContent="flex-end">
          <Button onClick={onDelete} bg="none">
            <DeleteIcon boxSize="20px"/>
          </Button>
          <Button
            onClick={onEdit}
            margin="5px"
            bg="none"
          >
            <EditIcon boxSize="20px"/>
          </Button>
        </Box>
      </List>
    </UnorderedList>
  );
}

export default TaskItem;
