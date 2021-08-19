import { Card, Icon, Image } from 'semantic-ui-react'

const Cardbox = () => {
  return(
  <Card>
    <img src={window.location.origin + '/images/girls/1.jpg'} />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>)

}

export default Cardbox;