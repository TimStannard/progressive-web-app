const staticEmporiumClothes = "emporium-clothes-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/adidas.jpg",
  "/images/coke.jpg",
  "/images/harley.jpg",
  "/images/harley2.jpg",
  "/images/nike.jpg",
  "/images/polo.jpg",
  "/images/ralph.jpg",
  "/images/rl.jpg",
  "/images/wolf.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticEmporiumClothes).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})