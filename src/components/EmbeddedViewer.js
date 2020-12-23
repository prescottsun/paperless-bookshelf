import React from "react";

const EmbeddedViewer = ({ googleId }) => {
	const viewerData = `<!DOCTYPE html "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <title>Google Books Embedded Viewer API Example</title>
    <script type="text/javascript" src="https://www.google.com/books/jsapi.js"></script>
    <script type="text/javascript">
      google.books.load();

      function alertNotFound() {
        alert("Preview Unavailable");
      }

      function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        viewer.load('${googleId}', alertNotFound);
      }

      google.books.setOnLoadCallback(initialize);
    </script>
  </head>
  <body>
    <div id="viewerCanvas" style="width: 599px; height: 700px"></div>
  </body>
</html>`;
	return (
		// 	<Typography>Embedded Viewer</Typography>
		<iframe
			style={{
				position: "absolute",
				top: "50%",
				right: "50%",
				transform: "translate(50%,-50%)",
			}}
			srcDoc={viewerData}
			sandbox="allow-same-origin allow-scripts allow-modals"
			// referrerPolicy="origin-when-cross-origin"
			width="600px"
			height="700px"
			title="Book Preview"
		/>
	);
};

export default EmbeddedViewer;
