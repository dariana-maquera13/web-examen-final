
const songs = [
    { title: 'Mi Vida Entera', artist: 'MORAT', src: 'audio/y2meta.com - Mi Vida Entera (256 kbps).mp3' },
    { title: 'Mi Persona Favorita', artist: 'Alejandro Sanz & Camila Cabello', src: 'y2meta.com - Alejandro Sanz & Camila Cabello - Mi Persona Favorita (Audio) (256 kbps).mp3' },
    { title: 'Te Quiero Mucho', artist: 'Rio Roma', src: 'audio/y2meta.com - Río Roma - Te Quiero Mucho (Cover Audio) (320 kbps).mp3' },
    
];

const playlistSection = document.getElementById('playlist');


songs.forEach(song => {
    const songElement = document.createElement('div');
    songElement.className = 'song';
    songElement.innerHTML = `
        <h2>${song.title}</h2>
        <p>${song.artist}</p>
    `;
    songElement.addEventListener('click', () => {
        const audioPlayer = document.querySelector('audio');
        audioPlayer.src = song.src;
        audioPlayer.play();
    });
    playlistSection.appendChild(songElement);
});
