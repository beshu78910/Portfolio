import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
// import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import {IoLogoGithub, IoLogoLinkedin, IoCall, IoMail, IoCaretForwardCircle, IoDownload } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hi, I&apos;m a Software Engineer based in Boston!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Duy Anh Nguyen 
          </Heading>
          <p>Full Stack Developer / Unity Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/finalprofile.jpg"
            alt="Profile image"
            // resizeMode="strech"
            // borderTopWidth='px'
            // resizeMode="width"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          When I was a child, I would always love to experiment with everything that I get my hands on.
          I would always tinker with them by breaking every component down to see what is inside,
          then rebuilding them up again from the beginning. So when my brother taught me how to use our first computer,
          I immediately fell in love with technology. Throughout my journey of becoming a developer, this love becomes a passion.
          A passion for building projects that made an impact on my daily lives and others,
          a passion for learning and problem-solving. I am a software developer with expertise in full-stack and unity development.
          {/* <NextLink href="/works/inkdrop" scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          . */}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false} passHref>
            <Button rightIcon={<IoCaretForwardCircle/>} colorScheme="green">
              Projects
              
            </Button>
          </NextLink>
        </Box>
      </Section>

      {/* <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section> */}



      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/beshu78910" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @beshu78910
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:DuyAnh.Nguyen001@umb.edu" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMail} />}
              >
                @duyanh.nguyen001@umb.edu
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/duy-anh-nguyen-39097b149/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @linkedIn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="tel:617-800-3614">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoCall} />}
              >
                +1-617-800-3614
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        <Box align="center" my={4}>
          {/* <Link href="/resume/D" scroll={false} > */}
          <Link href="https://drive.google.com/file/d/1tQMFvx_GWAYs8BgzkU3MeTnAkB19F6Ig/view?usp=sharing" target="_blank">
            <Button rightIcon={<IoDownload/>} colorScheme="green" >
              My Resume
            </Button>
           </Link>
          {/* </Link> */}
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
