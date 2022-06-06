import { useQuery } from 'react-query';
import { MdEast } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Highlight, OutlinedImage } from '@components';
import { InstagramClient } from '@shared/services';
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
    { placeholderData: IG_USER_DEFAULT, enabled: false }
  );

  const igMediaFields = ['id', 'media_url', 'caption', 'permalink'];

  const {
    data: igPictures,
    isLoading,
    isLoadingError,
  } = useQuery('igLastPosts', () =>
    InstagramClient.getLastPictures(3, igMediaFields)
  );

  if (isLoadingError) {
    return (
      <InstagramText style={{ margin: '32px 0' }}>
        Acompanhe-nos no{' '}
        <a
          href={`https://www.instagram.com/${user.username}`}
          target="_blank"
          rel="noreferrer"
          style={{ alignSelf: 'flex-end' }}
        >
          <Highlight style={{ textDecoration: 'underline' }}>
            Instagram
          </Highlight>
        </a>
      </InstagramText>
    );
  }

  return (
    <ContainerInstagram>
      <InstagramText>
        Acompanhe-nos no <Highlight>Instagram</Highlight>
      </InstagramText>

      <InstagramItemsContainer>
        {isLoading ? (
          <>
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <IgPictureCard key={i}>
                  <Skeleton height={200} />
                  <Skeleton count={3} />
                </IgPictureCard>
              ))}
          </>
        ) : (
          <>
            {igPictures &&
              igPictures.map((pic) => (
                <a
                  key={pic.id}
                  href={pic.permalink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IgPictureCard>
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
          </>
        )}
      </InstagramItemsContainer>

      <a
        href={`https://www.instagram.com/${user.username}`}
        target="_blank"
        rel="noreferrer"
        style={{ alignSelf: 'flex-end' }}
      >
        <ButtonLinkInstagram>
          Veja mais no Instagram <MdEast />{' '}
        </ButtonLinkInstagram>
      </a>
    </ContainerInstagram>
  );
};

export default Instagram;
