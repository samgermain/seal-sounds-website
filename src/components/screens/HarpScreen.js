import React from 'react';
import Soundboard from '../components/Soundboard.js'
import store from '../redux/store.js'
import {setNavigation, setSounds} from '../redux/actions.js'
import HeaderButton from '../components/HeaderButton.js'

class HarpScreen extends React.Component{
    static navigationOptions = {
        headerRight: (
          <HeaderButton />  
        )
      }

    constructor(props){
        super(props)
        store.dispatch(setNavigation({navigation:this.props.navigation}))
        store.dispatch(setSounds({
            sounds: [
                ["Ag", "/assets/sounds/Harp/Ag"], 
                ["baGAA", "/assets/sounds/Harp/baGAA"], 
                ["Green_Day", "/assets/sounds/Harp/Green_Day"], 
                ["Hallelujah", "/assets/sounds/Harp/Hallelujah"], 
                ["Ma", "/assets/sounds/Harp/Ma"], 
                ["Mom", "/assets/sounds/Harp/Mom"], 
                ["Mom2", "/assets/sounds/Harp/Mom2"], 
                ["Mrrh", "/assets/sounds/Harp/Mrrh", "premium"], 
                ["Naa", "/assets/sounds/Harp/Naa", "premium"], 
                ["Umba", "/assets/sounds/Harp/Umba", "premium"], 
                ["Wow", "/assets/sounds/Harp/Wow", "premium"], 
                ["ahHgh", "/assets/sounds/Harp/ahHgh", "premium"], 
                ["ahHhghGa", "/assets/sounds/Harp/ahHhghGa", "premium"], 
                ["brrrga", "/assets/sounds/Harp/brrrga", "premium"], 
                ["haa", "/assets/sounds/Harp/haa", "premium"], 
                ["mmmmmmmmmmmm", "/assets/sounds/Harp/mmmmmmmmmmmm", "premium"], 
                ["mrhrmph", "/assets/sounds/Harp/mrhrmph", "premium"]
            ]
        }))
    }

    render(){
        return(
            <Soundboard navigation={this.props.navigation}/>
        )
    }
}

export default HarpScreen