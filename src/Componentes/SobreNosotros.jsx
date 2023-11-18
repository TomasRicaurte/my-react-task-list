import { Box, Text } from "@chakra-ui/react";

function SobreNosotros() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w="auto"
        h="739px"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      >
        <Text fontSize="6xl" as="b" >
          Descripción
        </Text>
        <br />
        <Text fontSize="20px" w="650px" textAlign="center" >
          La app Todo List se creo con la finalidad de poder tener un espacio
          donde poder escribir, editar, completar y eliminar una serie de tareas
          que sean escritas por el usuario. Es una app bastante intuitiva a la
          hora de su uso principalmente pon la implementación de botones
          ilustrativos con los cuales se puede saber con exactitud que es lo que
          se va a realizar a la tarea ya sea editarla o eliminarla.
        </Text>
      </Box>
    </>
  );
}

export default SobreNosotros;
