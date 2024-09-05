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
    document.getElementById("vehicleCompany").textContent = "Fraktion:";
    document.getElementById("vehicleOwner").textContent = "Inhaber:";
    document.getElementById("vehicleLocation").textContent = "Standort:";

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

// ###########################################################################################
// Position Script
// ###########################################################################################
document.getElementById("showCurrentPosition").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("xCoord").value = "157.458";
    document.getElementById("yCoord").value = "2478.514";
    document.getElementById("zCoord").value = "32.7";
    document.getElementById("rotation").value = "1.54";
  } else {
    document.getElementById("xCoord").value = "";
    document.getElementById("yCoord").value = "";
    document.getElementById("zCoord").value = "";
    document.getElementById("rotation").value = "";
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
  } else {
    statusText.textContent = "Du bist gerade sichtbar";
  }
});

// ###########################################################################################
// Unsterblich Script
// ###########################################################################################
document.getElementById("toggleImmortality").addEventListener("change", function () {
  const statusText = document.getElementById("immortalityStatus");

  if (this.checked) {
    statusText.textContent = "Du bist gerade unsterblich";
  } else {
    statusText.textContent = "Du bist gerade nicht unsterblich";
  }
});

// ###########################################################################################
// FreeCam Script
// ###########################################################################################
document.getElementById("toggleFreeCam").addEventListener("change", function () {
  const statusText = document.getElementById("freeCamStatus");

  if (this.checked) {
    statusText.textContent = "FreeCam ist Aktiviert";
  } else {
    statusText.textContent = "FreeCam ist Deaktiviert";
  }
});

// ###########################################################################################
// Namen Zeigen Script
// ###########################################################################################
document.getElementById("togglePlayerInfo").addEventListener("change", function () {
  const statusText = document.getElementById("playerInfoStatus");

  if (this.checked) {
    statusText.textContent = "Du siehst gerade die Spieler Infos";
  } else {
    statusText.textContent = "Du siehst nicht die Spieler Infos";
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
  } else {
    statusText.textContent = "ObjectAttacher ist Deaktiviert";
  }
});

// ###########################################################################################
// Fahrzeug Spawnen Script
// ###########################################################################################

// Beispiel-Daten für Kategorien und Fahrzeuge
const categories = ["Alle Kategorien", "Boote", "Werbefahrzeuge", "Kompaktwagen", "Coupés", "Zweiräder", "Einsatzfahrzeuge", "Hubschrauber", "Industrielle Fahrzeuge", "Militärfahrzeuge", "Motorräder", "Muscle-Cars", "Geländefahrzeuge", "Flugzeuge", "SUVs", "Limousinen", "Dienstfahrzeuge", "Sportwagen", "Sportklassiker", "Supersportwagen", "Anhänger", "Züge", "Nutzfahrzeuge", "Transporter", "Formel-Fahrzeuge"];

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
  const categorySelect = document.getElementById("categorySelect");
  const vehicleContainer = document.getElementById("vehicleContainer");
  const searchInput = document.getElementById("searchInput");

  categories.forEach((category, index) => {
    const optionElement = document.createElement("option");
    optionElement.value = index;
    optionElement.textContent = category;
    categorySelect.appendChild(optionElement);
  });

  loadVehicles(vehicles);

  categorySelect.addEventListener("change", function () {
    const selectedCategory = parseInt(this.value);
    filterVehiclesByCategory(selectedCategory);
  });

  searchInput.addEventListener("input", function () {
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
        // Hier könnte der Code zum Spawnen des Fahrzeugs hinzugefügt werden
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
