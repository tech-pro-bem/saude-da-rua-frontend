import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../../../hooks/useFetch';

//DESAFIOS:
// - entender o array de retorno da API: id, media_type, media_url, caption, permalink
// - ajustar o layout ao proposto pelo UX
// - separar componentes por reponsabilidades (hooks, styles, componentes)
// - entender o hook useFetch()
// - melhorar a requisição utilizando o React Query (https://www.youtube.com/watch?v=uNFB9EbQz90)
// - criar componente de loading

const ExemploApi = () => {
  const token =
    'IGQVJVRWhQNkw3LWRVS0lVcm5xbnB5RjAtU3JSLTZAOSW95by1vVVRjemNjb3JRbTBoME5tVy1wV0x2cmZAQOFNFZAlNTd2NFamM1NHN0MDlENmpJVUIwc3hpdWFKQURwRHI4cEhlY01xYWdOQjdrVURQVwZDZD';

  const url =
    'https://graph.instagram.com/me/media?access_token=' +
    token +
    '&fields=id,media_type,media_url,caption,permalink';

  const { data: feed, isFetching } = useFetch(url);

  const FeedContainer = styled.div`
    width: 100%;
    margin-bottom: 100px;

    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      max-height: 500px;

      li {
        cursor: pointer;
        display: flex;

        img {
          height: 200px;
          width: 200px;
          object-fit: cover;
        }
      }
    }
  `;

  console.log(feed, isFetching);

  return (
    <FeedContainer>
      <ul>
        {isFetching
          ? ''
          : feed.data.slice(0, 10).map((post) => (
              <li key={post.id} href={post.permalink}>
                <img src={post.media_url} alt="" />
                {/* <p>{post.caption}</p> */}
              </li>
            ))}
      </ul>
    </FeedContainer>
  );
};

export default ExemploApi;
