import React from 'react';

const GiphyEmbed = () => {
  const giphyEmbedCode = `
  <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/4H3Ii5eLChYul9p7NL" width="40%" height="40%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/stardust-stardustae-classic-computers-4H3Ii5eLChYul9p7NL">via GIPHY</a></p>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: giphyEmbedCode }} />
  );
};

export default GiphyEmbed;
