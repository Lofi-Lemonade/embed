import styled from "@lib/emotion";
import * as Modal from "@ui/Modal";

export const Root = styled(Modal.Content)`
  padding: 20px;
  text-align: center;
  user-select: none;
  max-width: 95%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  overflow: visible;
`

export const Top = styled.div`
  padding-bottom: 20px;
  display: flex;
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-grow: 1;
  margin: 0;
`

export const Close = styled(Modal.Close)`
  margin: 15px;
`

export const ExperimentsButton = styled.button`
  background-color: ${props => props.theme.colors.accent};
  padding: 5px 10px;
  border-radius: 5px;
  color: ${props => props.theme.colors.primary};
`;

export const OverrideInfo = styled.div`
  color: #eda839;
  font-size: 14px;
`
