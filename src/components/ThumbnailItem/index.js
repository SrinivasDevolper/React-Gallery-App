import './index.css'

const Imagebutton = props => {
  const {eachImageItem, selectImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, imageUrl, imageAltText} = eachImageItem
  const clickImage = () => {
    selectImage(imageUrl, imageAltText)
  }
  const getTrueVal = isActive ? 'Active-img' : ''
  console.log(getTrueVal)
  return (
    <li className={`li-cont${getTrueVal}`}>
      <button type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} onClick={clickImage} />
      </button>
    </li>
  )
}
export default Imagebutton
