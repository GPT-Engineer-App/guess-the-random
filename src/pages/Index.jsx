import { Box, Button, Container, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [userNumber, setUserNumber] = useState("");
  const [randomNumber, setRandomNumber] = useState(Math.ceil(Math.random() * 10));
  const toast = useToast();

  const handleInputChange = (event) => setUserNumber(event.target.value);

  const checkNumber = () => {
    const userGuess = parseInt(userNumber, 10);
    if (userGuess === randomNumber) {
      toast({
        title: "Congratulations! 🎉",
        description: "You've guessed the right number!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Oops! 🤔",
        description: `Wrong guess! The correct number was ${randomNumber}.`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    // Reset the game
    setUserNumber("");
    setRandomNumber(Math.ceil(Math.random() * 10));
  };

  return (
    <Container centerContent>
      <VStack spacing={4} marginTop="100px">
        <Text fontSize="xl">Guess the Number Game</Text>
        <Text>Try to guess a number between 1 and 10</Text>
        <Box>
          <Input placeholder="Enter a number" maxWidth="300px" value={userNumber} onChange={handleInputChange} type="number" min={1} max={10} />
        </Box>
        <Button colorScheme="purple" onClick={checkNumber}>
          Check My Guess
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
