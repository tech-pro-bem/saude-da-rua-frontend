import { useQuery } from 'react-query';
import { Highlight, OutlinedImage } from '../../../../shared/components';
import { InstagramClient } from '../../../../shared/services';
import {
  ContainerInstagram,
  InstagramText,
  ButtonLinkInstagram,
  InstagramItemsContainer,
  IgPictureCard,
} from './Instagram.style';

const IG_USER_DEFAULT = { username: 'saudedarua' };

const Instagram = () => {
  // use default username initially, but update as soon as possible, since users can change their @usernames
  const { data: user } = useQuery(
    'ig/me',
    () => InstagramClient.getSelfUser(),
    { placeholderData: IG_USER_DEFAULT }
  );

  const igMediaFields = ['id', 'media_url', 'caption', 'permalink'];

  const { data: igPictures, isLoading } = useQuery('igLastPosts', () =>
    InstagramClient.getLastPictures(3, igMediaFields)
  );

  return (
    <ContainerInstagram>
      <InstagramText>
        Acompanhe-nos no <Highlight>Instagram</Highlight>
      </InstagramText>

      {isLoading ? <></> : <></>}

      <InstagramItemsContainer>
        {igPictures &&
          igPictures.map((pic) => (
            <a
              key={pic.id}
              href={pic.permalink}
              target="_blank"
              rel="noreferrer"
            >
              <IgPictureCard style={{ maxWidth: '320px' }}>
                <OutlinedImage
                  src={pic.media_url}
                  imgBorderRadius="8px"
                  rightOffset="-8px"
                  topOffset="-8px"
                  bottomOffset="8px"
                  leftOffset="8px"
                />
                <p>{pic.caption}</p>
              </IgPictureCard>
            </a>
          ))}
      </InstagramItemsContainer>

      <a
        href={`https://www.instagram.com/${user.username}`}
        target="_blank"
        rel="noreferrer"
        style={{ alignSelf: 'flex-end' }}
      >
        <ButtonLinkInstagram>Veja mais no Instagram</ButtonLinkInstagram>
      </a>
    </ContainerInstagram>
  );
};

export default Instagram;
