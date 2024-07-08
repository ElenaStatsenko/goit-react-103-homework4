import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallerry({ photos }) {
  return (
    <ul>
      {photos.map(({ id, description, urls: { small } }) => {

        return(
          <li key={id}>
            <ImageCard description={description} url={small}/>
          </li>
        )
      })}
    </ul>
  );
}


