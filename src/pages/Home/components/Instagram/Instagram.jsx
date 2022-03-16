import { useEffect, useState } from 'react';
import { Highlight, OutlinedImage } from '../../../../shared/components';
import { InstagramClient } from '../../../../shared/services';
import {
  ContainerInstagram,
  InstagramText,
  ButtonLinkInstagram,
  InstagramItemsContainer,
  IgPictureCard,
} from './Instagram.style';

const Instagram = () => {
  // set default username initially, but update as soon as possible, since users can change their @usernames
  const [igLink, setIgLink] = useState('https://www.instagram.com/saudedarua');
  const [igPictures, setIgPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: create custom hook to handle fecthing general logic
  useEffect(() => {
    const fetchIgData = async () => {
      const fields = ['id', 'media_url', 'caption', 'permalink'];
      const lastPictures = await InstagramClient.getLastPictures(3, fields);
      setIgPictures(lastPictures);

      const { username } = await InstagramClient.getSelfUser();
      setIgLink(`https://www.instagram.com/${username}`);

      setIsLoading(false);
    };

    fetchIgData();
  }, []);

  return (
    <ContainerInstagram>
      <InstagramText>
        Acompanhe-nos no <Highlight>Instagram</Highlight>
      </InstagramText>

      {/* TODO: Loading Skeleton */}
      {isLoading ? <></> : <></>}

      <InstagramItemsContainer>
        {igPictures.map((pic) => (
          <a key={pic.id} href={pic.permalink} target="_blank" rel="noreferrer">
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
        href={igLink}
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
