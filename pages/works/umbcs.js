import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="UMBCS">
    <Container>
      <Title>
        UMBCS <Badge>2021</Badge>
      </Title>
      <P>
        The goal of this project is to implement a new website with improved functionality and design while eliminating the limitations of the old UMBCS website. 
        To achieve this goal, our team choose Jekyll framework for the project, along with HTML/CSS for markup and styling 
        with JavaScript as the main scripting language.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://rodsk.github.io/umbcs/" target="_blank">
          https://rodsk.github.io/umbcs/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>HTML5/CSS3, JavaScript, Jekyll, YAML, Ruby</span>
        </ListItem>
        <ListItem>
          <Meta>SOURCE</Meta>
          <Link href="https://github.com/beshu78910/umbcs" target="_blank">
          github.com/beshu78910/umbcs <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>DOCUMENT</Meta>
          <Link href="https://drive.google.com/file/d/1KCOztlxQrhvKbjq4iO6lE3y-k0ly8d9N/view?usp=sharing" target="_blank">
          UMBCS Doc <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/works/umbweb.png" alt="Inkdrop" />
      <WorkImage src="/images/works/umbweb2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/umbdiagram.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
