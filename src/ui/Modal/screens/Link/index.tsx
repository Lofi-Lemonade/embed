import { store } from '@models'
import {
  LinkBox,
  Root,
  Title,
  Top,
  Text,
  Domain,
  Buttons,
  VisitButton,
  CancelButton
} from './elements'

const Link = () => {
  const url = store.modal.data
  const domain = new URL(url).hostname

  return <Root className="link-modal">
    <Top className="top">
      <Title className="title">Hold Up</Title>
      <Text className="text">This link is taking you to the following website</Text>
      <LinkBox className="link-box">
        {url.split(domain)[0]}
        <Domain className="domain">{domain}</Domain>
        {url.split(domain)[1]}
      </LinkBox>
    </Top>

    <Buttons className="link-buttons">
      <VisitButton onClick={() => {
        open(url, '_blank', 'noreferrer')
        store.modal.close()
      }} className="visit-button">Visit Site</VisitButton>
      <CancelButton onClick={store.modal.close} className="cancel-button">Go Back</CancelButton>
    </Buttons>

  </Root>
}

export default Link
