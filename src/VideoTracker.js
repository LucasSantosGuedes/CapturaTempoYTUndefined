import React, { Component } from 'react';
import YouTube from 'react-youtube';

class VideoTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: null,
      currentTime: 0,
    };
  }

  onReady = (event) => {
    // Armazena a referência para o player do YouTube
    this.setState({ player: event.target });

    // Inicia um intervalo para rastrear o tempo assistido
    this.interval = setInterval(this.trackTime, 1000);
  };

  trackTime = () => {
    // Obtém o tempo assistido atual do vídeo
    const currentTime = this.state.player.getCurrentTime();

    // Atualiza o estado com o tempo assistido
    this.setState({ currentTime });
  };

  render() {
    const { videoId } = this.props;

    return (
      <div>
        <h2>Rastreamento de Tempo de Vídeo</h2>
        <YouTube videoId={videoId} onReady={this.onReady} />
        <p>Tempo Assistido: {this.state.currentTime.toFixed(2)} segundos</p>
      </div>
    );
  }
}

export default VideoTracker;
