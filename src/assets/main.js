const playlistId = 'PL6dZxYQu7pm6I9SjNedP0M2Mc3PV9A3K2';
const API = `https://youtube138.p.rapidapi.com/playlist/videos/?id=${playlistId}&hl=en&gl=US`

const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0eccaf9449msh0ca310b3a8f5705p123416jsn37e678257f1e',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    // console.log(videos.contents.map);
    let view = `
    ${videos.contents.map(video => `
      <div class="group relative">
        <a href=https://www.youtube.com/watch?v=Xo9Xgq55fxY&list=${playlistId} target="_blank">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.video.thumbnails[3].url}" alt="${video.video.title}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.video.title}
            </h3>
          </div>
        </a>
      </div>
    `).slice(0,4).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    const errorMsg = "Lo sentimos. Los videos no están disponibles."
    content.innerHTML = `<p
    class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
    ${errorMsg}</p>`;
  };
})();