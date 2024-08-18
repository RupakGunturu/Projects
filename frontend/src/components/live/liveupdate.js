import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Text, Heading, Flex, Spinner, Button } from '@chakra-ui/react';
import { api } from "../actions/api";
import { Link } from "react-router-dom";

export const Livescore = () => {
    const [scores, setScores] = useState([]);
    const [completedMatches, setCompletedMatches] = useState([]);

    useEffect(() => {
        const fetchScores = () => {
            const matchIds = ['match1', 'match2'];
            const scoreRequests = matchIds.map(id => axios.get(`${api}/livescore?matchId=${id}`));
            
            Promise.all(scoreRequests)
                .then(responses => {
                    const fetchedScores = responses.map(response => response.data);
                    setScores(fetchedScores);
                })
                .catch((e) => console.log(e));
        };

        fetchScores();

        const interval = setInterval(fetchScores, 10000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const completed = [
            { team1: "CIC Hackers", team2: "Mech Robots", score: "150/7 (20.0 overs)", result: "CIC Hackers won by 3 wickets" },
            { team1: "CSE Coders", team2: "EEE Rockers", score: "180/6 (20.0 overs)", result: "EEE Rockers won by 4 wickets" },
            { team1: "Royal Civil", team2: "IT Rogers", score: "140/9 (20.0 overs)", result: "Royal Civil won by 1 wicket" }
        ];
        setCompletedMatches(completed);
    }, []);

    return (
        <Box
            minH="100vh"
            p={4}
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            overflow="hidden"
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: '-1',
                }}
                // src="https://rr2---sn-npoe7nsyoglevideo.com/videoplayback?expire=1723680169&ei=SfG8ZtLDHvnt2roPpe-r2AE&ip=2001%3A4455%3A547%3Af900%3Ab9be%3A64a6%3Af0e4%3Adb8b&id=o-ACq02htGfV_-AFdoDZYwsuN_IGzXRYVZK5e_Mvl6m2kY&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQmm2eyxFfREPdcf1XDpgoDKiuQMRcRkm_Z6TrdVsSok98kVXfMfqw4F1T7TMp58RfxdOMPstsQWkomD&spc=Mv1m9hQ0b1yReaf_FOiSvF448BP9p9hYPEyeGit4FSEqhCjGkLuk&vprv=1&svpuc=1&mime=video%2Fwebm&ns=Rpz661rHm9MuU_mZIXU8D24Q&rqh=1&gir=yes&clen=7363026&dur=24.240&lmt=1702288850832264&keepalive=yes&c=WEB_CREATOR&sefc=1&txp=530F224&n=ZS7r6YQaqV008A&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAMxUbvOzC4cXk_Ibap9tv0T-_MHPWFvX36VoTfdgI9H8AiBtyvkez4qnfOnL1M8_c4z-r5mmwTIF1mJKsNMcTf3MGw%3D%3D&rm=sn-2aqu-jbts7s,sn-2aqu-hoaes7l&rrc=79,79,80&fexp=24350516,24350517,24350557,24350561&req_id=8715054b757ca3ee&cmsv=e&redirect_counter=3&cm2rm=sn-hoae7l&cms_redirect=yes&mh=Et&mip=175.101.94.8&mm=34&mn=sn-npoe7nsy&ms=ltu&mt=1723659173&mv=m&mvi=2&pl=24&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AGtxev0wRQIgdkRbAx5lF8nFptYJ_wNShMD8RnGwh-WcBlM8SJZotKcCIQC5Tj3T9yEItfpzxv61G_rL9Zf0o-EMTbHdIckZuZKi0Q%3D%3D"
            // src="https://rr3---sn-h557snzr.googlevideo.com/videoplayback?expire=1723706806&ei=Vlm9ZuHNKPXp1AHhx5hg&ip=179.165.71.76&id=o-ABMRnWaKAPLp2L1BO1yNpFCvc20ufVJqesXrmEKrR5qI&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQmm2exzSpTUhRGPNy0h0oONO8hSZ7lE4PO9FPP_rxJ3eElcyTAHY14ETmvBRF31sL1B4Wd_ITZ6SVnX&spc=Mv1m9h9wGS7O2mojLVOBX_SuyqXXGkNqNM4IvBC6O-Ji6WlKpZRN&vprv=1&svpuc=1&mime=video%2Fwebm&ns=Rgp9C7rvggNWVQzzafTsNAkQ&rqh=1&gir=yes&clen=7363026&dur=24.240&lmt=1702288850832264&keepalive=yes&c=WEB_CREATOR&sefc=1&txp=530F224&n=B1JEjb7NhbPGoA&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgEDOFyp_h37UHPgx77mNRU-wAmWN0hJV6iFFnTV2G4IUCIQD-Lr1I-CPowXhW6q-b7jBzXP8Nc8YcobJ3ChhhRYY96w%3D%3D&rm=sn-8p8v-bg0el7d,sn-8p8v-bg0s67z,sn-bg0yz7e&rrc=79,79,104&fexp=24350516,24350518,24350556,24350561&req_id=ccb415d9f91a3ee&cmsv=e&redirect_counter=3&cms_redirect=yes&ipbypass=yes&mh=Et&mip=175.101.94.8&mm=30&mn=sn-h557snzr&ms=nxu&mt=1723684193&mv=u&mvi=3&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AGtxev0wRAIgRb4iYl8cdudZc7mKMYFa8L6M-czhmFwYXJ6RmhBcDFQCIAjEWypbFVXYR6bxr3pfEcLaolWUg8iqUp0QxzSusPDm"
            src="https://rr4---sn-ci5gup-h55r.googlevideo.com/videoplayback?expire=1723835234&ei=Ak-_Zpi3H7uc4t4PosuZ8Q8&ip=2401%3A4900%3A1c44%3A2697%3Ae1ca%3A4826%3Ac63%3Ac6d1&id=o-ACYPTr8A-fMBCDi5NCUEG2ljz3GTswWGn3456LUpp3Xo&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQmm2eyHL6KJwO7oOIsa7HdPr6lTqIWFaSmtA_ucCUvBQtNjzMvMwS6A3slSv7-5KwPWBMW5farSsXJp&spc=Mv1m9q-11K4YzfeOuyQfCi1ea_fiTT6Fg_4gulj4KmZU9zOPSA6fN46DAAH9&vprv=1&svpuc=1&mime=video%2Fwebm&ns=EZwT4Hd4SlltbQnvmSYHgL4Q&rqh=1&gir=yes&clen=7363026&dur=24.240&lmt=1702288850832264&keepalive=yes&c=WEB&sefc=1&txp=530F224&n=mt-yV7GvxNNW1g&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAN80GKxLyM2sdP_Mhe9iKjVQiylBr7syxAikG3_HIbYIAiEA1oO2QoPbC-QNSvWFxaQ6S-WrXBVvo66-ykm2D2E_j10%3D&redirect_counter=1&rm=sn-ci5gup-2o9s7e&rrc=79&fexp=24350516,24350517,24350556,24350561&req_id=47bcbec50159a3ee&cms_redirect=yes&cmsv=e&mh=Et&mm=29&mn=sn-ci5gup-h55r&ms=rdu&mt=1723813526&mv=m&mvi=4&pcm2cms=yes&pl=53&lsparams=mh,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AGtxev0wRQIhANzixEQ0AR6H-RPh39yhpEuAvEm0wqYfNr2Azz1-Yi9PAiBUkQeSTpdIGGBPQJmo3aBGrcwFk6sITeZ9Onoc6ZTC5A%3D%3D"
            />
            <Heading size="lg" mb={6} textAlign="center" color="white" textShadow="2px 2px 8px rgba(0, 0, 0, 0.8)">
                Live Cricket Scores
            </Heading>

            <Flex direction="row" align="flex-start" w="100%" maxW="4xl" gap={6}>
                <Box flex="2" p={4} bg="rgba(0, 0, 0, 0.6)" borderRadius="lg" boxShadow="lg">
                    {scores.length > 0 ? (
                        scores.map((score, index) => (
                            <Box
                                key={index}
                                w="100%"
                                p={4}
                                borderRadius="lg"
                                boxShadow="lg"
                                bg="rgba(0, 0, 0, 0.7)"
                                textAlign="center"
                                mb={4}
                            >
                                <Text fontSize="xl" fontWeight="bold">
                                    Match {index + 1}
                                </Text>
                                
                                <Text fontSize="2xl" fontWeight="bold" color="yellow.300" mt={2}>
                                    {score.runs}/{score.wickets} in {score.overs} overs
                                </Text>
                                <Text fontSize="md" mt={2}>
                                    {score.commentary}
                                </Text>
                            </Box>
                        ))
                    ) : (
                        <Spinner size="xl" color="yellow.400" />
                    )}
                </Box>
                <Box flex="1" p={4} bg="rgba(0, 0, 0, 0.6)" borderRadius="lg" boxShadow="lg">
                    <Heading size="md" color="white" mb={4}>
                        Completed Matches
                    </Heading>
                    {completedMatches.map((match, index) => (
                        <Box
                            key={index}
                            mb={4}
                            p={4}
                            borderRadius="md"
                            bg="rgba(255, 255, 255, 0.1)"
                            textAlign="center"
                        >
                            <Text fontWeight="bold" fontSize="lg">{match.team1} vs {match.team2}</Text>
                            <Text color="yellow.300" fontSize="md">{match.score}</Text>
                            <Text fontSize="sm">{match.result}</Text>
                        </Box>
                    ))}
                </Box>
            </Flex>

            <Link to={'/player-info'} style={{ marginTop: '20px' }}>
                <Button
                    colorScheme="green"
                    bg="green.600"
                    _hover={{ bg: 'green.700', transform: 'scale(1.05)' }}
                    _active={{ bg: 'green.800', transform: 'scale(0.95)' }}
                    borderRadius="full"
                    py={6}
                    fontSize="lg"
                    boxShadow="0 4px 12px rgba(1, 0, 0, 0.3)"
                    transition="all 0.3s ease"
                >
                    Players Details
                </Button>
            </Link>
        </Box>
    );
};
