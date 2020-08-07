import React from 'react'
import {Container} from '@material-ui/core'
import Navigation from '../containers/Navigation'
import Map from './Map'


// class SpotDetail extends React.Component {
//   state = {
//     spots = [],
//     isLoaded = false
//   }

//   componentDidMount() {
//     fetch('http://localhost:8080/spots')
//       .then(res => res.json())
//       .then(
//         data => {
//           this.setState({
//             isLoaded: true,
//             spots: data
//           })
//         }
//       )
//   }

// }

const SpotDetail = (props) => {
  const id = props.match.params.id
  // const convert = Object.values(props.spots)
  const info = props.spots.find(c => c.spot_id == id)
  console.log(props.spots, id, "woah", info)

  return (
    <div>
      <Navigation />
      <Container>
        <img src={info.photo_1}></img>
        <h2>{info.spot_name}</h2>
        <h4>{info.spot_address}</h4>
      </Container>
      <Map address={info.spot_address}
      />
    </div>
  )
}

export default SpotDetail