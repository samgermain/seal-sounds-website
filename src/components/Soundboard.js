import React, {useEffect} from 'react';

const SoundButton = ({name, file}) => {

    let audio = undefined;

    useEffect(() => {
        audio = new Audio(file);
    }, []);

    const playAudio = () => {
        audio.play();
    }

    return (
        <button className="btn btn-primary rounded sound-button" onClick={playAudio}>
            {name}
        </button>
    );
};

const SoundBoard = ({sounds}) => (
        <div
            className='soundboard'
        >
            {sounds.map (({name, file}) => (
                <SoundButton key={name} name={name} file={file}>
                    name
                </SoundButton>
            ))}
        </div>
);

export default SoundBoard;