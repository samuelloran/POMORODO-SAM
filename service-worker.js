self.addEventListener("install", event => {
  console.log("Service Worker instalado.");
});

self.addEventListener("fetch", function(event) {
  // Pode ser estendido para cache futuramente
});
