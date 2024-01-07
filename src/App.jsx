import React from "react";
import { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import ArtistsModal from "./components/ArtistsModal";

const App = () => {
  const [artists, setArtists] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const findArtists = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Return 10 other musical artists that are similar to this one. Make the first letter of each word uppercase and separate with commas.\n\n" +
          text +
          "",
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8,
      }),
    };

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);

    const json = await response.json();

    const data = json.choices[0].text.trim();

    console.log(data);
    setArtists(data);
    setLoading(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container maxW="3xl" centerContent>
      <Header />
      <TextInput findArtists={findArtists} />
      <Footer />
      <ArtistsModal
        artists={artists}
        loading={loading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Container>
  );
};

export default App;
