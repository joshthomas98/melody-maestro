import React, { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

const TextInput = ({ findArtists }) => {
  const [text, setText] = useState("");

  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text field is empty",
        description: "Please enter a musical artist",
        status: "error",
        duration: 5000,
        isClosable: false,
      });
    } else {
      findArtists(text);
    }
  };

  return (
    <>
      <Textarea
        bg="white"
        color="black"
        padding={4}
        marginTop={6}
        height={200}
        placeholder="Please enter an artist - For best results, only enter one artist at a time."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        bg="white"
        color="black"
        marginTop={4}
        width="100%"
        _hover={{ bg: "blue.600" }}
        onClick={submitText}
      >
        Submit
      </Button>
    </>
  );
};

export default TextInput;
