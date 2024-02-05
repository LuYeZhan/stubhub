import { FooterWrapper, LinksWrapper, SocialsWrapper, FollowUsWrapper } from "./wrappers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { LINKS } from "../../constants/footerLinks";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div>About us</div>
      <LinksWrapper>
        <li><a href={LINKS.ABOUT_US} target="_blank" rel="noreferrer">About us</a></li> 
        <li><a href={LINKS.MAGAZINE} target="_blank" rel="noreferrer">Magazine</a></li> 
        <li><a href={LINKS.DEVELOPERS} target="_blank" rel="noreferrer">Developers</a></li>
      </LinksWrapper>
      <FollowUsWrapper>
        <div>Follow us</div>
        <SocialsWrapper>
          <li>
            <a href={LINKS.TWITTER} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
              <span>Twitter</span>
            </a>          
          </li> 
          <li>
            <a href={LINKS.GITHUB} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              <span>Github</span>
            </a>
          </li>
        </SocialsWrapper> 
      </FollowUsWrapper> 
      <LinksWrapper>
        <li><a href=" " >Some cool link</a></li>
        <li><a href=" " >Some cool link</a></li>
        <li><a href=" " >Some cool link</a></li>
      </LinksWrapper>
    </FooterWrapper>
  );
};
