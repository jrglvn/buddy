import React from "react";
import BackgroundImage from "./assets/images/background.jpg";
import bottle2png from "./assets/images/bottle2.png";
import { ReactComponent as FacebookIcon } from "./assets/images/facebook.svg";
import { ReactComponent as HrIcon } from "./assets/images/hr.svg";
import { ReactComponent as EnGbIcon } from "./assets/images/gb.svg";

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
  Icon,
  Select,
  Button,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, LinkIcon } from "@chakra-ui/icons";
import "@fontsource/dancing-script";
import "@fontsource/raleway";
import "@fontsource/open-sans";

function App() {
  const [shrunk, setShrunk] = React.useState<boolean>(false);
  const [lang, setLang] = React.useState<"HR" | "EN">("HR");

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
          <HStack
            m="auto"
            w="3xl"
            as="nav"
            justifyContent="space-between"
            alignItems="flex-start"
            pt="4"
          >
            <VStack
              h={shrunk ? "28" : "44"}
              color="olive.800"
              fontWeight="semibold"
              alignItems="flex-start"
              style={{ transition: "all 0.2s" }}
              pb="4"
              justifyContent="flex-end"
            >
              <Heading fontSize="6xl">U.O.Buddy</Heading>
              <Heading fontSize="3xl">{subtitle[lang]}</Heading>
            </VStack>
            <HStack spacing="4">
              <Button
                outline="none"
                _hover={{ bg: "" }}
                bg={lang === "HR" ? "olive.100" : "transparent"}
                onClick={() => setLang("HR")}
              >
                <Icon as={HrIcon} />
                HR
              </Button>
              <Button
                outline="none"
                _hover={{ bg: "" }}
                bg={lang === "EN" ? "olive.100" : "transparent"}
                onClick={() => setLang("EN")}
              >
                <Icon as={EnGbIcon} />
                en-GB
              </Button>
            </HStack>
          </HStack>
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
              {p1[lang]}
            </Text>
            <Text fontSize="lg" textAlign="justify" lineHeight="taller">
              {p2[lang]}
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
              {p3[lang]}
            </Text>
            <Text fontSize="lg" textAlign="justify" lineHeight="taller">
              {p4[lang]}
            </Text>
            <Text fontSize="lg" textAlign="justify" lineHeight="taller">
              {p5[lang]}
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
          <VStack w="3xl" m="auto" alignItems="flex-start" color="gray.200">
            <VStack alignItems="flex-start" py="4" spacing="2" fontSize="lg">
              <Text>Kontakt</Text>
              <Text>U.O.Buddy</Text>
              <Text>Vlasnik i kontakt osoba: Mladen Prtenjača</Text>
              <HStack>
                <EmailIcon />
                <Link href="mailto:u.o.buddy@gmail.com">
                  u.o.buddy@gmail.com
                </Link>
              </HStack>
              <HStack>
                <PhoneIcon />
                <Text>Mobitel: +38599/326-9666</Text>
              </HStack>
              <HStack>
                <Icon as={FacebookIcon} fill="gray.200" boxSize="6" />
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

const subtitle = {
  HR: "Extra djevičansko maslinovo ulje",
  EN: "Extra virgin olive oil",
};

const p1 = {
  HR: "Ugostiteljski obrt Buddy osnovan 1998 godine sa ciljem pružanja ugostiteljskih usluga, a sa proizvodnjom maslina i proizvodima od masline 2010. godine. Naši proizvodi nastali su iz obiteljskog hobija i maslinika s dvanaestak sorti maslina smještenog u zaleđu Jadranskog mora. Već od samog početaka strogo smo se odlučili baviti samo ekološkim uzgojem, usprkos saznanju da će nam količina zauvijek biti ograničena.",
  EN: "The origins of our products can be traced to a family hobby and olive-grove with twenty different olive types located in the hinterland of the Adriatic Sea. Ever since the early beginnings, we have been adamant about pursuing exclusively ecological cultivation, regardless of the fact that this means limited quantities.",
};

const p2 = {
  HR: "Uz puno truda, rada, pomoći obitelji i prijatelja nakon nekog vremena stvorili smo proizvode zavidne kakvoće.",
  EN: "In the course of time and owing to a lot of painstaking work, devotion and help from friends, we have created products of enviable quality.",
};

const p3 = {
  HR: "To su naše ekstra djevičansko maslinovo ulje i liker od maslina. O njihovoj kvaliteti svjedoče do sada osvojene brojne nagrade i priznanja iz Hrvatske i inozemstva.",
  EN: "These include our extra virgin olive oil and olive liqueur. Their quality has been attested by numerous awards and certificates in both Croatia and abroad.",
};

const p4 = {
  HR: "Nakon što smo upoznali zlatnu formulu uspjeha dobivanja ekstra djevičanskog maslinovog ulja i tajnu likera od maslina, polako ali oprezno širimo proizvodnju uvjetovanu potpuno ekološkim pristupom, za koju smo 2011. godine kao potvrdu kvalitete dobili Europski ekološki certifikat.",
  EN: "After having attained the golden success formula in producing extra virgin olive oil and the secret to olive liqueur, we have been expanding our exclusively ecological production slowly but carefully. In 2011 we received the European ecological certificate for our production.",
};

const p5 = {
  HR: "Nadamo se da već uživate u hrvatskim proizvodima od masline, a ukoliko želite probati nešto više, kontaktirajte nas ili posjetite našu Facebook stranicu za više detalja...",
  EN: "We hope that you are already enjoying Croatian olive products, and if you would like to try more, feel free to contact us or visit our Facebook page for more details...",
};
