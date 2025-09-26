export default function CrystalImages({ data }) {
  return (
    <div className="crystal-images">
      {data.images?.map((imgUrl, index) => (
        <div key={index} className="image-box">
          <img src={imgUrl} alt={`Crystal ${index + 1}`} />
        </div>
      )) || <p>No images available</p>}
    </div>
  );
}
