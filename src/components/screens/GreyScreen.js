import React from 'react';
import Soundboard from '../components/Soundboard.js'
import store from '../redux/store.js'
import {setNavigation, setSounds} from '../redux/actions.js'
import HeaderButton from '../components/HeaderButton.js'

class GreyScreen extends React.Component{
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
                ["A", "/assets/sounds/Grey/A"], 
                ["B", "/assets/sounds/Grey/B"], 
                ["B/C", "/assets/sounds/Grey/B_C"], 
                ["C#", "/assets/sounds/Grey/C_Sharp"], 
                ["C", "/assets/sounds/Grey/C"], 
                ["D Other Seal", "/assets/sounds/Grey/D_Other_Seal"], 
                ["C slight sharp", "/assets/sounds/Grey/C_slight_sharp"], 
                ["D", "/assets/sounds/Grey/D"], 
                ["D/D#", "/assets/sounds/Grey/D_D_Sharp"], 
                ["E", "/assets/sounds/Grey/E"], 
                ["Eb", "/assets/sounds/Grey/Eb"], 
                ["Screemo", "/assets/sounds/Grey/Screemo", "premium"], 
                ["Screemo 2", "/assets/sounds/Grey/Screemo_2", "premium"], 
                ["Metal", "/assets/sounds/Grey/Metal", "premium"], 
                ["Metal 2", "/assets/sounds/Grey/Metal_2", "premium"], 
                ["Metal 3", "/assets/sounds/Grey/Metal_3", "premium"], 
                ["H Metal", "/assets/sounds/Grey/H_Metal", "premium"], 
                ["H Metal 2", "/assets/sounds/Grey/H_Metal_2", "premium"], 
                ["H Metal 3", "/assets/sounds/Grey/H_Metal_3", "premium"], 
                ["H Metal 4", "/assets/sounds/Grey/H_Metal_4", "premium"]
            ]
        }))
    }

    render(){
        return(
            <Soundboard navigation={this.props.navigation}/>
        )
    }
}

export default GreyScreen