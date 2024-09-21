import * as alt from "alt-client";
import * as native from "natives";

let adminPanelView = null;
let isAdminPanelVisible = false;

// WebView sofort erstellen, aber nicht anzeigen
function preloadAdminPanel() {
  if (adminPanelView === null) {
    adminPanelView = new alt.WebView("http://resource/html/index.html"); // Pfad zu deiner HTML-Datei
    adminPanelView.emit("showPanel", false); // Unsichtbar starten
    adminPanelView.on("setSupportMode", handleSupportModeToggle); //Support Modus anforderung
    adminPanelView.on("requestPlayerList", requestPlayerList);
    adminPanelView.on("requestCurrentPosition", requestCurrentPositionFromServer); // Event für Position anfordern
    adminPanelView.on("setVisibility", handleVisibilityToggle); // Event-Listener für Sichtbarkeit
    adminPanelView.on("teleportToCoords", handleTeleportToCoords); // Event für das Teleportieren
    adminPanelView.on("teleportToWaypoint", handleTeleportToWaypoint); // Event-Listener für Waypoint-Teleport
    adminPanelView.on("spawnVehicle", handleVehicleSpawn); // Event-Listener für Fahrzeug-Spawning
    adminPanelView.on("changePedModel", handlePedModelChange); // Event-Listener für Ped-Modell ändern
    adminPanelView.on("teleportToLocation", handleTeleportRequest); // Event-Listener für Teleport-Anfragen
  }
}

// Admin-Panel ein-/ausblenden
function toggleAdminPanel() {
  if (!adminPanelView) return; // Wenn der WebView nicht erstellt ist, beende

  isAdminPanelVisible = !isAdminPanelVisible;

  if (isAdminPanelVisible) {
    adminPanelView.focus();
    adminPanelView.emit("showPanel", true);
    alt.showCursor(true); // Cursor anzeigen
    alt.toggleGameControls(false); // Spielsteuerung deaktivieren
    requestPlayerList(); // Spielerinformationen vom Server anfordern, wenn das Panel geöffnet wird
  } else {
    adminPanelView.emit("showPanel", false);
    adminPanelView.unfocus();
    alt.showCursor(false); // Cursor verstecken
    alt.toggleGameControls(true); // Spielsteuerung aktivieren
  }
}

// WebView beim Client-Start vorladen
alt.on("spawned", () => {
  preloadAdminPanel();
});

// F11 oder ESC zum Ein-/Ausblenden des Admin-Panels
alt.on("keydown", (key) => {
  if (key === 0x7a) {
    // F11
    toggleAdminPanel();
  }

  if (key === 0x1b && isAdminPanelVisible) {
    // ESC
    toggleAdminPanel();
  }
});

///////////////////////////////////////////////////////
//             Kopfmenü Menüpunkt
///////////////////////////////////////////////////////
function handleSupportModeToggle(isSupportmode) {
  const localPlayer = alt.Player.local;

  if (isSupportmode) {
    native.setEntityAlpha(localPlayer.scriptID, 255, false); // Sichtbar
    console.log("Spieler ist jetzt im Support Mode");
  } else {
    native.setEntityAlpha(localPlayer.scriptID, 128, false); // Supportmode
    console.log("Spieler ist jetzt nicht mehr im Support Mode");
  }
}

///////////////////////////////////////////////////////
//             Spieler Menüpunkt
///////////////////////////////////////////////////////

// Spielerinformationen vom Server anfordern
function requestPlayerList() {
  console.log("Spielerliste vom Server anfordern");
  alt.emitServer("requestPlayerList"); // Sende Anfrage an den Server
}

// Empfange die Spielerliste vom Server und leite sie an die WebView weiter
alt.onServer("receivePlayerList", (playerList) => {
  console.log("Spielerliste vom Server empfangen:", playerList); // Debug-Ausgabe
  if (adminPanelView) {
    adminPanelView.emit("updatePlayerList", playerList); // Sende die Spielerliste an die WebView
  }
});

///////////////////////////////////////////////////////
//             Position Menüpunkt
///////////////////////////////////////////////////////

// Positionsdaten vom Server anfordern
function requestCurrentPositionFromServer() {
  alt.log("Anfrage zur aktuellen Position und Rotation gesendet.");
  alt.emitServer("requestCurrentPosition"); // Sende die Anfrage an den Server
}

// Rückmeldung vom Server empfangen
alt.onServer("sendCurrentPosition", (position) => {
  const { x, y, z, heading } = position;
  alt.log(`Position erhalten: X=${x}, Y=${y}, Z=${z}, Heading=${heading}`);

  if (adminPanelView) {
    adminPanelView.emit("updatePositionFields", { x, y, z, heading }); // Daten an das Admin-Panel senden
  }
});

///////////////////////////////////////////////////////
//             Unsichtbarkeit Menüpunkt
///////////////////////////////////////////////////////
// Sichtbarkeit ein-/ausschalten
function handleVisibilityToggle(isVisible) {
  const localPlayer = alt.Player.local;

  if (isVisible) {
    native.setEntityAlpha(localPlayer.scriptID, 255, false); // Sichtbar
    console.log("Spieler ist jetzt sichtbar");
  } else {
    native.setEntityAlpha(localPlayer.scriptID, 0, false); // Unsichtbar
    console.log("Spieler ist jetzt unsichtbar");
  }
}

///////////////////////////////////////////////////////
//             Teleportieren Menüpunkt
///////////////////////////////////////////////////////
// Funktion zum Teleportieren, wenn die Koordinaten im Admin-Panel eingegeben werden
function handleTeleportToCoords(coords) {
  const { x, y, z } = coords;
  alt.log(`Teleportiere zu den Koordinaten: X=${x}, Y=${y}, Z=${z}`);
  alt.emitServer("teleportToCoords", { x, y, z }); // Sende die Koordinaten an den Server
}

// Teleport zum Waypoint
function handleTeleportToWaypoint() {
  const blip = native.getFirstBlipInfoId(8); // 8 steht für den Waypoint-Blip-Typ

  if (blip !== 0) {
    const coords = native.getBlipInfoIdCoord(blip); // Hole Koordinaten des Blips (Vector3)

    if (coords && !isNaN(coords.x) && !isNaN(coords.y) && !isNaN(coords.z)) {
      alt.emitServer("teleportPlayer", { x: coords.x, y: coords.y, z: coords.z });
      console.log(`Spieler wird zum Waypoint teleportiert: x=${coords.x}, y=${coords.y}, z=${coords.z}`);
    } else {
      console.error("Ungültige Koordinaten vom Waypoint erhalten.");
    }
  } else {
    console.error("Kein Waypoint gesetzt.");
    alt.log("Bitte setze einen Waypoint auf der Karte.");
    alt.emit("waypointNotSet");
  }
}

///////////////////////////////////////////////////////
//             Fahrzeug Spawnen Menüpunkt
///////////////////////////////////////////////////////

// Fahrzeug-Spawning-Event, ausgelöst durch den HTML-Button
function handleVehicleSpawn(model) {
  alt.emitServer("spawnVehicle", model); // Server-Event zum Spawnen des Fahrzeugs
}

// Setzt den Spieler ins Fahrzeug, nachdem es gespawnt wurde
alt.onServer("setPedIntoVehicle", async (vehicle) => {
  const player = alt.Player.local;
  await promisify(() => {
    if (player.vehicle) return true;
    native.setPedIntoVehicle(player.scriptID, vehicle.scriptID, -1); // -1 für Fahrersitz
  });
});

///////////////////////////////////////////////////////
//             Petmodel ändern Menüpunkt
///////////////////////////////////////////////////////

// Ped-Modell ändern, ausgelöst durch den HTML-Button
function handlePedModelChange(model) {
  alt.emitServer("changePedModel", model); // Server-Event zum Ändern des Ped-Modells
}

// Ändert das Pedmodell des Spielers
alt.onServer("setPedModel", (model) => {
  const hash = alt.hash(model);
  native.requestModel(hash);

  // Warte, bis das Modell geladen ist
  const interval = alt.setInterval(() => {
    if (native.hasModelLoaded(hash)) {
      native.setPlayerModel(alt.Player.local.scriptID, hash);
      alt.clearInterval(interval);
    }
  }, 50);
});

function promisify(callback) {
  return new Promise((resolve, reject) => {
    let interval = alt.setInterval(() => {
      if (callback() === true) {
        resolve(true);
        alt.clearInterval(interval);
      }
    }, 100);
  });
}

///////////////////////////////////////////////////////
//             Location Teleport Menüpunkt
///////////////////////////////////////////////////////

// Teleport-Event vom Admin Panel empfangen und an den Server weiterleiten
alt.on("teleportToLocation", (position) => {
  if (Array.isArray(position) && position.length === 3) {
    alt.emitServer("teleportToLocation", position);
    alt.log(`Sende Teleport-Event an den Server für Position: ${position}`);
  } else {
    alt.logError("Ungültiges Position-Array:", position);
  }
});

// Teleport-Anfrage vom Admin Panel empfangen
function handleTeleportRequest(position) {
  alt.emitServer("teleportToLocation", position);
  alt.log(`Teleportationsanfrage gesendet für Position: ${position}`);
}

// Rückmeldung vom Server erhalten, dass die Teleportation erfolgreich war
alt.on("teleportSuccessful", (coords) => {
  alt.log(`Erfolgreich zu Position ${coords} teleportiert.`);
});
