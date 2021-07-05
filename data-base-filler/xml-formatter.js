var data = {
  regions: [
    {
      name: "Rabat - Salé - Kénitra",
      cities: [
        {
          name: "Rabat",
          population: "533 960",

          facilities: [
            {
              name: "CENTRE SOCIO SPORTIF EL BOUSTAN",
              adresse: "Avenue Sophora",
            },

            {
              name: "MAISON DES JEUNES AL AMAL",
              adresse: "Avenue Al Massira, Rabat",
            },

            {
              name: "Centre de santé Chabanate",
              adresse: "Rue Abou Hayane Attahoudi،, Rabat",
            },
          ],
        },

        {
          name: "Kenitra",
          population: "473 703",
          facilities: [
            {
              name: "MAISON DES JEUNES ARBAOUA",
              adresse: "Maison des jeunes, Arbaoua",
            },
            {
              name: "CAIDAT OUED EL MAKHAZEN",
              adresse: "5 Rue, Oued El Makhazine 14000",
            },

            {
              name: "DAR TALIBA SIDI BOUBKER EL HAJ",
              adresse: "SIDI BOUBKER EL HAJ",
            },
          ],
        },
        {
          name: "Sale",
          population: "976 522",
          facilities: [
            {
              name: "lucien kleblanc bab lakhmiss",
              adresse: "Bab Lakhmiss, Avenue 2 Mars, Salé 11000",
            },
            {
              name: "Centre De Santé / Maternité El Arjate",
              adresse: "El Arjate, Centre",
            },

            {
              name: "centre socio-sportif de proximité lalla khadija",
              adresse: "Quartier Errahma",
            },
          ],
        },
      ],
    },
    {
      name: "Tanger - Tétouan - Al Hoceima",
      cities: [
        {
          name: "Tanger",
          population: "1 083 462",

          facilities: [
            {
              name: "Centre de Sante Jules Cot",
              adresse: "Place du 9 Avril 1947",
            },

            {
              name: "Centre de Santé Dradeb",
              adresse: "Route de la Plage Merkala",
            },

            {
              name: "centre de renforcement des capacités des jeunes",
              adresse: "Bni Makada, Tanger 90060",
            },
          ],
        },
        {
          name: "Tétouan",
          population: "1 083 462",
          facilities: [
            {
              name: " Salle couverte Tayeb Al Bakkali Taboula",
              adresse: "Voulevard Al Yassamine, Tétouan",
            },
            {
              name: "Hôpital Taboula",
              adresse: "Rue Hajj Al Hashimi Al Balghiti ",
            },

            {
              name: "Cite Scolaire-Avenue Mohamed 5",
              adresse: "Avenue Mohammed V",
            },
          ],
        },
        {
          name: "Al Hoceima",
          population: "105 000",
          facilities: [
            {
              name: "Centre de Santé Nekour",
              adresse: "Nekour El merkz",
            },
            {
              name: "SALLE COUVERTE 3 MARS AL HOCEIMA",
              adresse: "Rue Moussa Ben Nasir Al Hoceima",
            },

            {
              name: "COMPLEXE SOCIO-SPORTIF MIRADOR",
              adresse: "Hay Mirador",
            },
          ],
        },
      ],
    },
    {
      name: "Marrakech - Safi",
      cities: [
        {
          name: "Youssoufia",
          population: "81.563",

          facilities: [
            {
              name: "MAISON DES JEUNES AL AMAL",
              adresse: "Quarties El Amal",
            },

            {
              name: "Sidi Ahmed Youssoufia Centre de santé Communal",
              adresse: "Sidi Ahmed",
            },

            {
              name: "SALLE OMNISPORTS E1- OCP",
              adresse: "Quartier Laghdir",
            },
          ],
        },

        {
          name: "Marrakech",
          population: "966 987",
          facilities: [
            {
              name: "Ctre de Santé Riad Laarous",
              adresse: "Marrakech 40000, Rue E	l Gza",
            },
            {
              name: "Hôpital Cadi Ayyad",
              adresse: "Marrakech 40000, Rue Abi Hourayra",
            },

            {
              name: "Dispensaire Echouhada",
              adresse: "Marrakech 40000, Ave Al Barrada.",
            },
          ],
        },
        {
          name: "Safi",
          population: "317 976",
          facilities: [
            {
              name: "Centre de Santé Anas",
              adresse: "Safi, Quartier Anas",
            },
            {
              name: "Hôpital Okba Ibnou Nafiâ",
              adresse: "Rue Ibn Sina, Safi",
            },

            {
              name: "Centre de santé urbain biada",
              adresse: "Safi, Rue de l'Atlas",
            },
          ],
        },
      ],
    },
  ],
};

names = [
  "Karim al-Makki",
  "Youssouf Nedali",
  "Mhamed Daoud",
  "Lubaid Bourkia",
  "Brahim Lahbibi",
  "Jubair El Khayat",
  "Karim al-Makki",
  "Youssouf Nedali",
  "Mhamed Daoud",
  "Lubaid Bourkia",
  "Brahim Lahbibi",
  "Jubair El Khayat",
  "Driss Benchemsi",
  "Jibran Maadawi",
  "Abdelhak Rhozali",
  "Youssef Ben Bouchta",
  "Iyas Tazi",
  "Hakem Allal",
  "Baz al-Habib",
  "Noureddine Chafik",
  "Rachid Ben Jelloun",
  "Abdeslam Khammar",
  "Driss Sabbag",
  "Jabalah Benali",
  "Mujahid Laroui",
  "Ayham Taïa",
  "Hayyan Mrabet",
  "Wasif Ben Abdelaziz",
  "Ayoub El Aoufi",
  "Ismail Leghlid",
  "Marzuq Hajji",
  "Zaky Bennis",
  "El Hassan Elmandjra",
  "Iyas al-Fassi",
  "Youssouf El Ouazzani",
  "Jibran Belghiti",
  "Marzuq Hajji",
  "Zaky Bennis",
  "El Hassan Elmandjra",
  "Iyas al-Fassi",
  "Youssouf El Ouazzani",
  "Jibran Belghiti",
  "Abdelhak El-Hababi",
  "Hassan ibn al-Hassan",
  "Mimoun Trabelsi",
  "Elias Trabelsi",
  "Tanan Benjelloun",
  "El Houari El Moudden",
  "Shihab Hajji",
  "Waliedine Zniber",
  "Sadid Oufkir",
  "Rachid Mansouri",
  "Jaul al-Ghumari",
  "Zarif Benzakour",
  "Hamza Chatt",
  "Said Tobji",
  "Kadeen Lahbibi",
  "Zakwan Rabi",
  "Waqqas Mrabet",
  "Arwarh Choukri",
  "Simohamed Abécassis",
  "Zitane Benjelloun",
  "Lubaid Kabbal",
  "Thawab Lamrani",
  "Bilal Bourkia",
  "Tanan El Ouazzani",
  "Simohamed Abécassis",
  "Zitane Benjelloun",
  "Lubaid Kabbal",
  "Thawab Lamrani",
  "Bilal Bourkia",
  "Tanan El Ouazzani",
  "Habbab Jouahri",
  "Mostafa Mrabet",
  "Wasif Zafzaf",
  "Fayyad Ben Abdelaziz",
  "Abderrahman Batma",
  "Tazim Hajji",
  "Muwaffaq Abécassis",
  "Mujahid Kilito",
  "Muslih Binebine",
  "Abdelhamid El-Moustaoui",
  "Boutaje Rhozali",
  "Ali Siqli",
  "Mohammed El-Hababi",
  "Safwah Nissaboury",
  "Zarif ibn Mohammed",
  "Bilal Salem",
  "Ghali Akalay",
  "Hakem Akhrif",
  "Thamir Mernissi",
  "Jaul Ben Jelloun",
  "Jabalah Zrika",
  "Marzuq Mourad",
  "Rachid Torres",
  "Arwarh Allal",
  "Aminah Chraïbi",
  "Khatija Taïa",
  "Amal Mernissi",
  "Wadia Rhozali",
  "Jawaher Barbery",
  "Soulef al-Tayyeb",
  "Waliyah Binebine",
  "Tunaruz Zafrani",
  "Nurhayat Taïa",
  "Hasbia Akhrif",
  "Balqis al-Ghumari",
  "Zidana Laabi",
  "Lina al-Ghumari",
  "Najiha Elalamy",
  "Karima Bennouna",
  "Achoura Sahimi",
  "Zaheda Toufiq",
  "Aalia Zafrani",
  "Lina al-Ghumari",
  "Najiha Elalamy",
  "Karima Bennouna",
  "Achoura Sahimi",
  "Zaheda Toufiq",
  "Aalia Zafrani",
  "Bassima Raihani",
  "Ritwan Salem",
  "Safiyah Baka",
  "Fatiha Bouasria",
  "Benazir Bennis",
  "Fikriyah Hachim",
  "Fathiyah Seddiki",
  "Fatiha Chafik",
  "Nahila Bendahan",
  "Darifa El-Hababi",
  "Azeeza al-Tayyeb",
  "Ghazal El-Hababi",
  "Benazir Chaoui",
  "Fadeelah Rhozali",
  "Zhour Tobji",
  "Wedad Barbery",
  "Madiha al-Ghumari",
  "Jamila Benchemsi",
  "Ashwaq al-Jabri",
  "Nasra Azaykou",
  "Fatna Benmansour",
  "Enas Elalamy",
  "Mutah Kaghat",
  "Sara Sabbag",
  "Benazir Tawil",
  "Rahma Bikri",
  "Juman Qamari",
  "Saadet n’Ait",
  "Hamida Chraïbi",
  "Mutah Mernissi",
  "Zaheda Kilito",
  "Malika Hajji",
  "Khalila Mejjati",
  "Ghina al-Makki",
  "Hadeel Benmansour",
  "Choukria Binebine",
  "Hayat Bennani",
  "Hakima Trabelsi",
  "Nadah Mrabet",
  "Soulef Guennoun",
  "Charifa Maadawi",
  "Balqis Harrak",
  "Zayna Bahéchar",
  "Iman Mrabet",
  "Khatija Chraïbi",
  "Khadija El Ouazzani",
  "Hakima Toufiq",
  "Hadeel Lahbibi",
  "Maryam Mejjati",
  "Zohra Benchemsi",
  "Amira al-Habib",
  "Wedad Ben Bouchta",
  "Imane Ben Barka",
  "Nadia Ben Haddou",
  "Choumicha Idrissi",
  "Shahida Bendahan",
  "Soulef El Ouazzani",
  "Aminah Benchemsi",
  "Aziza ibn al-Hassan",
  "Fawz Yaktine",
  "Afalawas Azzam",
  "Axamukw Basher",
  "Ilayetmas Wakim",
  "Anzar Fahs",
  "Ameqwran Shakir",
  "Azzad Sani",
  "Yula Abdelnour",
  "Yukyan Safi",
  "Yeni Khalili",
  "Amezza Suleiman",
  "Ritwan al-Mokhtar",
  "Abal Berrada",
  "Mennana Hachim",
  "Najat Sefrioui",
  "Fattouch al-Fassi",
  "Yamina Batma",
  "Nadia Benmansour",
  "Fawza Skali",
  "Zaheda Laroui",
  "Takama Jouiti",
  "Zamen El Aoufi",
  "Ruhul Ibrahim",
  "Askari Azaykou",
  "Zitane Yassine",
  "Shihab Mrabet",
  "Ibrahim Skali",
  "Abderrahman Trabelsi",
  "Ridouane Zrika",
  "Mohammed Yaktine",
  "Abdellah Batma",
  "Mumina al-Jirari",
  "Enas al-Buzidi",
  "Yasmin Tazi",
  "Areej Bennani",
  "Hana Said",
  "Amal El Aoufi",
  "Fatna Ben Barka",
  "Shabana Benjelloun",
  "Nurhayat al-Makki",
  "Fadma Abdessalam",
  "Jamaldine El Aoufi",
  "Quraishi Trabelsi",
  "Hamid al-Tayyeb",
  "Jalal Ghallab",
  "Abdeslam al-Harradi",
  "Safwah al-Buzidi",
  "Ridouane Marouazi",
  "Mhamed Seddiki",
  "Rasil Assaraf",
  "Arwarh ibn Qasim",
  "Nabila al-Jirari",
  "Alina al-Ghumari",
  "Buhjah ibn Qasim",
  "Azhar Akhrif",
  "Nawar Ben Jelloun",
  "Athir ibn al-Hassan",
  "Hiyam Choukri",
  "Fattouch ibn al-Hasan",
  "Rahma Sibari",
  "Leila Kaghat",
  "Zubayr al-Habib",
  "Abdelaziz Taïa",
  "Said Bennani",
  "Adil Lemsih",
  "Amine Hocquard",
  "Dulamah Torres",
  "Mustapha Mourad",
  "Brahim Chaoui",
  "Ruhul Kabbal",
  "Suhaim Joumari",
  "Lamyaa al-Wazzani",
  "Wacila Abécassis",
  "Naima al-Jabri",
  "Namira Hajji",
  "Azhar Sibari",
  "Chaymaa Achtouk",
  "Kamar ibn Mohammed",
  "Yasmine Tabbal",
  "Fikriyah Mrabet",
  "Nejlae Ben Abdelaziz",
  "Rasil Bourequat",
  "Zaky Laroui",
  "Tazim Oufkir",
  "Quds ibn Qasim",
  "Habbab Benmansour",
  "Moosa Leghlid",
  "Wasim El-Hababi",
  "Iyas Barbery",
  "Muslih Binebine",
  "Zitane Tazi",
  "Quraishi Bouasria",
  "Abderrahman Yassine",
  "Iyas Qamari",
  "Jubair Ben Jelloun",
  "Karim Kabbal",
  "Younes Azaykou",
  "Adil Lahbabi",
  "Ruhul Kaghat",
  "Zaky Ghallab",
  "Thawab Ayouch",
  "Ayat Zniber",
  "Gawaher Sabbag",
  "Furat Achtouk",
  "Hadeel Azaykou",
  "Lina Kilito",
  "Nejlet Mounir",
  "Baysan Elalamy",
  "Areebah al-Buzidi",
  "Aisha Chaoui",
  "Dahbia Daoud",
  "Adil Taïa",
  "El Madani Nissaboury",
  "Ayser ibn al-Hassan",
  "Abdelkader Maadawi",
  "Amine Ben Barka",
  "Mourad Chatt",
  "Mujahid Chaoui",
  "Abderrahman Jouahri",
  "Tazim Sahimi",
  "Jamal Sefrioui",
  "Fikriyah Rabi",
  "Ashwaq Elalamy",
  "Azhar Sibari",
  "Kamar Hocquard",
  "Malika Mansouri",
  "Ghaydaa Nissaboury",
  "Khalila El-Ouadie",
  "Aminah al-Aziz",
  "Karima al-Buzidi",
  "Chama Laroui",
  "Aziz Joumari",
  "Zarif El Meliani",
  "Awadah Rhissassi",
  "Omar Ksikes",
  "Hamdan Yaktine",
  "Rifky El-Moustaoui",
  "Hamza Bikri",
  "Waliedine al-Fassi",
  "Fayyad Benjelloun",
  "Aqil Lahbabi",
  "Fathiyah Zrika",
  "Widian Sibari",
  "Latifa Ben Bouchta",
  "Ouarda Maadawi",
  "Khadisha Elmandjra",
  "Amina Benjelloun",
  "Hamida Diouri",
  "Zhour El Khayat",
  "Areebah Tazi",
  "Zohra al-Buzidi",
  "Ahmed Oulehri",
  "Tazim Bahéchar",
  "Brahim Bennouna",
  "Ziaul-Haq Ksikes",
  "Khalid Sabila",
  "Ayoub Hajji",
  "Omar Hachim",
  "Fouad Khammar",
  "Mohamed Batma",
  "Hayyan Zniber",
  "Moufida Benjelloun",
  "Ayat Baka",
  "Nurhayat Rhissassi",
  "Takama Serhane",
  "Busr Jouahri",
  "Islamia Siqli",
  "Balqis al-Tayyeb",
  "Shukriya Benchemsi",
  "Ghazal Sinaceur",
  "Rafika Nedali",
  "Abdelkarim Tobji",
  "Thamir Bourkia",
  "Jamaldine El Aoufi",
  "Jibran al-Aziz",
  "Rachid Akoujan",
  "Ismail Joumari",
  "Salamah Azaykou",
  "Girgis El Khayat",
  "Zaky ibn Qasim",
  "Hicham Jouiti",
  "Khadra Qamari",
  "Gehan Diouri",
  "Ayat Berrada",
  "Jumina Barbery",
  "Fatima Laabi",
  "Hlalia Siqli",
  "Choumicha Serhane",
  "Ubaida al-Fassi",
  "Islamia Sefrioui",
  "Nouria Mejjati",
  "Jaul El Ouazzani",
  "Thamir Abouzeid",
  "Fayyad Allal",
  "Dulamah Sabila",
  "El Bachir Lamrani",
  "Ali Marouazi",
  "Youssef al-Jabri",
  "Aqil Bouasria",
  "Kadeen al-Fassi",
  "Said Yaktine",
  "Nahila Ben Jelloun",
  "Zaheda al-Madini",
  "Zuleika ibn Qasim",
  "Hlalia Lahbabi",
  "Souad al-Harradi",
  "Dua al-Jirari",
  "Sanaa Chraïbi",
  "Samima Daoud",
  "Baysan Sinaceur",
  "Chahida Diouri",
  "Ruhul Maadawi",
  "Mourad El Ouazzani",
  "Dulamah Benchemsi",
  "Girgis El-Ouadie",
  "Rachid Barbery",
  "Driss Zniber",
  "Diwan Benmansour",
  "Ziaul-Haq Assaraf",
  "Mohamed Baka",
  "Bilal Akalay",
  "Chaymaa El Aoufi",
  "Khadisha Barakat",
  "Shayma Raihani",
  "Arifa Sahimi",
  "Zuheyra Lahlou",
  "Yasmine Bahéchar",
  "Achoura Maadawi",
  "Takama Bourequat",
  "Hakima Idrissi",
  "Karima Serhane",
  "Abdelkader Achtouk",
  "Attiq Tazi",
  "El Mahi al-Aziz",
  "Waqqas al-Harradi",
  "Hassan El Haloui",
  "Jamal Mrabet",
  "Amine Abouzeid",
  "Karim Azaykou",
  "Omar Toulali",
  "Sadid El Meliani",
  "Chifa Jouiti",
  "Nasra ibn al-Hassan",
  "Thorya Boukous",
  "Rashida Ferhat",
  "Fawza Barakat",
  "Nouria Elmandjra",
  "Chaymae Raihani",
  "Fiza Trabelsi",
  "Hanan Fadel",
  "Laila Hachim",
  "Abdelhak Qamari",
  "Quds Oufkir",
  "Amine Ben Haddou",
  "Ayham Rhozali",
  "Hicham Bourequat",
  "Abdelkarim Bennis",
  "Baz al-Habib",
  "Bilal Benmansour",
  "Rifky Jouiti",
  "Jabalah Tazi",
  "Azeeza Ben Hamed",
  "Athir Serhane",
  "Fahime Benjelloun",
  "Farizah al-Tayyeb",
  "Zidana Leghlid",
  "Islamia El Hajjam",
  "Saadia Harrak",
  "Ouarda Mansouri",
  "Yamina Baka",
  "Chaymae Ibrahim",
  "Zitane Mernissi",
  "Youssouf al-Jirari",
  "Attiq Lemsih",
  "Hadir Mourad",
  "Sadid Sabbag",
  "Diwan Zafzaf",
  "Ali Zniber",
  "Hakem El Meliani",
  "Ibrahim Siqli",
  "Abdullah Achtouk",
  "Yamina Said",
  "Samira ibn al-Hasan",
  "Madiha Kilito",
  "Amsah Seddiki",
  "Hachmia Abécassis",
  "Zairah Mansouri",
  "Dunyana El Maleh",
  "Waad Hachim",
  "Summayyah Hajji",
  "Nurhayat al-Fassi",
  "Mohammed Idrissi",
  "Jubair Ayouch",
  "Abdullah Choukri",
  "Awadah Benzakour",
  "Zeyn Nissaboury",
  "Aziz Mejjati",
  "Abdelkarim Sabila",
  "Adil al-Ghumari",
  "Ziaul-Haq Sabbag",
  "Khalid El Aoufi",
  "Maryam Marouazi",
  "Fawz El-Ouadie",
  "Hakima Tazi",
  "Hikma Rabi",
  "Sayeda ibn Qasim",
  "Fattouch Diouri",
  "Aaliyah El Hajjam",
  "Gohar Saqqat",
  "Namira Akoujan",
  "Rahida Akalay",
  "Mostafa Bourequat",
  "Amaniyy Ayouch",
  "Jabalah Barbery",
  "Zarif Salem",
  "Asil Nissaboury",
  "Ikrimah Rhissassi",
  "Farid Diouri",
  "Amrane n’Ait",
  "Quraishi al-Ghumari",
  "Waliedine Hachim",
  "Balqis Laroui",
  "Safiyah Choukri",
  "Chahida Leghlid",
  "Ghaada Oulehri",
  "Fikriyah Joumari",
  "Rashida Bikri",
  "Furat Bouasria",
  "Asrar Rhissassi",
  "Halima Bouzfour",
  "Raghad Akalay",
  "Khalid Ibrahim",
  "Samir El-Hababi",
  "Adil Ben Haddou",
  "Baariq al-Jirari",
  "Moosa Ben Jelloun",
  "Faqih Tazi",
  "Asil El Hajjam",
  "Sofian al-Harradi",
  "Mujahid Benchemsi",
  "Ayser Mourad",
  "Enas El Haloui",
  "Isra Chafik",
  "Jamila Joumari",
  "Menena Rabi",
  "Wijdane El Hachmi",
  "Sanae Barakat",
  "Hadeel Chaoui",
  "Halima Maadawi",
  "Azhar Akalay",
  "Hasbia Bouzfour",
  "Zaky Saqqat",
  "Dulamah Idrissi",
  "Said Akhrif",
  "Iyas Achaari",
  "Hicham Tazi",
  "Abdelhamid Rhissassi",
  "Rasil Belghiti",
  "Noureddine Zafzaf",
  "Attiq Serhane",
  "Jibran Bennouna",
  "Aziza Abdessalam",
  "Yaram al-Tayyeb",
  "Farizah Marouazi",
  "Zuheyra Berrada",
  "Yamina Khammar",
  "Fikriyah El Haloui",
  "Ahlam Akalay",
  "Rahma Laabi",
  "Khadisha Bennis",
  "Sara El Khouri",
  "Yassine ibn Qasim",
  "Kadeen Barakat",
  "Moosa Lamrani",
  "Rasil al-Jirari",
  "Jamaldine Hajji",
  "Elias Harrak",
  "Waqqas Mrabet",
  "Ayoub Zafrani",
  "Abdelhak El Maleh",
  "Shihab al-Fassi",
  "Balqis El Khouri",
  "Enas ibn Mohammed",
  "Nouria al-Habib",
  "Hamida El Moudden",
  "Racha Chaoui",
  "Imane al-Fassi",
  "Anamar Yassine",
  "Mumina al-Wazzani",
  "Khadra Tabbal",
  "Wijdane Lmrabet",
  "Abdelmajid Bennouna",
  "Yassine Abdessalam",
  "Mujahid Mernissi",
  "Mourad Ben Haddou",
  "Ahmed Ferhat",
  "Thawab Mrabet",
  "Ismail Lamrani",
  "Ayham El Meliani",
  "Abdellatif Hachim",
  "Waqqas Bennani",
  "Maryam Toulali",
  "Siham Lemsih",
  "Saida El Hachmi",
  "Ghaydaa Achtouk",
  "Habiba Hajji",
  "Mina El Aoufi",
  "Mumina Zafzaf",
  "Choukria Elalamy",
  "Khadija Tazi",
  "Gohar Baka",
  "Abderrahim El Hachmi",
  "Abdeslam Laroui",
  "Hamza Torres",
  "Amine Oufkir",
  "Ahmed al-Madini",
  "Wasim Bourequat",
  "Ibrahim Bahéchar",
  "Jaul Lahbabi",
  "Mourad Allal",
  "Abdelhak al-Jabri",
  "Atyaf Mounir",
  "Zuheyra El Hachmi",
  "Chama Bennis",
  "Nurhayat Haddani",
  "Zayna Ben Bouchta",
  "Safura Joumari",
  "Sayeda Benali",
  "Batoul Lalami",
  "Samara El Haloui",
  "Mina al-Jabri",
  "Moulham Oulehri",
  "Simohamed Mrabet",
  "Waqqas Tazi",
  "Mohammed al-Makki",
  "El Madani Ben Bouchta",
  "Tarik Nissaboury",
  "Fayaaz Guennoun",
  "Marzuq Mourad",
  "Amaniyy Laroui",
  "Salamah Harrak",
  "Fawz ibn al-Hassan",
  "Ikram Ben Haddou",
  "Hachmia Ghallab",
  "Jihane al-Fassi",
  "Hajar Trabelsi",
  "Salma Zniber",
  "Fikriyah Sefrioui",
  "Shenaz Akoujan",
  "Masuda Choukri",
  "Mansura Ben Abdelaziz",
];

function generateCareFacility(city,invitedPeopleMax) {
  var Responsable = generatingRandomPerson(city, false);
  var doctors = [];
  var nurses = [];
  var invites = [];
  var absentPeopleCins = [];

  humanResource = nursesAndDoctorsGenerator(doctors, nurses, 10, city);
  generateInvitedPeople(invites, 250, invitedPeopleMax, city);
  generateInvitedPeople(absentPeopleCins, 10, 50, city);

  tools = {
    bedNumber: generateRandomNumber(100, 1000),
    injectionNumber: generateRandomNumber(100, 1000),
  };

  return {
    facilityResponsable: Responsable,
    availableResource: { humanResource: humanResource, tools: tools },
    invitedPeople: invites,
    absentPeople: absentPeopleCins,
  };
}

function generateVaccinatedPeople(min, max, city) {
  generatedPeople = [];
  for (let i = 0; i < generateRandomNumber(min, max); ++i) {
    generatedPeople.push(generatingRandomPerson(city, true));
  }
  return generatedPeople;
}
function generateRandomNumber(min, max) {
  return min + Math.random() * (max - min);
}
function generateInvitedPeople(invitees, min, max, city) {
  for (let i = 1; i < generateRandomNumber(min, max); ++i) {
    person = generatingRandomPerson(city, false);
    start = new Date();
    end = new Date(2022, 05, 25);
    person.doseDate = new Date(
      start.getTime() +
        Math.floor(Math.random() * (end.getTime() - start.getTime()))
    );
    person.doseDate = person.doseDate.toLocaleDateString("en-US")
    invitees.push(person);
  }
}

function nursesAndDoctorsGenerator(doctors, nurses, dcNumber, city) {

  for (let i = 1; i < generateRandomNumber(1, dcNumber); ++i) {
    doctors.push(generatingRandomPerson(city, false));

    for (let j = 1; j < 3 + Math.round(Math.random(3)); ++j) {
      nurses.push(generatingRandomPerson(city, false));
    }

  }

  return { doctors: doctors, nurses: nurses };
}

function generatingRandomPerson(city, ageDateDependecy) {
  var vaccinatedDate = randomDate();
  var age;
  _30Y = new Date(2021, 6, 30);
  _35Y = new Date(2021, 4, 30);
  _40Y = new Date(2021, 3, 30);
  _50Y = new Date(2021, 2, 30);
  _60Y = new Date(2021, 1, 30);
  _plus70Y = new Date(2021, 0, 30);

  if (ageDateDependecy == true) {
    if (vaccinatedDate <= _plus70Y) {
      age = generateRandomNumber(70, 90);
    } else if (vaccinatedDate <= _60Y && vaccinatedDate > _plus70Y) {
      age = generateRandomNumber(60, 70);
    } else if (vaccinatedDate <= _50Y && vaccinatedDate > _60Y) {
      age = generateRandomNumber(50, 60);
    } else if (vaccinatedDate <= _40Y && vaccinatedDate > _50Y) {
      age = generateRandomNumber(40, 50);
    } else if (vaccinatedDate <= _35Y && vaccinatedDate > _40Y) {
      age = generateRandomNumber(35, 40);
    } else if ((vaccinatedDate) <= _30Y && vaccinatedDate > _35Y) {
      age = generateRandomNumber(25, 35);
    }
  } else {
    age = 25 + Math.floor(Math.random() * 10);
  }
  person = {
    age: Math.ceil(age),
    name: generateRandomName(),
    dose: generateRandomDose(),
    doseDate: vaccinatedDate.toLocaleDateString("en-US"),
    sideEffect: sideEffectRandomGenerator(),
    cin: cinGenerator(city),
    phone: generateRandomPhone(),
  };
  return person;
}

function generateRandomName() {
  let index = Math.floor(0 + Math.random() * 630);
  return names[index];
}


function generateRandomGender() {
  return Math.random() > 0.5 ? "male" : "female";
}
function generateRandomDose() {
  return Math.round(1 + Math.random());
}
function randomDate() {
  start = new Date(2021, 0, 25);
  end = new Date(2021,6,7);
  return new Date(
    start.getTime() +
      Math.floor(Math.random() * (end.getTime() - start.getTime()))
  );
}


function sideEffectRandomGenerator() {
  return Math.random() > 0.95 ? "Oui" : "Non";
}

function cinGenerator(city) {
  
  let chosenArray = [];

  if (city == "Rabat") {
    chosenArray = ["A", "AA", "AD"];
  } else if (city == "Kenitra") {
    chosenArray = ["G"];
  } else if (city == "Sale") {
    chosenArray = ["AB", "AE"];
  } else if (city == "Tanger") {
    chosenArray = ["K", "KB"];
  } else if (city == "Tétouan") {
    chosenArray = ["L"];
  } else if (city == "Al Hoceima") {
    chosenArray = ["R"];
  } else if (city == "Youssoufia") {
    chosenArray = ["H", "HA"];
  } else if (city == "Marrakech") {
    chosenArray = ["E", "EE"];
  } else if (city == "Safi") {
    chosenArray = ["H", "HH"];
  }

  return (
    chosenArray[Math.floor(Math.random() * chosenArray.length)] +
    (100000 + Math.floor(Math.random() * (9999999 - 100000)))
  );
}

function generateRandomPhone() {
  return "06" + Math.floor(10000000 + Math.random() * (99999999 - 10000000));
}


function generateStation(city, stationNumber,scale) {
	var doctors = [];
	var nurses = [];
	
	max = Math.round(scale)
	min = Math.round(scale/10)
	dcNumber = Math.round((scale/10) * 1/2)
	tools = {
	  bedNumber: Math.round(generateRandomNumber(min, max)),
	  injectionNumber: Math.round(generateRandomNumber(min, max)),
	};
  
	nursesAndDoctorsGenerator(doctors, nurses, dcNumber, city);
  
	doctorNumber = doctors.length;
	nursesNumber = nurses.length;
  
	inDemandeResource = {
	  humanResource: {
		doctorNumber: doctorNumber,
		nursesNumber: nursesNumber,
	  },
	  tools: tools,
	};
  
	doctors = [];
	nurses = [];
  
	nursesAndDoctorsGenerator(doctors, nurses, dcNumber * 2, city);
	tools = {
	  bedNumber: Math.round(generateRandomNumber(100, max*5)),
	  injectionNumber: Math.round(generateRandomNumber(100, min*5)),
	};
  
	usedResource = {
	  humanResource: {
		doctors: doctors,
		nurses: nurses,
	  },
	  tools: tools,
	};
  
  
	vacTypes = ["Sinopharm", "AstraZeneca"];
	let index = Math.round(Math.random() * 1);
	avlblVacineType = vacTypes[index];
  
	avlblVacinNumber = 250 + Math.floor(Math.random() * scale * 2);
	acceptedHumanRate = 250 + Math.round(Math.random() * scale * 2);;
  
	medicalTeamNumber = Math.floor(Date.now() / 1000000000);
  
	vacinatedPeople = generateVaccinatedPeople(1, 50 , city);
  
	return {
	  vacType: avlblVacineType,
	  vacNum: avlblVacinNumber,
	  acceptedHumanRate: acceptedHumanRate,
	  usedResource: usedResource,
	  inDemandeResource: inDemandeResource,
	  vacinatedPeople: vacinatedPeople,
	  stationNumber:stationNumber,
    medicalTeamNumber:medicalTeamNumber,
	};
  }




  console.log(( "<Vaccination>" + "\n"))

	data.regions.forEach(
		(region,index) =>{


      console.log(("<Region>" + "\n"))
			console.log("<Name>" + region.name + "</Name>"  +"\n")
	
			
			region.cities.forEach(
				(city) => {

				  console.log("<City>" + "\n")
					console.log(`<City_name>${city.name}</City_name>` + "\n")
					console.log(`<Popullation>${city.population}</Popullation>` + "\n")
					
				

					city.facilities.forEach(
						(facility,index) =>
            {
              console.log(` 
							<Care_facility Facility_id="${parseInt(index + 1)}">
							<Facility_name>${facility.name}</Facility_name>
							<Facility_adresse>${facility.adresse}</Facility_adresse>							
							`)
	

				
							


								facilityAditionalInfos = generateCareFacility(city.name,400);
			



								console.log(` 
        
								<Responsable>
								<name>${facilityAditionalInfos.facilityResponsable.name}</name>						
								<phone>${facilityAditionalInfos.facilityResponsable.phone}</phone>                        			
								</Responsable>								
								<Available_resources>
								<Human_resource>
								`)


								           
								

							
			
				
								facilityAditionalInfos.availableResource.humanResource.doctors.forEach(
									(doctor) => {
					
										console.log(`			
										<Doctor>
										<name>${doctor.name}</name>
										<phone>${doctor.phone}</phone>				
										</Doctor>
										
										`)
									}
								)


								facilityAditionalInfos.availableResource.humanResource.nurses.forEach(
									(nurse) => {

										console.log(`
                    <Nurse>
										<name>${nurse.name}</name>
										<phone>${nurse.phone}</phone>
										</Nurse>
										`)
									}
								)

              console.log(`</Human_resource>
							<Tools>
							<Bed_number>${Math.round(facilityAditionalInfos.availableResource.tools.bedNumber)}</Bed_number>
							<Injection_shots_number>${Math.round(facilityAditionalInfos.availableResource.tools.injectionNumber)}</Injection_shots_number>
							</Tools>
              </Available_resources>
							<Invited_people>
							`)

						

					
								
							facilityAditionalInfos.invitedPeople.forEach(
									(invitee)=>
									{
										console.log(`
										<invitee>
										<CIN>${invitee.cin}</CIN>
					          <Invite_date>${invitee.doseDate}</Invite_date>
                    <Station_nbr>${ Math.round( 1 + Math.random() * 2)}</Station_nbr>
										</invitee>
										`)
									}
								)

                console.log(`
						</Invited_people>
						<Absent_people>
						`)
								facilityAditionalInfos.absentPeople.forEach(
									(absent)=>
									{
                    
										console.log(`<CIN>${absent.cin}</CIN>`)
	
									}
								)

							
							
            console.log(`</Absent_people>`)


								for(let j=1; j<4;++j){
											
				
						
									station = generateStation(city.name, j,100);
	


									console.log(`
									<Vaccination_station Station_nbr="${j}">

									<Medical_team Team_id="${Math.round(station.medicalTeamNumber*Math.random())}" />
									<vacc_type>${station.vacType}</vacc_type>
									<avlb_vacc_nbr>${station.vacNum}</avlb_vacc_nbr>
									<accepted_human_rate_per_day>${station.acceptedHumanRate}</accepted_human_rate_per_day>							
									<InDemande_resources>
									<Human_resources>
										<Doctor_nbr>${station.inDemandeResource.humanResource.doctorNumber}</Doctor_nbr>
										<Nurses_nbr>${station.inDemandeResource.humanResource.nursesNumber}</Nurses_nbr>
									</Human_resources>
									<Tools>
										<Bed_number>${station.inDemandeResource.tools.bedNumber}</Bed_number>
										<Injection_shots_number>${station.inDemandeResource.tools.injectionNumber}</Injection_shots_number>
									</Tools>
								</InDemande_resources>				
									`)


								
									
									console.log(`
									<Used_resources>
									<Human_resources>
									`)

									station.usedResource.humanResource.doctors.forEach(
										(doctor)=>{
											console.log(`
											<Doctor>
											<name>${doctor.name}</name>
											<phone>${doctor.phone}</phone>
                      </Doctor>
											`
                      )
										}
									)

									station.usedResource.humanResource.doctors.forEach(
										(nurse)=>{
											console.log(`
											<Nurse>
											<name>${nurse.name}</name>			
											<phone>${nurse.phone}</phone>
											</Nurse>
											`)
										}
									)

									console.log(`
                  </Human_resources>
									<Tools>
									<Bed_number>${station.usedResource.tools.bedNumber}</Bed_number>
									<Injection_shots_number>${station.usedResource.tools.injectionNumber}</Injection_shots_number>
									</Tools>								
									</Used_resources>
                  <Vaccinated_people>
									`)
								

									station.vacinatedPeople.forEach(
										(person) =>{

                      

                      console.log(`<Person CIN="${person.cin}">
                        <Name>${person.name}</Name>
                        <Age>${	person.age}</Age>
                        <Dose_number>${person.dose}</Dose_number>
                        <Dose_date>${person.doseDate}</Dose_date>
                        <Phone_nbr>${ Math.random() > 0.5 ? person.phone: '' }</Phone_nbr>
                        <Adresse></Adresse>
                        <Side_effects>${person.sideEffect}</Side_effects>
                      </Person>
                      `
                      )
          
                   


										
											
											
											
											
											
											
										}
									)
                  
                  console.log("</Vaccinated_people>")

                  console.log("</Vaccination_station>")
								}
            
                
						

							console.log(`


              
              </Care_facility>
              
              `)
						}
            
					)

					console.log("</City>")
          var test = "test";
				}
			)

      console.log("</Region>") ;

		}
	)



