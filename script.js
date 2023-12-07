const daneUjemne = {
  "p0": {
    "pozycja": "palenie",
    "punkty": {
      "p0": 50,
      "p1": 100
    }
  },
  "p1": {
    "pozycja": "Nagana Rady Pedagogicznej",
    "punkty": 400
  },
  "p2": {
    "pozycja": "Nagana Dyrektora",
    "punkty": 300
  },
  "p3": {
    "pozycja": "Upomnienie Dyrektora",
    "punkty": 150
  },
  "p4": {
    "pozycja": "Nagana wychowawcy",
    "punkty": 100
  },
  "p5": {
    "pozycja": "pomnienie wychowawcy",
    "punkty": 50
  },
  "p6": {
    "pozycja": "Uwaga za naganne zachowanie w czasie zajęć",
    "punkty": 15
  },
  "p7": {
    "pozycja": "Uwaga za naganne zachowanie w czasie zbiorowych imprez",
    "punkty": 30
  },
  "p8": {
    "pozycja": "podrabianie dokumentów szkolnych",
    "punkty": 100
  },
  "p9": {
    "pozycja": "Wandalizm",
    "punkty": {
      "p0": 20,
      "p1": 50
    }
  },
  "p10": {
    "pozycja": "Aroganckie zachowanie",
    "punkty": {
      "p0": 50,
      "p1": 100
    }
  },
  "p11": {
    "pozycja": "Zaczepki słowne i fizyczne",
    "punkty": {
      "p0": 50,
      "p1": 100
    }
  },
  "p12": {
    "pozycja": "Wulgarne słownictwo",
    "punkty": 20
  },
  "p13": {
    "pozycja": "Niewykonywanie poleceń nauczyciela i innych pracowników szkoły",
    "punkty": 20
  },
  "p14": {
    "pozycja": "Niewywiązywanie się ze zobowiązań",
    "punkty": 20
  },
  "p15": {
    "pozycja": "Niewywiązywanie się ze zobowiązań reprezentantów szkoły",
    "punkty": 30
  },
  "p16": {
    "pozycja": "Nieprzestrzeganie przepisów BHP",
    "punkty": 15
  },
  "p17": {
    "pozycja": "Za każdą opuszczoną godzinę bez usprawiedliwienia",
    "punkty": 3
  },
  "p18": {
    "pozycja": "Za każdą opuszczoną godzinę bez usprawiedliwienia w dniu odrabiania zajęć szkolnych",
    "punkty": 5
  },
  "p19": {
    "pozycja": "Za zbiorową ucieczkę z zajęć lekcyjnych",
    "punkty": 20
  },
  "p20": {
    "pozycja": "Spóźnienia",
    "punkty": 1
  },
  "p21": {
    "pozycja": "Zaśmiecanie szkoły i jej otoczenia",
    "punkty": 10
  },
  "p22": {
    "pozycja": "Korzystanie z telefonu komórkowego w czasie lekcji",
    "punkty": {
      "p0": 30,
      "p1": 50
    }
  }
};
Popieranie_danych(daneUjemne, "a0");

const daneDodatnie = {
  "p1": {
    "pozycja": "Udział w olimpiadzie przedmiotowej",
    "punkty": "10-100"
  },
  "p2": {
    "pozycja": "Udział w konkursie szkolnym udział",
    "punkty": "20-30"
  },
  "p3": {
    "pozycja": "Udział w konkursie pozaszkolnym",
    "punkty": "10-100"
  },
  "p4": {
    "pozycja": "Udział w zawodach sportowych",
    "punkty": "5-40"
  },
  "p5": {
    "pozycja": "Funkcje społeczne w klasie",
    "punkty": "10-50"
  },
  "p6": {
    "pozycja": "Praca społeczna",
    "punkty": "3-5"
  },
  "p7": {
    "pozycja": "Uczestnictwo w zorganizowanych zajęciach pozalekcyjnych",
    "punkty": 20
  },
  "p8": {
    "pozycja": "Honorowe krwiodawstwo, wolontariat za każdą akcję",
    "punkty": 30
  },
  "p9": {
    "pozycja": "Frekwencja od 90 %",
    "punkty": {
      "od 95 %": 50,
      "od 98 %": 70
    }
  },
  "p10": {
    "pozycja": "Do dyspozycji wychowawców klas programowo najwyższych po konsultacji z zespołem nauczycieli",
    "punkty": "0-50"
  },
  "p11": {
    "pozycja": "Stosunek do obowiązków szkolnych po konsultacji z zespołem nauczycieli",
    "punkty": "0-30"
  },
  "p12": {
    "pozycja": "Kultura osobista po konsultacji z zespołem nauczycieli",
    "punkty": "0-30"
  },
  "p13": {
    "pozycja": "Pomoc koleżeńska uzgodniona z wychowawcą klasy",
    "punkty": "0-20"
  }
};
Popieranie_danych(daneDodatnie, "b0");

function Popieranie_danych(d, formId) {
  const selectElement = document.getElementById(formId);

  Object.keys(d).forEach(key => {
      const value = d[key];

      let z;
      if (typeof value.punkty === "object") {
          z = `${value.punkty.p0}-${value.punkty.p1}`;
      } else {
          z = value.punkty;
      }


      const option = document.createElement("option");

      option.value = `p${key}`;
      option.textContent = `${value.pozycja} [${z}]`;


      selectElement.appendChild(option);
  });

  selectElement.addEventListener("change", function () {
      const selectedOption = this.options[this.selectedIndex];
      wywolaj(d[selectedOption.value.substring(1)]);
  });
}

function wywolaj(value) {
  const wypluwacz = document.getElementById("wypluwacz");
  if (typeof value.punkty === "object") {
      wypluwacz.textContent = `${value.punkty.p0}-${value.punkty.p1}`;
  } else {
      wypluwacz.textContent = value.punkty;
  }
}
