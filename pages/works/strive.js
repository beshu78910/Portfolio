import {
 
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,

} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Project Strive">
    <Container>
      <Title>
        Project Strive <Badge>2021</Badge>
      </Title>
      <P>
        {/* Menkiki suggests ramen(Chinese noodle) shops based on a photo of ramen
        you want to eat. Why? Because you don&apos;t need to input Japanese
        keywords to find restaurants, but just specify a ramen photo then it
        will suggest great shops for you. It supports 900+ famous ramen shops in
        Japan! */}
        Project Strive is a 3D fighting game took inspiration an older title called
        "Fighting Force". Player will be able to choose between two characters, each with 
        unique movesets and animations build from various of different animation libraries such as Mixamo.
        Project Strive also has a complete interactive menu and AI system with two unique stages.
        
      </P>
      {/* <P>
        So, you can check a shop info as soon as you found a promising ramen
        shop in a food magazine. Let&apos;s go out and have a delicious ramen!
      </P>
      <UnorderedList my={4}>
        <ListItem>Ramen shop recommendation based on photo</ListItem>
        <ListItem>Show shops near your current location</ListItem>
        <ListItem>Open in Tabelog/Foursquare</ListItem>
      </UnorderedList> */}

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>Unity Engine, C#, Git/GitHub</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/the-fun-deep-learning">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/caffedeoshou-qing-ben-ge-deipuraninguiosapuri">
            Caffeでお手軽本格ディープラーニングアプリ @potatotips{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/beshu78910/Strive2" target="_blank">
          github.com/beshu78910/Strive2 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box> */}

      <WorkImage src="/images/works/striveselection.png" alt="menkiki" />
      {/* <WorkImage src="/images/works/strivebear.png" alt="menkiki" /> */}
      <SimpleGrid columns={1} gap={2}>
      <WorkImage src="/images/works/strivebear.png" alt="menkiki" />
        <WorkImage src="/images/works/strivehuman.png" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
