import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gameCardsMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  //do stuff

  return {
    props: {
      banners: bannersMock,
      newGames: gameCardsMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gameCardsMock,
      upcommingGames: gameCardsMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gameCardsMock,
      freeGames: gameCardsMock,
      freeHighlight: highlightMock
    }
  }
}
