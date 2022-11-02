import React, {userState} from "react";  
import Card from "./Card";
const FeatureCard = () =>{
    return(
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <Card imageUrl="https://getbootstrap.com/docs/5.2/examples/features/unsplash-photo-1.jpg" title="Short title, long jacket" footertitle1="Earth" footertitle2="3d"/>
          <Card imageUrl="https://getbootstrap.com/docs/5.2/examples/features/unsplash-photo-2.jpg" title="Much longer title that wraps to multiple lines" footertitle1="Flower" footertitle2="5d"/>
          <Card imageUrl="https://getbootstrap.com/docs/5.2/examples/features/unsplash-photo-3.jpg" title="Another longer title belongs here" footertitle1="Sky" footertitle2="10d"/>
        </div>
      </div>
    )
}
export default FeatureCard;