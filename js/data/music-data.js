const musicList = [
  {
    id: "megalo",
    title: "Megalo Strike Back",
    artist: "Sapph",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993368/megalo_o5tc0g.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752893/Megalo_Strike_Back_-_Sapph_hfoawp.mp3"
  },
  {
    id: "silence",
    title: "Silence",
    artist: "Kai Engel",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993348/kai_engel_r4eoxs.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752896/Silence_-_Kai_Engel_g247fp.mp3"
  },
  {
    id: "curtains",
    title: "Curtains Are Always Drawn",
    artist: "Kai Engel",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993348/kai_engel_r4eoxs.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752887/Curtains_Are_Always_Drawn_-_Kai_Engel_wshx00.mp3"
  },
  {
    id: "ijwd",
    title: "I Just Wanna Die",
    artist: "Keedfour",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993342/ijwd_ie1aqj.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752890/ijwd-_Keedfour_hzjj8z.mp3"
  },
  {
    id: "iroh",
    title: "Iroh",
    artist: "Sonn",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993345/iroh_m2obeh.jpg",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752889/Iroh_-_Sonn_yfqpue.mp3"
  },
  {
    id: "lafterdeath",
    title: "Love After Death",
    artist: "Music Box",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993354/lad_uwitbf.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752889/lafterdeath_lsryue.mp3"
  },
  {
    id: "hitorinbo",
    title: "Hitorinbo Envy",
    artist: "Madotsuki",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993340/hitomadot_stxmgz.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752897/Hitorinbo_Envy_-_Madotsuki_s64zeq.mp3"
  },
  {
    id: "hitorinb",
    title: "Hitorinbo Envy",
    artist: "Koyori",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993340/hitokoyori_skuqh1.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752890/Hitorinb_Envy_-_Koyori_gtlahl.mp3"
  },
  {
    id: "melancholia",
    title: "Melancholia",
    artist: "Music Box",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993370/melancholia_tumog0.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752894/Melancholia_Music_Box_qyvunp.mp3"
  },
  {
    id: "siriuss",
    title: "Sirius no Shinzou",
    artist: "Isekaijouchou",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993347/isekaijouchou_w5as6y.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752898/Sirius_s_Heart_-_Isekaijouchou_qrmptl.mp3"
  },
  {
    id: "heart",
    title: "Sirius no Shinzou",
    artist: "Suzuya Aki",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993379/sirius_veknfb.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752891/Heart_of_Sirius_-_%E9%88%B4%E8%B0%B7%E3%82%A2%E3%82%AD_tbeqsu.mp3"
  },
  {
    id: "uminaoshi",
    title: "Uminaoshi",
    artist: "MARETU",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993432/uminaoshi_fvpyw3.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752905/Uminaoshi_-_MARETU_j9nzuh.mp3"
  },
  {
    id: "tf3",
    title: "The Flight III",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993414/theflightiii_er01wc.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752899/tf3_-_Skyper_xpbuvu.mp3"
  },
  {
    id: "tf6",
    title: "The Flight VI",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993415/theflightvi_zvpxg1.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752901/tf6_-_Skyper_mbzt4l.mp3"
  },
  {
    id: "tf8",
    title: "The Flight VIII",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993416/theflightviii_myrvtq.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752900/tf8_-_Skyper_yl2nsl.mp3"
  },
  {
    id: "tomorrow",
    title: "Tomorrow",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993428/tomorrow_fsrket.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752901/Tomorrow_-_Skyper_k2uluc.mp3"
  },
  {
    id: "love",
    title: "Love Again",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993358/loveagain_ueimap.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752892/Love_Again_-_Skyper_ifdipw.mp3"
  },
  {
    id: "with",
    title: "With You",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993448/withyou_xajas3.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752902/With_You_-_Skyper_mdcpbj.mp3"
  },
  {
    id: "imissyou",
    title: "I Miss You",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993344/imissyou_himeff.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752893/imissyou_-_Skyper_oqlmpc.mp3"
  },
  {
    id: "hero",
    title: "Hero",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993339/heroskyper_izzxgm.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752891/Hero_-_Skyper_uzj6q2.mp3"
  },
  {
    id: "tf2077",
    title: "The Flight 2077",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993402/theflight2077_v9aqyx.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752900/tf2077_-_Skyper_nwxlmd.mp3"
  },
  {
    id: "why",
    title: "Why Love Me?",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993435/whyloveme_sj7mkc.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752902/Why_Love_Me_-_Skyper_g41bvt.mp3"
  },
  {
    id: "whyii",
    title: "Why Love Me II?",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993436/whylovemeii_imvbwl.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752902/WhyII_Love_Me_-_Skyper_w8dhyn.mp3"
  },
  {
    id: "try",
    title: "Try",
    artist: "Skyper",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993431/try_zrgbc0.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752901/Try_-_Skyper_kupso7.mp3"
  },
  {
    id: "onegai",
    title: "Please! KonKon Inari-sama",
    artist: "Nanahira",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993352/konkon_hbfblh.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752895/Onegai_Kon-kon_Olnari-Sama_-_Nanahira_hfji6m.mp3"
  },
  {
    id: "soar",
    title: "Soar In The Wind",
    artist: "HoyoMIX",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993337/ayaka_zesoev.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752898/Soar_in_the_Wind_-_HoyoMIX_o9mj3e.mp3"
  },
  {
    id: "pink",
    title: "Pink",
    artist: "MARETU",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993374/pink_num04h.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752897/Pink_-_MARETU_ku4cib.mp3"
  },
  {
    id: "tengoku",
    title: "Let's Go To Heaven",
    artist: "Kikuo",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993400/tengoku_lcodgt.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752899/Tengoku_he_ikou_-_Kikuo_ligynd.mp3"
  },
  {
    id: "down",
    title: "Down In The Shade",
    artist: "Oatmello",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993351/kazuha_qbjgxq.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752888/Down_In_The_Shade_-_Oatmello_jkgkji.mp3"
  },
  {
    id: "remembrance",
    title: "Remembrance",
    artist: "Kerusu",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993376/remembrance_zola9i.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752896/Remembrance_-_Kerusu_gf17xa.mp3"
  },
  {
    id: "first",
    title: "First Snow",
    artist: "Kerusu",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993338/firstsnow_ssprkz.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752887/First_Snow_-_Kerusu_sewscs.mp3"
  },
  {
    id: "lanterns",
    title: "Lanterns",
    artist: "Xomu",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993356/lanterns_eztn4z.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752895/Lanterns_-_Xomu_idwsg2.mp3"
  },
  {
    id: "iwot",
    title: "I Was Only Temporary",
    artist: "My Head Is Empty",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993371/onlytemporary_qanftz.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752887/Iwot_-_My_head_is_empty_ydzfah.mp3"
  },
  {
    id: "snowfall",
    title: "Snowfall",
    artist: "Oneheart x Reidenshi",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750993383/snowfall_gv8uzu.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1749752899/Snowfall_-_Reidenshi_x_Oneheart_xcpmss.mp3"
  },
  {
    id: "daughter",
    title: "Daughter of Evil",
    artist: "Lizz Robinett",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750995377/daughterofevil_nwrn1v.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750995374/Daughter_of_Evil_%E6%82%AA%E3%83%8E%E5%A8%98_Piano_ver._ENGLISH_COVER_by_Lizz_Robinett_ft._bslickmusic_umk3nd.mp3"
  },
  {
    id: "badapple",
    title: "Bad Apple",
    artist: "Lizz Robinett",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750995376/badapple_tdal8b.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750995371/Bad_Apple_Touhou_English_Cover_by_Lizz_Robinett_eogfud.mp3"
  },
  {
    id: "regret",
    title: "Regret Message",
    artist: "Lizz Robinett",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750995384/regretmessage_xsur0b.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750996540/Regret_Message_English_Cover_by_Lizz_Robinett_tsuvyz.mp3"
  },
  {
    id: "servant",
    title: "Servant of Evil",
    artist: "Lizz Robinett",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750995404/servantofevil_rtbqgo.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750995377/Servant_of_Evil_%E6%82%AA%E3%83%8E%E5%8F%AC%E4%BD%BF_Piano_ver._ENGLISH_COVER_by_Lizz_Robinett_ft._bslickmusic_wi9cgd.mp3"
  },
  {
    id: "buttercup",
    title: "Buttercup",
    artist: "Sapph",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750995377/buttercup_jko1dl.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750995377/Original_Buttercup_-_Undertale_-_ud7fbc.mp3"
  },
  {
    id: "msback",
    title: "Megalo Strike Back",
    artist: "Meltberry",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750995378/megalosapph_tciveb.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750995378/Undertale_-_Megalo_Strike_Back_Lullaby_Vocal_Cover_Meltberry_m84fvk.mp3"
  },
  {
    id: "shinzouce",
    title: "Sirius no Shinzou",
    artist: "Lucia",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750995409/siriuslucia_vzhywr.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750995379/%E3%82%B7%E3%83%AA%E3%82%A6%E3%82%B9%E3%81%AE%E5%BF%83%E8%87%93_-_%E3%83%B0%E4%B8%96%E7%95%8C%E6%83%85%E7%B7%92_LuciaCover_nxinjb.mp3"
  },
  {
    id: "marytheme",
    title: "Mary's Theme",
    artist: "Lizz Robinett",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750995379/marytheme_gm1wdi.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750995389/Puppet__Mary_s_Theme_Ib_Vocal_Cover_by_Lizz_Robinett_suqfqd.mp3"
  },
  {
    id: "hideandseek",
    title: "Hide And Seek",
    artist: "Lizz Robinett",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750997577/hideandseek_n9yldc.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750997577/Hide_and_Seek_Vocaloid_English_ver_by_Lizz_Robinett_olqced.mp3"
  },
  {
    id: "respite",
    title: "Respite",
    artist: "Undertale",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750997574/undertaleost_zwkjjn.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750997578/Respite_slowed_down_bumugv.mp3"
  },
  {
    id: "carol",
    title: "Carol Of The Bell",
    artist: "Lindsey Stirling",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750998410/carolotb_d9cdlb.jpg",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750997580/Lindsey_Stirling_-_Carol_of_the_Bells_pcyxtx.mp3"
  },
  {
    id: "ticking",
    title: "Ticking",
    artist: "TIN",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1750998410/artworks-000155475568-4be7nt-t500x500_yrwlws.jpg",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1750997581/TIN_-_Ticking_DAYCORE_zevl0u.mp3"
  },
  {
    id: "celtic_moonsong",
    title: "Moonsong",
    artist: "Adrian von Ziegler",
    cover: "https://res.cloudinary.com/dh5ovya91/image/upload/v1757150193/music/covers/km9b6wprmsy9fboxuni6.png",
    src: "https://res.cloudinary.com/dh5ovya91/video/upload/v1757150199/music/k96daijgub4wslhfs5lr.mp3"
  },



];