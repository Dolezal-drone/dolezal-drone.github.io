// Název účtu z adresy <název>.goatcounter.com. Prázdná hodnota měření vypíná.
(() => {
  const account = 'jiridolik';
  if (!account || location.origin !== 'https://dolezal-drone.github.io') return;

  const path = location.pathname === '/index.html' ? '/' : location.pathname;
  window.goatcounter = { path };

  const tracker = document.createElement('script');
  tracker.async = true;
  tracker.src = 'https://gc.zgo.at/count.js';
  tracker.dataset.goatcounter = `https://${account}.goatcounter.com/count`;
  document.head.append(tracker);

  document.addEventListener('click', (event) => {
    const contact = event.target.closest?.('a[href^="mailto:"], a[href^="tel:"]');
    if (!contact || !window.goatcounter.count) return;

    const channel = contact.protocol === 'mailto:' ? 'email' : 'telefon';
    window.goatcounter.count({
      event: true,
      path: `kontakt-${channel}:${path}`,
      title: `Kliknutí na ${channel} · ${document.title}`,
    });
  });
})();
