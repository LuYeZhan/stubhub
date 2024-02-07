import styled from 'styled-components';
import { FooterColors } from '../../constants/colors';

const commonLinkStyles = `
  & a {
    text-decoration: none;
    color: ${FooterColors.black};
    transition: color 0.3s ease;
    &:hover {
      color: ${FooterColors.blue};
    }
  }
`;

export const FooterWrapper = styled.div`
  background-color: ${FooterColors.background};
  font-size: 90%;
  line-height: 1.5em;
  list-style: none;
  padding: 2em;
`;

export const SocialsWrapper = styled.div`
  display: flex;

  & > li > a {
    content: " ";
    margin: 0 0.3125em;
    & > span {
      margin-left: 0.3125em;
    }
  }

  ${commonLinkStyles}
  
`;

export const LinksWrapper = styled.div`
  display: flex;

  & > li {
    &:not(:first-child) {
      &:before {
        content: "|";
        margin: 0 0.3125em;
      }
    }
    
    ${commonLinkStyles}

  }
`;

export const FollowUsWrapper = styled.div`
  display: flex;
  margin: 1em 0;
`