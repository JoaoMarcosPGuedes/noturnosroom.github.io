function changePlaylist(playlistId) {
  var playlistEmbed = document.getElementById('playlist-embed');
  var mainElement = document.querySelector('.main-music-content');
  
  switch (playlistId) {
      case 'playlist1':
          playlistEmbed.innerHTML = '<iframe src="https://open.spotify.com/embed/playlist/6we2ESZ4TTVf7w9mX3odHw?utm_source=generator" backgroundColor= width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
          mainElement.style.backgroundImage = "url('https://wallpapercave.com/wp/wp2493300.jpg')";
          break;
      case 'playlist2':
          playlistEmbed.innerHTML = '<iframe src="https://open.spotify.com/embed/playlist/1LKwb34yBbY3rSyiCdGyRZ?utm_source=generator" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
          break;
      case 'playlist3':
          playlistEmbed.innerHTML = '<iframe src="https://open.spotify.com/embed/playlist/2U7NCLdXwGTIUe1U9P0X0b?utm_source=generator" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
          break;
      case 'playlist4':
          playlistEmbed.innerHTML = '<iframe src="https://open.spotify.com/embed/playlist/4Dm56pX1OpMnBTorhBTeHU?utm_source=generator" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
          break;
      case 'playlist5':
          playlistEmbed.innerHTML = '<iframe src="https://open.spotify.com/embed/playlist/6cc0A3W99K8vbVCSud4ilJ?utm_source=generator" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
          break;
      default:
          playlistEmbed.innerHTML = 'Playlist não encontrada.';
          break;
  }
  if (playlistId !== 'playlist1') {
    mainElement.style.backgroundImage = "none";
  }
}


  /////////////////////////////////////////////////////////
const elemento = document.getElementById('elemento');
elemento.addEventListener('mouseover', function(event) {

  elemento.classList.add('hovered');
});
elemento.addEventListener('mouseout', function(event) {
elemento.classList.remove('hovered');
});
