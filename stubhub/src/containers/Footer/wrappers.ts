import styled from 'styled-components';

const commonLinkStyles = `
  & a {
    text-decoration: none;
    color: #000;
    transition: color 0.3s ease;
    &:hover {
      color: #00a8ff;
    }
  }
`;

export const FooterWrapper = styled.div`
  background-color: #f5f5f5;
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