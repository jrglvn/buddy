import React from "react";
import BackgroundImage from "./assets/images/background.jpg";

import bottle2png from "./assets/images/bottle2.png";

import {
  Box,
  ChakraProvider,
  extendTheme,
  Heading,
  HStack,
  Link,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, LinkIcon } from "@chakra-ui/icons";
import "@fontsource/dancing-script";
import "@fontsource/raleway";
import "@fontsource/open-sans";

function App() {
  const [shrunk, setShrunk] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 48 ||
            document.documentElement.scrollTop > 48)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box
        position="fixed"
        height="100vh"
        width="100vw"
        overflow="hidden"
        zIndex="-1"
      >
        <Image alt="olives" src={BackgroundImage} />
      </Box>
      <Box>
        <Box
          position="sticky"
          top="0"
          style={{
            backdropFilter:
              "contrast(40%) brightness(250%) grayscale(100%) blur(6px)",
          }}
        >
          <VStack
            m="auto"
            w="3xl"
            as="nav"
            h={shrunk ? "36" : "44"}
            color="olive.800"
            fontWeight="semibold"
            alignItems="flex-start"
            style={{ transition: "all 0.2s" }}
            pb="4"
            justifyContent="flex-end"
          >
            <Heading fontSize="6xl">U.O.Buddy</Heading>
            <Heading fontSize="3xl">Extra djevičansko maslinovo ulje</Heading>
          </VStack>
        </Box>
        <Box
          mt="80"
          style={{
            backdropFilter:
              "contrast(40%) brightness(250%) grayscale(100%) blur(6px)",
          }}
        >
          <VStack m="auto" w="3xl" color="olive.800" py="8">
            <Text fontSize="lg" textAlign="justify" lineHeight="taller">
              Ugostiteljski obrt Buddy osnovan 1998 godine sa ciljem pružanja
              ugostiteljskih usluga, a sa proizvodnjom maslina i proizvodima od
              masline 2010. godine. Naši proizvodi nastali su iz obiteljskog
              hobija i maslinika s dvanaestak sorti maslina smještenog u zaleđu
              Jadranskog mora.
            </Text>
            <Text fontSize="lg" textAlign="justify" lineHeight="taller">
              Već od samog početaka strogo smo se odlučili baviti samo ekološkim
              uzgojem, usprkos saznanju da će nam količina zauvijek biti
              ograničena. Uz puno truda, rada, pomoći obitelji i prijatelja
              nakon nekog vremena stvorili smo proizvode zavidne kakvoće.
            </Text>
          </VStack>
        </Box>
        <Box
          style={{
            backdropFilter:
              "contrast(200%) brightness(50%) grayscale(100%) blur(6px)",
          }}
        >
          <Image m="auto" height="96" src={bottle2png} />
        </Box>

        <Box
          style={{
            backdropFilter:
              "contrast(40%) brightness(250%) grayscale(100%) blur(6px)",
          }}
          color="white"
        >
          <VStack m="auto" w="3xl" color="olive.800" py="8">
            <Text fontSize="lg" textAlign="justify" lineHeight="taller">
              To su naše ekstra djevičansko maslinovo ulje i liker od maslina. O
              njihovoj kvaliteti svjedoče do sada osvojene brojne nagrade i
              priznanja iz Hrvatske i inozemstva.
            </Text>
            <Text fontSize="lg" textAlign="justify" lineHeight="taller">
              Nakon što smo upoznali zlatnu formulu uspjeha dobivanja ekstra
              djevičanskog maslinovog ulja i tajnu likera od maslina, polako ali
              oprezno širimo proizvodnju uvjetovanu potpuno ekološkim pristupom,
              za koju smo 2011. godine kao potvrdu kvalitete dobili Europski
              ekološki certifikat. Nadamo se da već uživate u hrvatskim
              proizvodima od masline, a ukoliko želite probati nešto više,
              kontaktirajte nas.
            </Text>
          </VStack>
        </Box>
        <Box
          style={{
            backdropFilter:
              "contrast(200%) brightness(50%) grayscale(100%) blur(6px)",
          }}
          color="white"
        >
          <VStack w="3xl" m="auto" alignItems="flex-start">
            <VStack alignItems="flex-start" py="4" spacing="2" fontSize="lg">
              <Text>Kontakt</Text>
              <Text>U.O.Buddy</Text>
              <Text>Vlasnik i kontakt osoba: Mladen Prtenjača</Text>
              <HStack>
                <EmailIcon />
                <Text>u.o.buddy@gmail.com</Text>
              </HStack>
              <HStack>
                <PhoneIcon />
                <Text>Mobitel: +38599/326-9666</Text>
              </HStack>
              <HStack>
                <LinkIcon />
                <Link href="https://www.facebook.com/ekolosko.maslinovo.ulje/">
                  Facebook
                </Link>
              </HStack>
              <Text></Text>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

const theme = extendTheme({
  fonts: {
    heading: "Dancing Script",
    body: "Raleway",
  },
  colors: {
    olive: {
      100: "#d5d170",
      200: "#aab952",
      300: "#7c9d39",
      400: "#528124",
      500: "#2d6514",
      600: "#104908",
      700: "#012d04",
      800: "#808000",
    },
  },
});

export default App;
