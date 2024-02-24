import styled from "@lib/emotion";
import * as Modal from "@ui/Modal";
import { Checkbox } from '../Upload/elements'

export const Root = styled(Modal.Content)`
  padding: 20px;
  text-align: center;
  user-select: none;
  width: 350px;
  max-width: 95%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  overflow: visible;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-grow: 1;
  margin: 0;
`;

export const Close = styled(Modal.Close)`
  margin: 15px;
`

export const Top = styled.div`
  padding-bottom: 10px;
  display: flex;
`

export const Description = styled.div`
  font-size: 14px;
  text-align: left;
  color: ${props => props.theme.colors._primary.darken(0.3).string()};
  margin-bottom: 20px;
`;

export const Experiment = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid ${props => props.theme.colors._primary.darken(0.7).string()};
  border-bottom: 1px solid ${props => props.theme.colors._primary.darken(0.7).string()};
`;

export const ExperimentDescription = styled.div`
  font-size: 14px;
  text-align: left;
  color: ${props => props.theme.colors._primary.darken(0.3).string()};
`;

export const ExperimentCheckbox = styled(Checkbox)`
  margin-top: 0;
`;

