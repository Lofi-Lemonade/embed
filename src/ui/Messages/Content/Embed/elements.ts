import styled, {css} from "react-emotion";
import ExpandableImage from "@ui/shared/ExpandableImage";
import play from "../../../../app/res/images/discordAssets/play.svg";

export const MediaEmbedBase = css`
  border-radius: 3px;
  cursor: pointer;
`;

export namespace EmbedStyle {
  interface BaseProps {
    color: string | undefined;
    thumbnailIsLarge: boolean;
    hasVideoWithThumbnail: boolean;
  }

  export const Base = styled.article<BaseProps>`
    padding: 16px 16px 16px 12px;
    border-left: 4px solid ${props => props.color ?? props.theme.colors._background.darken(0.7).string()};
    background-color: ${props => props.theme.colors._background.darken(0.1).string()};
    border-radius: 3px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 520px;

    ${props => (props.thumbnailIsLarge || props.hasVideoWithThumbnail) && css`
      max-width: 432px;
    `}
  `;

  interface ContentAndThumbnailProps {
    thumbnailIsLarge: boolean;
  }

  export const ContentAndThumbnail = styled.div<ContentAndThumbnailProps>`
    display: flex;
    gap: 16px;
    
    ${props => props.thumbnailIsLarge && css`
      flex-direction: column;
      max-width: 432px;
    `}
  `;

  export const Content = styled.div`
    display: grid;
    gap: 8px;
  `;

  interface ImagesProps {
    amount: number;
  }

  export const Images = styled.div<ImagesProps>`
    display: grid;
    gap: 4px;
    border-radius: 3px;
    overflow: hidden;
    
    ${props => props.amount === 2 && css`
      grid-template-columns: 1fr 1fr;
    `}

    ${props => props.amount === 3 && css`
      grid-template-columns: 1fr 1fr;
      grid-template-rows: calc((300px - 4px) / 2) calc((300px - 4px) / 2);
      
      & > *:first-child {
        grid-row: span 2;
      }
    `}
    
    ${props => props.amount === 4 && css`
      grid-template-columns: 1fr 1fr;
      grid-template-rows: calc((300px - 4px) / 2) calc((300px - 4px) / 2);
    `}
    
    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  `;

  export const MultiImageImageContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  interface ImageProps {
    large?: boolean;
    width?: number;
    height?: number;
    withMargin?: boolean;
  }

  export const Image = styled(ExpandableImage)<ImageProps>`
    border-radius: 3px;
    cursor: pointer;
    ${props => props.width && css`
      width: ${props.width}px;
    `}
    ${props => props.height && css`
      height: ${props.height}px;
    `}
    display: flex;
    
    ${props => (props.large && props.withMargin !== false) && css`
      margin-top: 8px;
    `}
  `;

  export const Author = styled.div`
    font-size: 14px;
    font-weight: 600;
    display: inline-grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 8px;
    color: ${props => props.theme.colors._primary.string()};
  `;

  export const AuthorIcon = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 100%;
  `;

  export const AuthorName = styled.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    
    a {
      color: ${props => props.theme.colors._primary.string()};
    }
  `;

  export const Provider = styled.div`
    font-size: 12px;
    color: ${props => props.theme.colors._primary.darken(0.1).string()};

    a {
      color: inherit;
    }
  `;

  export const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
  `;

  export const TitleWithUrl = styled.a`
    font-size: 16px;
    font-weight: 600;
  `;

  export const Description = styled.div`
    font-size: 14px;
    white-space: pre-wrap;
    color: ${props => props.theme.colors._primary.darken(0.1).string()};
  `;

  export const Footer = styled.div`
    font-size: 12px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors._primary.darken(0.1).string()};
  `;

  export const FooterIcon = styled.img`
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  `;

  export const Fields = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4px;
    gap: 8px;
  `;

  export const Field = styled.div<{inline?: boolean}>`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    min-width: 150px;
    max-width: 506px;
    ${({inline}) =>
      inline
        ? css`
          width: fit-content;
          flex-basis: 30%;
        `
        : css`
          flex-basis: 100%;
        `
    }
  `;

  export const FieldName = styled.div`
    font-size: 14px;
    margin-bottom: 4px;
    font-weight: 600;
    color: ${props => props.theme.colors._primary.string()};
  `;

  export const FieldValue = styled.div`
    font-size: 14px;
    font-weight: 400;
    white-space: pre-wrap;
    color: ${props => props.theme.colors._primary.darken(0.1).string()};
  `;
}

export const VideoIframe = styled.iframe`
  border-radius: 3px;
  border: none;
`;

export const VideoThumbnail = styled.div<{src: string}>`
  border-radius: 3px;
  background-image: url(${props => props.src});
  background-size: cover;
  position: relative;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6);
    background-position: center;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    border-radius: 100%;
    pointer-events: none;
    background-image: url(${play});
  }
`;
