const mediaData = [
  {
    title: "Аватар",
    year: "2022",
    genre: "Фантастика",
    country: "Американские",
    category: "Фильм",
    image: "Аватар_Путь_воды.jpg",
    link: "https://kz.kinogo.biz/53104-avatar-2-2022.html"
  },
  {
    title: "Наруто",
    year: "2002",
    genre: "Экшен",
    country: "Японские",
    category: "Аниме",
    image: "Naruto.jpg",
    link: "https://jut.su/naruuto/season-1/"
  },
  {
    title: "Война",
    year: "2020",
    genre: "военный",
    country: "Российские",
    category: "Фильм",
    image: "Война.jpg",
    link: "https://kz.kinogo.biz/34944-vojna.html"
  },
  {
    title: "Мой сосед Тоторо",
    year: "1988",
    genre: "Драма",
    country: "Японские",
    category: "Аниме",
    image: "Totoro.jpg",
    link: "https://kz.kinogo.biz/11668-moj-sosed-totoro.html"
  },
  {
    title: "Бизнес по-казахски в Африке",
    year: "2022",
    genre: "Комедия",
    country: "Казахстанские",
    category: "Фильм",
    image: "Бизнес.webp",
    link: "https://kz.kinogo.biz/55967-biznes-po-kazahski-v-indii.html"
  },
  {
    title: "Пацаны",
    year: "2019",
    genre: "Зарубежные сериал",
    country: "Американские",
    category: "Сериалы",
    image: "Пацаны.jpg",
    link: "https://kz.kinogo.biz/9957-pacany-1.html"
  },
  {
    title: "Гравити Фолз",
    year: "2012",
    genre: "Мультсериалы",
    country:"Американсие",
    category: "Мультсериалы",
    image:"Гравити Фолз.jpg",
    link: "https://kz.kinogo.biz/11507-graviti-folz.html"
  },
  {
    title: "Алиса в Пограничье",
    year: "2020",
    genre: "Зарубежные сериалы",
    country:"Японские",
    category: "Дорамы",
    image:"Алиса в пограничье.webp",
    link: "https://kz.kinogo.biz/38021-vasha-chest.html"
  },
  {
    title: "Тетрадь смерти",
    year: "2004",
    genre: "детектив,драма,трагедия,психология",
    country:"Японские",
    category: "Манга",
    image:"Тетрадь смерти.webp",
    link: "https://t.readmanga.io/tetrad_smerti__A5327"
  },
  {
    title: "Интерстеллер",
    year: "2014",
    genre: "Приключение,Фантастика,Драма",
    country:"Американские,Великобритания",
    category:"Фильм",
    image:"Интерстеллер.jpg",
    link:"https://kz.kinogo.biz/17487-interstellar.html"
  },
  {
    title: "Поднятие уровня в одиночку",
    year: "2018",
    genre: "Экшен,фантазии,портал",
    country:"Корейские",
    category: "Манга",
    image:"Поднятия уровня.jpg",
    link: "https://mangalib.me/ru/manga/7580--i-alone-level-up"
  },
  {
    title: "Первый: Герои старшей школы дорама (2025)",
    year: "2025",
    genre: "Боевик,Драма",
    country:"Корейские",
    category: "Дорамы",
    image:"Первый.jpg",
    link: "https://doramy.club/47718-pervyj-geroi-starshej-shkoly.html"
  },
  {
    title: "Учебная группа",
    year: "2025",
    genre: "Боевик,Комедия,Триллер",
    country:"Корейские",
    category: "Дорамы",
    image:"Учебная группа.jpg",
    link: "https://doramy.club/46404-uchebnaya-gruppa.html"
  },
  {
    title: "Хороший мальчик",
    year: "2025",
    genre: "Детектив,Комедия,Спорт",
    country:"Корейские",
    category: "Дорамы",
    image:"Хороший мальчик.jpg",
    link: "https://doramy.club/47728-xoroshij-malchik.html"
  },
  {
    title: "Шерлок Холмс (2009)",
    year: "2009",
    genre: "Боевик,Триллер,Приклчения",
    country:"Американские,Германия",
    category: "Фильм",
    image:"Шерлок.jpg",
    link: "https://kz.kinogo.biz/22325-sherlok-holms.html"
  },
   {
    title: "Хантер x Хантер",
    year: "2013",
    country:"Япония",
    category: "Аниме",
    image:"Хантер.webp",
    link: "https://jut.su/hunter-hunter/"
  },
  {
    title: "Томирис",
    year: "2019",
    genre: "Драма,Исторические",
    country:"Казахстанские",
    category: "Фильм",
    image:"Томирис.webp",
    link: "https://kz.kinogo.biz/37304-tomiris.html"
  },
  {
    title: "Зверополис",
    year: "2016",
    genre: "Комедия,Криминал",
    country:"Американские",
    category: "Мультфильмы",
    image:"Зверополис.webp",
    link: "https://kz.kinogo.biz/11005-zveropolis.html"
  },
  {
    title: "Қошқармен теке",
    year: "2019",
    genre: "Комедия",
    country:"Казахстанские",
    category: "Мультфильмы",
    image:"Қошқар мен теке.jpg",
    link: "https://www.youtube.com/watch?v=pGrzpCoJGGI"
  },
  {
    title: "Великолепный век",
    year: "2011",
    genre: "Сериалы,Турецкие сериалы",
    country:"Турецкие",
    category: "Сериалы",
    image:"Великолепный век.webp",
    link: "https://kz.kinogo.biz/9669-velikolepnyi-vek.html"
  },


  
];

let currentCategory = "home";

// Белгіленген фильтрлерді алу
function getCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el => el.value);
}

// Фильтрлеу және іздеу функциясы
function applyFilters() {
  const selectedYears = getCheckedValues("year");
  const selectedGenres = getCheckedValues("genre");
  const selectedCountries = getCheckedValues("country");
  const searchQuery = document.getElementById("searchInput")?.value?.toLowerCase() || "";

  const filtered = mediaData.filter(item => {
    const matchYear = selectedYears.length === 0 || selectedYears.includes(item.year);
    const matchGenre = selectedGenres.length === 0 || selectedGenres.includes(item.genre);
    const matchCountry = selectedCountries.length === 0 || selectedCountries.includes(item.country);
    const matchCategory = currentCategory === "home" || item.category === currentCategory;
    const matchSearch = item.title.toLowerCase().includes(searchQuery);
    return matchYear && matchGenre && matchCountry && matchCategory && matchSearch;
  });

  renderResults(filtered);
}

// Нәтижелерді көрсету
function renderResults(data) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>Ничего не найдено по фильтрам 😕</p>";
    return;
  }

  data.forEach(item => {
    const block = document.createElement("div");
    block.classList.add("media-item");
    block.innerHTML = `
      <a href="${item.link}" target="_blank">
        <img src="${item.image}" alt="${item.title}" width="200">
        <h4>${item.title}</h4>
        <p>${item.year} | ${item.genre} | ${item.country}</p>
      </a>
    `;
    container.appendChild(block);
  });
}

// Категорияны таңдау
function showContent(category) {
  if (category === "home") {
    location.reload();
    return;
  }

  const categoryMap = {
    film: "Фильм",
    anime: "Аниме",
    manga: "Манга",
    new: "Новинки",
    top: "ТОП фильмов",
    collections: "Подборки",
    franchises: "Франшизы",
    drama: "Дорамы",
    series: "Сериалы",
    cartoons: "Мультфильмы",
    animated_series: "Мультсериалы",
    history: "История",
    recommended: "Рекомендуемое"
  };

  currentCategory = categoryMap[category] || category;
  document.getElementById("content").innerHTML = "";
  applyFilters();
}

// Бетті жүктеген кезде іздеу өрісі жұмыс істеуі үшін
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }
});


//5565445
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");

  // Егер бұрын сақталған тақырып болса, соны жүктеу
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
});



//









