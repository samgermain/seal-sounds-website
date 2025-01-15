import React, {useEffect, useRef} from 'react';

const SoundButton = ({name, file}) => {

    let audio = useRef(null);;

    useEffect(() => {
        audio.current = new Audio(file);
    }, []);

    const playAudio = () => {
        audio.current.play();
    }

    return (
        <button className="btn btn-primary rounded sound-button" onClick={playAudio}>
            {name.replace(/_/g, " ")}
        </button>
    );
};

const SoundBoard = ({sounds}) => (
        <div
            className='soundboard'
        >
            {sounds.map (({name, file}) => (
                <SoundButton key={name} name={name} file={file} />
            ))}
        </div>
);

export default SoundBoard;