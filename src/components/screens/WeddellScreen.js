import React from 'react';
import Soundboard from '../components/Soundboard.js'
import store from '../redux/store.js'
import {setNavigation, setSounds} from '../redux/actions.js'
import HeaderButton from '../components/HeaderButton.js'

class WeddellScreen extends React.Component{
    static navigationOptions = {
        headerRight: (
          <HeaderButton />  
        )
      }

    constructor(props){
        super(props)
        // const args = {
        //     playsInSilentModeIOS:true,
        //     interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        //     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX
        // }
//        const s = await Audio.Sound.createAsync(sound, args)
        store.dispatch(setNavigation({navigation:this.props.navigation}))
        store.dispatch(setSounds({
            sounds: [
                ["AAAAAAAAAAAAAAAAAA", "/assets/sounds/Weddell/AAAAAAAAAAAAAAAAAA"], 
                ["(sneezes)", "/assets/sounds/Weddell/sneezes"], 
                ["baguette", "/assets/sounds/Weddell/baguette"], 
                ["bliss", "/assets/sounds/Weddell/bliss"], 
                ["d\'egff", "/assets/sounds/Weddell/d_egff"], 
                ["d\'egg", "/assets/sounds/Weddell/d_egg"], 
                ["egg!", "/assets/sounds/Weddell/egg_2"], 
                ["egg! 2", "/assets/sounds/Weddell/egg_3"], 
                ["egg", "/assets/sounds/Weddell/egg"], 
                ["fibsh", "/assets/sounds/Weddell/fibsh"], 
                ["fish", "/assets/sounds/Weddell/fish"], 
                ["geaaaagh", "/assets/sounds/Weddell/geaaaagh"], 
                ["gegg", "/assets/sounds/Weddell/gegg"], 
                ["gighphbh", "/assets/sounds/Weddell/gighphbh"], 
                ["guh", "/assets/sounds/Weddell/guh"], 
                ["guess", "/assets/sounds/Weddell/guess"], 
                ["l\'egg", "/assets/sounds/Weddell/l_egg"], 
                ["lligkk", "/assets/sounds/Weddell/lligkk"], 
                ["mibph", "/assets/sounds/Weddell/mibph"], 
                ["mnnnbpbbhbhpth", "/assets/sounds/Weddell/mnnnbpbbhbhpth"], 
                ["murph!", "/assets/sounds/Weddell/murph"], 
                ["Alien", "/assets/sounds/Weddell/Alien"], 
                ["Alien 2", "/assets/sounds/Weddell/Alien_2", "premium"], 
                ["Alien 3", "/assets/sounds/Weddell/Alien_3", "premium"], 
                ["Alien 4", "/assets/sounds/Weddell/Alien_4", "premium"], 
                ["Alien 5", "/assets/sounds/Weddell/Alien_5", "premium"], 
                ["Alien 6", "/assets/sounds/Weddell/Alien_6", "premium"], 
                ["AAAAA", "/assets/sounds/Weddell/AAAAA", "premium"], 
                ["AAAAAHHHHH", "/assets/sounds/Weddell/AAAAAHHHHH", "premium"], 
                ["AAAAGH", "/assets/sounds/Weddell/AAAAGH", "premium"], 
                ["AAAGHA", "/assets/sounds/Weddell/AAAGHA", "premium"], 
                ["AAAGHAAAA", "/assets/sounds/Weddell/AAAGHAAAA", "premium"], 
                ["AAGH", "/assets/sounds/Weddell/AAGH", "premium"], 
                ["AAGHHH", "/assets/sounds/Weddell/AAGHHH", "premium"], 
                ["AANNNNAAAGGHHHH", "/assets/sounds/Weddell/AANNNNAAAGGHHHH", "premium"], 
                ["BNNNGHPHH", "/assets/sounds/Weddell/BNNNGHPHH", "premium"], 
                ["BEHH", "/assets/sounds/Weddell/BEHH", "premium"], 
                ["BGGHHNNHHH", "/assets/sounds/Weddell/BGGHHNNHHH", "premium"], 
                ["BNNNGGHHPH", "/assets/sounds/Weddell/BNNNGGHHPH", "premium"], 
                ["BNNNGH", "/assets/sounds/Weddell/BNNNGH", "premium"], 
                ["Beh", "/assets/sounds/Weddell/Beh", "premium"], 
                ["Bleaahh", "/assets/sounds/Weddell/Bleaahh", "premium"], 
                ["Bleeaaaahhh", "/assets/sounds/Weddell/Bleeaaaahhh", "premium"], 
                ["Fair", "/assets/sounds/Weddell/Fair", "premium"], 
                ["GAAAAGHAA", "/assets/sounds/Weddell/GAAAAGHAA", "premium"], 
                ["GAGHAAGAHH", "/assets/sounds/Weddell/GAGHAAGAHH", "premium"], 
                ["GEELOLIGLET", "/assets/sounds/Weddell/GEELOLIGLET", "premium"], 
                ["HAAAAAAAA", "/assets/sounds/Weddell/HAAAAAAAA", "premium"], 
                ["Hello", "/assets/sounds/Weddell/Hello", "premium"], 
                ["MMGGGNN", "/assets/sounds/Weddell/MMGGGNN", "premium"], 
                ["MMMGHHH", "/assets/sounds/Weddell/MMMGHHH", "premium"], 
                ["Move", "/assets/sounds/Weddell/Move", "premium"], 
                ["Rats", "/assets/sounds/Weddell/Rats", "premium"], 
                ["Trumpet", "/assets/sounds/Weddell/Trumpet", "premium"], 
                ["UEAAGHH", "/assets/sounds/Weddell/UEAAGHH", "premium"]
            ]
        }))
    }

    render(){
        return(
            <Soundboard navigation={this.props.navigation}/>
        )
    }
}

export default WeddellScreen