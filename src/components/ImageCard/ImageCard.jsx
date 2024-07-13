
export default function ImageCard({ description, openModal, smallUrl, regularUrl }) {
  
  return (
    <div>
    <img src={smallUrl} alt={description} onClick={() => openModal(regularUrl)} /> 
    
  </div>
  );
}
