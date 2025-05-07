export const movies = [
    {
      id: 1,
      title: "Дюна: Частина друга",
      poster: "/posters/dune2.jpg",
      description: "Продовження епічної саги про Пола Атріда.",
      genre: "Фантастика",
      duration: "166 хв",
      format: "IMAX 3D",
      rating: "12+",
      sessions: [
        { time: "10:00", hall: "Зал 1", price: 200 },
        { time: "14:30", hall: "Зал 2", price: 180 },
        { time: "19:00", hall: "Зал 1", price: 220 }
      ]
    },
    {
      id: 2,
      title: "Месники: Завершення",
      poster: "/posters/avengers_endgame.jpg",
      description: "Фінальна битва Месників проти Таноса.",
      genre: "Екшн",
      duration: "181 хв",
      format: "2D",
      rating: "12+",
      sessions: [
        { time: "11:00", hall: "Зал 3", price: 170 },
        { time: "15:30", hall: "Зал 4", price: 190 },
        { time: "20:00", hall: "Зал 3", price: 200 }
      ]
    },
    {
      id: 3,
      title: "Титанік",
      poster: "/posters/titanic.jpg",
      description: "Епічна історія кохання на борту легендарного корабля.",
      genre: "Драма",
      duration: "195 хв",
      format: "3D",
      rating: "12+",
      sessions: [
        { time: "09:30", hall: "Зал 5", price: 160 },
        { time: "14:00", hall: "Зал 6", price: 180 },
        { time: "18:30", hall: "Зал 5", price: 200 }
      ]
    },
    {
      id: 4,
      title: "Шрек 4: Назавжди",
      poster: "/posters/shrek4.jpg",
      description: "Останні пригоди Шрека та його друзів.",
      genre: "Анімація",
      duration: "93 хв",
      format: "2D",
      rating: "0+",
      sessions: [
        { time: "10:30", hall: "Зал 7", price: 150 },
        { time: "13:00", hall: "Зал 8", price: 150 },
        { time: "16:00", hall: "Зал 7", price: 160 }
      ]
    },
    {
      id: 5,
      title: "Темний лицар",
      poster: "/posters/dark_knight.jpg",
      description: "Бетмен бореться проти Джокера у Готемі.",
      genre: "Екшн",
      duration: "152 хв",
      format: "2D",
      rating: "16+",
      sessions: [
        { time: "12:00", hall: "Зал 1", price: 180 },
        { time: "16:30", hall: "Зал 2", price: 190 },
        { time: "21:00", hall: "Зал 1", price: 210 }
      ]
    },
    {
      id: 6,
      title: "Пірати Карибського моря: Прокляття Чорної Перлини",
      poster: "/posters/pirates1.jpg",
      description: "Пригоди Джека Горобця у пошуках проклятого скарбу.",
      genre: "Пригоди",
      duration: "143 хв",
      format: "2D",
      rating: "12+",
      sessions: [
        { time: "11:30", hall: "Зал 3", price: 170 },
        { time: "15:00", hall: "Зал 4", price: 180 },
        { time: "19:30", hall: "Зал 3", price: 200 }
      ]
    },
    {
      id: 7,
      title: "Король Лев",
      poster: "/posters/lion_king.jpg",
      description: "Подорож Сімби до трону Короля Левів.",
      genre: "Анімація",
      duration: "118 хв",
      format: "3D",
      rating: "0+",
      sessions: [
        { time: "09:00", hall: "Зал 5", price: 140 },
        { time: "12:30", hall: "Зал 6", price: 150 },
        { time: "16:00", hall: "Зал 5", price: 160 }
      ]
    },
    {
      id: 8,
      title: "Інтерстеллар",
      poster: "/posters/interstellar.jpg",
      description: "Космічна подорож для порятунку людства.",
      genre: "Фантастика",
      duration: "169 хв",
      format: "IMAX",
      rating: "12+",
      sessions: [
        { time: "10:00", hall: "Зал 7", price: 220 },
        { time: "14:30", hall: "Зал 8", price: 230 },
        { time: "19:00", hall: "Зал 7", price: 240 }
      ]
    },
    {
      id: 9,
      title: "Гаррі Поттер і філософський камінь",
      poster: "/posters/harry_potter1.jpg",
      description: "Перша пригода Гаррі у світі магії.",
      genre: "Фентезі",
      duration: "152 хв",
      format: "2D",
      rating: "12+",
      sessions: [
        { time: "11:00", hall: "Зал 1", price: 170 },
        { time: "15:30", hall: "Зал 2", price: 180 },
        { time: "20:00", hall: "Зал 1", price: 200 }
      ]
    },
    {
      id: 10,
      title: "Матриця",
      poster: "/posters/matrix.jpg",
      description: "Нео дізнається правду про реальність.",
      genre: "Фантастика",
      duration: "136 хв",
      format: "2D",
      rating: "16+",
      sessions: [
        { time: "12:30", hall: "Зал 3", price: 180 },
        { time: "17:00", hall: "Зал 4", price: 190 },
        { time: "21:30", hall: "Зал 3", price: 210 }
      ]
    },
    {
      id: 11,
      title: "Володар перснів: Братство персня",
      poster: "/posters/lotr1.jpg",
      description: "Початок подорожі Фродо з перснем.",
      genre: "Фентезі",
      duration: "178 хв",
      format: "2D",
      rating: "12+",
      sessions: [
        { time: "10:30", hall: "Зал 5", price: 170 },
        { time: "14:00", hall: "Зал 6", price: 180 },
        { time: "18:30", hall: "Зал 5", price: 200 }
      ]
    },
    {
      id: 12,
      title: "Віднесені привидами",
      poster: "/posters/spirited_away.jpg",
      description: "Чіхіро потрапляє у світ духів.",
      genre: "Аніме",
      duration: "125 хв",
      format: "2D",
      rating: "0+",
      sessions: [
        { time: "09:30", hall: "Зал 7", price: 150 },
        { time: "13:00", hall: "Зал 8", price: 160 },
        { time: "16:30", hall: "Зал 7", price: 170 }
      ]
    },
    {
      id: 13,
      title: "Зоряні війни: Нова надія",
      poster: "/posters/star_wars4.jpg",
      description: "Початок саги про Люка Скайвокера.",
      genre: "Фантастика",
      duration: "121 хв",
      format: "2D",
      rating: "12+",
      sessions: [
        { time: "11:30", hall: "Зал 1", price: 170 },
        { time: "15:00", hall: "Зал 2", price: 180 },
        { time: "19:30", hall: "Зал 1", price: 200 }
      ]
    },
    {
      id: 14,
      title: "Коко",
      poster: "/posters/coco.jpg",
      description: "Мігель відкриває таємниці світу мертвих.",
      genre: "Анімація",
      duration: "105 хв",
      format: "3D",
      rating: "0+",
      sessions: [
        { time: "10:00", hall: "Зал 3", price: 140 },
        { time: "13:30", hall: "Зал 4", price: 150 },
        { time: "17:00", hall: "Зал 3", price: 160 }
      ]
    },
    {
      id: 15,
      title: "Форсаж 9",
      poster: "/posters/fast9.jpg",
      description: "Домінік Торетто стикається з новим ворогом.",
      genre: "Екшн",
      duration: "145 хв",
      format: "IMAX",
      rating: "16+",
      sessions: [
        { time: "12:00", hall: "Зал 5", price: 220 },
        { time: "16:30", hall: "Зал 6", price: 230 },
        { time: "21:00", hall: "Зал 5", price: 240 }
      ]
    },
    {
      id: 16,
      title: "Тихе місце",
      poster: "/posters/a_quiet_place.jpg",
      description: "Сім’я виживає в світі, де не можна шуміти.",
      genre: "Трилер",
      duration: "90 хв",
      format: "2D",
      rating: "16+",
      sessions: [
        { time: "11:00", hall: "Зал 7", price: 170 },
        { time: "15:30", hall: "Зал 8", price: 180 },
        { time: "20:00", hall: "Зал 7", price: 200 }
      ]
    },
    {
      id: 17,
      title: "Круелла",
      poster: "/posters/cruella.jpg",
      description: "Історія становлення Круелли Де Віль.",
      genre: "Комедія",
      duration: "134 хв",
      format: "2D",
      rating: "12+",
      sessions: [
        { time: "09:30", hall: "Зал 1", price: 160 },
        { time: "14:00", hall: "Зал 2", price: 170 },
        { time: "18:30", hall: "Зал 1", price: 190 }
      ]
    },
    {
      id: 18,
      title: "Загін самогубців: Місія навиліт",
      poster: "/posters/suicide_squad2.jpg",
      description: "Нова місія для найнебезпечніших злочинців.",
      genre: "Екшн",
      duration: "132 хв",
      format: "2D",
      rating: "18+",
      sessions: [
        { time: "12:30", hall: "Зал 3", price: 180 },
        { time: "17:00", hall: "Зал 4", price: 190 },
        { time: "21:30", hall: "Зал 3", price: 210 }
      ]
    },
    {
      id: 19,
      title: "Моана",
      poster: "/posters/moana.jpg",
      description: "Подорож Моани для порятунку острова.",
      genre: "Анімація",
      duration: "107 хв",
      format: "3D",
      rating: "0+",
      sessions: [
        { time: "10:00", hall: "Зал 5", price: 140 },
        { time: "13:30", hall: "Зал 6", price: 150 },
        { time: "17:00", hall: "Зал 5", price: 160 }
      ]
    },
    {
      id: 20,
      title: "Початок",
      poster: "/posters/inception.jpg",
      description: "Кобб краде секрети через сни.",
      genre: "Фантастика",
      duration: "148 хв",
      format: "IMAX",
      rating: "16+",
      sessions: [
        { time: "11:30", hall: "Зал 7", price: 220 },
        { time: "16:00", hall: "Зал 8", price: 230 },
        { time: "20:30", hall: "Зал 7", price: 240 }
      ]
    },
    {
      id: 21,
      title: "Чорна вдова",
      poster: "/posters/black_widow.jpg",
      description: "Наташа Романова розкриває своє минуле.",
      genre: "Екшн",
      duration: "134 хв",
      format: "2D",
      rating: "12+",
      sessions: [
        { time: "10:30", hall: "Зал 1", price: 170 },
        { time: "15:00", hall: "Зал 2", price: 180 },
        { time: "19:30", hall: "Зал 1", price: 200 }
      ]
    },
    {
      id: 22,
      title: "Ла-Ла Ленд",
      poster: "/posters/lalaland.jpg",
      description: "Мюзикл про мрії та кохання.",
      genre: "Мюзикл",
      duration: "128 хв",
      format: "2D",
      rating: "12+",
      sessions: [
        { time: "09:00", hall: "Зал 3", price: 160 },
        { time: "13:30", hall: "Зал 4", price: 170 },
        { time: "18:00", hall: "Зал 3", price: 190 }
      ]
    },
    {
      id: 23,
      title: "Втеча з Шоушенка",
      poster: "/posters/shawshank.jpg",
      description: "Енді Дюфрейн планує втечу з в’язниці.",
      genre: "Драма",
      duration: "142 хв",
      format: "2D",
      rating: "16+",
      sessions: [
        { time: "12:00", hall: "Зал 5", price: 170 },
        { time: "16:30", hall: "Зал 6", price: 180 },
        { time: "21:00", hall: "Зал 5", price: 200 }
      ]
    },
    {
      id: 24,
      title: "Крижане серце",
      poster: "/posters/frozen.jpg",
      description: "Анна рятує королівство від вічної зими.",
      genre: "Анімація",
      duration: "102 хв",
      format: "3D",
      rating: "0+",
      sessions: [
        { time: "10:00", hall: "Зал 7", price: 140 },
        { time: "13:30", hall: "Зал 8", price: 150 },
        { time: "17:00", hall: "Зал 7", price: 160 }
      ]
    },
    {
      id: 25,
      title: "Залізна людина",
      poster: "/posters/iron_man.jpg",
      description: "Тоні Старк стає Залізною людиною.",
      genre: "Екшн",
      duration: "126 хв",
      format: "2D",
      rating: "12+",
      sessions: [
        { time: "11:30", hall: "Зал 1", price: 170 },
        { time: "16:00", hall: "Зал 2", price: 180 },
        { time: "20:30", hall: "Зал 1", price: 200 }
      ]
    },
    {
      id: 26,
      title: "Гладіатор",
      poster: "/posters/gladiator.jpg",
      description: "Максимус мститься за свою сім’ю.",
      genre: "Драма",
      duration: "155 хв",
      format: "2D",
      rating: "16+",
      sessions: [
        { time: "12:00", hall: "Зал 3", price: 180 },
        { time: "16:30", hall: "Зал 4", price: 190 },
        { time: "21:00", hall: "Зал 3", price: 210 }
      ]
    },
    {
      id: 27,
      title: "Ваяна",
      poster: "/posters/vaiana.jpg",
      description: "Ваяна шукає Мауї, щоб врятувати острів.",
      genre: "Анімація",
      duration: "107 хв",
      format: "3D",
      rating: "0+",
      sessions: [
        { time: "09:30", hall: "Зал 5", price: 140 },
        { time: "13:00", hall: "Зал 6", price: 150 },
        { time: "16:30", hall: "Зал 5", price: 160 }
      ]
    },
    {
      id: 28,
      title: "Тенет",
      poster: "/posters/tenet.jpg",
      description: "Місія зі зворотним часом для порятунку світу.",
      genre: "Фантастика",
      duration: "150 хв",
      format: "IMAX",
      rating: "16+",
      sessions: [
        { time: "11:00", hall: "Зал 7", price: 220 },
        { time: "15:30", hall: "Зал 8", price: 230 },
        { time: "20:00", hall: "Зал 7", price: 240 }
      ]
    },
    {
      id: 29,
      title: "Список Шиндлера",
      poster: "/posters/schindlers_list.jpg",
      description: "Оскар Шиндлер рятує життя під час війни.",
      genre: "Драма",
      duration: "195 хв",
      format: "2D",
      rating: "16+",
      sessions: [
        { time: "12:30", hall: "Зал 1", price: 170 },
        { time: "17:00", hall: "Зал 2", price: 180 },
        { time: "21:30", hall: "Зал 1", price: 200 }
      ]
    },
    {
      id: 30,
      title: "Мій сусід Тоторо",
      poster: "/posters/totoro.jpg",
      description: "Сестри зустрічають магічного Тоторо.",
      genre: "Аніме",
      duration: "86 хв",
      format: "2D",
      rating: "0+",
      sessions: [
        { time: "10:00", hall: "Зал 3", price: 150 },
        { time: "13:30", hall: "Зал 4", price: 160 },
        { time: "17:00", hall: "Зал 3", price: 170 }
      ]
    }
  ];