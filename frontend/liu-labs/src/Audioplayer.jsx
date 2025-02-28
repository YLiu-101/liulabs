import React, { useState, useEffect, useRef } from 'react';
import { 
  FaPlay, FaPause, FaVolumeUp, FaVolumeMute, 
  FaForward, FaBackward, FaTimes 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/AudioPlayer.css';

const AudioPlayer = ({ episode, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [prevVolume, setPrevVolume] = useState(0.7);
  
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };
    
    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };
    
    // Events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    
    // Start playing when component mounts
    if (audio) {
      audio.volume = volume;
      
      // Auto play with a small delay for better UX
      setTimeout(() => {
        audio.play().then(() => {
          setIsPlaying(true);
          animationRef.current = requestAnimationFrame(whilePlaying);
        }).catch(error => {
          console.error("Audio playback failed:", error);
        });
      }, 300);
    }
    
    return () => {
      if (audio) {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
      }
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [episode]);

  const whilePlaying = () => {
    if (audioRef.current) {
      progressBarRef.current.value = audioRef.current.currentTime;
      setCurrentTime(audioRef.current.currentTime);
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    
    if (!prevValue) {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changeRange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    setCurrentTime(progressBarRef.current.value);
  };

  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = prevVolume;
      setVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      audioRef.current.volume = 0;
      setVolume(0);
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    } else if (newVolume === 0 && !isMuted) {
      setIsMuted(true);
    }
  };

  const changePlaybackRate = () => {
    let newRate = playbackRate + 0.25;
    if (newRate > 2) newRate = 0.75;
    
    setPlaybackRate(newRate);
    audioRef.current.playbackRate = newRate;
  };

  return (
    <motion.div 
      className="audio-player"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="player-header">
        <div className="now-playing">
          <div className="episode-thumbnail-small">
            <img src={episode.thumbnail} alt={episode.title} />
          </div>
          <div className="episode-info">
            <h4>{episode.title}</h4>
            <p>with {episode.guest}</p>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      
      <div className="player-progress">
        <span className="time-display">{calculateTime(currentTime)}</span>
        <input
          type="range"
          className="progress-bar"
          ref={progressBarRef}
          defaultValue="0"
          onChange={changeRange}
          min="0"
          max={duration}
          step="0.01"
        />
        <span className="time-display">{calculateTime(duration)}</span>
      </div>
      
      <div className="player-controls">
        <button 
          className="playback-rate" 
          onClick={changePlaybackRate}
        >
          {playbackRate}x
        </button>
        
        <button className="control-button" onClick={skipBackward}>
          <FaBackward />
        </button>
        
        <button className="play-pause-button" onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        
        <button className="control-button" onClick={skipForward}>
          <FaForward />
        </button>
        
        <div 
          className="volume-container"
          onMouseEnter={() => setShowVolumeSlider(true)}
          onMouseLeave={() => setShowVolumeSlider(false)}
        >
          <button className="control-button" onClick={toggleMute}>
            {isMuted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          
          {showVolumeSlider && (
            <div className="volume-slider-container">
              <input
                type="range"
                className="volume-slider"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          )}
        </div>
      </div>
      
      <audio 
        ref={audioRef} 
        src={episode.audioUrl}
        preload="metadata"
        onEnded={() => {
          setIsPlaying(false);
          cancelAnimationFrame(animationRef.current);
        }}
      />
    </motion.div>
  );
};