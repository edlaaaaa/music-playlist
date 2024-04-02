import {components} from 'react'
import MusicItem from '../MusicItem'

import {
  BgContainer,
  ArtistBg,
  ArtistInfo,
  ArtistName,
  PlayListContainer,
  PlayListHeading,
  SearchInput,
  MusicList,
  EmptyContainer,
  NoSongsText,
} from './styledComponents'

const initialTrackList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },

  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },

  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },

  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },

  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },

  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png',
    name: 'Castle on the Hill',
    genre: 'Dance-Pop',
    duration: '3:36',
  },

  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png',
    name: 'Happier',
    genre: 'Dance-Pop',
    duration: '3:36',
  },

  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png',
    name: 'Photograph',
    genre: 'Folk Music',
    duration: '3:20',
  },

  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },

  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:58',
  },
]

class MusicPlaylist extends Components {
  state = {
    searchInput: '',
    playList: initialTrackList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickDeleteTrack = id => {
    const {playList} = this.state
    const updatedPlaylist = playList.filter(each => each.id === id)
    this.setState({playList: updatedPlaylist})
  }

  renderNoSongsFoundView = () => (
    <EmptyContainer>
      <NoSongsText>No Songs Found</NoSongsText>
    </EmptyContainer>
  )

  render() {
    const {playList, searchInput} = this.state
    const searchResults = playList.filter(eachTrack =>
      eachTrack.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <BgContainer>
        <ArtistBg data-testid="artist-details">
          <ArtistName>
            Ed Sheeran
            <br />
            <ArtistInfo>Singer</ArtistInfo>
          </ArtistName>
        </ArtistBg>
        <PlayListContainer>
          <PlayListHeading>Songs PlayList</PlayListHeading>
          <searchInput
            type="search"
            value={searchInput}
            placeholder="search"
            onChange={this.onChangeSearchInput}
          />
        </PlayListContainer>
        {searchResults.length === 0 ? (
          this.renderNoSongsFoundView()
        ) : (
          <MusicList>
            {searchResults.map(eachItem => (
              <MusicItem
                key={eachItem.id}
                MusicItemDetails={eachItem}
                onClickDeleteTrack={this.onClickDeleteTrack}
              />
            ))}
          </MusicList>
        )}
      </BgContainer>
    )
  }
}

export default MusicPlaylist
