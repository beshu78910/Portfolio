import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="CampVisor">
    <Container>
      <Title>
        CampVisor <Badge>2022</Badge>
      </Title>
      <P>
         A fully responsive web app that lets the user view existing campgrounds
        that based on real location using Mapbox. Users can also add new campgrounds to the
        database if desire. CampVisor also features a variety of options such as the ability
        to create a new account, leave review, delete or edit an existing campground that they previously created.
      </P>
     
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://ancient-badlands-20422.herokuapp.com/" target="_blank">
            CampVisor {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>HTML5/CSS3, JavaScript, MongoDB, Express, Heroku, Node.js.</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screen Shots</Center>
      </Heading>

      <UnorderedList my={4}>
        {/* <ListItem>
          <Link href="http://renewal49.hateblo.jp/entry/20120710/1341925681">
            <Badge mr={2}>リニューアル式</Badge>
            強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.appbank.net/2011/10/15/iphone-application/309349.php">
            <Badge mr={2}>appbank</Badge>
            walknote:
            CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html">
            <Badge mr={2}>男子ハック</Badge>
            [おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>タブロイド</Badge>
          <Link href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html">
            「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem> */}
      </UnorderedList>

      
      <WorkImage src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/4b636d0e-3d63-4015-8a55-dadd545b7f03.gif?ClientID=vimeo-core-prod&Date=1645978002&Signature=1e03593f56fd01354d9ea08e3a16f6052742bd5b" alt="walknote" />
      <WorkImage src="https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/c0d4682d-9bfc-4988-bcb7-85320044146e.gif?ClientID=vimeo-core-prod&Date=1645978863&Signature=2af3065cc306a8f8605b22d2bedea99ac7eff4cd" alt="walknote" />
        <WorkImage src="/images/works/campvisorrating.png" alt="walknote" />
      
     
      {/* <WorkImage src="/images/works/walknote_05.png" alt="walknote" /> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
