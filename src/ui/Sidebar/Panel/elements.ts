import styled from '@lib/emotion'
import Button from "@ui/shared/button";

export const Root = styled('footer')`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 500;
  user-select: none;
  z-index: 1;

  background-color: ${({theme}) =>
    theme.colors._background
      .darken(0.5)
      .string()
  };
  box-shadow: 0px 0px 27px 15px
    ${({ theme }) =>
      theme.colors._background
        .fade(0.9)
        .darken(0.7)
        .string()};
`

export const Icon = styled('button')`
  height: 32px;
  width: 32px;
  background-repeat: no-repeat;
  border-radius: 3px;
  background-size: 60%;
  background-position: center;
  opacity: 0.5;
  outline: none;

  &:hover {
    background-color: rgba(24, 25, 28, 0.3);
    opacity: 1;
  }
`

export const Settings = styled(Icon)`
  background-image: ${({ theme }) =>
    `url("data:image/svg+xml;charset=UTF-8, ${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path fill="${
        theme.colors.primary
      }" d="M7.15546853,6.47630098e-17 L5.84453147,6.47630098e-17 C5.36185778,-6.47630098e-17 4.97057344,0.391750844 4.97057344,0.875 L4.97057344,1.9775 C4.20662236,2.21136254 3.50613953,2.61688993 2.92259845,3.163125 L1.96707099,2.61041667 C1.76621819,2.49425295 1.52747992,2.46279536 1.30344655,2.52297353 C1.07941319,2.58315171 0.88846383,2.73002878 0.77266168,2.93125 L0.117193154,4.06875 C0.00116776262,4.26984227 -0.0302523619,4.50886517 0.0298541504,4.73316564 C0.0899606628,4.9574661 0.236662834,5.14864312 0.437644433,5.26458333 L1.39171529,5.81583333 C1.21064614,6.59536289 1.21064614,7.40609544 1.39171529,8.185625 L0.437644433,8.736875 C0.236662834,8.85281521 0.0899606628,9.04399223 0.0298541504,9.2682927 C-0.0302523619,9.49259316 0.00116776262,9.73161606 0.117193154,9.93270833 L0.77266168,11.06875 C0.88846383,11.2699712 1.07941319,11.4168483 1.30344655,11.4770265 C1.52747992,11.5372046 1.76621819,11.5057471 1.96707099,11.3895833 L2.92259845,10.836875 C3.50613953,11.3831101 4.20662236,11.7886375 4.97057344,12.0225 L4.97057344,13.125 C4.97057344,13.6082492 5.36185778,14 5.84453147,14 L7.15546853,14 C7.63814222,14 8.02942656,13.6082492 8.02942656,13.125 L8.02942656,12.0225 C8.79337764,11.7886375 9.49386047,11.3831101 10.0774016,10.836875 L11.032929,11.3895833 C11.2337818,11.5057471 11.4725201,11.5372046 11.6965534,11.4770265 C11.9205868,11.4168483 12.1115362,11.2699712 12.2273383,11.06875 L12.8828068,9.93270833 C12.9988322,9.73161606 13.0302524,9.49259316 12.9701458,9.2682927 C12.9100393,9.04399223 12.7633372,8.85281521 12.5623556,8.736875 L11.6082847,8.185625 C11.7893539,7.40609544 11.7893539,6.59536289 11.6082847,5.81583333 L12.5623556,5.26458333 C12.7633372,5.14864312 12.9100393,4.9574661 12.9701458,4.73316564 C13.0302524,4.50886517 12.9988322,4.26984227 12.8828068,4.06875 L12.2273383,2.93270833 C12.1115362,2.73148712 11.9205868,2.58461004 11.6965534,2.52443187 C11.4725201,2.46425369 11.2337818,2.49571128 11.032929,2.611875 L10.0774016,3.16458333 C9.49400565,2.61782234 8.79351153,2.2117896 8.02942656,1.9775 L8.02942656,0.875 C8.02942656,0.391750844 7.63814222,6.47630098e-17 7.15546853,6.47630098e-17 Z M8.5,7 C8.5,8.1045695 7.6045695,9 6.5,9 C5.3954305,9 4.5,8.1045695 4.5,7 C4.5,5.8954305 5.3954305,5 6.5,5 C7.03043298,5 7.53914081,5.21071368 7.91421356,5.58578644 C8.28928632,5.96085919 8.5,6.46956702 8.5,7 Z" transform="translate(2.5 2)"></path></svg>`
    )}")`};
`

interface UserContainerProps {
  loggedIn: boolean;
  customAuth: boolean;
}
export const UserContainer = styled.div<UserContainerProps>`
  display: ${({ theme, loggedIn, customAuth }) => ((theme.readonly || customAuth) && !loggedIn) ? 'none' : 'unset'};
  padding: 8px 10px;

  background-color: ${({theme}) =>
    theme.colors._background
      .darken(0.3)
      .string()};
`

export const LoggedInUser = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 8px;
`

export const UserTag = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Username = styled('div')`
  font-size: 14px;
`

export const Discriminator = styled('div')`
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) =>
    theme.colors._primary
      .fade(0.7)
      .string()
  };
`

export const Avatar = styled('img')`
  border-radius: 100%;
  height: 32px;
  width: 32px;
`

export const UserButtons = styled('div')`
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const UserButton = styled('div')`
  padding: 7px;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors._primary
        .fade(0.9)
        .string()
    };
  }
`;

export const SettingsIcon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='false' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath fill='${({theme}) => encodeURIComponent(theme.colors._primary.fade(0.335).string())}' fill-rule='evenodd' clip-rule='evenodd' d='M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'%3E%3C/path%3E%3C/svg%3E");
`

export const LogOutIcon = styled('div')`
  width: 12px;
  height: 14px;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='14' viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.5 13.9868C10.433 13.9868 12 12.4198 12 10.4868L12 3.51316C12 1.58016 10.433 0.0131626 8.5 0.0131626L0.815789 0.0131626V1.01316L8.5 1.01316C9.88071 1.01316 11 2.13245 11 3.51316L11 10.4868C11 11.8676 9.88071 12.9868 8.5 12.9868L0.815789 12.9868V13.9868L8.5 13.9868ZM8.41934 6.64644L5.74829 3.97539L5.04118 4.6825L6.85868 6.5L1 6.5L1 7.5L6.85868 7.5L5.04118 9.3175L5.74829 10.0246L8.41934 7.35355L8.77289 7L8.41934 6.64644Z' fill='${({theme}) => encodeURIComponent(theme.colors._primary.fade(0.335).string())}'/%3E%3C/svg%3E%0A");
`

export const Version = styled('a')`
  width: fit-content;
  color: ${({ theme }) => theme.colors._primary.fade(0.7).string()};
  line-height: 20px;
  padding: 0 10px;
  margin-bottom: 2px;
  cursor: pointer;
  align-self: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const AuthButton = Button.withComponent('a');

export const Auth = styled(AuthButton)`
  display: ${({theme}) => theme.readonly ? 'none' : 'unset'};
  background: ${({ theme }) => theme.colors._accent.fade(0.6).string()};
`;

export const NotLoggedIn = styled.div`
  display: flex;
  justify-content: center;
`
