export default function ImageCard({ description, url }) {
  return (
    <div>
      <img src={url} alt={description} />
    </div>
  );
}
