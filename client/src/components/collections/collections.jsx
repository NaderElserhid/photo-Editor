import "../collections/collections.css";
import Image from "../../components/image/image";

function Collections() {
  return (
    <div className="collections">
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>minmalist bedroom</h1>
          <span>12 oins 1w</span>
        </div>
      </div>
      {/* collection */}
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>minmalist bedroom</h1>
          <span>12 oins 1w</span>
        </div>
      </div>
      {/* collection */}
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>minmalist bedroom</h1>
          <span>12 oins 1w</span>
        </div>
      </div>
    </div>
  );
}

export default Collections;
