const menuItems = document.querySelectorAll(".menu-item");
const contentSections = document.querySelectorAll(".content-section");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-target");

    menuItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    contentSections.forEach((section) => {
      section.style.display = section.id === `content-${target}` ? "block" : "none";
    });
  });
});

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelectorAll(".content-section").forEach((section) => {
      section.scrollTop = 0;
    });

    if (this.getAttribute("data-target") === "spieler") {
      document.querySelector("#content-spieler .player-list").scrollTop = 0;
    }
  });
});

// ###########################################################################################
// Spieler Script
// ###########################################################################################
document.getElementById("searchPlayer").addEventListener("input", function () {
  const filterText = this.value.toLowerCase();
  const isNumber = /^\d+$/.test(filterText);
  const players = document.querySelectorAll(".player-item");

  players.forEach((player) => {
    const playerName = player.querySelector(".player-name").textContent.toLowerCase();
    const playerId = player.querySelector(".player-id").textContent.toLowerCase();

    if (isNumber) {
      if (playerId.includes(filterText)) {
        player.style.display = "flex";
      } else {
        player.style.display = "none";
      }
    } else {
      if (playerName.includes(filterText)) {
        player.style.display = "flex";
      } else {
        player.style.display = "none";
      }
    }
  });
});

// ###########################################################################################
// Spieler Script Popup
// ###########################################################################################
document.querySelectorAll(".player-item").forEach((item) => {
  item.addEventListener("click", () => {
    const playerName = item.querySelector(".player-name").textContent;
    const playerId = item.querySelector(".player-id").textContent.replace("ID: ", "");

    document.getElementById("playerNameId").textContent = `${playerName} (ID: ${playerId})`;

    document.getElementById("playerPopup").style.display = "block";
    document.querySelector(".window-container").classList.add("blur");
  });
});

document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("playerPopup").style.display = "none";
  document.querySelector(".window-container").classList.remove("blur");
});

window.addEventListener("click", (event) => {
  if (event.target === document.getElementById("playerPopup")) {
    document.getElementById("playerPopup").style.display = "none";
    document.querySelector(".window-container").classList.remove("blur");
  }
});

document.querySelectorAll(".player-item").forEach((item) => {
  item.addEventListener("click", () => {
    const playerName = item.querySelector(".player-name").textContent;
    const playerId = item.querySelector(".player-id").textContent.replace("ID: ", "");

    document.getElementById("playerNameId").textContent = `${playerName} (ID: ${playerId})`;

    document.getElementById("playerPopup").style.display = "block";
    document.querySelector(".window-container").classList.add("blur");
  });
});

// Spieler kicken
document.querySelector(".kick").addEventListener("click", function () {
  console.log("Spieler gekickt");
  // Hier könnte die Funktion zum Kicken des Spielers implementiert werden
});

// Spieler bannen
document.querySelector(".ban").addEventListener("click", function () {
  console.log("Spieler gebannt");
  // Hier könnte die Funktion zum Bannen des Spielers implementiert werden
});

// Zum Spieler teleportieren
document.querySelector(".tpto").addEventListener("click", function () {
  console.log("Zum Spieler teleportiert");
  // Hier könnte die Funktion zum Teleportieren zum Spieler implementiert werden
});

// Spieler zu mir teleportieren
document.querySelector(".tpme").addEventListener("click", function () {
  console.log("Spieler zu mir teleportiert");
  // Hier könnte die Funktion zum Teleportieren des Spielers zu mir implementiert werden
});

// Spieler zuschauen
document.querySelector(".spectate").addEventListener("click", function () {
  console.log("Spieler wird beobachtet");
  // Hier könnte die Funktion zum Zuschauen des Spielers implementiert werden
});

// Spieler wiederbeleben
document.querySelector(".revive").addEventListener("click", function () {
  console.log("Spieler wiederbelebt");
  // Hier könnte die Funktion zum Wiederbeleben des Spielers implementiert werden
});

// Spieler auf der Karte anzeigen
document.querySelector(".posway").addEventListener("click", function () {
  console.log("Spieler auf der Karte angezeigt");
  // Hier könnte die Funktion zum Anzeigen des Spielers auf der Karte implementiert werden
});

// Fraktionsdienst aktivieren
document.querySelector(".frakduty").addEventListener("click", function () {
  console.log("Fraktionsdienst für Spieler aktiviert");
  // Hier könnte die Funktion zum Aktivieren des Fraktionsdienstes für den Spieler implementiert werden
});

// Firmendienst aktivieren
document.querySelector(".comduty").addEventListener("click", function () {
  console.log("Firmendienst für Spieler aktiviert");
  // Hier könnte die Funktion zum Aktivieren des Firmendienstes für den Spieler implementiert werden
});

// Fraktion setzen
document.querySelector(".setfrak").addEventListener("click", function () {
  const selectedFraktion = document.getElementById("fraktionDropdown").value;
  console.log(`Fraktion für Spieler gesetzt auf: ${selectedFraktion}`);
  // Hier könnte die Funktion zum Setzen der Fraktion für den Spieler implementiert werden
});

// Firma setzen
document.querySelector(".setcomp").addEventListener("click", function () {
  const selectedCompany = document.getElementById("companyDropdown").value;
  console.log(`Firma für Spieler gesetzt auf: ${selectedCompany}`);
  // Hier könnte die Funktion zum Setzen der Firma für den Spieler implementiert werden
});

// Item geben
document.querySelector(".btn-secondary").addEventListener("click", function () {
  const itemName = document.getElementById("itemName").value;
  console.log(`Item an Spieler gegeben: ${itemName}`);
  // Hier könnte die Funktion zum Geben eines Items an den Spieler implementiert werden
});

// ###########################################################################################
// Fahrzeuge Script
// ###########################################################################################
document.getElementById("searchVehicle").addEventListener("input", function () {
  const filterText = this.value.toLowerCase();
  const category = document.getElementById("searchCategory").value;
  const vehicles = document.querySelectorAll(".vehicle-item");

  vehicles.forEach((vehicle) => {
    const model = vehicle.querySelector(".vehicle-model").textContent.toLowerCase();
    const license = vehicle.querySelector(".vehicle-license").textContent.toLowerCase();
    const id = vehicle.querySelector(".vehicle-id").textContent.toLowerCase().replace("id: ", "");

    let matches = false;

    if (category === "model" && model.includes(filterText)) {
      matches = true;
    } else if (category === "license" && license.includes(filterText)) {
      matches = true;
    } else if (category === "id" && id.includes(filterText)) {
      matches = true;
    }

    vehicle.style.display = matches ? "grid" : "none";
  });
});

// ###########################################################################################
// Fahrzeuge Script Popup
// ###########################################################################################
document.querySelectorAll(".vehicle-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById("vehicleCompany").textContent = "Testfirma";
    document.getElementById("vehicleOwner").textContent = "Testspieler";
    document.getElementById("vehicleLocation").textContent = "Teststandort";

    document.getElementById("vehiclePopup").style.display = "block";
    document.querySelector(".window-container").classList.add("blur");
  });
});

document.querySelector("#vehiclePopup .close-btn").addEventListener("click", () => {
  document.getElementById("vehiclePopup").style.display = "none";
  document.querySelector(".window-container").classList.remove("blur");
});

window.addEventListener("click", (event) => {
  if (event.target === document.getElementById("vehiclePopup")) {
    document.getElementById("vehiclePopup").style.display = "none";
    document.querySelector(".window-container").classList.remove("blur");
  }
});

// Kennzeichen ändern
document.getElementById("changeLicensePlate").addEventListener("click", function () {
  const newPlate = document.getElementById("newLicensePlate").value;
  if (newPlate) {
    console.log(`Kennzeichen geändert zu: ${newPlate}`);
    // Hier kannst du die Funktionalität zum Ändern des Kennzeichens implementieren
  } else {
    console.log("Bitte gib ein gültiges Kennzeichen ein.");
  }
});

// Garage ändern
document.getElementById("changeGarage").addEventListener("click", function () {
  const selectedGarage = document.getElementById("garageDropdown").value;
  console.log(`Garage geändert zu: ${selectedGarage}`);
  // Hier kannst du die Funktionalität zum Ändern der Garage implementieren
});

// Teleportieren des Fahrzeugs zu dir
document.getElementById("teleportToMe").addEventListener("click", function () {
  console.log("Fahrzeug zu mir teleportiert");
  // Hier kommt die Funktion für das Teleportieren des Fahrzeugs zu dir
});

// Zum Fahrzeug teleportieren
document.getElementById("teleportToVehicle").addEventListener("click", function () {
  console.log("Zum Fahrzeug teleportiert");
  // Hier kommt die Funktion für das Teleportieren zum Fahrzeug
});

// Fahrzeug auf der Karte anzeigen
document.getElementById("showOnMap").addEventListener("click", function () {
  console.log("Fahrzeug auf der Karte angezeigt");
  // Hier kannst du die Funktionalität zum Anzeigen auf der Karte implementieren
});

// Fahrzeug einparken
document.getElementById("parkVehicle").addEventListener("click", function () {
  console.log("Fahrzeug eingeparkt");
  // Hier kannst du die Funktionalität zum Einparken des Fahrzeugs implementieren
});

// Fahrzeug reparieren
document.getElementById("repairVehicle").addEventListener("click", function () {
  console.log("Fahrzeug repariert");
  // Hier kannst du die Funktionalität zum Reparieren des Fahrzeugs implementieren
});

// ###########################################################################################
// Fahrzeuge Script Add New Vehicle Popup
// ###########################################################################################

// Popup öffnen
document.getElementById("addVehicleBtn").addEventListener("click", function () {
  document.querySelector(".window-container").classList.add("blur");
  document.getElementById("newVehiclePopup").style.display = "block";
});

// Popup schließen
document.getElementById("closePopup").addEventListener("click", function () {
  document.querySelector(".window-container").classList.remove("blur");
  document.getElementById("newVehiclePopup").style.display = "none";
});

// Popup schließen, wenn der Benutzer außerhalb des Popups klickt
window.onclick = function (event) {
  const popup = document.getElementById("newVehiclePopup");
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

// Fahrzeug erstellen (Erweiterbar je nach Funktionalität)
document.getElementById("createVehicle").addEventListener("click", function () {
  const vehicleType = document.getElementById("vehicleType").value;
  const firstGarageDropdown = document.getElementById("firstGarageDropdown").value;
  const licensePlate = document.getElementById("licensePlate").value;
  const owner = document.getElementById("owner").value;
  const faction = document.getElementById("faction").value;
  const business = document.getElementById("business").value;

  console.log(`Fahrzeugtyp: ${vehicleType}, Garage: ${firstGarageDropdown}, Kennzeichen: ${licensePlate}, Inhaber: ${owner}, Fraktion: ${faction}, Gewerbe: ${business}`);

  // Füge hier Code hinzu, um das Fahrzeug in die Liste aufzunehmen oder weitere Funktionen auszuführen

  // Popup schließen
  document.getElementById("newVehiclePopup").style.display = "none";
});

// ###########################################################################################
// Position Script
// ###########################################################################################
document.getElementById("showCurrentPosition").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("xCoord").value = "157.458";
    document.getElementById("yCoord").value = "2478.514";
    document.getElementById("zCoord").value = "32.7";
    document.getElementById("rotation").value = "1.54";
    console.log("Aktuelle Position wird angezeigt");
    // Hier könnte die Funktion zum Anzeigen der aktuellen Position implementiert werden
  } else {
    document.getElementById("xCoord").value = "";
    document.getElementById("yCoord").value = "";
    document.getElementById("zCoord").value = "";
    document.getElementById("rotation").value = "";
    console.log("Aktuelle Position wird ausgeblendet");
    // Hier könnte die Funktion zum Ausblenden der aktuellen Position implementiert werden
  }
});

document.querySelectorAll(".copyCoord").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const value = document.getElementById(targetId).value;

    if (value) {
      navigator.clipboard.writeText(value).then(
        function () {
          console.log(`${targetId} wurde kopiert: ${value}`);
        },
        function () {
          console.error("Fehler beim Kopieren in die Zwischenablage.");
        }
      );
    } else {
      console.error("Kein Wert zum Kopieren vorhanden.");
    }
  });
});

document.getElementById("copyPos").addEventListener("click", function () {
  const xCoord = document.getElementById("xCoord").value;
  const yCoord = document.getElementById("yCoord").value;
  const zCoord = document.getElementById("zCoord").value;

  const positionText = `${xCoord}, ${yCoord}, ${zCoord}`;

  navigator.clipboard.writeText(positionText).then(
    function () {
      console.log("Position wurde in die Zwischenablage kopiert:", positionText);
    },
    function () {
      console.error("Fehler beim Kopieren in die Zwischenablage.");
    }
  );
});

// ###########################################################################################
// Unsichtbarkeit Script
// ###########################################################################################
document.getElementById("toggleVisibility").addEventListener("change", function () {
  const statusText = document.getElementById("visibilityStatus");

  if (this.checked) {
    statusText.textContent = "Du bist gerade unsichtbar";
    // Hier kommt die Funktion für aktiviert hin
  } else {
    statusText.textContent = "Du bist gerade sichtbar";
    // Hier kommt die Funktion für deaktiviert hin
  }
});

// ###########################################################################################
// Unsterblich Script
// ###########################################################################################
document.getElementById("toggleImmortality").addEventListener("change", function () {
  const statusText = document.getElementById("immortalityStatus");

  if (this.checked) {
    statusText.textContent = "Du bist gerade unsterblich";
    // Hier kommt die Funktion für aktiviert hin
  } else {
    statusText.textContent = "Du bist gerade nicht unsterblich";
    // Hier kommt die Funktion für deaktiviert hin
  }
});

// ###########################################################################################
// FreeCam Script
// ###########################################################################################

document.getElementById("toggleFreeCam").addEventListener("change", function () {
  const statusText = document.getElementById("freeCamStatus");

  if (this.checked) {
    statusText.textContent = "FreeCam ist Aktiviert";
    // Hier kommt die Funktion für aktiviert hin
  } else {
    statusText.textContent = "FreeCam ist Deaktiviert";
    // Hier kommt die Funktion für deaktiviert hin
  }
});

const slider = document.getElementById("freeCamSpeedSlider");
const speedValueDisplay = document.getElementById("speedValue");

function changeFreeCamSpeed(change) {
  let currentValue = parseFloat(slider.value);
  currentValue = Math.max(0.1, Math.min(10, currentValue + change)); // Begrenzen auf -10 bis 10
  slider.value = currentValue;
  speedValueDisplay.textContent = currentValue.toFixed(1);
}

slider.addEventListener("input", function () {
  const currentValue = this.value;
  speedValueDisplay.textContent = currentValue;
});

// ###########################################################################################
// Namen Zeigen Script
// ###########################################################################################
document.getElementById("togglePlayerInfo").addEventListener("change", function () {
  const statusText = document.getElementById("playerInfoStatus");

  if (this.checked) {
    statusText.textContent = "Du siehst gerade die Spieler Infos";
    // Hier kommt die Funktion für aktiviert hin
  } else {
    statusText.textContent = "Du siehst nicht die Spieler Infos";
    // Hier kommt die Funktion für deaktiviert hin
  }
});

// ###########################################################################################
// Broadcast/Private Nachricht Script
// ###########################################################################################
document.getElementById("messageType").addEventListener("change", function () {
  const broadcastMessage = document.getElementById("broadcastMessage");
  const privateMessage = document.getElementById("privateMessage");

  if (this.value === "broadcast") {
    broadcastMessage.style.display = "block";
    privateMessage.style.display = "none";
  } else if (this.value === "private") {
    broadcastMessage.style.display = "none";
    privateMessage.style.display = "block";
  }
});

document.getElementById("messageType").value = "broadcast";
document.getElementById("broadcastMessage").style.display = "block";

// Broadcast-Nachricht senden
document.getElementById("broadcastSend").addEventListener("click", function () {
  const messageContent = document.getElementById("broadcastInput").value.trim();
  if (messageContent) {
    console.log(`Broadcast gesendet: ${messageContent}`);
    // Hier könnte die Funktion zum Senden einer Broadcast-Nachricht hinzugefügt werden
  } else {
    console.error("Broadcast-Nachricht darf nicht leer sein");
  }
});

// Private Nachricht senden
document.getElementById("privateSend").addEventListener("click", function () {
  const playerId = document.getElementById("playerIdInput").value.trim();
  const messageContent = document.getElementById("privateMessageInput").value.trim();

  if (playerId && messageContent) {
    console.log(`Private Nachricht an Spieler ID ${playerId} gesendet: ${messageContent}`);
    // Hier könnte die Funktion zum Senden einer privaten Nachricht hinzugefügt werden
  } else if (!playerId) {
    console.error("Spieler-ID ist erforderlich, um eine private Nachricht zu senden.");
  } else if (!messageContent) {
    console.error("Die Nachricht darf nicht leer sein.");
  }
});

// ###########################################################################################
// Teleportieren Script
// ###########################################################################################

// Teleportieren zu den angegebenen Koordinaten (x, y, z)
document.getElementById("teleportButton").addEventListener("click", function () {
  const xCoord = document.getElementById("xCoordTeleport").value.trim();
  const yCoord = document.getElementById("yCoordTeleport").value.trim();
  const zCoord = document.getElementById("zCoordTeleport").value.trim();

  if (xCoord && yCoord && zCoord) {
    console.log(`Teleportieren zu Koordinaten: x=${xCoord}, y=${yCoord}, z=${zCoord}`);
    // Hier könnte die Funktion zum Teleportieren zu den angegebenen Koordinaten hinzugefügt werden
  } else {
    console.error("Alle Koordinaten (x, y, z) müssen ausgefüllt sein.");
    alert("Bitte fülle alle Koordinaten (x, y und z) aus, um zu teleportieren.");
  }
});

// Teleportieren zum Waypoint
document.getElementById("teleportWaypointButton").addEventListener("click", function () {
  console.log("Teleportieren zum Waypoint");
  // Hier könnte die Funktion zum Teleportieren zum Waypoint hinzugefügt werden
});

// ###########################################################################################
// Alarm Script
// ###########################################################################################

document.getElementById("noozeWithLight").addEventListener("click", function () {
  console.log("Nooze mit Licht aktiviert");
  // Hier kannst du die Funktionalität für "Nooze mit Licht" implementieren
});

document.getElementById("noozeWithoutLight").addEventListener("click", function () {
  console.log("Nooze ohne Licht aktiviert");
  // Hier kannst du die Funktionalität für "Nooze ohne Licht" implementieren
});

document.getElementById("alarmButton").addEventListener("click", function () {
  console.log("Alarm aktiviert");
  // Hier kannst du die Funktionalität für den Alarm implementieren
});

// ###########################################################################################
// Object Attacher Script
// ###########################################################################################
document.getElementById("toggleObjectAttacher").addEventListener("change", function () {
  const statusText = document.getElementById("objectAttacherStatus");

  if (this.checked) {
    statusText.textContent = "ObjectAttacher ist Aktiviert";
    // Hier kommt die Funktion für aktiviert hin
  } else {
    statusText.textContent = "ObjectAttacher ist Deaktiviert";
    // Hier kommt die Funktion für deaktiviert hin
  }
});

// ###########################################################################################
// Fahrzeug Spawnen Script
// ###########################################################################################

const categoriesVehicle = ["Alle Kategorien", "Boote", "Werbefahrzeuge", "Kompaktwagen", "Coupés", "Zweiräder", "Einsatzfahrzeuge", "Hubschrauber", "Industrielle Fahrzeuge", "Militärfahrzeuge", "Motorräder", "Muscle-Cars", "Geländefahrzeuge", "Flugzeuge", "SUVs", "Limousinen", "Dienstfahrzeuge", "Sportwagen", "Sportklassiker", "Supersportwagen", "Anhänger", "Züge", "Nutzfahrzeuge", "Transporter", "Formel-Fahrzeuge", "Custom"];

const vehicles = [
  { category: 1, model: "dinghy" },
  { category: 1, model: "dinghy2" },
  { category: 1, model: "dinghy3" },
  { category: 1, model: "dinghy4" },
  { category: 1, model: "jetmax" },
  { category: 1, model: "marquis" },
  { category: 1, model: "seashark" },
  { category: 1, model: "seashark2" },
  { category: 1, model: "seashark3" },
  { category: 1, model: "speeder" },
  { category: 1, model: "speeder2" },
  { category: 1, model: "squalo" },
  { category: 1, model: "submersible" },
  { category: 1, model: "submersible2" },
  { category: 1, model: "suntrap" },
  { category: 1, model: "toro" },
  { category: 1, model: "toro2" },
  { category: 1, model: "tropic" },
  { category: 1, model: "tropic2" },
  { category: 1, model: "tug" },
  { category: 2, model: "benson" },
  { category: 2, model: "biff" },
  { category: 2, model: "cerberus" },
  { category: 2, model: "cerberus2" },
  { category: 2, model: "cerberus3" },
  { category: 2, model: "hauler" },
  { category: 2, model: "hauler2" },
  { category: 2, model: "mule" },
  { category: 2, model: "mule2" },
  { category: 2, model: "mule3" },
  { category: 2, model: "mule4" },
  { category: 2, model: "packer" },
  { category: 2, model: "phantom" },
  { category: 2, model: "phantom2" },
  { category: 2, model: "phantom3" },
  { category: 2, model: "pounder" },
  { category: 2, model: "pounder2" },
  { category: 2, model: "stockade" },
  { category: 2, model: "stockade3" },
  { category: 2, model: "terbyte" },
  { category: 3, model: "asbo" },
  { category: 3, model: "blista" },
  { category: 3, model: "brioso" },
  { category: 3, model: "dilettante" },
  { category: 3, model: "dilettante2" },
  { category: 3, model: "issi2" },
  { category: 3, model: "issi3" },
  { category: 3, model: "issi4" },
  { category: 3, model: "issi5" },
  { category: 3, model: "issi6" },
  { category: 3, model: "kanjo" },
  { category: 3, model: "panto" },
  { category: 3, model: "prairie" },
  { category: 3, model: "rhapsody" },
  { category: 4, model: "cogcabrio" },
  { category: 4, model: "exemplar" },
  { category: 4, model: "f620" },
  { category: 4, model: "felon" },
  { category: 4, model: "felon2" },
  { category: 4, model: "jackal" },
  { category: 4, model: "oracle" },
  { category: 4, model: "oracle2" },
  { category: 4, model: "sentinel" },
  { category: 4, model: "sentinel2" },
  { category: 4, model: "windsor" },
  { category: 4, model: "windsor2" },
  { category: 4, model: "zion" },
  { category: 4, model: "zion2" },
  { category: 5, model: "bmx" },
  { category: 5, model: "cruiser" },
  { category: 5, model: "fixter" },
  { category: 5, model: "scorcher" },
  { category: 5, model: "tribike" },
  { category: 5, model: "tribike2" },
  { category: 5, model: "tribike3" },
  { category: 6, model: "ambulance" },
  { category: 6, model: "fbi" },
  { category: 6, model: "fbi2" },
  { category: 6, model: "firetruk" },
  { category: 6, model: "lguard" },
  { category: 6, model: "pbus" },
  { category: 6, model: "police" },
  { category: 6, model: "police2" },
  { category: 6, model: "police3" },
  { category: 6, model: "police4" },
  { category: 6, model: "policeb" },
  { category: 6, model: "polmav" },
  { category: 6, model: "policeold1" },
  { category: 6, model: "policeold2" },
  { category: 6, model: "policet" },
  { category: 6, model: "pranger" },
  { category: 6, model: "predator" },
  { category: 6, model: "riot" },
  { category: 6, model: "riot2" },
  { category: 6, model: "sheriff" },
  { category: 6, model: "sheriff2" },
  { category: 7, model: "akula" },
  { category: 7, model: "annihilator" },
  { category: 7, model: "buzzard" },
  { category: 7, model: "buzzard2" },
  { category: 7, model: "cargobob" },
  { category: 7, model: "cargobob2" },
  { category: 7, model: "cargobob3" },
  { category: 7, model: "cargobob4" },
  { category: 7, model: "frogger" },
  { category: 7, model: "frogger2" },
  { category: 7, model: "havok" },
  { category: 7, model: "hunter" },
  { category: 7, model: "maverick" },
  { category: 7, model: "savage" },
  { category: 7, model: "seasparrow" },
  { category: 7, model: "skylift" },
  { category: 7, model: "supervolito" },
  { category: 7, model: "supervolito2" },
  { category: 7, model: "swift" },
  { category: 7, model: "swift2" },
  { category: 7, model: "valkyrie" },
  { category: 7, model: "valkyrie2" },
  { category: 7, model: "volatus" },
  { category: 8, model: "bulldozer" },
  { category: 8, model: "cutter" },
  { category: 8, model: "dump" },
  { category: 8, model: "flatbed" },
  { category: 8, model: "guardian" },
  { category: 8, model: "handler" },
  { category: 8, model: "mixer" },
  { category: 8, model: "mixer2" },
  { category: 8, model: "rubble" },
  { category: 8, model: "tiptruck" },
  { category: 8, model: "tiptruck2" },
  { category: 9, model: "apc" },
  { category: 9, model: "barracks" },
  { category: 9, model: "barracks2" },
  { category: 9, model: "barracks3" },
  { category: 9, model: "barrage" },
  { category: 9, model: "chernobog" },
  { category: 9, model: "crusader" },
  { category: 9, model: "halftrack" },
  { category: 9, model: "khanjali" },
  { category: 9, model: "minitank" },
  { category: 9, model: "rhino" },
  { category: 9, model: "scarab" },
  { category: 9, model: "scarab2" },
  { category: 9, model: "scarab3" },
  { category: 9, model: "thruster" },
  { category: 9, model: "trailersmall2" },
  { category: 10, model: "akuma" },
  { category: 10, model: "avarus" },
  { category: 10, model: "bagger" },
  { category: 10, model: "bati" },
  { category: 10, model: "bati2" },
  { category: 10, model: "bf400" },
  { category: 10, model: "carbonrs" },
  { category: 10, model: "chimera" },
  { category: 10, model: "cliffhanger" },
  { category: 10, model: "daemon" },
  { category: 10, model: "daemon2" },
  { category: 10, model: "defiler" },
  { category: 10, model: "deathbike" },
  { category: 10, model: "deathbike2" },
  { category: 10, model: "deathbike3" },
  { category: 10, model: "diablous" },
  { category: 10, model: "diablous2" },
  { category: 10, model: "double" },
  { category: 10, model: "enduro" },
  { category: 10, model: "esskey" },
  { category: 10, model: "faggio" },
  { category: 10, model: "faggio2" },
  { category: 10, model: "faggio3" },
  { category: 10, model: "fcr" },
  { category: 10, model: "fcr2" },
  { category: 10, model: "gargoyle" },
  { category: 10, model: "hakuchou" },
  { category: 10, model: "hakuchou2" },
  { category: 10, model: "hexer" },
  { category: 10, model: "innovation" },
  { category: 10, model: "lectro" },
  { category: 10, model: "manchez" },
  { category: 10, model: "nemesis" },
  { category: 10, model: "nightblade" },
  { category: 10, model: "oppressor" },
  { category: 10, model: "oppressor2" },
  { category: 10, model: "pcj" },
  { category: 10, model: "ratbike" },
  { category: 10, model: "ruffian" },
  { category: 10, model: "rrocket" },
  { category: 10, model: "sanchez2" },
  { category: 10, model: "sanctus" },
  { category: 10, model: "shotaro" },
  { category: 10, model: "sovereign" },
  { category: 10, model: "stryder" },
  { category: 10, model: "thrust" },
  { category: 10, model: "vader" },
  { category: 10, model: "vindicator" },
  { category: 10, model: "vortex" },
  { category: 10, model: "wolfsbane" },
  { category: 10, model: "zombiea" },
  { category: 10, model: "zombieb" },
  { category: 11, model: "blade" },
  { category: 11, model: "buccaneer" },
  { category: 11, model: "buccaneer2" },
  { category: 11, model: "chino" },
  { category: 11, model: "chino2" },
  { category: 11, model: "clique" },
  { category: 11, model: "coquette3" },
  { category: 11, model: "deviant" },
  { category: 11, model: "dominator" },
  { category: 11, model: "dominator2" },
  { category: 11, model: "dominator3" },
  { category: 11, model: "dominator4" },
  { category: 11, model: "dominator5" },
  { category: 11, model: "dominator6" },
  { category: 11, model: "dukes" },
  { category: 11, model: "dukes2" },
  { category: 11, model: "faction" },
  { category: 11, model: "faction2" },
  { category: 11, model: "faction3" },
  { category: 11, model: "gauntlet" },
  { category: 11, model: "gauntlet2" },
  { category: 11, model: "gauntlet3" },
  { category: 11, model: "gauntlet4" },
  { category: 11, model: "hermes" },
  { category: 11, model: "hotknife" },
  { category: 11, model: "impaler" },
  { category: 11, model: "impaler2" },
  { category: 11, model: "impaler3" },
  { category: 11, model: "impaler4" },
  { category: 11, model: "imperator" },
  { category: 11, model: "imperator2" },
  { category: 11, model: "imperator3" },
  { category: 11, model: "lurcher" },
  { category: 11, model: "moonbeam" },
  { category: 11, model: "moonbeam2" },
  { category: 11, model: "nightshade" },
  { category: 11, model: "peyote2" },
  { category: 11, model: "phoenix" },
  { category: 11, model: "picador" },
  { category: 11, model: "ratloader" },
  { category: 11, model: "ratloader2" },
  { category: 11, model: "ruiner" },
  { category: 11, model: "ruiner2" },
  { category: 11, model: "ruiner3" },
  { category: 11, model: "sabregt" },
  { category: 11, model: "sabregt2" },
  { category: 11, model: "slamvan" },
  { category: 11, model: "slamvan2" },
  { category: 11, model: "slamvan3" },
  { category: 11, model: "slamvan4" },
  { category: 11, model: "slamvan5" },
  { category: 11, model: "slamvan6" },
  { category: 11, model: "stalion" },
  { category: 11, model: "stalion2" },
  { category: 11, model: "tampa" },
  { category: 11, model: "tampa3" },
  { category: 11, model: "tulip" },
  { category: 11, model: "vamos" },
  { category: 11, model: "vigero" },
  { category: 11, model: "virgo" },
  { category: 11, model: "virgo2" },
  { category: 11, model: "virgo3" },
  { category: 11, model: "voodoo" },
  { category: 11, model: "voodoo2" },
  { category: 11, model: "yosemite" },
  { category: 11, model: "yosemite2" },
  { category: 12, model: "bfinjection" },
  { category: 12, model: "bifta" },
  { category: 12, model: "blazer" },
  { category: 12, model: "blazer2" },
  { category: 12, model: "blazer3" },
  { category: 12, model: "blazer4" },
  { category: 12, model: "blazer5" },
  { category: 12, model: "bodhi2" },
  { category: 12, model: "brawler" },
  { category: 12, model: "bruiser" },
  { category: 12, model: "bruiser2" },
  { category: 12, model: "bruiser3" },
  { category: 12, model: "caracara2" },
  { category: 12, model: "dloader" },
  { category: 12, model: "dubsta3" },
  { category: 12, model: "dune" },
  { category: 12, model: "dune2" },
  { category: 12, model: "dune3" },
  { category: 12, model: "dune4" },
  { category: 12, model: "dune5" },
  { category: 12, model: "everon" },
  { category: 12, model: "freecrawler" },
  { category: 12, model: "hellion" },
  { category: 12, model: "insurgent" },
  { category: 12, model: "insurgent2" },
  { category: 12, model: "insurgent3" },
  { category: 12, model: "kalahari" },
  { category: 12, model: "marshall" },
  { category: 12, model: "mesa3" },
  { category: 12, model: "monster" },
  { category: 12, model: "monster3" },
  { category: 12, model: "monster4" },
  { category: 12, model: "monster5" },
  { category: 12, model: "menacer" },
  { category: 12, model: "nightshark" },
  { category: 12, model: "outlaw" },
  { category: 12, model: "rancherxl" },
  { category: 12, model: "rancherxl2" },
  { category: 12, model: "rebel" },
  { category: 12, model: "rebel2" },
  { category: 12, model: "rcbandito" },
  { category: 12, model: "riata" },
  { category: 12, model: "sandking" },
  { category: 12, model: "sandking2" },
  { category: 12, model: "technical" },
  { category: 12, model: "technical2" },
  { category: 12, model: "technical3" },
  { category: 12, model: "trophytruck" },
  { category: 12, model: "trophytruck2" },
  { category: 12, model: "vagrant" },
  { category: 12, model: "zhaba" },
  { category: 13, model: "alphaz1" },
  { category: 13, model: "avenger" },
  { category: 13, model: "besra" },
  { category: 13, model: "blimp" },
  { category: 13, model: "blimp2" },
  { category: 13, model: "blimp3" },
  { category: 13, model: "bombushka" },
  { category: 13, model: "cargoplane" },
  { category: 13, model: "cuban800" },
  { category: 13, model: "dodo" },
  { category: 13, model: "duster" },
  { category: 13, model: "howard" },
  { category: 13, model: "hydra" },
  { category: 13, model: "jet" },
  { category: 13, model: "lazer" },
  { category: 13, model: "luxor" },
  { category: 13, model: "luxor2" },
  { category: 13, model: "mammatus" },
  { category: 13, model: "microlight" },
  { category: 13, model: "miljet" },
  { category: 13, model: "mogul" },
  { category: 13, model: "molotok" },
  { category: 13, model: "nimbus" },
  { category: 13, model: "nokota" },
  { category: 13, model: "pyro" },
  { category: 13, model: "rogue" },
  { category: 13, model: "seabreeze" },
  { category: 13, model: "shamal" },
  { category: 13, model: "starling" },
  { category: 13, model: "strikeforce" },
  { category: 13, model: "stunt" },
  { category: 13, model: "titan" },
  { category: 13, model: "tula" },
  { category: 13, model: "velum" },
  { category: 13, model: "velum2" },
  { category: 13, model: "vestra" },
  { category: 13, model: "volatol" },
  { category: 14, model: "baller" },
  { category: 14, model: "baller2" },
  { category: 14, model: "baller3" },
  { category: 14, model: "baller4" },
  { category: 14, model: "baller5" },
  { category: 14, model: "baller6" },
  { category: 14, model: "bjxl" },
  { category: 14, model: "cavalcade" },
  { category: 14, model: "cavalcade2" },
  { category: 14, model: "contender" },
  { category: 14, model: "dubsta" },
  { category: 14, model: "dubsta2" },
  { category: 14, model: "fq2" },
  { category: 14, model: "granger" },
  { category: 14, model: "gresley" },
  { category: 14, model: "habanero" },
  { category: 14, model: "huntley" },
  { category: 14, model: "landstalker" },
  { category: 14, model: "mesa" },
  { category: 14, model: "mesa2" },
  { category: 14, model: "novak" },
  { category: 14, model: "patriot" },
  { category: 14, model: "patriot2" },
  { category: 14, model: "radi" },
  { category: 14, model: "rebla" },
  { category: 14, model: "rocoto" },
  { category: 14, model: "seminole" },
  { category: 14, model: "serrano" },
  { category: 14, model: "toros" },
  { category: 14, model: "xls" },
  { category: 14, model: "xls2" },
  { category: 15, model: "asea" },
  { category: 15, model: "asea2" },
  { category: 15, model: "asterope" },
  { category: 15, model: "cog55" },
  { category: 15, model: "cog552" },
  { category: 15, model: "cognoscenti" },
  { category: 15, model: "cognoscenti2" },
  { category: 15, model: "emperor" },
  { category: 15, model: "emperor2" },
  { category: 15, model: "emperor3" },
  { category: 15, model: "fugitive" },
  { category: 15, model: "glendale" },
  { category: 15, model: "ingot" },
  { category: 15, model: "intruder" },
  { category: 15, model: "limo2" },
  { category: 15, model: "premier" },
  { category: 15, model: "primo" },
  { category: 15, model: "primo2" },
  { category: 15, model: "regina" },
  { category: 15, model: "romero" },
  { category: 15, model: "schafter2" },
  { category: 15, model: "schafter5" },
  { category: 15, model: "schafter6" },
  { category: 15, model: "stafford" },
  { category: 15, model: "stanier" },
  { category: 15, model: "stratum" },
  { category: 15, model: "stretch" },
  { category: 15, model: "superd" },
  { category: 15, model: "surge" },
  { category: 15, model: "tailgater" },
  { category: 15, model: "warrener" },
  { category: 15, model: "washington" },
  { category: 16, model: "airbus" },
  { category: 16, model: "brickade" },
  { category: 16, model: "bus" },
  { category: 16, model: "coach" },
  { category: 16, model: "pbus2" },
  { category: 16, model: "rallytruck" },
  { category: 16, model: "rentalbus" },
  { category: 16, model: "taxi" },
  { category: 16, model: "tourbus" },
  { category: 16, model: "trash" },
  { category: 16, model: "trash2" },
  { category: 16, model: "wastelander" },
  { category: 17, model: "alpha" },
  { category: 17, model: "banshee" },
  { category: 17, model: "bestiagts" },
  { category: 17, model: "blista2" },
  { category: 17, model: "blista3" },
  { category: 17, model: "buffalo" },
  { category: 17, model: "buffalo2" },
  { category: 17, model: "buffalo3" },
  { category: 17, model: "carbonizzare" },
  { category: 17, model: "comet2" },
  { category: 17, model: "comet3" },
  { category: 17, model: "comet4" },
  { category: 17, model: "coquette" },
  { category: 17, model: "drafter" },
  { category: 17, model: "dynasty" },
  { category: 17, model: "deveste" },
  { category: 17, model: "elegy" },
  { category: 17, model: "elegy2" },
  { category: 17, model: "feltzer2" },
  { category: 17, model: "furoregt" },
  { category: 17, model: "fusilade" },
  { category: 17, model: "futo" },
  { category: 17, model: "hotring" },
  { category: 17, model: "issi7" },
  { category: 17, model: "imorgon" },
  { category: 17, model: "infernus2" },
  { category: 17, model: "italigto" },
  { category: 17, model: "jugular" },
  { category: 17, model: "jester" },
  { category: 17, model: "jester2" },
  { category: 17, model: "khamelion" },
  { category: 17, model: "komoda" },
  { category: 17, model: "kuruma" },
  { category: 17, model: "kuruma2" },
  { category: 17, model: "locust" },
  { category: 17, model: "lynx" },
  { category: 17, model: "massacro" },
  { category: 17, model: "massacro2" },
  { category: 17, model: "neo" },
  { category: 17, model: "neon" },
  { category: 17, model: "ninef" },
  { category: 17, model: "ninef2" },
  { category: 17, model: "omnis" },
  { category: 17, model: "paragon" },
  { category: 17, model: "paragon2" },
  { category: 17, model: "pariah" },
  { category: 17, model: "penumbra" },
  { category: 17, model: "raiden" },
  { category: 17, model: "rapidgt" },
  { category: 17, model: "rapidgt2" },
  { category: 17, model: "raptor" },
  { category: 17, model: "revolter" },
  { category: 17, model: "ruston" },
  { category: 17, model: "schafter3" },
  { category: 17, model: "schafter4" },
  { category: 17, model: "schafter5" },
  { category: 17, model: "schafter6" },
  { category: 17, model: "schlagen" },
  { category: 17, model: "schwarzer" },
  { category: 17, model: "sentinel3" },
  { category: 17, model: "seven70" },
  { category: 17, model: "specter" },
  { category: 17, model: "specter2" },
  { category: 17, model: "streiter" },
  { category: 17, model: "sugoi" },
  { category: 17, model: "sultan" },
  { category: 17, model: "sultan2" },
  { category: 17, model: "surano" },
  { category: 17, model: "tampa2" },
  { category: 17, model: "tropos" },
  { category: 17, model: "verlierer2" },
  { category: 17, model: "vstr" },
  { category: 17, model: "zr380" },
  { category: 17, model: "zr3802" },
  { category: 17, model: "zr3803" },
  { category: 18, model: "ardent" },
  { category: 18, model: "btype" },
  { category: 18, model: "btype2" },
  { category: 18, model: "btype3" },
  { category: 18, model: "casco" },
  { category: 18, model: "cheetah2" },
  { category: 18, model: "coquette2" },
  { category: 18, model: "deluxo" },
  { category: 18, model: "dynasty" },
  { category: 18, model: "feltzer3" },
  { category: 18, model: "gt500" },
  { category: 18, model: "infernus2" },
  { category: 18, model: "jb700" },
  { category: 18, model: "jb7002" },
  { category: 18, model: "mamba" },
  { category: 18, model: "manana" },
  { category: 18, model: "monroe" },
  { category: 18, model: "nebula" },
  { category: 18, model: "peyote" },
  { category: 18, model: "pigalle" },
  { category: 18, model: "rapidgt3" },
  { category: 18, model: "retinue" },
  { category: 18, model: "retinue2" },
  { category: 18, model: "savestra" },
  { category: 18, model: "stinger" },
  { category: 18, model: "stingergt" },
  { category: 18, model: "stromberg" },
  { category: 18, model: "swinger" },
  { category: 18, model: "torero" },
  { category: 18, model: "tornado" },
  { category: 18, model: "tornado2" },
  { category: 18, model: "tornado3" },
  { category: 18, model: "tornado4" },
  { category: 18, model: "tornado5" },
  { category: 18, model: "tornado6" },
  { category: 18, model: "turismo2" },
  { category: 18, model: "viseris" },
  { category: 18, model: "ztype" },
  { category: 18, model: "zion3" },
  { category: 18, model: "cheburek" },
  { category: 19, model: "adder" },
  { category: 19, model: "autarch" },
  { category: 19, model: "banshee2" },
  { category: 19, model: "bullet" },
  { category: 19, model: "cheetah" },
  { category: 19, model: "cyclone" },
  { category: 19, model: "entityxf" },
  { category: 19, model: "emerus" },
  { category: 19, model: "fmj" },
  { category: 19, model: "furia" },
  { category: 19, model: "gp1" },
  { category: 19, model: "infernus" },
  { category: 19, model: "italigtb" },
  { category: 19, model: "italigtb2" },
  { category: 19, model: "krieger" },
  { category: 19, model: "le7b" },
  { category: 19, model: "nero" },
  { category: 19, model: "nero2" },
  { category: 19, model: "osiris" },
  { category: 19, model: "penetrator" },
  { category: 19, model: "pfister811" },
  { category: 19, model: "prototipo" },
  { category: 19, model: "reaper" },
  { category: 19, model: "s80" },
  { category: 19, model: "sc1" },
  { category: 19, model: "scramjet" },
  { category: 19, model: "sheava" },
  { category: 19, model: "sultanrs" },
  { category: 19, model: "t20" },
  { category: 19, model: "tempesta" },
  { category: 19, model: "tezeract" },
  { category: 19, model: "thrax" },
  { category: 19, model: "turismor" },
  { category: 19, model: "tyrus" },
  { category: 19, model: "vacca" },
  { category: 19, model: "vagner" },
  { category: 19, model: "vigilante" },
  { category: 19, model: "visione" },
  { category: 19, model: "voltic" },
  { category: 19, model: "voltic2" },
  { category: 19, model: "xa21" },
  { category: 19, model: "zentorno" },
  { category: 19, model: "zorrusso" },
  { category: 20, model: "armytanker" },
  { category: 20, model: "armytrailer2" },
  { category: 20, model: "baletrailer" },
  { category: 20, model: "boattrailer" },
  { category: 20, model: "cablecar" },
  { category: 20, model: "docktrailer" },
  { category: 20, model: "graintrailer" },
  { category: 20, model: "proptrailer" },
  { category: 20, model: "raketrailer" },
  { category: 20, model: "tr2" },
  { category: 20, model: "tr3" },
  { category: 20, model: "tr4" },
  { category: 20, model: "trflat" },
  { category: 20, model: "tvtrailer" },
  { category: 20, model: "tanker" },
  { category: 20, model: "tanker2" },
  { category: 20, model: "trailerlogs" },
  { category: 20, model: "trailersmall" },
  { category: 20, model: "trailers" },
  { category: 20, model: "trailers2" },
  { category: 20, model: "trailers3" },
  { category: 21, model: "freight" },
  { category: 21, model: "freightcar" },
  { category: 21, model: "freightcont1" },
  { category: 21, model: "freightcont2" },
  { category: 21, model: "freightgrain" },
  { category: 22, model: "airtug" },
  { category: 22, model: "caddy" },
  { category: 22, model: "caddy2" },
  { category: 22, model: "caddy3" },
  { category: 22, model: "docktug" },
  { category: 22, model: "forklift" },
  { category: 22, model: "mower" },
  { category: 22, model: "ripley" },
  { category: 22, model: "sadler" },
  { category: 22, model: "sadler2" },
  { category: 22, model: "scrap" },
  { category: 22, model: "towtruck" },
  { category: 22, model: "towtruck2" },
  { category: 22, model: "tractor" },
  { category: 22, model: "tractor2" },
  { category: 22, model: "tractor3" },
  { category: 22, model: "utillitruck" },
  { category: 22, model: "utillitruck2" },
  { category: 22, model: "utillitruck3" },
  { category: 23, model: "bison" },
  { category: 23, model: "bison2" },
  { category: 23, model: "bison3" },
  { category: 23, model: "bobcatxl" },
  { category: 23, model: "boxville" },
  { category: 23, model: "boxville2" },
  { category: 23, model: "boxville3" },
  { category: 23, model: "boxville4" },
  { category: 23, model: "boxville5" },
  { category: 23, model: "burrito" },
  { category: 23, model: "burrito2" },
  { category: 23, model: "burrito3" },
  { category: 23, model: "burrito4" },
  { category: 23, model: "burrito5" },
  { category: 23, model: "camper" },
  { category: 23, model: "gburrito" },
  { category: 23, model: "gburrito2" },
  { category: 23, model: "journey" },
  { category: 23, model: "utillitruck3" },
  { category: 23, model: "minivan" },
  { category: 23, model: "minivan2" },
  { category: 23, model: "paradise" },
  { category: 23, model: "pony" },
  { category: 23, model: "pony2" },
  { category: 23, model: "rumpo" },
  { category: 23, model: "rumpo2" },
  { category: 23, model: "rumpo3" },
  { category: 23, model: "speedo" },
  { category: 23, model: "speedo2" },
  { category: 23, model: "speedo4" },
  { category: 23, model: "surfer" },
  { category: 23, model: "surfer2" },
  { category: 23, model: "taco" },
  { category: 23, model: "youga" },
  { category: 23, model: "youga2" },
  { category: 24, model: "formula" },
  { category: 24, model: "formula2" },
];

document.addEventListener("DOMContentLoaded", function () {
  const categorySelectVehicle = document.getElementById("categorySelectVehicle");
  const vehicleContainer = document.getElementById("vehicleContainer");
  const searchInputVehicle = document.getElementById("searchInputVehicle");

  categoriesVehicle.forEach((category, index) => {
    const optionElementVehicle = document.createElement("option");
    optionElementVehicle.value = index;
    optionElementVehicle.textContent = category;
    categorySelectVehicle.appendChild(optionElementVehicle);
  });

  loadVehicles(vehicles);

  categorySelectVehicle.addEventListener("change", function () {
    const selectedCategoryVehicle = parseInt(this.value);
    filterVehiclesByCategory(selectedCategoryVehicle);
  });

  searchInputVehicle.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const filteredVehicles = vehicles.filter((vehicle) => vehicle.model.toLowerCase().includes(keyword));
    loadVehicles(filteredVehicles);
  });

  function loadVehicles(vehicleList) {
    vehicleContainer.innerHTML = "";
    vehicleList.forEach((vehicle) => {
      const vehicleElement = document.createElement("div");
      vehicleElement.className = "vehicle";
      vehicleElement.innerHTML = `
        <img src="assets/vehicle/models/${vehicle.model}.jpg" alt="${vehicle.model}">
        <div class="vehicle-name">${vehicle.model}</div>
      `;
      vehicleContainer.appendChild(vehicleElement);

      vehicleElement.querySelector(".vehicle-name").addEventListener("click", function () {
        console.log(`Spawning vehicle: ${vehicle.model}`);
        // Der Code zum Spawnen des Fahrzeugs hinzugefügen
      });
    });
  }

  function filterVehiclesByCategory(categoryIndex) {
    if (categoryIndex === 0) {
      loadVehicles(vehicles);
    } else {
      const filteredVehicles = vehicles.filter((vehicle) => vehicle.category === categoryIndex);
      loadVehicles(filteredVehicles);
    }
  }
});

// ###########################################################################################
// Petmodel Ändern Script
// ###########################################################################################

const categoriesPet = ["Alle Kategorien", "Tiere", "Männlich", "Weiblich"];

const pets = [
  { category: 1, model: "a_c_boar" },
  { category: 1, model: "a_c_cat_01" },
  { category: 1, model: "a_c_chickenhawk" },
  { category: 1, model: "a_c_chimp" },
  { category: 1, model: "a_c_chop" },
  { category: 1, model: "a_c_chop_02" },
  { category: 1, model: "a_c_cow" },
  { category: 1, model: "a_c_coyote" },
  { category: 1, model: "a_c_crow" },
  { category: 1, model: "a_c_deer" },
  { category: 1, model: "a_c_dolphin" },
  { category: 1, model: "a_c_fish" },
  { category: 1, model: "a_c_hen" },
  { category: 1, model: "a_c_humpback" },
  { category: 1, model: "a_c_husky" },
  { category: 1, model: "a_c_killerwhale" },
  { category: 1, model: "a_c_mtlion" },
  { category: 1, model: "a_c_panther" },
  { category: 1, model: "a_c_pig" },
  { category: 1, model: "a_c_pigeon" },
  { category: 1, model: "a_c_poodle" },
  { category: 1, model: "a_c_pug" },
  { category: 1, model: "a_c_rabbit_01" },
  { category: 1, model: "a_c_rat" },
  { category: 1, model: "a_c_retriever" },
  { category: 1, model: "a_c_rhesus" },
  { category: 1, model: "a_c_rottweiler" },
  { category: 1, model: "a_c_seagull" },
  { category: 1, model: "a_c_sharkhammer" },
  { category: 1, model: "a_c_sharktiger" },
  { category: 1, model: "a_c_shepherd" },
  { category: 1, model: "a_c_stingray" },
  { category: 1, model: "a_c_westy" },

  { category: 2, model: "a_m_m_acult_01" },
  { category: 2, model: "a_m_m_afriamer_01" },
  { category: 2, model: "a_m_m_bankrobber_01" },
  { category: 2, model: "a_m_m_beach_01" },
  { category: 2, model: "a_m_m_beach_02" },
  { category: 2, model: "a_m_m_bevhills_01" },
  { category: 2, model: "a_m_m_bevhills_02" },
  { category: 2, model: "a_m_m_business_01" },
  { category: 2, model: "a_m_m_eastsa_01" },
  { category: 2, model: "a_m_m_eastsa_02" },
  { category: 2, model: "a_m_m_farmer_01" },
  { category: 2, model: "a_m_m_fatlatin_01" },
  { category: 2, model: "a_m_m_genbiker_01" },
  { category: 2, model: "a_m_m_genfat_01" },
  { category: 2, model: "a_m_m_genfat_02" },
  { category: 2, model: "a_m_m_golfer_01" },
  { category: 2, model: "a_m_m_hasjew_01" },
  { category: 2, model: "a_m_m_hillbilly_01" },
  { category: 2, model: "a_m_m_hillbilly_02" },
  { category: 2, model: "a_m_m_indian_01" },
  { category: 2, model: "a_m_m_ktown_01" },
  { category: 2, model: "a_m_m_malibu_01" },
  { category: 2, model: "a_m_m_mexcntry_01" },
  { category: 2, model: "a_m_m_mexlabor_01" },
  { category: 2, model: "a_m_m_mlcrisis_01" },
  { category: 2, model: "a_m_m_og_boss_01" },
  { category: 2, model: "a_m_m_paparazzi_01" },
  { category: 2, model: "a_m_m_polynesian_01" },
  { category: 2, model: "a_m_m_prolhost_01" },
  { category: 2, model: "a_m_m_rurmeth_01" },
  { category: 2, model: "a_m_m_salton_01" },
  { category: 2, model: "a_m_m_salton_02" },
  { category: 2, model: "a_m_m_salton_03" },
  { category: 2, model: "a_m_m_salton_04" },
  { category: 2, model: "a_m_m_skater_01" },
  { category: 2, model: "a_m_m_skidrow_01" },
  { category: 2, model: "a_m_m_socenlat_01" },
  { category: 2, model: "a_m_m_soucent_01" },
  { category: 2, model: "a_m_m_soucent_02" },
  { category: 2, model: "a_m_m_soucent_03" },
  { category: 2, model: "a_m_m_soucent_04" },
  { category: 2, model: "a_m_m_stlat_02" },
  { category: 2, model: "a_m_m_studioparty_01" },
  { category: 2, model: "a_m_m_tennis_01" },
  { category: 2, model: "a_m_m_tourist_01" },
  { category: 2, model: "a_m_m_tramp_01" },
  { category: 2, model: "a_m_m_trampbeac_01" },
  { category: 2, model: "a_m_m_tranvest_01" },
  { category: 2, model: "a_m_m_tranvest_02" },
  { category: 2, model: "a_m_o_acult_01" },
  { category: 2, model: "a_m_o_acult_02" },
  { category: 2, model: "a_m_o_beach_01" },
  { category: 2, model: "a_m_o_beach_02" },
  { category: 2, model: "a_m_o_genstreet_01" },
  { category: 2, model: "a_m_o_ktown_01" },
  { category: 2, model: "a_m_o_salton_01" },
  { category: 2, model: "a_m_o_soucent_01" },
  { category: 2, model: "a_m_o_soucent_02" },
  { category: 2, model: "a_m_o_soucent_03" },
  { category: 2, model: "a_m_o_tramp_01" },
  { category: 2, model: "a_m_y_acult_01" },
  { category: 2, model: "a_m_y_acult_02" },
  { category: 2, model: "a_m_y_beach_01" },
  { category: 2, model: "a_m_y_beach_02" },
  { category: 2, model: "a_m_y_beach_03" },
  { category: 2, model: "a_m_y_beach_04" },
  { category: 2, model: "a_m_y_beachvesp_01" },
  { category: 2, model: "a_m_y_beachvesp_02" },
  { category: 2, model: "a_m_y_bevhills_01" },
  { category: 2, model: "a_m_y_bevhills_02" },
  { category: 2, model: "a_m_y_breakdance_01" },
  { category: 2, model: "a_m_y_busicas_01" },
  { category: 2, model: "a_m_y_business_01" },
  { category: 2, model: "a_m_y_business_02" },
  { category: 2, model: "a_m_y_business_03" },
  { category: 2, model: "a_m_y_carclub_01" },
  { category: 2, model: "a_m_y_clubcust_01" },
  { category: 2, model: "a_m_y_clubcust_02" },
  { category: 2, model: "a_m_y_clubcust_03" },
  { category: 2, model: "a_m_y_clubcust_04" },
  { category: 2, model: "a_m_y_cyclist_01" },
  { category: 2, model: "a_m_y_dhill_01" },
  { category: 2, model: "a_m_y_downtown_01" },
  { category: 2, model: "a_m_y_eastsa_01" },
  { category: 2, model: "a_m_y_eastsa_02" },
  { category: 2, model: "a_m_y_epsilon_01" },
  { category: 2, model: "a_m_y_epsilon_02" },
  { category: 2, model: "a_m_y_gay_01" },
  { category: 2, model: "a_m_y_gay_02" },
  { category: 2, model: "a_m_y_gencaspat_01" },
  { category: 2, model: "a_m_y_genstreet_01" },
  { category: 2, model: "a_m_y_genstreet_02" },
  { category: 2, model: "a_m_y_golfer_01" },
  { category: 2, model: "a_m_y_hasjew_01" },
  { category: 2, model: "a_m_y_hiker_01" },
  { category: 2, model: "a_m_y_hippy_01" },
  { category: 2, model: "a_m_y_hipster_01" },
  { category: 2, model: "a_m_y_hipster_02" },
  { category: 2, model: "a_m_y_hipster_03" },
  { category: 2, model: "a_m_y_indian_01" },
  { category: 2, model: "a_m_y_jetski_01" },
  { category: 2, model: "a_m_y_juggalo_01" },
  { category: 2, model: "a_m_y_ktown_01" },
  { category: 2, model: "a_m_y_ktown_02" },
  { category: 2, model: "a_m_y_latino_01" },
  { category: 2, model: "a_m_y_methhead_01" },
  { category: 2, model: "a_m_y_mexthug_01" },
  { category: 2, model: "a_m_y_motox_01" },
  { category: 2, model: "a_m_y_motox_02" },
  { category: 2, model: "a_m_y_musclbeac_01" },
  { category: 2, model: "a_m_y_musclbeac_02" },
  { category: 2, model: "a_m_y_polynesian_01" },
  { category: 2, model: "a_m_y_roadcyc_01" },
  { category: 2, model: "a_m_y_runner_01" },
  { category: 2, model: "a_m_y_runner_02" },
  { category: 2, model: "a_m_y_salton_01" },
  { category: 2, model: "a_m_y_skater_01" },
  { category: 2, model: "a_m_y_skater_02" },
  { category: 2, model: "a_m_y_smartcaspat_01" },
  { category: 2, model: "a_m_y_soucent_01" },
  { category: 2, model: "a_m_y_soucent_02" },
  { category: 2, model: "a_m_y_soucent_03" },
  { category: 2, model: "a_m_y_soucent_04" },
  { category: 2, model: "a_m_y_stbla_01" },
  { category: 2, model: "a_m_y_stbla_02" },
  { category: 2, model: "a_m_y_stlat_01" },
  { category: 2, model: "a_m_y_studioparty_01" },
  { category: 2, model: "a_m_y_stwhi_01" },
  { category: 2, model: "a_m_y_stwhi_02" },
  { category: 2, model: "a_m_y_sunbathe_01" },
  { category: 2, model: "a_m_y_surfer_01" },
  { category: 2, model: "a_m_y_tattoocust_01" },
  { category: 2, model: "a_m_y_vindouche_01" },
  { category: 2, model: "a_m_y_vinewood_01" },
  { category: 2, model: "a_m_y_vinewood_02" },
  { category: 2, model: "a_m_y_vinewood_03" },
  { category: 2, model: "a_m_y_vinewood_04" },
  { category: 2, model: "a_m_y_yoga_01" },
  { category: 2, model: "cs_amandatownley" },
  { category: 2, model: "cs_andreas" },
  { category: 2, model: "cs_ashley" },
  { category: 2, model: "cs_bankman" },
  { category: 2, model: "cs_barry" },
  { category: 2, model: "cs_beverly" },
  { category: 2, model: "cs_brad" },
  { category: 2, model: "cs_bradcadaver" },
  { category: 2, model: "cs_carbuyer" },
  { category: 2, model: "cs_casey" },
  { category: 2, model: "cs_chengsr" },
  { category: 2, model: "cs_chrisformage" },
  { category: 2, model: "cs_clay" },
  { category: 2, model: "cs_dale" },
  { category: 2, model: "cs_davenorton" },
  { category: 2, model: "cs_debra" },
  { category: 2, model: "cs_denise" },
  { category: 2, model: "cs_devin" },
  { category: 2, model: "cs_dom" },
  { category: 2, model: "cs_dreyfuss" },
  { category: 2, model: "cs_drfriedlander" },
  { category: 2, model: "cs_drfriedlander_02" },
  { category: 2, model: "cs_fabien" },
  { category: 2, model: "cs_fbisuit_01" },
  { category: 2, model: "cs_floyd" },
  { category: 2, model: "cs_guadalope" },
  { category: 2, model: "cs_gurk" },
  { category: 2, model: "cs_hunter" },
  { category: 2, model: "cs_janet" },
  { category: 2, model: "cs_jewelass" },
  { category: 2, model: "cs_jimmyboston" },
  { category: 2, model: "cs_jimmydisanto" },
  { category: 2, model: "cs_jimmydisanto2" },
  { category: 2, model: "cs_joeminuteman" },
  { category: 2, model: "cs_johnnyklebitz" },
  { category: 2, model: "cs_josef" },
  { category: 2, model: "cs_josh" },
  { category: 2, model: "cs_karen_daniels" },
  { category: 2, model: "cs_lamardavis" },
  { category: 2, model: "cs_lamardavis_02" },
  { category: 2, model: "cs_lazlow" },
  { category: 2, model: "cs_lazlow_2" },
  { category: 2, model: "cs_lestercrest" },
  { category: 2, model: "cs_lestercrest_2" },
  { category: 2, model: "cs_lestercrest_3" },
  { category: 2, model: "cs_lifeinvad_01" },
  { category: 2, model: "cs_magenta" },
  { category: 2, model: "cs_manuel" },
  { category: 2, model: "cs_marnie" },
  { category: 2, model: "cs_martinmadrazo" },
  { category: 2, model: "cs_maryann" },
  { category: 2, model: "cs_michelle" },
  { category: 2, model: "cs_milton" },
  { category: 2, model: "cs_molly" },
  { category: 2, model: "cs_movpremf_01" },
  { category: 2, model: "cs_movpremmale" },
  { category: 2, model: "cs_mrk" },
  { category: 2, model: "cs_mrs_thornhill" },
  { category: 2, model: "cs_mrsphillips" },
  { category: 2, model: "cs_natalia" },
  { category: 2, model: "cs_nervousron" },
  { category: 2, model: "cs_nervousron_02" },
  { category: 2, model: "cs_nigel" },
  { category: 2, model: "cs_old_man1a" },
  { category: 2, model: "cs_old_man2" },
  { category: 2, model: "cs_omega" },
  { category: 2, model: "cs_orleans" },
  { category: 2, model: "cs_paper" },
  { category: 2, model: "cs_patricia" },
  { category: 2, model: "cs_patricia_02" },
  { category: 2, model: "cs_priest" },
  { category: 2, model: "cs_prolsec_02" },
  { category: 2, model: "cs_russiandrunk" },
  { category: 2, model: "cs_siemonyetarian" },
  { category: 2, model: "cs_solomon" },
  { category: 2, model: "cs_stevehains" },
  { category: 2, model: "cs_stretch" },
  { category: 2, model: "cs_tanisha" },
  { category: 2, model: "cs_taocheng" },
  { category: 2, model: "cs_taocheng2" },
  { category: 2, model: "cs_taostranslator" },
  { category: 2, model: "cs_taostranslator2" },
  { category: 2, model: "cs_tenniscoach" },
  { category: 2, model: "cs_terry" },
  { category: 2, model: "cs_tom" },
  { category: 2, model: "cs_tomepsilon" },
  { category: 2, model: "cs_tracydisanto" },
  { category: 2, model: "cs_wade" },
  { category: 2, model: "cs_zimbor" },
  { category: 2, model: "csb_abigail" },
  { category: 2, model: "csb_agatha" },
  { category: 2, model: "csb_agent" },
  { category: 2, model: "csb_alan" },
  { category: 2, model: "csb_anita" },
  { category: 2, model: "csb_anton" },
  { category: 2, model: "csb_ary" },
  { category: 2, model: "csb_ary_02" },
  { category: 2, model: "csb_avery" },
  { category: 2, model: "csb_avischwartzman_02" },
  { category: 2, model: "csb_avischwartzman_03" },
  { category: 2, model: "csb_avon" },
  { category: 2, model: "csb_ballas_leader" },
  { category: 2, model: "csb_ballasog" },
  { category: 2, model: "csb_billionaire" },
  { category: 2, model: "csb_bogdan" },
  { category: 2, model: "csb_bride" },
  { category: 2, model: "csb_brucie2" },
  { category: 2, model: "csb_bryony" },
  { category: 2, model: "csb_burgerdrug" },
  { category: 2, model: "csb_car3guy1" },
  { category: 2, model: "csb_car3guy2" },
  { category: 2, model: "csb_celeb_01" },
  { category: 2, model: "csb_charlie_reed" },
  { category: 2, model: "csb_chef" },
  { category: 2, model: "csb_chef_03" },
  { category: 2, model: "csb_chef2" },
  { category: 2, model: "csb_chin_goon" },
  { category: 2, model: "csb_cletus" },
  { category: 2, model: "csb_cop" },
  { category: 2, model: "csb_customer" },
  { category: 2, model: "csb_dax" },
  { category: 2, model: "csb_denise_friend" },
  { category: 2, model: "csb_dix" },
  { category: 2, model: "csb_djblamadon" },
  { category: 2, model: "csb_drugdealer" },
  { category: 2, model: "csb_englishdave" },
  { category: 2, model: "csb_englishdave_02" },
  { category: 2, model: "csb_fos_rep" },
  { category: 2, model: "csb_g" },
  { category: 2, model: "csb_georginacheng" },
  { category: 2, model: "csb_golfer_a" },
  { category: 2, model: "csb_golfer_b" },
  { category: 2, model: "csb_groom" },
  { category: 2, model: "csb_grove_str_dlr" },
  { category: 2, model: "csb_gustavo" },
  { category: 2, model: "csb_hao" },
  { category: 2, model: "csb_hao_02" },
  { category: 2, model: "csb_helmsmanpavel" },
  { category: 2, model: "csb_huang" },
  { category: 2, model: "csb_hugh" },
  { category: 2, model: "csb_imani" },
  { category: 2, model: "csb_imran" },
  { category: 2, model: "csb_isldj_00" },
  { category: 2, model: "csb_isldj_01" },
  { category: 2, model: "csb_isldj_02" },
  { category: 2, model: "csb_isldj_03" },
  { category: 2, model: "csb_isldj_04" },
  { category: 2, model: "csb_jackhowitzer" },
  { category: 2, model: "csb_janitor" },
  { category: 2, model: "csb_jio" },
  { category: 2, model: "csb_jio_02" },
  { category: 2, model: "csb_johnny_guns" },
  { category: 2, model: "csb_juanstrickler" },
  { category: 2, model: "csb_labrat" },
  { category: 2, model: "csb_luchadora" },
  { category: 2, model: "csb_maude" },
  { category: 2, model: "csb_miguelmadrazo" },
  { category: 2, model: "csb_mimi" },
  { category: 2, model: "csb_mjo" },
  { category: 2, model: "csb_mjo_02" },
  { category: 2, model: "csb_money" },
  { category: 2, model: "csb_moodyman_02" },
  { category: 2, model: "csb_mp_agent14" },
  { category: 2, model: "csb_mrs_r" },
  { category: 2, model: "csb_musician_00" },
  { category: 2, model: "csb_mweather" },
  { category: 2, model: "csb_ortega" },
  { category: 2, model: "csb_oscar" },
  { category: 2, model: "csb_paige" },
  { category: 2, model: "csb_party_promo" },
  { category: 2, model: "csb_popov" },
  { category: 2, model: "csb_porndudes" },
  { category: 2, model: "csb_prologuedriver" },
  { category: 2, model: "csb_prolsec" },
  { category: 2, model: "csb_ramp_gang" },
  { category: 2, model: "csb_ramp_hic" },
  { category: 2, model: "csb_ramp_hipster" },
  { category: 2, model: "csb_ramp_marine" },
  { category: 2, model: "csb_ramp_mex" },
  { category: 2, model: "csb_rashcosvki" },
  { category: 2, model: "csb_reporter" },
  { category: 2, model: "csb_req_officer" },
  { category: 2, model: "csb_roccopelosi" },
  { category: 2, model: "csb_screen_writer" },
  { category: 2, model: "csb_security_a" },
  { category: 2, model: "csb_sessanta" },
  { category: 2, model: "csb_sol" },
  { category: 2, model: "csb_soundeng_00" },
  { category: 2, model: "csb_sss" },
  { category: 2, model: "csb_stripper_01" },
  { category: 2, model: "csb_stripper_02" },
  { category: 2, model: "csb_talcc" },
  { category: 2, model: "csb_talmm" },
  { category: 2, model: "csb_thornton" },
  { category: 2, model: "csb_tomcasino" },
  { category: 2, model: "csb_tonya" },
  { category: 2, model: "csb_tonyprince" },
  { category: 2, model: "csb_trafficwarden" },
  { category: 2, model: "csb_undercover" },
  { category: 2, model: "csb_vagos_leader" },
  { category: 2, model: "csb_vagspeak" },
  { category: 2, model: "csb_vernon" },
  { category: 2, model: "csb_vincent" },
  { category: 2, model: "csb_vincent_2" },
  { category: 2, model: "csb_wendy" },
  { category: 2, model: "g_f_importexport_01" },
  { category: 2, model: "g_f_m_fooliganz_01" },
  { category: 2, model: "g_f_y_ballas_01" },
  { category: 2, model: "g_f_y_families_01" },
  { category: 2, model: "g_f_y_lost_01" },
  { category: 2, model: "g_f_y_vagos_01" },
  { category: 2, model: "g_m_importexport_01" },
  { category: 2, model: "g_m_m_armboss_01" },
  { category: 2, model: "g_m_m_armgoon_01" },
  { category: 2, model: "g_m_m_armlieut_01" },
  { category: 2, model: "g_m_m_cartelguards_01" },
  { category: 2, model: "g_m_m_cartelguards_02" },
  { category: 2, model: "g_m_m_casrn_01" },
  { category: 2, model: "g_m_m_chemwork_01" },
  { category: 2, model: "g_m_m_chiboss_01" },
  { category: 2, model: "g_m_m_chicold_01" },
  { category: 2, model: "g_m_m_chigoon_01" },
  { category: 2, model: "g_m_m_chigoon_02" },
  { category: 2, model: "g_m_m_fooliganz_01" },
  { category: 2, model: "g_m_m_friedlandergoons_01" },
  { category: 2, model: "g_m_m_genthug_01" },
  { category: 2, model: "g_m_m_goons_01" },
  { category: 2, model: "g_m_m_korboss_01" },
  { category: 2, model: "g_m_m_mexboss_01" },
  { category: 2, model: "g_m_m_mexboss_02" },
  { category: 2, model: "g_m_m_prisoners_01" },
  { category: 2, model: "g_m_m_slasher_01" },
  { category: 2, model: "g_m_y_armgoon_02" },
  { category: 2, model: "g_m_y_azteca_01" },
  { category: 2, model: "g_m_y_ballaeast_01" },
  { category: 2, model: "g_m_y_ballaorig_01" },
  { category: 2, model: "g_m_y_ballasout_01" },
  { category: 2, model: "g_m_y_famca_01" },
  { category: 2, model: "g_m_y_famdnf_01" },
  { category: 2, model: "g_m_y_famfor_01" },
  { category: 2, model: "g_m_y_korean_01" },
  { category: 2, model: "g_m_y_korean_02" },
  { category: 2, model: "g_m_y_korlieut_01" },
  { category: 2, model: "g_m_y_lost_01" },
  { category: 2, model: "g_m_y_lost_02" },
  { category: 2, model: "g_m_y_lost_03" },
  { category: 2, model: "g_m_y_mexgang_01" },
  { category: 2, model: "g_m_y_mexgoon_01" },
  { category: 2, model: "g_m_y_mexgoon_02" },
  { category: 2, model: "g_m_y_mexgoon_03" },
  { category: 2, model: "g_m_y_pologoon_01" },
  { category: 2, model: "g_m_y_pologoon_02" },
  { category: 2, model: "g_m_y_salvaboss_01" },
  { category: 2, model: "g_m_y_salvagoon_01" },
  { category: 2, model: "g_m_y_salvagoon_02" },
  { category: 2, model: "g_m_y_salvagoon_03" },
  { category: 2, model: "g_m_y_strpunk_01" },
  { category: 2, model: "g_m_y_strpunk_02" },
  { category: 2, model: "hc_driver" },
  { category: 2, model: "hc_gunman" },
  { category: 2, model: "hc_hacker" },
  { category: 2, model: "ig_abigail" },
  { category: 2, model: "ig_acidlabcook" },
  { category: 2, model: "ig_agatha" },
  { category: 2, model: "ig_agent" },
  { category: 2, model: "ig_agent_02" },
  { category: 2, model: "ig_amandatownley" },
  { category: 2, model: "ig_andreas" },
  { category: 2, model: "ig_ary" },
  { category: 2, model: "ig_ary_02" },
  { category: 2, model: "ig_ashley" },
  { category: 2, model: "ig_avery" },
  { category: 2, model: "ig_avischwartzman_02" },
  { category: 2, model: "ig_avischwartzman_03" },
  { category: 2, model: "ig_avon" },
  { category: 2, model: "ig_ballas_leader" },
  { category: 2, model: "ig_ballasog" },
  { category: 2, model: "ig_bankman" },
  { category: 2, model: "ig_barry" },
  { category: 2, model: "ig_benny" },
  { category: 2, model: "ig_benny_02" },
  { category: 2, model: "ig_bestmen" },
  { category: 2, model: "ig_beverly" },
  { category: 2, model: "ig_billionaire" },
  { category: 2, model: "ig_brad" },
  { category: 2, model: "ig_bride" },
  { category: 2, model: "ig_brucie2" },
  { category: 2, model: "ig_car3guy1" },
  { category: 2, model: "ig_car3guy2" },
  { category: 2, model: "ig_casey" },
  { category: 2, model: "ig_celeb_01" },
  { category: 2, model: "ig_charlie_reed" },
  { category: 2, model: "ig_chef" },
  { category: 2, model: "ig_chef_03" },
  { category: 2, model: "ig_chef2" },
  { category: 2, model: "ig_chengsr" },
  { category: 2, model: "ig_chrisformage" },
  { category: 2, model: "ig_clay" },
  { category: 2, model: "ig_claypain" },
  { category: 2, model: "ig_cletus" },
  { category: 2, model: "ig_dale" },
  { category: 2, model: "ig_davenorton" },
  { category: 2, model: "ig_dax" },
  { category: 2, model: "ig_denise" },
  { category: 2, model: "ig_devin" },
  { category: 2, model: "ig_dix" },
  { category: 2, model: "ig_djblamadon" },
  { category: 2, model: "ig_djblamrupert" },
  { category: 2, model: "ig_djblamryanh" },
  { category: 2, model: "ig_djblamryans" },
  { category: 2, model: "ig_djdixmanager" },
  { category: 2, model: "ig_djgeneric_01" },
  { category: 2, model: "ig_djsolfotios" },
  { category: 2, model: "ig_djsoljakob" },
  { category: 2, model: "ig_djsolmanager" },
  { category: 2, model: "ig_djsolmike" },
  { category: 2, model: "ig_djsolrobt" },
  { category: 2, model: "ig_djtalaurelia" },
  { category: 2, model: "ig_djtalignazio" },
  { category: 2, model: "ig_dom" },
  { category: 2, model: "ig_dreyfuss" },
  { category: 2, model: "ig_drfriedlander" },
  { category: 2, model: "ig_drfriedlander_02" },
  { category: 2, model: "ig_drugdealer" },
  { category: 2, model: "ig_englishdave" },
  { category: 2, model: "ig_englishdave_02" },
  { category: 2, model: "ig_entourage_a" },
  { category: 2, model: "ig_entourage_b" },
  { category: 2, model: "ig_fabien" },
  { category: 2, model: "ig_fbisuit_01" },
  { category: 2, model: "ig_floyd" },
  { category: 2, model: "ig_fooliganz_01" },
  { category: 2, model: "ig_fooliganz_02" },
  { category: 2, model: "ig_furry" },
  { category: 2, model: "ig_g" },
  { category: 2, model: "ig_georginacheng" },
  { category: 2, model: "ig_golfer_a" },
  { category: 2, model: "ig_golfer_b" },
  { category: 2, model: "ig_groom" },
  { category: 2, model: "ig_gunvanseller" },
  { category: 2, model: "ig_gustavo" },
  { category: 2, model: "ig_hao" },
  { category: 2, model: "ig_hao_02" },
  { category: 2, model: "ig_helmsmanpavel" },
  { category: 2, model: "ig_hippyleader" },
  { category: 2, model: "ig_huang" },
  { category: 2, model: "ig_hunter" },
  { category: 2, model: "ig_imani" },
  { category: 2, model: "ig_isldj_00" },
  { category: 2, model: "ig_isldj_01" },
  { category: 2, model: "ig_isldj_02" },
  { category: 2, model: "ig_isldj_03" },
  { category: 2, model: "ig_isldj_04" },
  { category: 2, model: "ig_isldj_04_d_01" },
  { category: 2, model: "ig_isldj_04_d_02" },
  { category: 2, model: "ig_isldj_04_e_01" },
  { category: 2, model: "ig_jackie" },
  { category: 2, model: "ig_janet" },
  { category: 2, model: "ig_jay_norris" },
  { category: 2, model: "ig_jewelass" },
  { category: 2, model: "ig_jimmyboston" },
  { category: 2, model: "ig_jimmyboston_02" },
  { category: 2, model: "ig_jimmydisanto" },
  { category: 2, model: "ig_jimmydisanto2" },
  { category: 2, model: "ig_jio" },
  { category: 2, model: "ig_jio_02" },
  { category: 2, model: "ig_joeminuteman" },
  { category: 2, model: "ig_johnny_guns" },
  { category: 2, model: "ig_johnnyklebitz" },
  { category: 2, model: "ig_josef" },
  { category: 2, model: "ig_josh" },
  { category: 2, model: "ig_juanstrickler" },
  { category: 2, model: "ig_karen_daniels" },
  { category: 2, model: "ig_kaylee" },
  { category: 2, model: "ig_kerrymcintosh" },
  { category: 2, model: "ig_kerrymcintosh_02" },
  { category: 2, model: "ig_labrat" },
  { category: 2, model: "ig_lacey_jones_02" },
  { category: 2, model: "ig_lamardavis" },
  { category: 2, model: "ig_lamardavis_02" },
  { category: 2, model: "ig_lazlow" },
  { category: 2, model: "ig_lazlow_2" },
  { category: 2, model: "ig_lestercrest" },
  { category: 2, model: "ig_lestercrest_2" },
  { category: 2, model: "ig_lestercrest_3" },
  { category: 2, model: "ig_lifeinvad_01" },
  { category: 2, model: "ig_lifeinvad_02" },
  { category: 2, model: "ig_lildee" },
  { category: 2, model: "ig_luchadora" },
  { category: 2, model: "ig_magenta" },
  { category: 2, model: "ig_malc" },
  { category: 2, model: "ig_manuel" },
  { category: 2, model: "ig_marnie" },
  { category: 2, model: "ig_maryann" },
  { category: 2, model: "ig_mason_duggan" },
  { category: 2, model: "ig_maude" },
  { category: 2, model: "ig_michelle" },
  { category: 2, model: "ig_miguelmadrazo" },
  { category: 2, model: "ig_milton" },
  { category: 2, model: "ig_mimi" },
  { category: 2, model: "ig_mjo" },
  { category: 2, model: "ig_mjo_02" },
  { category: 2, model: "ig_molly" },
  { category: 2, model: "ig_money" },
  { category: 2, model: "ig_moodyman_02" },
  { category: 2, model: "ig_mp_agent14" },
  { category: 2, model: "ig_mrk" },
  { category: 2, model: "ig_mrs_thornhill" },
  { category: 2, model: "ig_mrsphillips" },
  { category: 2, model: "ig_musician_00" },
  { category: 2, model: "ig_natalia" },
  { category: 2, model: "ig_nervousron" },
  { category: 2, model: "ig_nervousron_02" },
  { category: 2, model: "ig_nigel" },
  { category: 2, model: "ig_old_man1a" },
  { category: 2, model: "ig_old_man2" },
  { category: 2, model: "ig_oldrichguy" },
  { category: 2, model: "ig_omega" },
  { category: 2, model: "ig_oneil" },
  { category: 2, model: "ig_orleans" },
  { category: 2, model: "ig_ortega" },
  { category: 2, model: "ig_paige" },
  { category: 2, model: "ig_paper" },
  { category: 2, model: "ig_party_promo" },
  { category: 2, model: "ig_patricia" },
  { category: 2, model: "ig_patricia_02" },
  { category: 2, model: "ig_pernell_moss" },
  { category: 2, model: "ig_pilot" },
  { category: 2, model: "ig_popov" },
  { category: 2, model: "ig_priest" },
  { category: 2, model: "ig_prolsec_02" },
  { category: 2, model: "ig_ramp_gang" },
  { category: 2, model: "ig_ramp_hic" },
  { category: 2, model: "ig_ramp_hipster" },
  { category: 2, model: "ig_ramp_mex" },
  { category: 2, model: "ig_rashcosvki" },
  { category: 2, model: "ig_req_officer" },
  { category: 2, model: "ig_roccopelosi" },
  { category: 2, model: "ig_roostermccraw" },
  { category: 2, model: "ig_russiandrunk" },
  { category: 2, model: "ig_sacha" },
  { category: 2, model: "ig_screen_writer" },
  { category: 2, model: "ig_security_a" },
  { category: 2, model: "ig_sessanta" },
  { category: 2, model: "ig_siemonyetarian" },
  { category: 2, model: "ig_sol" },
  { category: 2, model: "ig_solomon" },
  { category: 2, model: "ig_soundeng_00" },
  { category: 2, model: "ig_sss" },
  { category: 2, model: "ig_stevehains" },
  { category: 2, model: "ig_stretch" },
  { category: 2, model: "ig_talcc" },
  { category: 2, model: "ig_talina" },
  { category: 2, model: "ig_talmm" },
  { category: 2, model: "ig_tanisha" },
  { category: 2, model: "ig_taocheng" },
  { category: 2, model: "ig_taocheng2" },
  { category: 2, model: "ig_taostranslator" },
  { category: 2, model: "ig_taostranslator2" },
  { category: 2, model: "ig_tenniscoach" },
  { category: 2, model: "ig_terry" },
  { category: 2, model: "ig_thornton" },
  { category: 2, model: "ig_tomcasino" },
  { category: 2, model: "ig_tomepsilon" },
  { category: 2, model: "ig_tonya" },
  { category: 2, model: "ig_tonyprince" },
  { category: 2, model: "ig_tracydisanto" },
  { category: 2, model: "ig_trafficwarden" },
  { category: 2, model: "ig_tylerdix" },
  { category: 2, model: "ig_tylerdix_02" },
  { category: 2, model: "ig_vagos_leader" },
  { category: 2, model: "ig_vagspeak" },
  { category: 2, model: "ig_vernon" },
  { category: 2, model: "ig_vincent" },
  { category: 2, model: "ig_vincent_2" },
  { category: 2, model: "ig_vincent_3" },
  { category: 2, model: "ig_wade" },
  { category: 2, model: "ig_warehouseboss" },
  { category: 2, model: "ig_wendy" },
  { category: 2, model: "ig_zimbor" },
  { category: 2, model: "mp_f_bennymech_01" },
  { category: 2, model: "mp_f_boatstaff_01" },
  { category: 2, model: "mp_f_cardesign_01" },
  { category: 2, model: "mp_f_chbar_01" },
  { category: 2, model: "mp_f_cocaine_01" },
  { category: 2, model: "mp_f_counterfeit_01" },
  { category: 2, model: "mp_f_deadhooker" },
  { category: 2, model: "mp_f_execpa_01" },
  { category: 2, model: "mp_f_execpa_02" },
  { category: 2, model: "mp_f_forgery_01" },
  { category: 2, model: "mp_f_freemode_01" },
  { category: 2, model: "mp_f_helistaff_01" },
  { category: 2, model: "mp_f_meth_01" },
  { category: 2, model: "mp_f_misty_01" },
  { category: 2, model: "mp_f_stripperlite" },
  { category: 2, model: "mp_f_weed_01" },
  { category: 2, model: "mp_g_m_pros_01" },
  { category: 2, model: "mp_headtargets" },
  { category: 2, model: "mp_m_avongoon" },
  { category: 2, model: "mp_m_boatstaff_01" },
  { category: 2, model: "mp_m_bogdangoon" },
  { category: 2, model: "mp_m_claude_01" },
  { category: 2, model: "mp_m_cocaine_01" },
  { category: 2, model: "mp_m_counterfeit_01" },
  { category: 2, model: "mp_m_exarmy_01" },
  { category: 2, model: "mp_m_execpa_01" },
  { category: 2, model: "mp_m_famdd_01" },
  { category: 2, model: "mp_m_fibsec_01" },
  { category: 2, model: "mp_m_forgery_01" },
  { category: 2, model: "mp_m_freemode_01" },
  { category: 2, model: "mp_m_g_vagfun_01" },
  { category: 2, model: "mp_m_marston_01" },
  { category: 2, model: "mp_m_meth_01" },
  { category: 2, model: "mp_m_niko_01" },
  { category: 2, model: "mp_m_securoguard_01" },
  { category: 2, model: "mp_m_shopkeep_01" },
  { category: 2, model: "mp_m_waremech_01" },
  { category: 2, model: "mp_m_weapexp_01" },
  { category: 2, model: "mp_m_weapwork_01" },
  { category: 2, model: "mp_m_weed_01" },
  { category: 2, model: "mp_s_m_armoured_01" },
  { category: 2, model: "p_franklin_02" },
  { category: 2, model: "player_one" },
  { category: 2, model: "player_two" },
  { category: 2, model: "player_zero" },
  { category: 2, model: "s_f_m_autoshop_01" },
  { category: 2, model: "s_f_m_fembarber" },
  { category: 2, model: "s_f_m_maid_01" },
  { category: 2, model: "s_f_m_retailstaff_01" },
  { category: 2, model: "s_f_m_shop_high" },
  { category: 2, model: "s_f_m_studioassist_01" },
  { category: 2, model: "s_f_m_sweatshop_01" },
  { category: 2, model: "s_f_m_warehouse_01" },
  { category: 2, model: "s_f_y_airhostess_01" },
  { category: 2, model: "s_f_y_bartender_01" },
  { category: 2, model: "s_f_y_baywatch_01" },
  { category: 2, model: "s_f_y_beachbarstaff_01" },
  { category: 2, model: "s_f_y_casino_01" },
  { category: 2, model: "s_f_y_clubbar_01" },
  { category: 2, model: "s_f_y_clubbar_02" },
  { category: 2, model: "s_f_y_cop_01" },
  { category: 2, model: "s_f_y_factory_01" },
  { category: 2, model: "s_f_y_hooker_01" },
  { category: 2, model: "s_f_y_hooker_02" },
  { category: 2, model: "s_f_y_hooker_03" },
  { category: 2, model: "s_f_y_migrant_01" },
  { category: 2, model: "s_f_y_movprem_01" },
  { category: 2, model: "s_f_y_ranger_01" },
  { category: 2, model: "s_f_y_scrubs_01" },
  { category: 2, model: "s_f_y_sheriff_01" },
  { category: 2, model: "s_f_y_shop_low" },
  { category: 2, model: "s_f_y_shop_mid" },
  { category: 2, model: "s_f_y_stripper_01" },
  { category: 2, model: "s_f_y_stripper_02" },
  { category: 2, model: "s_f_y_stripperlite" },
  { category: 2, model: "s_f_y_sweatshop_01" },
  { category: 2, model: "s_m_m_ammucountry" },
  { category: 2, model: "s_m_m_armoured_01" },
  { category: 2, model: "s_m_m_armoured_02" },
  { category: 2, model: "s_m_m_autoshop_01" },
  { category: 2, model: "s_m_m_autoshop_02" },
  { category: 2, model: "s_m_m_autoshop_03" },
  { category: 2, model: "s_m_m_bouncer_01" },
  { category: 2, model: "s_m_m_bouncer_02" },
  { category: 2, model: "s_m_m_ccrew_01" },
  { category: 2, model: "s_m_m_ccrew_02" },
  { category: 2, model: "s_m_m_chemsec_01" },
  { category: 2, model: "s_m_m_ciasec_01" },
  { category: 2, model: "s_m_m_cntrybar_01" },
  { category: 2, model: "s_m_m_dockwork_01" },
  { category: 2, model: "s_m_m_doctor_01" },
  { category: 2, model: "s_m_m_drugprocess_01" },
  { category: 2, model: "s_m_m_fiboffice_01" },
  { category: 2, model: "s_m_m_fiboffice_02" },
  { category: 2, model: "s_m_m_fibsec_01" },
  { category: 2, model: "s_m_m_fieldworker_01" },
  { category: 2, model: "s_m_m_gaffer_01" },
  { category: 2, model: "s_m_m_gardener_01" },
  { category: 2, model: "s_m_m_gentransport" },
  { category: 2, model: "s_m_m_hairdress_01" },
  { category: 2, model: "s_m_m_hazmatworker_01" },
  { category: 2, model: "s_m_m_highsec_01" },
  { category: 2, model: "s_m_m_highsec_02" },
  { category: 2, model: "s_m_m_highsec_03" },
  { category: 2, model: "s_m_m_highsec_04" },
  { category: 2, model: "s_m_m_highsec_05" },
  { category: 2, model: "s_m_m_janitor" },
  { category: 2, model: "s_m_m_lathandy_01" },
  { category: 2, model: "s_m_m_lifeinvad_01" },
  { category: 2, model: "s_m_m_linecook" },
  { category: 2, model: "s_m_m_lsmetro_01" },
  { category: 2, model: "s_m_m_mariachi_01" },
  { category: 2, model: "s_m_m_marine_01" },
  { category: 2, model: "s_m_m_marine_02" },
  { category: 2, model: "s_m_m_migrant_01" },
  { category: 2, model: "s_m_m_movalien_01" },
  { category: 2, model: "s_m_m_movprem_01" },
  { category: 2, model: "s_m_m_movspace_01" },
  { category: 2, model: "s_m_m_paramedic_01" },
  { category: 2, model: "s_m_m_pilot_01" },
  { category: 2, model: "s_m_m_pilot_02" },
  { category: 2, model: "s_m_m_postal_01" },
  { category: 2, model: "s_m_m_postal_02" },
  { category: 2, model: "s_m_m_prisguard_01" },
  { category: 2, model: "s_m_m_raceorg_01" },
  { category: 2, model: "s_m_m_scientist_01" },
  { category: 2, model: "s_m_m_security_01" },
  { category: 2, model: "s_m_m_snowcop_01" },
  { category: 2, model: "s_m_m_strperf_01" },
  { category: 2, model: "s_m_m_strpreach_01" },
  { category: 2, model: "s_m_m_strvend_01" },
  { category: 2, model: "s_m_m_studioassist_02" },
  { category: 2, model: "s_m_m_studioprod_01" },
  { category: 2, model: "s_m_m_studiosoueng_02" },
  { category: 2, model: "s_m_m_tattoo_01" },
  { category: 2, model: "s_m_m_trucker_01" },
  { category: 2, model: "s_m_m_ups_01" },
  { category: 2, model: "s_m_m_ups_02" },
  { category: 2, model: "s_m_m_warehouse_01" },
  { category: 2, model: "s_m_o_busker_01" },
  { category: 2, model: "s_m_y_airworker" },
  { category: 2, model: "s_m_y_ammucity_01" },
  { category: 2, model: "s_m_y_armymech_01" },
  { category: 2, model: "s_m_y_autopsy_01" },
  { category: 2, model: "s_m_y_barman_01" },
  { category: 2, model: "s_m_y_baywatch_01" },
  { category: 2, model: "s_m_y_blackops_01" },
  { category: 2, model: "s_m_y_blackops_02" },
  { category: 2, model: "s_m_y_blackops_03" },
  { category: 2, model: "s_m_y_busboy_01" },
  { category: 2, model: "s_m_y_casino_01" },
  { category: 2, model: "s_m_y_chef_01" },
  { category: 2, model: "s_m_y_clown_01" },
  { category: 2, model: "s_m_y_clubbar_01" },
  { category: 2, model: "s_m_y_construct_01" },
  { category: 2, model: "s_m_y_construct_02" },
  { category: 2, model: "s_m_y_cop_01" },
  { category: 2, model: "s_m_y_dealer_01" },
  { category: 2, model: "s_m_y_devinsec_01" },
  { category: 2, model: "s_m_y_dockwork_01" },
  { category: 2, model: "s_m_y_doorman_01" },
  { category: 2, model: "s_m_y_dwservice_01" },
  { category: 2, model: "s_m_y_dwservice_02" },
  { category: 2, model: "s_m_y_factory_01" },
  { category: 2, model: "s_m_y_fireman_01" },
  { category: 2, model: "s_m_y_garbage" },
  { category: 2, model: "s_m_y_grip_01" },
  { category: 2, model: "s_m_y_hwaycop_01" },
  { category: 2, model: "s_m_y_marine_01" },
  { category: 2, model: "s_m_y_marine_02" },
  { category: 2, model: "s_m_y_marine_03" },
  { category: 2, model: "s_m_y_mime" },
  { category: 2, model: "s_m_y_pestcont_01" },
  { category: 2, model: "s_m_y_pilot_01" },
  { category: 2, model: "s_m_y_prismuscl_01" },
  { category: 2, model: "s_m_y_prisoner_01" },
  { category: 2, model: "s_m_y_ranger_01" },
  { category: 2, model: "s_m_y_robber_01" },
  { category: 2, model: "s_m_y_sheriff_01" },
  { category: 2, model: "s_m_y_shop_mask" },
  { category: 2, model: "s_m_y_strvend_01" },
  { category: 2, model: "s_m_y_swat_01" },
  { category: 2, model: "s_m_y_uscg_01" },
  { category: 2, model: "s_m_y_valet_01" },
  { category: 2, model: "s_m_y_waiter_01" },
  { category: 2, model: "s_m_y_waretech_01" },
  { category: 2, model: "s_m_y_westsec_01" },
  { category: 2, model: "s_m_y_westsec_02" },
  { category: 2, model: "s_m_y_winclean_01" },
  { category: 2, model: "s_m_y_xmech_01" },
  { category: 2, model: "s_m_y_xmech_02" },
  { category: 2, model: "s_m_y_xmech_02_mp" },
  { category: 2, model: "slod_human" },
  { category: 2, model: "slod_large_quadped" },
  { category: 2, model: "slod_small_quadped" },
  { category: 2, model: "u_f_m_casinocash_01" },
  { category: 2, model: "u_f_m_casinoshop_01" },
  { category: 2, model: "u_f_m_corpse_01" },
  { category: 2, model: "u_f_m_debbie_01" },
  { category: 2, model: "u_f_m_drowned_01" },
  { category: 2, model: "u_f_m_miranda" },
  { category: 2, model: "u_f_m_miranda_02" },
  { category: 2, model: "u_f_m_promourn_01" },
  { category: 2, model: "u_f_o_carol" },
  { category: 2, model: "u_f_o_eileen" },
  { category: 2, model: "u_f_o_moviestar" },
  { category: 2, model: "u_f_o_prolhost_01" },
  { category: 2, model: "u_f_y_beth" },
  { category: 2, model: "u_f_y_bikerchic" },
  { category: 2, model: "u_f_y_comjane" },
  { category: 2, model: "u_f_y_corpse_01" },
  { category: 2, model: "u_f_y_corpse_02" },
  { category: 2, model: "u_f_y_danceburl_01" },
  { category: 2, model: "u_f_y_dancelthr_01" },
  { category: 2, model: "u_f_y_dancerave_01" },
  { category: 2, model: "u_f_y_hotposh_01" },
  { category: 2, model: "u_f_y_jewelass_01" },
  { category: 2, model: "u_f_y_lauren" },
  { category: 2, model: "u_f_y_mistress" },
  { category: 2, model: "u_f_y_poppymich" },
  { category: 2, model: "u_f_y_poppymich_02" },
  { category: 2, model: "u_f_y_princess" },
  { category: 2, model: "u_f_y_spyactress" },
  { category: 2, model: "u_f_y_taylor" },
  { category: 2, model: "u_m_m_aldinapoli" },
  { category: 2, model: "u_m_m_bankman" },
  { category: 2, model: "u_m_m_bikehire_01" },
  { category: 2, model: "u_m_m_blane" },
  { category: 2, model: "u_m_m_curtis" },
  { category: 2, model: "u_m_m_doa_01" },
  { category: 2, model: "u_m_m_edtoh" },
  { category: 2, model: "u_m_m_fibarchitect" },
  { category: 2, model: "u_m_m_filmdirector" },
  { category: 2, model: "u_m_m_glenstank_01" },
  { category: 2, model: "u_m_m_griff_01" },
  { category: 2, model: "u_m_m_jesus_01" },
  { category: 2, model: "u_m_m_jewelsec_01" },
  { category: 2, model: "u_m_m_jewelthief" },
  { category: 2, model: "u_m_m_juggernaut_03" },
  { category: 2, model: "u_m_m_markfost" },
  { category: 2, model: "u_m_m_partytarget" },
  { category: 2, model: "u_m_m_prolsec_01" },
  { category: 2, model: "u_m_m_promourn_01" },
  { category: 2, model: "u_m_m_rivalpap" },
  { category: 2, model: "u_m_m_spyactor" },
  { category: 2, model: "u_m_m_streetart_01" },
  { category: 2, model: "u_m_m_vince" },
  { category: 2, model: "u_m_m_willyfist" },
  { category: 2, model: "u_m_m_yulemonster" },
  { category: 2, model: "u_m_o_dean" },
  { category: 2, model: "u_m_o_filmnoir" },
  { category: 2, model: "u_m_o_finguru_01" },
  { category: 2, model: "u_m_o_taphillbilly" },
  { category: 2, model: "u_m_o_tramp_01" },
  { category: 2, model: "u_m_y_abner" },
  { category: 2, model: "u_m_y_antonb" },
  { category: 2, model: "u_m_y_babyd" },
  { category: 2, model: "u_m_y_baygor" },
  { category: 2, model: "u_m_y_burgerdrug_01" },
  { category: 2, model: "u_m_y_caleb" },
  { category: 2, model: "u_m_y_chip" },
  { category: 2, model: "u_m_y_corpse_01" },
  { category: 2, model: "u_m_y_croupthief_01" },
  { category: 2, model: "u_m_y_cyclist_01" },
  { category: 2, model: "u_m_y_danceburl_01" },
  { category: 2, model: "u_m_y_dancelthr_01" },
  { category: 2, model: "u_m_y_dancerave_01" },
  { category: 2, model: "u_m_y_fibmugger_01" },
  { category: 2, model: "u_m_y_gabriel" },
  { category: 2, model: "u_m_y_guido_01" },
  { category: 2, model: "u_m_y_gunvend_01" },
  { category: 2, model: "u_m_y_hippie_01" },
  { category: 2, model: "u_m_y_imporage" },
  { category: 2, model: "u_m_y_juggernaut_01" },
  { category: 2, model: "u_m_y_juggernaut_02" },
  { category: 2, model: "u_m_y_justin" },
  { category: 2, model: "u_m_y_mani" },
  { category: 2, model: "u_m_y_militarybum" },
  { category: 2, model: "u_m_y_paparazzi" },
  { category: 2, model: "u_m_y_party_01" },
  { category: 2, model: "u_m_y_pogo_01" },
  { category: 2, model: "u_m_y_prisoner_01" },
  { category: 2, model: "u_m_y_proldriver_01" },
  { category: 2, model: "u_m_y_rsranger_01" },
  { category: 2, model: "u_m_y_sbike" },
  { category: 2, model: "u_m_y_smugmech_01" },
  { category: 2, model: "u_m_y_staggrm_01" },
  { category: 2, model: "u_m_y_tattoo_01" },
  { category: 2, model: "u_m_y_ushi" },
  { category: 2, model: "u_m_y_zombie_01" },

  { category: 3, model: "a_f_m_beach_01" },
  { category: 3, model: "a_f_m_bevhills_01" },
  { category: 3, model: "a_f_m_bevhills_02" },
  { category: 3, model: "a_f_m_bodybuild_01" },
  { category: 3, model: "a_f_m_business_02" },
  { category: 3, model: "a_f_m_downtown_01" },
  { category: 3, model: "a_f_m_eastsa_01" },
  { category: 3, model: "a_f_m_eastsa_02" },
  { category: 3, model: "a_f_m_fatbla_01" },
  { category: 3, model: "a_f_m_fatcult_01" },
  { category: 3, model: "a_f_m_fatwhite_01" },
  { category: 3, model: "a_f_m_genbiker_01" },
  { category: 3, model: "a_f_m_genstreet_01" },
  { category: 3, model: "a_f_m_ktown_01" },
  { category: 3, model: "a_f_m_ktown_02" },
  { category: 3, model: "a_f_m_prolhost_01" },
  { category: 3, model: "a_f_m_salton_01" },
  { category: 3, model: "a_f_m_skidrow_01" },
  { category: 3, model: "a_f_m_soucent_01" },
  { category: 3, model: "a_f_m_soucent_02" },
  { category: 3, model: "a_f_m_soucentmc_01" },
  { category: 3, model: "a_f_m_tourist_01" },
  { category: 3, model: "a_f_m_tramp_01" },
  { category: 3, model: "a_f_m_trampbeac_01" },
  { category: 3, model: "a_f_o_genstreet_01" },
  { category: 3, model: "a_f_o_indian_01" },
  { category: 3, model: "a_f_o_ktown_01" },
  { category: 3, model: "a_f_o_salton_01" },
  { category: 3, model: "a_f_o_soucent_01" },
  { category: 3, model: "a_f_o_soucent_02" },
  { category: 3, model: "a_f_y_beach_01" },
  { category: 3, model: "a_f_y_beach_02" },
  { category: 3, model: "a_f_y_bevhills_01" },
  { category: 3, model: "a_f_y_bevhills_02" },
  { category: 3, model: "a_f_y_bevhills_03" },
  { category: 3, model: "a_f_y_bevhills_04" },
  { category: 3, model: "a_f_y_bevhills_05" },
  { category: 3, model: "a_f_y_business_01" },
  { category: 3, model: "a_f_y_business_02" },
  { category: 3, model: "a_f_y_business_03" },
  { category: 3, model: "a_f_y_business_04" },
  { category: 3, model: "a_f_y_carclub_01" },
  { category: 3, model: "a_f_y_clubcust_01" },
  { category: 3, model: "a_f_y_clubcust_02" },
  { category: 3, model: "a_f_y_clubcust_03" },
  { category: 3, model: "a_f_y_clubcust_04" },
  { category: 3, model: "a_f_y_eastsa_01" },
  { category: 3, model: "a_f_y_eastsa_02" },
  { category: 3, model: "a_f_y_eastsa_03" },
  { category: 3, model: "a_f_y_epsilon_01" },
  { category: 3, model: "a_f_y_femaleagent" },
  { category: 3, model: "a_f_y_fitness_01" },
  { category: 3, model: "a_f_y_fitness_02" },
  { category: 3, model: "a_f_y_gencaspat_01" },
  { category: 3, model: "a_f_y_genhot_01" },
  { category: 3, model: "a_f_y_golfer_01" },
  { category: 3, model: "a_f_y_hiker_01" },
  { category: 3, model: "a_f_y_hippie_01" },
  { category: 3, model: "a_f_y_hipster_01" },
  { category: 3, model: "a_f_y_hipster_02" },
  { category: 3, model: "a_f_y_hipster_03" },
  { category: 3, model: "a_f_y_hipster_04" },
  { category: 3, model: "a_f_y_indian_01" },
  { category: 3, model: "a_f_y_juggalo_01" },
  { category: 3, model: "a_f_y_runner_01" },
  { category: 3, model: "a_f_y_rurmeth_01" },
  { category: 3, model: "a_f_y_scdressy_01" },
  { category: 3, model: "a_f_y_skater_01" },
  { category: 3, model: "a_f_y_smartcaspat_01" },
  { category: 3, model: "a_f_y_soucent_01" },
  { category: 3, model: "a_f_y_soucent_02" },
  { category: 3, model: "a_f_y_soucent_03" },
  { category: 3, model: "a_f_y_studioparty_01" },
  { category: 3, model: "a_f_y_studioparty_02" },
  { category: 3, model: "a_f_y_tennis_01" },
  { category: 3, model: "a_f_y_topless_01" },
  { category: 3, model: "a_f_y_tourist_01" },
  { category: 3, model: "a_f_y_tourist_02" },
  { category: 3, model: "a_f_y_vinewood_01" },
  { category: 3, model: "a_f_y_vinewood_02" },
  { category: 3, model: "a_f_y_vinewood_03" },
  { category: 3, model: "a_f_y_vinewood_04" },
  { category: 3, model: "a_f_y_yoga_01" },
];

document.addEventListener("DOMContentLoaded", function () {
  const categorySelectPet = document.getElementById("categorySelectPet");
  const petContainer = document.getElementById("petContainer");
  const searchInputPet = document.getElementById("searchInputPet");

  categoriesPet.forEach((category, index) => {
    const optionElementPet = document.createElement("option");
    optionElementPet.value = index;
    optionElementPet.textContent = category;
    categorySelectPet.appendChild(optionElementPet);
  });

  loadPets(pets);

  categorySelectPet.addEventListener("change", function () {
    const selectedCategoryPet = parseInt(this.value);
    filterPetsByCategory(selectedCategoryPet);
  });

  searchInputPet.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const filteredPets = pets.filter((pet) => pet.model.toLowerCase().includes(keyword));
    loadPets(filteredPets);
  });

  function loadPets(petList) {
    petContainer.innerHTML = "";
    petList.forEach((pet) => {
      const petElement = document.createElement("div");
      petElement.className = "pet";
      petElement.innerHTML = `
        <img src="assets/pet/models/${pet.model}.jpg" alt="${pet.model}">
        <div class="pet-name">${pet.model}</div>
      `;
      petContainer.appendChild(petElement);

      petElement.querySelector(".pet-name").addEventListener("click", function () {
        console.log(`Spawning pet: ${pet.model}`);
        // Der Code zum wechseln des Ped Models hinzufügen
      });
    });
  }

  function filterPetsByCategory(categoryIndex) {
    if (categoryIndex === 0) {
      loadPets(pets);
    } else {
      const filteredPets = pets.filter((pet) => pet.category === categoryIndex);
      loadPets(filteredPets);
    }
  }
});

// ###########################################################################################
// Location Teleport Script
// ###########################################################################################

const categoriesLocation = ["Alle Kategorien", "Staatliches", "Firmen", "Garage", "Appartments", "Sonstiges", "IPLs"];

const locations = [
  // Category 1: Staatliches
  { category: 1, name: "PDMissionRow", position: [413.9604, -979.5165, 29.4315] },
  { category: 1, name: "PDVinewood", position: [658.2989, -14.7033, 83.2498] },
  { category: 1, name: "PDLaMesa", position: [815.3011, -1290, 26.2806] },
  { category: 1, name: "PDVespucci", position: [-1092.5275, -793.8198, 19.0688] },
  { category: 1, name: "PDDelPerro", position: [-1629.8374, -1008.3824, 13.0872] },
  { category: 1, name: "PDRockford", position: [-554.9275, -141.956, 38.4462] },
  { category: 1, name: "PDDavis", position: [368.5978, -1575.0725, 29.2124] },
  { category: 1, name: "PDSandy", position: [1859.8154, 3673.9912, 33.6776] },
  { category: 1, name: "PDPaleto", position: [-427.0681, 6029.71, 31.4872] },
  { category: 1, name: "MDCentral", position: [313.9253, -1378.2858, 31.9253] },
  { category: 1, name: "MDPillbox", position: [282.567, -577.0813, 43.1809] },
  { category: 1, name: "MDMountZonah", position: [-498.356, -286.9187, 35.5311] },
  { category: 1, name: "MDElBurro", position: [1158.9495, -1452.6593, 34.6886] },
  { category: 1, name: "MDEclipse", position: [-676.8923, 294.4352, 82.0366] },
  { category: 1, name: "MDOceans", position: [-1872.6066, -384.6066, 47.8315] },
  { category: 1, name: "MDSandy", position: [1844.5714, 3663.6792, 34.1326] },
  { category: 1, name: "MDPaleto", position: [-232.8, 6313.4243, 31.4535] },
  { category: 1, name: "FDRockford", position: [-647.0242, -128.3077, 37.8228] },
  { category: 1, name: "FDDavis", position: [212.8484, -1630.1802, 29.2631] },
  { category: 1, name: "FDElBurro", position: [1202.2153, -1452.145, 35.0088] },
  { category: 1, name: "FDSandy", position: [1696.0088, 3578.0308, 35.5143] },
  { category: 1, name: "FDPaleto", position: [-392.1099, 6131.0244, 31.3693] },
  { category: 1, name: "DoJ", position: [-508.4572, -257.0374, 35.5985] },
  { category: 1, name: "StatePrison", position: [1854.1846, 2586.3428, 45.6578] },
  { category: 1, name: "Cityhall1", position: [-551.6967, -644.9407, 33.2227] },
  { category: 1, name: "Cityhall2", position: [-1276.5626, -559.7011, 30.2234] },
  { category: 1, name: "Airport", position: [-1035.0593, -2733.6265, 20.1641] },
  { category: 1, name: "Fahrschule1", position: [223.3978, -1395.1516, 30.5773] },

  // Category 2: Firmen
  { category: 2, name: "Diamond", position: [879.0857, 30.6198, 78.6161] },
  { category: 2, name: "TaxiDCC", position: [917.8945, -149.6439, 75.7686] },
  { category: 2, name: "WeazelNews", position: [-624.1846, -945.2308, 21.7649] },
  { category: 2, name: "Lifeinvader", position: [-1089.3099, -268.1011, 37.6879] },
  { category: 2, name: "Bahamas", position: [-1390.8001, -583.7802, 30.2234] },
  { category: 2, name: "PDM", position: [-73.8198, -1109.5516, 25.9436] },
  { category: 2, name: "Mosley", position: [-26.6769, -1630.0483, 29.1956] },
  { category: 2, name: "Bennys", position: [-206.3077, -1302.277, 31.285] },
  { category: 2, name: "LSC1", position: [-379.0154, -122.9275, 38.682] },
  { category: 2, name: "LSC2", position: [-1125.7715, -1988.9407, 13.1545] },

  // Category 3: Garage
  { category: 3, name: "2Garage", position: [173.2903, -1003.6, -99.6571] },
  { category: 3, name: "6Garage", position: [197.8153, -1002.293, -99.6575] },
  { category: 3, name: "10Garage", position: [229.9559, -981.7928, -99.6607] },
  { category: 3, name: "MissionCarpark", position: [405.9228, -954.1149, -99.6627] },

  // Category 4: Appartments
  { category: 4, name: "LowEndApartment", position: [261.4586, -998.8196, -99.0086] },
  { category: 4, name: "4IntegrityWayApt28", position: [-18.0786, -583.6725, 79.4657] },
  { category: 4, name: "4IntegrityWayApt30", position: [-35.3128, -580.4199, 88.7122] },
  { category: 4, name: "DellPerroHeightsApt4", position: [-1468.14, -541.815, 73.4442] },
  { category: 4, name: "DellPerroHeightsApt7", position: [-1477.14, -538.7499, 55.5264] },
  { category: 4, name: "RichardMajesticApt2", position: [-915.811, -379.432, 113.6748] },
  { category: 4, name: "TinselTowersApt42", position: [-614.86, 40.6783, 97.6001] },
  { category: 4, name: "EclipseTowersApt3", position: [-773.407, 341.766, 211.397] },
  { category: 4, name: "3655WildOatsDrive", position: [-169.286, 486.4938, 137.4436] },
  { category: 4, name: "2044NorthConkerAve", position: [340.9412, 437.1798, 149.3925] },
  { category: 4, name: "2045NorthConkerAve", position: [373.023, 416.105, 145.7006] },
  { category: 4, name: "2862HillcrestAve", position: [-676.127, 588.612, 145.1698] },
  { category: 4, name: "2868HillcrestAve", position: [-763.107, 615.906, 144.1401] },
  { category: 4, name: "2874HillcrestAve", position: [-857.798, 682.563, 152.6529] },
  { category: 4, name: "2677Whispymound", position: [120.5, 549.952, 184.097] },
  { category: 4, name: "2133MadWayne", position: [-1288, 440.748, 97.6946] },
  { category: 4, name: "Motel", position: [152.2605, -1004.471, -98.99999] },

  // Category 5: Sonstiges
  { category: 5, name: "BunkerInterior", position: [899.5518, -3246.038, -98.04907] },
  { category: 5, name: "CharCreator", position: [402.5164, -1002.847, -99.2587] },
  { category: 5, name: "TortureRoom", position: [136.5146, -2203.149, 7.30914] },
  { category: 5, name: "SolomonsOffice", position: [-1005.84, -478.92, 50.02733] },
  { category: 5, name: "PsychiatristsOffice", position: [-1908.024, -573.4244, 19.09722] },
  { category: 5, name: "OmegasGarage", position: [2331.344, 2574.073, 46.68137] },
  { category: 5, name: "MovieTheatre", position: [-1427.299, -245.1012, 16.8039] },
  { category: 5, name: "MadrazosRanch", position: [1399.9958, 1147.2348, 115.3213] },
  { category: 5, name: "LestersHouse", position: [1273.9, -1719.305, 54.77141] },
  { category: 5, name: "FBITopFloor", position: [134.5835, -749.339, 258.152] },
  { category: 5, name: "FBIFloor49", position: [134.635, -765.831, 242.152] },
  { category: 5, name: "FBIFloor47", position: [134.5835, -766.486, 234.152] },
  { category: 5, name: "IAAOffice", position: [117.22, -620.938, 206.1398] },

  // Category 6: IPLs
  { category: 6, name: "IPLStadium", position: [-248.6731, -2010.603, 30.14562] },
  { category: 6, name: "IPLOfficeArcadius", position: [-141.1987, -620.913, 168.8205] },
  { category: 6, name: "IPLOfficeMazeBank", position: [-75.8466, -826.9893, 243.3859] },
  { category: 6, name: "IPLOfficeMazeBankWest", position: [-1392.667, -480.4736, 72.04217] },
  { category: 6, name: "IPLOfficeLombank", position: [-1579.756, -565.0661, 108.523] },
  { category: 6, name: "IPLCasinoMain", position: [1100.0, 220.0, -50.0] },
  { category: 6, name: "IPLCasinoGarage", position: [1295.0, 230.0, -50.0] },
  { category: 6, name: "IPLMorgue", position: [275.446, -1361.11, 24.5378] },
  { category: 6, name: "IPLLestersFactory", position: [716.84, -962.05, 31.59] },
  { category: 6, name: "IPLLifeinvader", position: [-1047.9, -233.0, 39.0] },
  { category: 6, name: "IPLAircraftCarrier", position: [3084.73, -4770.709, 15.26167] },
  { category: 6, name: "IPLGunrunningHeist", position: [-1418.21, 6749.81, 10.98968] },
  { category: 6, name: "IPLDignityHeistYacht", position: [-2027.946, -1036.695, 6.707587] },
  { category: 6, name: "IPLCluckingBellFarms", position: [-66.88, 6243.07, 31.07] },
  { category: 6, name: "IPLTunnel", position: [-49.415, -558, 287, 30.1] },
  { category: 6, name: "IPLApartment1", position: [-786.8663, 315.7642, 217.6385] },
  { category: 6, name: "IPLApartment2", position: [-786.9563, 315.6229, 187.9136] },
  { category: 6, name: "IPLApartment3", position: [-774.0126, 342.0428, 196.6864] },
  { category: 6, name: "IPLWarehouse1", position: [1009.5, -3196.6, -38.99682] },
  { category: 6, name: "IPLWarehouse2", position: [1051.491, -3196.536, -39.14842] },
  { category: 6, name: "IPLWarehouse3", position: [1093.6, -3196.6, -38.99841] },
  { category: 6, name: "IPLWarehouse4", position: [1121.897, -3195.338, -40.4025] },
  { category: 6, name: "IPLWarehouseSmall", position: [1094.988, -3101.776, -39.00363] },
  { category: 6, name: "IPLWarehouseMedium", position: [1056.486, -3105.724, -39.00439] },
  { category: 6, name: "IPLWarehouseLarge", position: [1006.967, -3102.079, -39.0035] },
  { category: 6, name: "IPLFIBLobby", position: [110.4, -744.2, 45.7496] },
  { category: 6, name: "IPLCarwash", position: [55.7, -1391.3, 30.5] },
  { category: 6, name: "IPLLostMC", position: [984.1552, -95.3662, 74.5] },
  { category: 6, name: "IPLPillboxMD", position: [307.168, -590.807, 43.28] },
  { category: 6, name: "IPLPDM", position: [-54.3, -1109.3767, 26.4358] },
  { category: 6, name: "IPLFerrisWheel", position: [-1645.55, -1113.04, 12.65] },
  { category: 6, name: "IPLRaceTrack", position: [1978, 3111, 46] },
  { category: 6, name: "IPLCargoShip", position: [-163.3628, -2385.161, 5.999994] },
  { category: 6, name: "IPLUnionDepo", position: [2.6968, -667.0166, 16.13061] },
  { category: 6, name: "IPLTrevorsTrailer", position: [1975.552, 3820.538, 33.44833] },
  { category: 6, name: "IPLMaxRendaShop", position: [-585.8247, -282.72, 35.45475] },
  { category: 6, name: "IPLJuwel", position: [-630.07, -236.332, 38.05704] },
  { category: 6, name: "IPLONeilsFarm", position: [2469.03, 4955.278, 45.11892] },
  { category: 6, name: "IPLCayoPerico", position: [4972.75, -5703.15, 19.88] },
  { category: 6, name: "IPLNorthYankton", position: [5327.56, -5189.22, 82.76] },
];

document.addEventListener("DOMContentLoaded", function () {
  const categorySelectLocation = document.getElementById("categorySelectLocation");
  const locationContainer = document.getElementById("locationContainer");
  const searchInputLocation = document.getElementById("searchInputLocation");

  categoriesLocation.forEach((category, index) => {
    const optionElementLocation = document.createElement("option");
    optionElementLocation.value = index;
    optionElementLocation.textContent = category;
    categorySelectLocation.appendChild(optionElementLocation);
  });

  loadLocations(locations);

  categorySelectLocation.addEventListener("change", function () {
    const selectedCategoryLocation = parseInt(this.value);
    filterLocationsByCategory(selectedCategoryLocation);
  });

  searchInputLocation.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const filteredLocations = locations.filter((location) => location.name.toLowerCase().includes(keyword));
    loadLocations(filteredLocations);
  });

  function loadLocations(locationList) {
    locationContainer.innerHTML = "";
    locationList.forEach((location) => {
      const locationElement = document.createElement("div");
      locationElement.className = "location";
      locationElement.innerHTML = `
        <img src="assets/teleport/models/${location.name}.png" alt="${location.name}">
        <div class="location-name">${location.name}</div>
      `;
      locationContainer.appendChild(locationElement);

      locationElement.querySelector(".location-name").addEventListener("click", function () {
        console.log(`Teleporting to location: ${location.position}`);
        console.log(`${location.position.join(", ")}`);
        // Der Code zum Teleportieren hinzufügen
      });
    });
  }

  function filterLocationsByCategory(categoryIndex) {
    if (categoryIndex === 0) {
      loadLocations(locations);
    } else {
      const filteredLocations = locations.filter((location) => location.category === categoryIndex);
      loadLocations(filteredLocations);
    }
  }
});

// ###########################################################################################
// Item List Script
// ###########################################################################################
document.getElementById("searchItem").addEventListener("input", function () {
  const filterText = this.value.toLowerCase();
  const isNumber = /^\d+$/.test(filterText);
  const items = document.querySelectorAll(".item-item");

  items.forEach((item) => {
    const itemName = item.querySelector(".item-name").textContent.toLowerCase();
    const itemId = item.querySelector(".item-id").textContent.toLowerCase();

    if (isNumber) {
      if (itemId.includes(filterText)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    } else {
      if (itemName.includes(filterText)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    }
  });
});
