(async function () {
  const SCRIPT_URL = 'https://script.friendtofoes.workers.dev/';
  try {
    const { href: url } = window.location;
    const screenDimensions = `${window.screen.width} x ${window.screen.height}`;
    const { referrer } = document;
    const { userAgent } = navigator;
    await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        URL: url,
        'Screen Dimensions': screenDimensions,
        Referrer: referrer,
        'User Agent': userAgent,
      }),
    });
  } catch (error) {
    console.error(error);
  }
})();
