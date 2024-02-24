import { DeleteMessage, DeleteMessageVariables } from '@generated'
import { useRouter } from '@hooks';
import { store } from '@models';
import { generalStore } from '@store';
import Message from '@ui/Messages/Message';
import { addNotification } from 'notify';
import { useMutation } from 'react-apollo-hooks';
import DELETE_MESSAGE from './DeleteMessage.graphql'
import {
  DeleteButton,
  Preview,
  Root,
  Title,
  Text,
  Buttons,
  CancelButton
} from './elements'

const Delete = () => {
  const { channel } = useRouter()

  const deleteMessage = useMutation<DeleteMessage, DeleteMessageVariables>(DELETE_MESSAGE);

  return (
    <Root className="delete-modal">
      <Title className="title">Delete Message</Title>
      <Text className="text">Are you sure you want to delete this message?</Text>
      <Preview className="delete-preview">
        <Message message={generalStore.messageToDelete} isFirstMessage={true} />
      </Preview>
      <Buttons className="delete-buttons">
        <DeleteButton
          onClick={async () => {
            await deleteMessage({ variables: {
              id: generalStore.messageToDelete.id,
              channel,
              thread: store.modal.thread ? generalStore.activeThread.id : null
            }}).catch(error => addNotification({
              level: 'error',
              title: 'Error deleting message',
              message: error.toString().replace('GraphQL error: ', ''),
              autoDismiss: 0
            }))
            store.modal.close();
          }}
          className="delete-button"
        >
          Delete
        </DeleteButton>
        <CancelButton onClick={store.modal.close} className="cancel-button">Cancel</CancelButton>
      </Buttons>
    </Root>
  )
}

export default Delete
