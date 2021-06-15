import React from "react";
import StackGrid, { easings, transitions } from "react-stack-grid";
import ScrollContainer from "react-indiana-drag-scroll";
import { Container, Grid, Image } from "semantic-ui-react";

// COMPOSING IMAGE URL
const imgUrl = ({ farm, server, id, secret }) =>
  `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

//? THIS IS IMAGE VIEW COMPONENT...
export const ImageView = ({ data }) => {

React.useEffect(() => {
    
}, [data])

  const Images = data.map((e, index) => (
    <Grid.Column  key={index}>
      <Image src={imgUrl(e)} alt="" size='large' />
    </Grid.Column>
  ));

  return (
    <>
      <div >
        {data && (
          <StackGrid >
              {Images}
          </StackGrid>
        )}
      </div>
    </>
  );
};

export default ImageView;
