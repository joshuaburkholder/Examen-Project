import React from 'react';

const BandDetail = ({band}) => {
	if (!band) {
		return (<div><h3>No image available</h3></div>)
	}

	const bandId = 
	const url = 'https://www.google.com/#q=${bandId}';
}

return (
    <div className>
      <div className>
        <iframe src={url}></iframe>
      </div>

      <div className="details">
        <div>{band.snippet.title}</div>
        <div>{band.snippet.description}</div>
      </div>
    </div>

	)

	export default BandDetail