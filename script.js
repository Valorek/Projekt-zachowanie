url = "https://imiki.pl/dane.json";

fetch(url)
    .then(response => { return response.text();
    })
    .then(fileContent => {
       dane(JSON.parse(fileContent));
  
    })
    .catch(error => {
        console.error('błąd json:', error);
    });

function dane(d){
  f = document.getElementById("a0");
  k = Object.keys(d).map(function(key) {
    return { key: key, value: d[key] };
  });
  for(let i = 0; i <= Object.keys(d).length; i++) {
   if(typeof(k[i].value.punkty) == "object") {
    z = k[i].value.punkty.p0 + "-"+ k[i].value.punkty.p1;
  } else {
    z = k[i].value.punkty;
  }
  f.innerHTML +="<option value='p"+i+"'>"+ k[i].value.pozycja + " [" + z + "]</option>";
  
  }

}


function dane(d) {
    f = document.getElementById("a0");
    k = Object.keys(d).map(function(key) {
      return { key: key, value: d[key] };
    });
    for (let i = 0; i < Object.keys(d).length; i++) {
      if (typeof k[i].value.punkty == "object") {
        z = k[i].value.punkty.p0 + "-" + k[i].value.punkty.p1;
      } else {
        z = k[i].value.punkty;
      }
      f.innerHTML +=
        "<option value='p" + i + "'>" +
        k[i].value.pozycja +
        " [" +
        z +
        "]</option>";
    }
  }
  
  function przeliczPunkty() {
    let punktyZachowanie = parseInt(document.getElementById("punktyZachowanie").value);
    let selectedOptions = document.getElementById("a0").selectedOptions;
    
    if (selectedOptions.length > 0) {
      let sumaPunktowZachowania = 0;
  
      // Iteruj po wybranych opcjach
      for (let i = 0; i < selectedOptions.length; i++) {
        // Pobierz indeks z opcji, na przykład "p0" -> 0
        let index = parseInt(selectedOptions[i].value.substring(1));
  
        // Sprawdź, czy istnieje taki indeks w danych
        if (index >= 0 && index < k.length) {
          // Jeśli punkty to obiekt, zsumuj punkty z zachowania
          let punktyZachowania = typeof k[index].value.punkty === "object" ? 
            k[index].value.punkty.p0 + k[index].value.punkty.p1 :
            k[index].value.punkty;
  
          // Dodaj punkty z zachowania do sumy
          sumaPunktowZachowania += punktyZachowania;
        } 
      }
  
      // Odejmij sumę punktów z zachowania od wprowadzonych punktów
      let wynik = punktyZachowanie - sumaPunktowZachowania;
      w=document.getElementById("wypluwacz")
      // Wyświetl wynik
      w.innerHTML="Wynik przeliczenia: " + wynik;
    } else {
        w.innerHTML="Wybierz przynajmniej jedną opcję z listy";
    }
  }
  