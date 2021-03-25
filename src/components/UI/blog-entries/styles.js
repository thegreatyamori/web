import styled from "styled-components";
import { Card, CardContent } from "../card/styles";

const BlogGrid = styled.div`
  display: grid;
  grid-column-gap: 3%;
  grid-row-gap: 15px;
  grid-template-rows: auto;

  /* Small devices (landscape phones, 320px and up) */
  @media (min-width: 320px) {
    & {
      grid-template-columns: 1fr;
    }
  }

  /* Extra arge devices (extra large desktops, 1201px and up) */
  @media (min-width: 1201px) {
    & {
      grid-template-columns: 20% 54% 20%;
    }
  }
`;
const BlogCard = styled.div`
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn};

  & > ${Card} {
    flex-direction: ${(props) => props.flexDirection};
  }

  & ${CardContent} {
    padding-left: ${(props) => props.paddingLeft}em;
  }

  /* Small devices (landscape phones, 320px and up) */
  @media (min-width: 320px) {
    & {
      grid-area: auto;
    }

    & > ${Card} {
      flex-direction: column;
    }

    & ${CardContent} {
      padding-left: 0;
    }
  }

  /* Extra large devices (extra large desktops, 1201px and up) */
  @media (min-width: 1201px) {
    & {
      grid-row: ${(props) => props.gridRow};
      grid-column: ${(props) => props.gridColumn};
    }

    & > ${Card} {
      flex-direction: ${(props) => props.flexDirection} !important;
    }

    & ${CardContent} {
      padding-left: ${(props) => props.paddingLeft}em !important;
    }
  }

  /* large devices (large desktops, 768px and up) */
  @media (min-width: 768px) {
    & > ${Card} {
      flex-direction: row;
    }

    & ${CardContent} {
      padding-left: 1em;
    }
  }
`;

export { BlogGrid, BlogCard };
