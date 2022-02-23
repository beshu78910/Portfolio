import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="3D FPS Game">
    <Container>
      <Title>
        Something In The Wood <Badge>2021</Badge>
      </Title>
      <P>
      Something In The Wood is a 3D FPS Horror game created with Unity Engine.
      The game demonstrates some of the most essential aspects of the FPS genre with mechanics, such as gun switching,
      aiming and reloading.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>Unity Engine, C#, Git/GitHub</span>
        </ListItem>
        <ListItem>
          <Meta>Report</Meta>
          <Link href="https://speakerdeck.com/craftzdog/the-fun-deep-learning">
            STIW Project <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/beshu78910/3DFPSGame">
          github.com/beshu78910/3DFPSGame{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://archive.craftz.dog/blog.odoruinu.net/2015/12/19/created-movie-with-deep-learning/">
            Deep Learningを使って映像作品を作った
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://news.ycombinator.com/item?id=10782289">
            <Badge mr={2}>Hacker News</Badge>
            The Four Painters: A Video Work Created with Deep Learning
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://gigazine.net/news/20151224-deep-learning-four-painters/">
            <Badge mr={2}>Gigazine</Badge>
            実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した「the
            four painters」
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList> */}

      <Box>
        <iframe
          src="https://player.vimeo.com/video/680954251"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box>

      <WorkImage
        src="/images/works/stiwhouse.png"
        alt="walknote"
      />
      <WorkImage src="/images/works/stiwriver.png" alt="walknote" />
      <WorkImage src="/images/works/wood.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
