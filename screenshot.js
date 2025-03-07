// this script loads the modules needed and then takes a screenshot of the entire site. I made this to capture screenshots purely in the Chrome Developer Tools console, with nothing else needed.
(function () {
    const src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = () => {
      html2canvas(document.body, {
        onrendered: (canvas) => {
          const imgageData = canvas.toDataURL('image/png');
          const el = document.createElement('a');
          el.setAttribute('href', imgageData.replace(/^data:image\/png/, 'data:application/octet-stream'));
          el.setAttribute('download', 'screen.png');
          el.style.display = 'none';
          document.body.appendChild(el);
          el.click();
          document.body.removeChild(el);
        }
      });
    };
    document.body.appendChild(script);
  })()
