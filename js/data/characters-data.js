const characterCategories = [
  {
    category: "Fallen",
    icon: "fa-scroll",
    factions: [
      {
        name: "The Ideal",
        banner: "https://f2.toyhou.se/file/f2-toyhou-se/images/99330046_eV106tpnbLRI62r.png",
        description: "Dlmkja's ideals are embraced by people who desired to reclaim true peace for the Legendary World. Those who followed these ideals accepted their fate-falling, to secure peace, not pain, not fake peace, but the true peace that endures.",
        characters: [
          {
            name: "Dlmkja Alexrina",
            title: "- The Harmony Core -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750824904/99330046_eV1_me0e6t.png",
            link: "https://toyhou.se/25921938.dlmkja-alexrina",
            icon: "fa-solid fa-dragon",
            description: "This dragon was the 2nd successor of the Harmony Core, and became the strongest being of the Legendary World",
            species: "Dragon"
          },

          {
            name: "Elanie Alexrina",
            title: "- The Successor of Harmony -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750833473/99330046_eV1_ostqhj.png",
            link: "https://toyhou.se/26088534.elanie-alexrina",
            icon: "fa-solid fa-dragon",
            description: "Elanie was the youngest daughter of Dlmkja, and was the true protagonist of the Legendary World.",
            species: "Dragon"
          },

          {
            name: "Neisy Alexrina",
            title: "- The Perfect Masterpiece of Despair -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750834340/99330046_eV1_zei9hl.png",
            link: "https://toyhou.se/25990037.neisy-alexrina",
            icon: "fa-solid fa-leaf",
            description: "Neisy was the first child of Dlmkja. Through sheer perseverance and unyielding resolve, she rose from nothing to become a formidable force, hardened, relentless, and no less cold-blooded.",
            species: "Wolf"
          },

          {
            name: "Renki Alexrina",
            title: "- Remnant of Void -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750834438/99330046_eV1_mbscie.png",
            link: "https://toyhou.se/30062092.renki-alexrina",
            icon: "fa-solid fa-music",
            description: "Renki was a child born with powerful abilities, destined for greatness, yet dragged into the deepest abyss, but he now chose to pursue peace ideal",
            species: "Cat"
          },

          {
            name: "Akai Alexrina",
            title: "- Reincarnation of Bloodless Demon -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750835103/99330046_eV1_iifel0.png",
            link: "https://toyhou.se/30061166.akai-alexrina",
            icon: "fa-solid fa-star",
            description: "Akai was once a demon with a trace of humanity left in her heart. It was Dlmkja who awakened that spark, guiding her away from darkness. Through his light, she shed her demonic form and was reborn as the fox she is today.",
            species: "Fox"
          },
        ]
      },

      {
        name: "Demon Slayer Unite",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750836206/100002724_ZigJX9wT7p5VIZL_m6grfk.jpg",
        description: "Demon Slayer Unite is an organization that assigns tiered missions (Lower, Middle, and Upper Levels) to individuals who possess the will, courage, and strength to confront and eradicate the forces of evil.",
        characters: [
          {
            name: "Ferney Kiyoshi",
            title: "- The Shadowborne Swordsfox -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750835659/99330046_eV1_jd5sos.png",
            link: "https://toyhou.se/30061782.ferney-kiyoshi",
            icon: "fa-solid fa-cross",
            description: "Ferney used to be a swordsfox once affiliated with The Cross Evil Slayers of Moon, but he left the order seeking greater freedom. Now ranked as a High-Level member of Demon Slayer Unite in Fallen, his extraordinary strength speaks for itself.",
            species: "Fox"
          },

          {
            name: "Elmira Fehri",
            title: "- The Flexible Modex -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750836406/99330046_eV1_gmt3bg.png",
            link: "https://toyhou.se/30829975.elmira-fehri",
            icon: "fa-solid fa-shuffle",
            description: "Elmira is a low-level Demon Slayer, yet her unique power allows her to shift between elemental forms in battle, showcasing remarkable versatility and adaptive strength.",
            species: "Cat"
          },

          {
            name: "Silver Silverwood",
            title: "- The Silver Lightning -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750836652/99330046_eV1_shykwf.png",
            link: "https://toyhou.se/31499885.silver-silverwood",
            icon: "fa-solid fa-cloud-bolt",
            description: "Silver was born alone, without any power. Known for his stubborn resolve, he once stood through storms just to be struck by lightning, and then achieved the silver lightning manipulation technique",
            species: "Cat"
          },
        ]
      },

      {
        name: "Marshmallow Workshop",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750837298/100002724_ZigJX9wT7p5VIZL_z9xzdo.jpg",
        description: "Marshmallow Workshop, led by Trick Marshmallow, revolutionized outdated electronics in Fallen, turning a once-unknown, ordinary family into a recognized name across the land.",
        characters: [
          {
            name: "Trick Marshmallow",
            title: "- Demonstration of Powerlessness -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750837356/99330046_eV1_h6gqhq.png",
            link: "https://toyhou.se/30052823.trick-marshmallow",
            icon: "fa-solid fa-gear",
            description: "Trick, the best electronics engineer and inventor in Fallen, was known for his short temper but brilliant mind-responsible for major breakthroughs that modernized the nation’s outdated technology.",
            species: "Cat"
          },

          {
            name: "Sha Marshmallow",
            title: "- The Silver Wing -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750837650/99330046_eV1_wsixiq.png",
            link: "https://toyhou.se/30062170.sha-marshmallow",
            icon: "fa-solid fa-paper-plane",
            description: "Sha was a pilot at Marshmallow Workshop, known across Fallen for her strength, decisiveness, and unshakable reputation.",
            species: "Fox"
          },

          {
            name: "Lulu Marshmallow",
            title: "- The Weather Pursuit -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750837840/99330046_eV1_bnqrkw.png",
            link: "https://toyhou.se/32612419.lulu-marshmallow",
            icon: "fa-solid fa-cloud-sun",
            description: "Lulu, the youngest of the Marshmallow family, was a passionate weather forecaster who often climbed high mountain peaks through the night to watch the stars and deliver the most accurate predictions.",
            species: "Fox"
          },

        ]
      },

      {
        name: "Residents",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750859704/100002724_ZigJX9wT7p5VIZL_xx3sst.jpg",
        description: "Residents are just residents",
        characters: [
          {
            name: "Annie Fehri",
            title: "- Little Hope but Fragile -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750839186/99330046_eV1_g6zbtv.png",
            link: "https://toyhou.se/30188505.annie-fehri",
            icon: "fa-solid fa-star-of-life",
            description: "Annie is just a small fox fighting against the natural order, a battle with cancer, but a demon’s unexpected aid gave her believe to keep chasing her dreams in a borrowed life.",
            species: "Fox"
          },

          {
            name: "Aka (Annie Fehri)",
            title: "- Promise to Pursue -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750839284/99330046_eV1_qfsque.png",
            link: "https://toyhou.se/30062113.aka",
            icon: "fa-solid fa-droplet",
            description: "Aka was once Akai’s older brother, who perished long ago in her place. Now revived within Annie’s body, he carries both her will and his own, to reunite with his younger sister, and to live the life Annie could not.",
            species: "Fox"
          },
        ]
      },

    ]
  },

  {
    category: "Spring",
    icon: "fa-leaf",
    factions: [
      {
        name: "Demon Slayer Unite",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750836206/100002724_ZigJX9wT7p5VIZL_m6grfk.jpg",
        description: "Demon Slayer Unite is an organization that assigns tiered missions (Lower, Middle, and Upper Levels) to individuals who possess the will, courage, and strength to confront and eradicate the forces of evil.",
        characters: [
          {
            name: "Aiko Alexrina",
            title: "- The Great Astronomy Professor -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750839668/99330046_eV1_efga9u.png",
            link: "https://toyhou.se/30061985.aiko-alexrina",
            icon: "fa-solid fa-star-and-crescent",
            description: "Aiko is a renowned astronomy professor known across the lands. Though the past stole her sight, she still feels the stars beside her, guiding, glowing, and never truly gone.",
            species: "Fox"
          },

        ]
      },

      {
        name: "Yvezero Family",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750840083/99641816_MXUcJKhscXRFiLd_y0fjf5.png",
        description: "The Yvezero Clan was an ancient bloodline rooted in a deep hatred toward demons — cold-blooded creatures known for senseless slaughter. Yet, in their blind extremism, that very hatred became the spark that led to their downfall.",
        characters: [
          {
            name: "Yellow Yvezero",
            title: "- The Ivory Prodigy -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750840604/99330046_eV1_waxkf5.png",
            link: "https://toyhou.se/30062130.yellow-yvezero",
            icon: "fa-solid fa-arrows-rotate",
            description: "Yellow is a young prodigy of the Yvezero bloodline, known for his brilliance and his inherited, unshakable hatred for demons, which is a conviction so deep it blinds him from seeing beyond the past.",
            species: "Fox"
          },

          {
            name: "Saruga Yvezero",
            title: "- The Tainted Fang -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750841630/99641816_MXUcJKhscXRFiLd_iicqe4.png",
            link: "https://toyhou.se/30062154.saruga-yvezero",
            icon: "fa-solid fa-percent",
            description: "Saruga is a young member of the Yvezero bloodline. From an early age, he found peace in soil and seeds, dedicating his life to gardening and cultivation-seeking life in a family consumed by hatred towards devils.",
            species: "Fox"
          },

          {
            name: "Minnow Yvezero",
            title: "- The Silent Minnow -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750841314/99330046_eV1_sze4v8.png",
            link: "https://toyhou.se/30061946.mnw-justification/32841156.minnow-yvezero",
            icon: "fa-solid fa-circle-half-stroke",
            description: "Minnow is a young fox of the Yvezero bloodline. Unlike her kin who pursued strength and vengeance, she lived a quiet, innocent life to dream of soaring through the skies as a pilot instead of walking the path of power.",
            species: "Fox"
          },

          {
            name: "Aiko Yvezero",
            title: "- The Star Seeker -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1752306484/Screenshot_2025-07-12_144756_x7z3gk.png",
            link: "https://toyhou.se/30061985.aiko-alexrina/34045352.beforemath",
            icon: "fa-solid fa-star-half-stroke",
            description: "Aiko is the eldest of the Yvezero bloodline, gifted with unmatched intellect and a fascination for the stars. From a young age, she excelled in astronomy, becoming the pride of her family and a guiding light for her siblings.",
            species: "Fox"
          },

          {
            name: "Kai Yvezero",
            title: "- The Draconic Outcast -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1752306233/Screenshot_2025-07-12_144245_izpkps.png",
            link: "https://toyhou.se/30062051.kai-alexrina/34045188.beforemath",
            icon: "fa-brands fa-audible",
            description: "Kai is the youngest of the Yvezero bloodline, born different from his kin. Marked by the cursed and the eyes of a demon, he grew up shunned and unloved, carrying the silent weight of a fate that would one day consume his family.",
            species: "Fox"
          },

        ]
      },

      {
        name: "Residents",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750859704/100002724_ZigJX9wT7p5VIZL_xx3sst.jpg",
        description: "Residents are just residents",
        characters: [
          {
            name: "Daisy Gardenia",
            title: "- The Fragile Leaf -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750842099/99641816_MXUcJKhscXRFiLd_j3bgry.png",
            link: "https://toyhou.se/30061788.daisy-gardenia",
            icon: "fa-solid fa-seedling",
            description: "Daisy is a young wolf who always carries a smile on her face. As Dlmkja’s childhood friend, she was the spark that helped shape the person he would eventually become.",
            species: "Wolf"
          },
        ]
      },



    ]
  },
  {
    category: "Cloud",
    icon: "fa-cloud",
    factions: [
      {
        name: "The Legends",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1757093537/99367988_MQRwreDqU8Z99Kn_1_ux8ds8.png",
        description: "The Legends are elite guardians of the nation of Cloud, holding some of the highest ranks within Moon’s hierarchy. They play a vital role in preserving the land and ensuring its enduring safety",
        characters: [
          {
            name: "Li Yi",
            title: "- Cloudborne Mind -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750856642/99330046_eV1_w4bewq.png",
            link: "https://toyhou.se/30214376.li-yi",
            icon: "fa-solid fa-cloud",
            description: "Li Yi is a distant and composed Legend, known for his sharp mind and strategic command. He often works behind the scenes, but his strength in combat proves he's more than just a tactician.",
            species: "Qilin"
          },

          {
            name: "Kai Huangli",
            title: "- The Cloud in Darkness -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750842951/99330046_eV1_yrnts1.png",
            link: "https://toyhou.se/30461524.kai-huangli",
            icon: "fa-solid fa-droplet",
            description: "Kai Huangli is a power-driven Legend whose instincts in battle are unmatched. Though not favored by the public, his strength alone secures his place among the strongest in Cloud.",
            species: "Cat"
          },

          {
            name: "Bao Yi",
            title: "- The Festival Deity -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750856441/99330046_eV1_ocrnqu.png",
            link: "https://toyhou.se/30637789.bao-yi",
            icon: "fa-solid fa-dragon",
            description: "Bao Yi is a Legend without power, yet holds the greatest influence among all Legends. Revered as the Festival Deity, Bao is deeply beloved by the people and remains the most connected to them.",
            species: "Dragon"
          },

          {
            name: "Ling Yi",
            title: "- Luminary of Grace -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756656601/Screenshot_2025-08-31_230938_fgeucm.png",
            link: "https://toyhou.se/34645304.ling-yi",
            icon: "fa-solid fa-book",
            description: "Ling Yi is a mysterious Legend, known for his wisdom, poetic spirit, and quiet grace. Often seen as a sage among the people, he is believed to guide future generations and awaits the time to fulfill his destined role.",
            species: "Pixiu"
          },

          {
            name: "Zhan Yi",
            title: "- Antler of Eternity -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756657232/Screenshot_2025-08-31_232013_sikxda.png",
            link: "https://toyhou.se/34786013.zhan-yi",
            icon: "fa-solid fa-star",
            description: "Zhan Yi is one of the oldest and strongest Legends, a bloodthirsty warrior whose antlers grow with every battle. Shrouded in the night, he unleashes his fury upon demons, leaving only crimson carnage in his wake.",
            species: "Tenghuang"
          },

        ]
      },

      {
        name: "Demon Slayer Unite",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750836206/100002724_ZigJX9wT7p5VIZL_m6grfk.jpg",
        description: "Demon Slayer Unite is an organization that assigns tiered missions (Lower, Middle, and Upper Levels) to individuals who possess the will, courage, and strength to confront and eradicate the forces of evil.",
        characters: [
          {
            name: "Xuan Yi",
            title: "- The Dream Devourer -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750856773/99330046_eV1_kjvqou.png",
            link: "https://toyhou.se/33011757.xuan-yi",
            icon: "fa-solid fa-star",
            description: "Xuan is a Kyumulus born from a dream that fused with stardust and clouds. As the embodiment of the species' fierce will to live, Xuan possesses far greater awareness and reasoning than most other Kyumulus.",
            species: "Kyumulus"
          },

        ]
      },

      {
        name: "Residents",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750859704/100002724_ZigJX9wT7p5VIZL_xx3sst.jpg",
        description: "Residents are just residents",
        characters: [
          {
            name: "Lingxue Feng",
            title: "- The Festival Soul -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750857312/99330046_eV1_xolprg.png",
            link: "https://toyhou.se/31486377.lingxue-feng",
            icon: "fa-solid fa-star",
            description: "Lingxue Feng is an ordinary fox who came into contact with Cloud’s Festival Legend, Bao Yi, and gradually grew close to him. She lives a simple life, assisting Bao in organizing and selling festival items.",
            species: "Fox"
          },
        ]
      },



    ]
  },
  {
    category: "Winter",
    icon: "fa-icicles",
    factions: [
      {
        name: "Demon Slayer Unite",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750836206/100002724_ZigJX9wT7p5VIZL_m6grfk.jpg",
        description: "Demon Slayer Unite is an organization that assigns tiered missions (Lower, Middle, and Upper Levels) to individuals who possess the will, courage, and strength to confront and eradicate the forces of evil.",
        characters: [
          {
            name: "Mitzy Allard",
            title: "- The Lost Snowflake -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750857938/99330046_eV1_gxcmtw.png",
            link: "https://toyhou.se/30326590.mitzy-allard",
            icon: "fa-solid fa-snowflake",
            description: "Mitzy was once a mother with a happy family, until demons wiped them all out, leaving her trapped in a hopeless void. She became a Demon Slayer with the sole purpose of eradicating every last demon to avenge her loved ones, yet not once has a smile returned to her face.",
            species: "Cat"
          },

        ]
      },

    ]
  },

  {
    category: "Moon",
    icon: "fa-moon",
    factions: [
      {
        name: "The Cross Evil Slayer",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750859017/100002724_ZigJX9wT7p5VIZL_jc1yhh.jpg",
        description: "The Cross Evil Slayer is a group of powerful swordsferals who stand together to eliminate the evil that runs rampant beyond the borders. United by an unshakable will, they never give up, no matter how great the darkness they face.",
        characters: [
          {
            name: "Himura Arakaze",
            title: "- The Blood Moon -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750858492/99330046_eV1_oj7x0m.png",
            link: "https://toyhou.se/31083002.himura-arakaze",
            icon: "fa-brands fa-ethereum",
            description: "Himura is a free-spirited swordswolf who cherishes the art of tea, the moment of the red moon, and the gentle fall of cherry blossoms. But don’t let those simple pleasures fool you, because his strength is nothing to be underestimated.",
            species: "Wolf"
          },

        ]
      },

      {
        name: "The Spirit Shrine",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750870238/100002724_ZigJX9wT7p5VIZL_avzstp.jpg",
        description: "Hidden deep within the misty woods of Moon, the Spirit Shrine is a sacred place dedicated to the ancient god Inari, founder of the nation. Rows of crimson torii gates guide the faithful through silence and shadow, leading them to a place where spirits dwell and prayers linger. Though the god has long passed, the shrine remains alive through tradition, offerings of tofu, and the quiet devotion of those who still believe. Here, even the wind seems to whisper, Kon kon... Inari watches.",
        characters: [
          {
            name: "Reisune Alexrina",
            title: "- The Spirit Flame Fox -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750869979/100002724_ZigJX9wT7p5VIZL_pyrciy.png",
            link: "https://toyhou.se/30062028.reisune-alexrina",
            icon: "fa-brands fa-gripfire",
            description: "Reisune is a fox adopted by the Alexrina family. She is playful, cheerful, and surprisingly hardworking. Above all, she holds an unwavering belief in Inari Okami, and becomes fiercely upset if anyone dares to disrespect the deity.",
            species: "Kitsune (Nine-Tailed Fox)"
          },

        ]
      },

      {
        name: "Residents",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750859704/100002724_ZigJX9wT7p5VIZL_xx3sst.jpg",
        description: "Residents are just residents",
        characters: [
          {
            name: "Naomi Kiyoshi",
            title: "- The Remembrance Keeper -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750859388/100002724_ZigJX9wT7p5VIZL_texu48.png",
            link: "https://toyhou.se/33376904.naomi-kiyoshi",
            icon: "fa-solid fa-images",
            description: "Naomi Kiyoshi is a quiet, unrecognized photographer in Moon who recreates memories through photos, each one a silent story of beauty and emotion.",
            species: "Fox"
          },
        ]
      },

    ]
  },

  {
    category: "Aetherium",
    icon: "fa-gears",
    factions: [
      {
        name: "Aetherborn Community",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750862560/protogen-s70q6ol5g1md0hff_v6cy91.jpg",
        description: "The Aetherborn Community is a gathering of all beings crafted by Artificers who reside there. Though created, these beings possess the ability to think, learn, and fight just like any natural-born species.",
        characters: [
          {
            name: "AE-102 (Fantasy)",
            title: "- Failsafe Glitch -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750860233/100002724_ZigJX9wT7p5VIZL_yx4czz.png",
            link: "https://toyhou.se/31665126.fantasy-ae-102",
            icon: "fa-brands fa-unsplash",
            description: "AE-102, also known as Fantasy, is a gentle Protogen on the surface. When her internal programming fails, Fantasy transforms into a cold, emotionless entity completely detached from the warmth she once showed.",
            species: "Protogen"
          },
          {
            name: "AE-404 (Nyx)",
            title: "- The Chaotic Destruction -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750860632/100002724_ZigJX9wT7p5VIZL_sbfky9.png",
            link: "https://toyhou.se/31666359.nyx-ae-404",
            icon: "fa-brands fa-nfc-symbol",
            description: "AE-404, also known as Nyx, is a sociable and friendly Protogen on the surface. Patient and calculating, Nyx quietly waits for the right moment to betray the very Aetherborn Community he calls home.",
            species: "Protogen"
          },


        ]
      },

    ]
  },

  {
    category: "The E.S Team",
    icon: "fa-brands fa-slack",
    factions: [
      {
        name: "The Elemental Stone Team",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750861007/100002724_ZigJX9wT7p5VIZL_qsizu4.png",
        description: "The Elemental Stone Team, or so-called The E.S Team, or simply E.S Team, is a team established by Freezeira, consisting of extraordinarily gifted elements, each of whom is a genius in their specific fields. Furthermore, their capabilities to harness and unleash the full potential of the elemental stones are reasons for their being the chosen ones. The E.S Team’s members shows their steadfastness in their dedication, willing to fight, give their lives, or do whatever it takes to accomplish Dlmkja’s peace ideal. It is their aim to create a world only for true peace, not fake peace or real pain, motivated by not only their heart-wrenching and tragic pastlife, but also their animosity to war, discrimination, injustice, and imbalance of this world. Despite their desires to have daily lives, just like ordinary residents, they recognize that with no actions, this world would continue its suffering from devils and evils’ destructions and exterminations. As a result of that, safeguarding residents, ensuring people’s security and safety, and freeing people from the malevolent darkness are their frequent attempts. On account of the beliefs that most of male dragons are not only robust and able to withstand hardships, but also exemplify attributes, like steadfast strength, indomitable spirit, and determined resolve, only male dragons are accepted to be the elemental stones absorbers, instead of female ones.",
        characters: [
          {
            name: "Freezeira Alexrina",
            title: "- The Ice Dragon -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750861494/100002724_ZigJX9wT7p5VIZL_prxi7r.png",
            link: "https://toyhou.se/26051699.freezeira-alexrina",
            icon: "fa-solid fa-dragon",
            description: "Freezeira, the pioneer of the E.S Team, is as cold as stone with a heart long frozen. Unshaken by emotion, he devotes himself fully to pursuing Dlmkja’s ideal with unwavering determination, no matter the cost.",
            species: "Dragon"
          },
          {
            name: "Ethan Yurei",
            title: "- The Water Dragon -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750861703/100002724_ZigJX9wT7p5VIZL_hg1w2w.png",
            link: "https://toyhou.se/26107000.ethan-yurei",
            icon: "fa-solid fa-dragon",
            description: "Ethan, a water dragon of immense power and boundless intelligence, was born a strategic prodigy. His presence in the E.S Team turns every battle into a game of certainty, tilting the tides of war with ease.",
            species: "Dragon"
          },
          {
            name: "Kai Alexrina",
            title: "- The Death Dragon -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750861874/100002724_ZigJX9wT7p5VIZL_arjk5v.png",
            link: "https://toyhou.se/30062051.kai-alexrina",
            icon: "fa-solid fa-dragon",
            description: "Kai Alexrina, a death dragon stripped of all emotions. With overwhelming physical strength and a stoic nature, he surpasses expectations despite lacking the seasoned experience of veteran warriors.",
            species: "Dragon"
          },
          {
            name: "Bloody (Kai Alexrina)",
            title: "- The Blood Dragon -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750862210/100002724_ZigJX9wT7p5VIZL_lufzcj.png",
            link: "https://toyhou.se/30061973.bloody",
            icon: "fa-solid fa-dragon",
            description: "Bloody is a formidable member of the E.S Team, known for his exceptional combat agility and brutal efficiency, manipulating both his own blood and that of his enemies as a deadly weapon.",
            species: "Dragon"
          },
          {
            name: "Wendy Alexrina",
            title: "- The Wind Dragon -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750862395/100002724_ZigJX9wT7p5VIZL_b0hybb.png",
            link: "https://toyhou.se/30061999.wendy-alexrina",
            icon: "fa-solid fa-dragon",
            description: "Wendy may act playfully despite his older age, but his mastery of wind, and even storm manipulation makes him a formidable scout in the most complex missions.",
            species: "Swaria"
          },

        ]
      },
      {
        name: "The Elemental Awakening",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1757093239/100137310_mwtMutAvVMJZLP6_1_jtocxa.jpg",
        description: "When a member of the E.S Team reaches a pinnacle of transcendence, they undergo the Elemental Awakening, a state where the full potential of their elemental stone is unlocked. This awakening can manifest in many forms: a complete transformation of their physical being into a new entity, or an overwhelming surge of elemental power that reshapes their strength entirely.",
        characters: [
          {
            name: "Kai Yvezero",
            title: "- The Deadvoid Flame -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750862839/100002724_ZigJX9wT7p5VIZL_mgcj1x.png",
            link: "https://toyhou.se/30062051.kai-alexrina/32827701.the-deadvoid-flame",
            icon: "fa-solid fa-dragon",
            description: "Kai, in this form, inherits the ancient power of the Yvezero bloodline, becoming stronger than ever. The bloodfire ignites are ready to scorch anyone who dares to stand in his way.",
            species: "Dragon"
          },
        ]
      },

    ]
  },

  {
    category: "Justification",
    icon: "fa-brands fa-cloudsmith",
    factions: [
      {
        name: "The General",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1757093561/101762251_A4EpigbpYn7DIPv_1_k9aiio.jpg",
        description: "The Generals in Justification are the supreme leaders of their nations, wielding the greatest influence over the prosperity, safety, and well-being of their people. A single General’s decisions can shape the fate of an entire country, where an narrow-minded General may lead the nation to ruin, a wise and just one can elevate it to greatness.",
        characters: [
          {
            name: "M#n##w Justification (Minnow Yvezero)",
            title: "- The General of Fallen -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750863874/100002724_ZigJX9wT7p5VIZL_apjzrx.png",
            link: "https://toyhou.se/30061946.mnw-justification",
            icon: "fa-brands fa-shopware",
            description: "Once a fragile fox, now a powerful and judicious General, M#n##w is hailed as one of the most successful Generals in Justification’s history, elevating her nation to unprecedented heights.",
            species: "Fox"
          },
          {
            name: "Winter Justification (Snow Winter)",
            title: "- The General of Winter -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750864221/100002724_ZigJX9wT7p5VIZL_hlq6l7.png",
            link: "https://toyhou.se/31818332.winter-justification",
            icon: "fa-solid fa-icicles",
            description: "Feared as the Demon of Winter, this ruthless General rules with an iron will and frost-bound decrees. Though her harsh policies allow no dissent, they are ultimately driven by an unyielding desire to ensure the safety and survival of his people, no matter the cost.",
            species: "Wolf"
          },
          {
            name: "Yun Justification (Yunfei Zhao)",
            title: "- The General of Cloud -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1756657462/Screenshot_2025-08-31_232414_eno71t.png",
            link: "https://toyhou.se/34856039.yun-justification",
            icon: "fa-solid fa-cloud",
            description: "Once the youngest to rise as General, Yunfei Zhao now stands as a brilliant and compassionate leader of Cloud. Beloved by the people for her wisdom and vision, she hides behind her bright demeanor a darker self-born from crushing burdens and bloodstained solitude.",
            species: "Cat"
          },


        ]
      },

      {
        name: "The Colonel",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750865027/100002724_ZigJX9wT7p5VIZL_j3hjxp.jpg",
        description: "The Colonels in Justification are the frontline enforcers of national policy, entrusted with commanding major divisions and executing the vision of their Generals. Their leadership directly impacts the stability, discipline, and effectiveness of the nation’s forces, and in turn, its future.",
        characters: [
          {
            name: "Xianli Justification (Xian Wansui)",
            title: "- The Colonel of Cloud -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750864673/100002724_ZigJX9wT7p5VIZL_wyg568.png",
            link: "https://toyhou.se/30781813.xianli-justification",
            icon: "fa-brands fa-xing",
            description: "Xianli is a masterful Colonel known for her cunning adaptability and deceptive brilliance. With the elusive wit of a true Huli Jing, she bends the tides of battle with ease, turning inevitable defeat into resounding victory through sheer strategy and illusion.",
            species: "Huli Jing (Nine-Tailed Fox)"
          },

        ]
      },

      {
        name: "The Lieutenant",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750865280/100002724_ZigJX9wT7p5VIZL_nvuc4f.jpg",
        description: "The Lieutenants in Justification are elite field commanders entrusted with executing national strategy on the ground. While not the architects of policy, their leadership in critical missions directly impacts the stability, discipline, and tactical success of their forces. A single Lieutenant’s resolve can determine the outcome of a battle.",
        characters: [
          {
            name: "Penniless Justification (Penny Innermost)",
            title: "- The Lieutenant of Spring -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750865397/100002724_ZigJX9wT7p5VIZL_sktl0o.png",
            link: "https://toyhou.se/30062140.penniless-justification",
            icon: "fa-solid fa-leaf",
            description: "Penniless is a devoted Lieutenant known for her unwavering commitment and self-sacrifice. Willing to risk her life by undertaking missions beyond her rank, she often works past her limits, driven by a profound sense of duty to her nation.",
            species: "Cat"
          },
          {
            name: "Zerenith Justification (Seraphina Moura)",
            title: "- The Lieutenant of Fallen -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750865682/100002724_ZigJX9wT7p5VIZL_p7yujk.png",
            link: "https://toyhou.se/32338318.zerenith-justification",
            icon: "fa-brands fa-schlix",
            description: "Zerenith is a delicate and devoted Lieutenant, known for her deep empathy and unwavering sense of responsibility. Often seen standing quietly in the rain, lost in thought, she carries the weight of others’ burdens, never failing to care, even when sorrow lingers in her own heart.",
            species: "Fox"
          },

        ]
      },

    ]
  },

  {
    category: "Outlanders",
    icon: "fa-brands fa-hornbill",
    factions: [
      {
        name: "Doki Doki Literature Club",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750866098/100002724_ZigJX9wT7p5VIZL_kkbth4.png",
        description: "Monika (for instance), a once-aware girl from a virtual literature club, found herself torn from the script of her coded world and thrown into a realm far beyond anything she could comprehend. Here, her poetic charm and fractured memory feel alien. Without her control, she must rediscover purpose, not as a program, but as something... real.",
        characters: [
          {
            name: "Monika",
            title: "- The Broken Script -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750866452/100002724_ZigJX9wT7p5VIZL_pouke8.png",
            link: "https://toyhou.se/30062188.monika",
            icon: "fa-solid fa-book-tanakh",
            description: "Monika is a devoted and gentle soul with an unwavering passion for literature. Though quiet and composed, her heart burns with sincerity, and if necessary, she would not hesitate to give her life for someone she truly believes in.",
            species: "Fox"
          },

        ]
      },

    ]
  },

  {
    category: "NWO Evils",
    icon: "fa-brands fa-jedi-order",
    factions: [
      {
        name: "The Deadliness 12",
        banner: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750866929/100002724_ZigJX9wT7p5VIZL_zmbs6b.jpg",
        description: "The Deadliness 12 is a malevolent organization founded by Amber, who is the chosen heir of the War Core, with the sole purpose of resurrecting the mysterious original bearer of both the War Core and the Harmony Core. This faction is shrouded in fear and myth, for even the weakest among its twelve members holds enough power to bring an entire nation to its knees.",
        characters: [
          {
            name: "Amber",
            title: "- The Screaming Soul -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750867496/100002724_ZigJX9wT7p5VIZL_ps0lu8.png",
            link: "https://toyhou.se/30061962.amber",
            icon: "fa-solid fa-dragon",
            description: "Amber is a demonic dragon forged by the Primordial Creator ??? himself — a merciless, cold-blooded entity born of pure death and destruction. In Amber’s eyes, existence holds no meaning beyond bloodshed. He is the embodiment of carnage, where every breath serves only death.",
            species: "Dragon"
          },

          {
            name: "Snow Winter",
            title: "- The Fleeting Snow -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750867723/100002724_ZigJX9wT7p5VIZL_bmrw26.png",
            link: "https://toyhou.se/31971584.snow-winter",
            icon: "fa-solid fa-snowflake",
            description: "Snow was resurrected from the brink of death by ???, bound eternally to his cause as one of his most loyal followers. Yet deep within her fractured soul, a vow still lingers, a promise once made with a dear friend, echoing quietly beneath the blood-stained snow she walks upon.",
            species: "Wolf"
          },

          {
            name: "Mino",
            title: "- The Fallen Angel -",
            image: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750868090/100002724_ZigJX9wT7p5VIZL_iaymcg.png",
            link: "https://toyhou.se/31882739.mino",
            icon: "fa-brands fa-sith",
            description: "Mino was once an ordinary fox who lived peacefully with her family, until she was forced to slaughter them with her own hands. Twisted by agony and divine torment, she was remade into an eery mockery of an angel, her wings soaked in blood and sin.",
            species: "Fox"
          },


        ]
      },

    ]
  },
];
