import {Component} from 'react'

import Imagebutton from '../ThumbnailItem/index'

import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

class Gallery extends Component {
  state = {
    imgThumbnailUrl: imagesList[0].imageUrl,
    imgThumbnailText: imagesList[0].imageAltText,
  }

  selectImage = (imageUrl, imageAltText) => {
    this.setState({
      imgThumbnailUrl: imageUrl,
      imgThumbnailText: imageAltText,
    })
  }

  render() {
    const {imgThumbnailUrl, imgThumbnailText} = this.state
    console.log(imgThumbnailUrl, imgThumbnailText)
    return (
      <div className="bg-cont">
        <div>
          <img
            src={imgThumbnailUrl}
            alt={imgThumbnailText}
            className="tumb-img"
          />
          <h1 className="tumb-heading">Nature Photography</h1>
          <p className="tumb-para">Nature Photography by Rahul</p>
          <ul>
            {imagesList.map(eachImage => {
              console.log(
                imgThumbnailText === eachImage.imageAltText,
                imgThumbnailText,
                eachImage.imageAltText,
              )
              return (
                <Imagebutton
                  key={eachImage.id}
                  eachImageItem={eachImage}
                  selectImage={this.selectImage}
                  isActive={imgThumbnailText === eachImage.imageAltText}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Gallery
