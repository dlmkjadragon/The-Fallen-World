const artsData = [
  {
    title: "Yun!",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749952613/IMG_4583_whfsg0.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749952613/IMG_4583_whfsg0.png",
    alt: "Yun",
    category: "Headshot",
    character: "Mono",
    date: "2021-07-10",
    owner: {
      name: "Dragonix Wolfi",
      link: "https://www.instagram.com/wilof_dr/"
    }
  },

  {
    title: "Midnight Wolgan!",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749952612/IMG_4585_oydwog.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749952612/IMG_4585_oydwog.png",
    alt: "Muddy",
    category: "Bustshot",
    character: "Midnight Moon",
    date: "2021-07-14",
    owner: {
      name: "Muddy Wolgan",
      link: "https://toyhou.se/MuddyWolgan"
    }
  },

  {
    title: "Birdy!",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749952612/IMG_4584_ca0pie.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749952612/IMG_4584_ca0pie.png",
    alt: "Bluuw",
    category: "Halfbody",
    character: "Bluuw",
    date: "2021-07-12",
    owner: {
      name: "Glitch Fellow",
      link: "https://toyhou.se/GlitchFellow101"
    }
  },
  
  
  {
    title: "Reisune in Spirit Shrine",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/100495178_uEZ_33169187.png?1747570890",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863530/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81122_20250518190753_hyz5q1.png",
    alt: "Reisune",
    category: "Bustshot",
    character: "Reisune Alexrina",
    date: "2025-05-18",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Naomi Kiyoshi",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/101147764_csk.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863520/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81110_20250531034354_wkq7vf.png", 
    alt: "Naomi",
    category: "Reference Sheet",
    character: "Naomi Kiyoshi",
    date: "2025-05-31",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Under The Crimson Sun",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99372442_CY2.jpg",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863508/IMG_3297_rikcwj.jpg", 
    alt: "Kai",
    category: "Bustshot",
    character: "Kai Alexrina",
    date: "2025-03-19",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Himura Arakaze",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99368940_qFA.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863509/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8157_20250112174804_ac8jlb.png", 
    alt: "Himura",
    category: "Reference Sheet",
    character: "Himura Arakaze",
    date: "2025-01-12",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Yellow in the Field",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863509/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8160_20250119224447_v98ind.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863509/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8160_20250119224447_v98ind.png", 
    alt: "Yellow",
    category: "Headshot",
    character: "Yellow Yvezero",
    date: "2025-01-20",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Annie's Return",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863509/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8152_20250104230820_osrwse.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863509/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8152_20250104230820_osrwse.png", 
    alt: "Aka",
    category: "Bustshot",
    character: "Aka (Annie Fehri)",
    date: "2025-01-04",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Happy To See You, Friend!",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863509/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8159_20250118154910_guhbsk.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863509/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8159_20250118154910_guhbsk.png", 
    alt: "Monika",
    category: "Headshot",
    character: "Monika",
    date: "2025-01-18",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Winter Art",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/100124771_E3M.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863509/IMG_4616_vvh5re.png", 
    alt: "Winter",
    category: "Traditionals",
    character: "Winter Justification",
    date: "2025-05-11",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Neisy Art",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863510/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8158_20250118003026_uluhli.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863510/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8158_20250118003026_uluhli.png", 
    alt: "Neisy",
    category: "Headshot",
    character: "Neisy Alexrina",
    date: "2025-01-18",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Lingxue Feng",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99368500_Sjn.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863510/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8164_20250206140454_kii6j3.png", 
    alt: "Lingxue",
    category: "Reference Sheet",
    character: "Lingxue Feng",
    date: "2025-02-06",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Silver Silverwood",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99345367_kuq.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863510/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8167_20250208144156_nj1ug0.png", 
    alt: "Silver",
    category: "Reference Sheet",
    character: "Silver Silverwood",
    date: "2025-02-08",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Sha Under The Moon",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863510/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8163_20250209034856_w8qlhg.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863510/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8163_20250209034856_w8qlhg.png", 
    alt: "Sha",
    category: "Headshot",
    character: "Sha",
    date: "2025-02-09",
    owner: {
      name: "Sha",
      link: "https://www.facebook.com/HanSha206"
    }
  },

  {
    title: "I Can Feel The Stars",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863512/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8161_20250120231824_nrmepp.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863512/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8161_20250120231824_nrmepp.png", 
    alt: "Aiko",
    category: "Bustshot",
    character: "Aiko Alexrina",
    date: "2025-01-20",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Winter Justification",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99374937_d71.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863512/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8176_20250225170554_xc5ief.png", 
    alt: "Winter",
    category: "Reference Sheet",
    character: "Winter Justification",
    date: "2025-02-25",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Mino",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99376265_tKC.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863516/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8190_20250301174635_qwbuns.png", 
    alt: "Mino",
    category: "Reference Sheet",
    character: "Mino",
    date: "2025-03-01",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Snow Winter",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99376453_nAr.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863516/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8192_20250307014759_ud0tfd.png", 
    alt: "Snow",
    category: "Reference Sheet",
    character: "Snow Winter",
    date: "2025-03-07",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "The General of Fallen",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99374775_brC.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863515/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8178_20250219042414_unvcc6.png", 
    alt: "M#n##w",
    category: "Bustshot",
    character: "M#n##w Justification",
    date: "2025-02-19",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Seraphina Moura",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99375682_1by.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863517/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81102_20250329081517_lca7hy.png", 
    alt: "Zerenith",
    category: "Reference Sheet",
    character: "Zerenith Justification",
    date: "2025-03-29",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Kai Yvezero",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99749784_hb7.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863521/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81113_20250504024041_nacibz.png", 
    alt: "Kai",
    category: "Reference Sheet",
    character: "Kai Yvezero - The Deadvoid Flame",
    date: "2025-05-04",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Lulu Marshmallow",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99366589_8Nt.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863521/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81108_20250414154613_tjl8rx.png", 
    alt: "Lulu",
    category: "Reference Sheet",
    character: "Lulu Marshmallow",
    date: "2025-04-14",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Kai Yvezero's First Debut",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863522/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81111_20250427153525_k1xfkc.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863522/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81111_20250427153525_k1xfkc.png", 
    alt: "Kai",
    category: "Bustshot",
    character: "Kai Yvezero - The Deadvoid Flame",
    date: "2025-04-27",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Xuan Yi",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/100002724_Zig.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863522/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81119_20250509022658_aqz0qw.png", 
    alt: "Xuan",
    category: "Reference Sheet",
    character: "Xuan Yi",
    date: "2025-05-09",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Aiko Art",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863524/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81120_20250512030031_souvup.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863524/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81120_20250512030031_souvup.png", 
    alt: "Aiko",
    category: "Bustshot",
    character: "Aiko Alexrina",
    date: "2025-05-12",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "R.Ice? That's My Technique",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863528/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81121_20250513031827_qwptkg.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863528/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81121_20250513031827_qwptkg.png", 
    alt: "Akai",
    category: "Headshot",
    character: "Akai Alexrina",
    date: "2025-05-13",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Minnow Yvezero",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/101035169_W8p.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749863531/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81124_20250529013328_jx1gkb.png", 
    alt: "Minnow",
    category: "Reference Sheet",
    character: "Minnow Yvezero",
    date: "2025-05-29",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Trick Marshmallow",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99366234_Run.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882992/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81209_20240815011310_c19d7p.png", 
    alt: "Trick",
    category: "Reference Sheet",
    character: "Trick Marshmallow",
    date: "2024-08-15",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "M#n##w Justification",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99374724_BDU.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882992/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81210_20240819230140_p9sgno.png", 
    alt: "M#n##w",
    category: "Reference Sheet",
    character: "M#n##w Justification",
    date: "2024-08-19",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Amber",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99375961_MoZ.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882992/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81207_20240811203009_z35h6l.png", 
    alt: "Amber",
    category: "Reference Sheet",
    character: "Amber",
    date: "2024-08-11",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Akai Alexrina",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99333546_iZD.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882992/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81204_20240806100932_e7vjkf.png", 
    alt: "Akai",
    category: "Reference Sheet",
    character: "Akai Alexrina",
    date: "2024-08-06",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Wendy Alexrina",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99372856_oyh.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882984/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81196_20240726205737_pnfuz7.png", 
    alt: "Wendy",
    category: "Reference Sheet",
    character: "Wendy Alexrina",
    date: "2024-07-26",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Bloody",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99372693_TU8.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882984/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81201_20240804024640_p890xx.png", 
    alt: "Bloody",
    category: "Reference Sheet",
    character: "Bloody",
    date: "2024-08-04",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Clouds with Sea",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882984/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81191_20240801104344_vrtzvs.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882984/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81191_20240801104344_vrtzvs.png", 
    alt: "Clouds",
    category: "Background",
    character: "None",
    date: "2024-08-01",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Daisy Gardenia",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99367003_JSh.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882984/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81194_20240723104723_a0ufio.png", 
    alt: "Daisy",
    category: "Reference Sheet",
    character: "Daisy Gardenia",
    date: "2024-07-23",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Aiko Alexrina",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99366775_lk0.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882984/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81199_20240829085210_lbswkr.png", 
    alt: "Aiko",
    category: "Reference Sheet",
    character: "Aiko Alexrina",
    date: "2024-08-29",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Reisune Alexrina",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99350971_PiG.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882983/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81179_20240503202112_rlr6hd.png", 
    alt: "Reisune",
    category: "Reference Sheet",
    character: "Reisune Alexrina",
    date: "2024-05-03",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Renki Alexrina",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99350454_im3.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882983/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81158_20240221172622_nhmmpo.png", 
    alt: "Renki",
    category: "Reference Sheet",
    character: "Renki Alexrina",
    date: "2024-02-21",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Kai Alexrina's First Debut",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882983/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81173_20240331202651_iav3yi.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882983/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81173_20240331202651_iav3yi.png", 
    alt: "Kai",
    category: "Headshot",
    character: "Kai Alexrina",
    date: "2024-04-01",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Kai Alexrina",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99372566_V6c.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882983/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81176_%C4%90%C3%A3_kh%C3%B4i_ph%E1%BB%A5c2_20240406172541_pozejc.png", 
    alt: "Kai",
    category: "Reference Sheet",
    character: "Kai Alexrina",
    date: "2024-04-06",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Ethan Yurei",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99369507_oIR.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882983/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%81131_20240221145352_myurng.png", 
    alt: "Ethan",
    category: "Reference Sheet",
    character: "Ethan Yurei",
    date: "2024-02-21",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Mitzy Allard",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99368698_BHf.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882982/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8134_20241125013047_mjmtvx.png", 
    alt: "Mitzy",
    category: "Reference Sheet",
    character: "Mitzy Allard",
    date: "2024-11-25",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Annie Fehri",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99365776_8M4.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882982/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8125_20241116005221_ivwets.png", 
    alt: "Annie",
    category: "Reference Sheet",
    character: "Annie Fehri",
    date: "2024-11-16",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Elmira Fehri",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99345239_G8W.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882983/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8150_20241229014037_hem9l8.png", 
    alt: "Elmira",
    category: "Reference Sheet",
    character: "Elmira Fehri",
    date: "2024-12-29",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Li Yi",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99367590_wqQ.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882982/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8130_20241117151227_c9am1j.png", 
    alt: "Li",
    category: "Reference Sheet",
    character: "Li Yi",
    date: "2024-11-17",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Aka",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99365856_9ll.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882982/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8125_20241115234240_tkhiyd.png", 
    alt: "Aka",
    category: "Reference Sheet",
    character: "Aka (Annie Fehri)",
    date: "2024-11-15",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Bao Yi",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99367771_ADK.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882982/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8147_20241217235453_emw0nx.png", 
    alt: "Bao",
    category: "Reference Sheet",
    character: "Bao Yi",
    date: "2024-12-17",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Yellow Yvezero",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99367112_Y3l.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882981/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8122_20241021225607_g2kslu.png", 
    alt: "Yellow",
    category: "Reference Sheet",
    character: "Yellow Yvezero",
    date: "2024-10-21",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Xian Wansui",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99375203_4fI.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882983/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8149_20241225183823_uim7aj.png", 
    alt: "Xianli",
    category: "Reference Sheet",
    character: "Xianli Justification",
    date: "2024-12-25",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Kai Huangli",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99367676_oMY.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882982/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8144_20241229021214_ds2o7d.png", 
    alt: "Kai",
    category: "Reference Sheet",
    character: "Kai Huangli",
    date: "2024-12-29",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Freezeira Art",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882981/IMG_0129_p8d4ir.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882981/IMG_0129_p8d4ir.png", 
    alt: "Freezeira",
    category: "Traditionals",
    character: "Freezeira Alexrina",
    date: "2024-09-15",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Saruga Yvezero",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99367420_Grs.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882981/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8119_20241020004521_wedtbd.png", 
    alt: "Saruga",
    category: "Reference Sheet",
    character: "Saruga Yvezero",
    date: "2024-10-20",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Penny Innermost",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99375359_9Xn.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882981/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8121_20241027140004_tkdbyq.png", 
    alt: "Penny",
    category: "Reference Sheet",
    character: "Penniless Justification",
    date: "2024-10-27",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Freezeira Art",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99369953_LMn.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882981/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8110_20240915010801_qtzjdu.png", 
    alt: "Freezeira",
    category: "Bustshot",
    character: "Freezeira Alexrina",
    date: "2024-09-15",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Saruga in the Field",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882981/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8115_20241008172354_l1s0mq.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882981/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8115_20241008172354_l1s0mq.png", 
    alt: "Saruga",
    category: "Bustshot",
    character: "Saruga Yvezero",
    date: "2024-10-08",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Monika",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99375870_8Jw.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882980/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%814_20240912164938_ngyvxz.png", 
    alt: "Monika",
    category: "Reference Sheet",
    character: "Monika",
    date: "2024-09-12",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Sha Marshmallow",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99366545_lKZ.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882980/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8118_20241016124843_pzsihv.png", 
    alt: "Sha",
    category: "Reference Sheet",
    character: "Sha Marshmallow",
    date: "2024-10-16",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Ferney Kiyoshi",
    image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99333937_1AN.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749882980/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%813_20240924195113_nhegmq.png", 
    alt: "Ferney",
    category: "Reference Sheet",
    character: "Ferney Kiyoshi",
    date: "2024-09-24",
    owner: {
      name: "Neisy",
      link: "https://toyhou.se/Neisy"
    }
  },

  {
    title: "Artfight for Cheryl",
    image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749886969/Kho%CC%82ng_Co%CC%81_Tie%CC%82u_%C4%90e%CC%82%CC%80184_20240705192758_yham6u.png",
    fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749886969/Kho%CC%82ng_Co%CC%81_Tie%CC%82u_%C4%90e%CC%82%CC%80184_20240705192758_yham6u.png", 
    alt: "Oscar",
    category: "Bustshot",
    character: "Oscar",
    date: "2024-07-05",
    owner: {
      name: "Cheryl",
      link: "https://www.instagram.com/cheryl_dog6168/"
    }
  },
  
  {
  title: "Mhm",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749955486/sublkm7d0spr86j0noty.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749955486/sublkm7d0spr86j0noty.png",
  alt: "???",
  category: "Headshot",
  character: "???",
  date: "2022-03-22",
  owner: {
    name: "Marbyissad",
    link: "https://www.instagram.com/p/CbZVqLWvPrs/?img_index=1"
  }
},

{
  title: "For Cumk",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959761/ki220jtpbpe5mqq8wrzy.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959761/ki220jtpbpe5mqq8wrzy.png",
  alt: "Mint",
  category: "Bustshot",
  character: "Mint",
  date: "2022-09-03",
  owner: {
    name: "Cumk",
    link: "https://toyhou.se/Cumk"
  }
},

{
  title: "For Drixii",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959761/rjjgsdfdlmg7vgt2sade.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959761/rjjgsdfdlmg7vgt2sade.png",
  alt: "Rei",
  category: "Headshot",
  character: "Rei",
  date: "2022-07-21",
  owner: {
    name: "Hydrixii",
    link: "https://www.instagram.com/hydrixii/"
  }
},

{
  title: "For SirBurnt",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959761/ckqcxdmmbdogof0fa2w1.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959761/ckqcxdmmbdogof0fa2w1.png",
  alt: "Kangaroop",
  category: "Bustshot",
  character: "Kangaroop",
  date: "2022-07-14",
  owner: {
    name: "Sir Burnt",
    link: "https://www.instagram.com/sir_burnt/"
  }
},

{
  title: "Fanart for Terenry",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959761/npkdsib5tggewcg3wcwf.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959761/npkdsib5tggewcg3wcwf.png",
  alt: "Aisu & Zui",
  category: "Halfbody",
  character: "Aisu & Zui",
  date: "2022-05-01",
  owner: {
    name: "Terenry",
    link: "https://toyhou.se/Terenry"
  }
},

{
  title: "For Trick",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959761/oelzwrlckyvsjrzrlh1k.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959761/oelzwrlckyvsjrzrlh1k.png",
  alt: "Trick",
  category: "Headshot",
  character: "Trick",
  date: "2022-06-10",
  owner: {
    name: "Trick",
    link: "https://www.facebook.com/margaret.ngwyzn"
  }
},

{
  title: "Fanart for Azuma",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959762/xpjmezrzofyt1x6cmjxu.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959762/xpjmezrzofyt1x6cmjxu.png",
  alt: "Mocha's Mother",
  category: "Bustshot",
  character: "Mocha's Mother",
  date: "2022-05-03",
  owner: {
    name: "Azuma Minatsu",
    link: "https://x.com/azuma_m"
  }
},

{
  title: "Fanart for DW",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959762/jvqosdvgi8tte61hpnml.jpg",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959762/jvqosdvgi8tte61hpnml.jpg",
  alt: "Mono",
  category: "Traditionals",
  character: "Mono",
  date: "2022-05-03",
  owner: {
    name: "Dragonix Wolfi",
    link: "https://www.instagram.com/wilof_dr/"
  }
},

{
  title: "Trade with Yan",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959763/odidfp2h6nkd7hzxv0i9.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959763/odidfp2h6nkd7hzxv0i9.png",
  alt: "White Crow",
  category: "Bustshot",
  character: "White Crow",
  date: "2022-10-01",
  owner: {
    name: "Yan",
    link: "https://www.instagram.com/yan_mochi/"
  }
},

{
  title: "Mhmm",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959764/eocf7v7wu4gcj37dx7eu.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749959764/eocf7v7wu4gcj37dx7eu.png",
  alt: "None",
  category: "Traditionals",
  character: "None",
  date: "2022-12-28",
  owner: {
    name: "None",
    link: "None"
  }
},

{
  title: "Bloodmoon Events",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960576/qneojpjvmb5ufbx9oblb.jpg",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960576/qneojpjvmb5ufbx9oblb.jpg",
  alt: "Dlmkja Alexrina",
  category: "Halfbody",
  character: "Dlmkja Alexrina",
  date: "2023-02-12",
  owner: {
    name: "Neisy",
    link: "https://toyhou.se/Neisy"
  }
},

{
  title: "Neisy Alexrina",
  image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/99334248_FAz.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960579/cygopmxnkil11u4rpluk.png",
  alt: "Neisy Alexrina",
  category: "Reference Sheet",
  character: "Neisy Alexrina",
  date: "2023-01-14",
  owner: {
    name: "Neisy",
    link: "https://toyhou.se/Neisy"
  }
},

{
  title: "Neisy Art",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960578/gdk0alqexbxa9swhw5n9.jpg",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960578/gdk0alqexbxa9swhw5n9.jpg",
  alt: "Neisy Alexrina",
  category: "Traditionals",
  character: "Neisy Alexrina",
  date: "2023-05-27",
  owner: {
    name: "Neisy",
    link: "https://toyhou.se/Neisy"
  }
},

{
  title: "Elanie Art",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960584/uoiygym1fwxexcvhztko.jpg",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960584/uoiygym1fwxexcvhztko.jpg",
  alt: "Elanie Alexrina",
  category: "Traditionals",
  character: "Elanie Alexrina",
  date: "2023-01-04",
  owner: {
    name: "Neisy",
    link: "https://toyhou.se/Neisy"
  }
},

{
  title: "Bloodmoon Events",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960577/iuwucuto0z1cr09el7re.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960577/iuwucuto0z1cr09el7re.png",
  alt: "Freezeira Alexrina",
  category: "Halfbody",
  character: "Freezeira Alexrina",
  date: "2023-01-06",
  owner: {
    name: "Neisy",
    link: "https://toyhou.se/Neisy"
  }
},

{
  title: "Neisy's First Debut",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960577/t2ypzizfnjp7gehq2uwr.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960577/t2ypzizfnjp7gehq2uwr.png",
  alt: "Neisy Alexrina",
  category: "Bustshot",
  character: "Neisy Alexrina",
  date: "2023-01-11",
  owner: {
    name: "Neisy",
    link: "https://toyhou.se/Neisy"
  }
},

{
  title: "2023 New Year",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960757/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8121_20230102203617_i0best.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960757/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8121_20230102203617_i0best.png",
  alt: "Dlmkja Alexrina",
  category: "Fullbody",
  character: "Dlmkja Alexrina",
  date: "2023-01-03",
  owner: {
    name: "Neisy",
    link: "https://toyhou.se/Neisy"
  }
},

{
  title: "Trade with Noora",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960751/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8166_%C4%90%C3%A3_kh%C3%B4i_ph%E1%BB%A5c_%C4%90%C3%A3_kh%C3%B4i_ph%E1%BB%A5c_20230629191840_vquyoj.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1749960751/Kh%C3%B4ng_C%C3%B3_Ti%C3%AAu_%C4%90%E1%BB%8166_%C4%90%C3%A3_kh%C3%B4i_ph%E1%BB%A5c_%C4%90%C3%A3_kh%C3%B4i_ph%E1%BB%A5c_20230629191840_vquyoj.png",
  alt: "Sharpstar",
  category: "Halfbody",
  character: "Sharpstar",
  date: "2023-06-29",
  owner: {
    name: "Noora Noodia",
    link: "https://toyhou.se/NoodleNoora"
  }
},

{
  title: "AF for Snow",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756659792/ojrqxnspt8xibqevanov.jpg",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756659792/ojrqxnspt8xibqevanov.jpg",
  alt: "Snowpaws Winter",
  category: "Headshot",
  character: "Snowpaws Winter",
  date: "2025-07-03",
  owner: {
    name: "Snowpaws Winter",
    link: "https://toyhou.se/SnowPaws"
  }
},

{
  title: "AF for Noodle",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756659792/pre5njapqbq3s7j3fqdm.jpg",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756659792/pre5njapqbq3s7j3fqdm.jpg",
  alt: "Thicket Bounce",
  category: "Bustshot",
  character: "Thicket Bounce",
  date: "2025-07-10",
  owner: {
    name: "Noodle Noora",
    link: "https://toyhou.se/NoodleNoora"
  }
},

{
  title: "AF for NeoTheatre",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756659792/kwjqc3asyu50exipcvug.jpg",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756659792/kwjqc3asyu50exipcvug.jpg",
  alt: "Haki Orion-Swie",
  category: "Bustshot",
  character: "Haki Orion-Swie",
  date: "2025-07-05",
  owner: {
    name: "Neo Theatre",
    link: "https://toyhou.se/neotheatre"
  }
},

{
  title: "Ling Yi",
  image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/105600600_DSN.jpg?1755442106",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756659791/a7bxim1pqfb4meyjwa5c.jpg",
  alt: "Ling Yi",
  category: "Reference Sheet",
  character: "Ling Yi",
  date: "2025-08-17",
  owner: {
    name: "Neisy",
    link: "https://toyhou.se/Neisy"
  }
},

{
  title: "Zhan Yi",
  image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/106034344_kSu.jpg",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756659792/vbesd9j7e2fac2olpb9o.jpg",
  alt: "Zhan Yi",
  category: "Reference Sheet",
  character: "Zhan Yi",
  date: "2025-08-21",
  owner: {
    name: "Neisy",
    link: "https://toyhou.se/Neisy"
  }
},

{
  title: "AF for Sha",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756659792/wzoo4vek1a4dwk1fuh3r.jpg",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756659792/wzoo4vek1a4dwk1fuh3r.jpg",
  alt: "Sha",
  category: "Headshot",
  character: "Sha",
  date: "2025-07-07",
  owner: {
    name: "Sha",
    link: "https://www.facebook.com/5h4.271"
  }
},

{
  title: "Yunfei Zhao",
  image: "https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/106248773_k33.png?1756150812",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756659793/us994sb8x249fcpzpzlb.png",
  alt: "Yunfei Zhao",
  category: "Reference Sheet",
  character: "Yunfei Zhao",
  date: "2025-08-26",
  owner: {
    name: "Neisy",
    link: "https://toyhou.se/Neisy"
  }
},

{
  title: "Sketch for Snow",
  image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756660140/jbhuz5lyvjkanfeiuufy.png",
  fullImage: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756660140/jbhuz5lyvjkanfeiuufy.png",
  alt: "Tornado Drop",
  category: "Traditionals",
  character: "Tornado Drop",
  date: "2025-07-28",
  owner: {
    name: "Snowpaws Winter",
    link: "https://toyhou.se/SnowPaws"
  }
},

];

