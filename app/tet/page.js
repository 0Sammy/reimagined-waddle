
"use client"
import React from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const DownloadDivAsImage = () => {
  const handleDownload = () => {
    const element = document.getElementById('divToDownload');
    html2canvas(element).then((canvas) => {
      // Save the canvas as an image file
      canvas.toBlob(function (blob) {
        saveAs(blob, 'div_as_image.png');
      });
    });
  };

  return (
    <div>
      <h2>Download a Div as an Image</h2>
      <div id="divToDownload" style={{ width: '300px', height: '200px', background: 'red' }}>
        {/* Your content goes here */}
      </div>
      <button onClick={handleDownload}>Download Image</button>
    </div>
  );
};

export default DownloadDivAsImage;
