/* TODO add slider w/ JS*/
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider'

/* give slider width */ 
const sliderStyle{
  position:'relative'
  width: '100%',
  height: 80,
  border: '1px solid steelblue',
}
/* railer style */
const railStyle = { 
  position: 'absolute',
  width: '100%',
  height: 10,
  marginTop: 35,
  borderRadius: 5,
  backgroundColor: '#8B9CB6',
}

/* coding the handle component */
export function Handle({
  handle:{id, value, percent}, 
  getHandleProps
}) {
  return(<div
    
  )
}

<Slider
    rootStyle={sliderStyle} // inline styles for the outer div. Can also use className prop.
    domain={[0, 100]}
    values={[10]}
 >
    <div style={railStyle} /> // Add a rail as a child.  Later we'll make it interactive.
</Slider>