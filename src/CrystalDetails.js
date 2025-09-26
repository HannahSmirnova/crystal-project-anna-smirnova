export default function CrystalDetails({ data }) {
  if (!data) return null;
  return (
    <div className="crystal-details">
      <div>
        <h3>Chemical formula:</h3>
        <p>{data.formula || "—"}</p>
      </div>
      <div>
        <h3>Benefits:</h3>
        <ul>
          {data.benefits?.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          )) || <li>—</li>}
        </ul>
      </div>
      <div>
        <h3>How to connect:</h3>
        <ul>
          {data.connectionTips?.map((tip, index) => (
            <li key={index}>{tip}</li>
          )) || <li>—</li>}
        </ul>
      </div>
      <div className="images">Images Are Coming Soon</div>
    </div>
  );
}
