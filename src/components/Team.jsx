import { Box, Flex, Text, Image, Grid, GridItem,Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection.jsx";

const Team = () => {
    const TeamMembers = [
        {
            name: "Mohamed Moussi",
            role: "President",
            image: "/comité/1.png",
        },
        {
            name: "Rayen Zahzeh",
            role: "Technical team manager",
            image: "/comité/2.png",
        }
        ,
        {
            name: "Lina Hamad",
            role: "General Secretary",
            image: "/comité/3.png",
        },
        {
            name: "Kmar Ben Ayed",
            role: "Co-organisation Manager",
            image: "/comité/4.png",
        },
        {
            name: "Nour Fekih",
            role: "Co-organisation Manager",
            image: "/comité/5.png",
        },
        {
            name: "Rahma Zouali",
            role: "Ambassadors Manager",
            image: "/comité/6.png",
        },
        {
            name: "Saif Eddine Ayari ",
            role: "Web Master",
            image: "/comité/7.png",
        },
        {
            name: "Bochra Chebi",
            role: 'Human Resources Manager',
            image: "/comité/8.png",
        }
        ,
        {
            name: 'Aicha Guidara',
            role: 'Media Manager',
            image: "/comité/9.png",
        }
       
    ]

    return (
        <FullScreenSection id="team-section" justifyContent="center" alignItems="center" >
            <Heading color="#6b0303" as="h1" size="2xl" padding="5% 3% 4% 3%">Rencontrez notre équipe</Heading>

            <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8} justifyContent="center">
                {TeamMembers.map((member, index) => (
                    <GridItem key={index} style={{ zIndex: 1 }}>
                        <Box textAlign="center">
                            <Image src={member.image} alt={member.name} borderRadius="full" boxSize="150px" marginBottom="4"             zIndex={1}
 />

                            <Text fontSize="xl" fontWeight="bold" marginBottom="2" color="#000147">
                                {member.name}
                            </Text>

                            <Text fontSize="md" color="#363635">
                                {member.role}
                            </Text>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </FullScreenSection>
    );
};

export default Team;
