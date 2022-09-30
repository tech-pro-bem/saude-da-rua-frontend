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
  LinkInstagram,
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
        Siga o{' '}
        <a
          href={`https://www.instagram.com/${user.username}`}
          target="_blank"
          rel="noreferrer"
          style={{ alignSelf: 'flex-end' }}
        >
          <Highlight style={{ textDecoration: 'underline' }}>
            @saudedarua
          </Highlight>
        </a>
      </InstagramText>
    );
  }

  return (
    <ContainerInstagram>
      <InstagramText>
        Siga o <Highlight>@saudedarua</Highlight>
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
                      responsive={{
                        maxWidth: '768px',
                        borderRadius: '12px',
                        left: '7px',
                        right: '-7px',
                        bottom: '14px',
                        top: '-7px',
                      }}
                    />
                    <p>{pic.caption}</p>
                  </IgPictureCard>
                </a>
              ))}
          </>
        )}
      </InstagramItemsContainer>

      <LinkInstagram
        href={`https://www.instagram.com/${user.username}`}
        target="_blank"
        rel="noreferrer"
      >
        <ButtonLinkInstagram>
          Veja mais no Instagram <MdEast size={20} />{' '}
        </ButtonLinkInstagram>
      </LinkInstagram>
    </ContainerInstagram>
  );
};

export default Instagram;
