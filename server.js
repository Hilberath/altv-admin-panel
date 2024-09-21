import * as alt from "alt";

alt.on("playerConnect", (player) => {
  player.vehicles = [];
  alt.log(`Spieler verbunden: ${player.name}`);
});

alt.on("playerDisconnect", (player) => {
  const vehicles = player.vehicles || [];

  vehicles.forEach((vehicle) => {
    vehicle.destroy();
  });

  alt.log(`Spieler getrennt: ${player.name}`);
});

///////////////////////////////////////////////////////
//             Kopfzeile Menüpunkt
///////////////////////////////////////////////////////

alt.onClient("setSupportMode", (player, isSupportmode) => {
  if (isSupportmode) {
    alt.emitClient(player, "setSupportMode", true); // Sichtbar
    alt.log(`${player.name} ist jetzt im Support Mode.`);
  } else {
    alt.emitClient(player, "setSupportMode", false); // Unsichtbar
    alt.log(`${player.name} ist jetzt nicht mehr im Support Mode.`);
  }
});

///////////////////////////////////////////////////////
//             Spieler Menüpunkt
///////////////////////////////////////////////////////

// Spieler-IDs werden automatisch anhand der Liste von AltV vergeben
alt.onClient("requestPlayerList", (player) => {
  const playerList = alt.Player.all.map((p, index) => ({
    name: p.name,
    id: index + 1,
  }));

  console.log(`Spielerliste an ${player.name} gesendet:`, playerList);
  alt.emitClient(player, "receivePlayerList", playerList); // Sende die Liste an den Client
});

///////////////////////////////////////////////////////
//             Position Menüpunkt
///////////////////////////////////////////////////////
// Sende aktuelle Position und Rotation an den Client
alt.onClient("requestCurrentPosition", (player) => {
  const x = player.pos.x.toFixed(2);
  const y = player.pos.y.toFixed(2);
  const z = player.pos.z.toFixed(2);
  const heading = player.rot.z.toFixed(2); // Die Ausrichtung des Spielers

  alt.log(`Position gesendet an ${player.name}: ${x}, ${y}, ${z}, Heading: ${heading}`);
  alt.emitClient(player, "sendCurrentPosition", { x, y, z, heading });
});

///////////////////////////////////////////////////////
//             Unsichtbarkeit Menüpunkt
///////////////////////////////////////////////////////

alt.onClient("setVisibility", (player, isVisible) => {
  if (isVisible) {
    alt.emitClient(player, "setVisibility", true); // Sichtbar
    alt.log(`${player.name} ist jetzt sichtbar.`);
  } else {
    alt.emitClient(player, "setVisibility", false); // Unsichtbar
    alt.log(`${player.name} ist jetzt unsichtbar.`);
  }
});

///////////////////////////////////////////////////////
//             Teleportieren Menüpunkt
///////////////////////////////////////////////////////
// Teleportiere zu bestimmten Koordinaten
alt.onClient("teleportToCoords", (player, coords) => {
  const { x, y, z } = coords;

  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    alt.logError(`Ungültige Koordinaten empfangen: ${x}, ${y}, ${z}`);
    return;
  }

  alt.log(`${player.name} wird zu Position (${x}, ${y}, ${z}) teleportiert.`);
  player.pos = new alt.Vector3(x, y, z);
});

// Teleportieren zum Waypoint
alt.onClient("teleportPlayer", (player, position) => {
  if (!position || !position.x || !position.y || !position.z) {
    alt.logError(`Ungültige Teleport-Position erhalten: ${JSON.stringify(position)}`);
    return;
  }

  const { x, y, z } = position;
  alt.log(`${player.name} wird zu Koordinaten (${x}, ${y}, ${z}) teleportiert.`);

  player.pos = new alt.Vector3(x, y, z);
});

///////////////////////////////////////////////////////
//             Fahrzeug Spawnen Menüpunkt
///////////////////////////////////////////////////////

const limit = 1;

alt.onClient("spawnVehicle", (player, model) => {
  alt.log(`Fahrzeug-Spawning angefragt: ${model} für ${player.name}`);

  if (!player.vehicles) {
    player.vehicles = [];
  }

  if (player.vehicles.length >= limit) {
    alt.log(`Zerstöre bestehendes Fahrzeug für ${player.name}`);
    player.vehicles[0].destroy(); // Zerstört das vorherige Fahrzeug
    player.vehicles.splice(0, 1);
  }

  try {
    // Fahrzeug an der Spielerposition spawnen
    const vehicle = new alt.Vehicle(model, player.pos.x, player.pos.y, player.pos.z, 0, 0, 0);
    player.vehicles.push(vehicle);

    alt.log(`Fahrzeug gespawnt: ${model} für ${player.name} an (${player.pos.x}, ${player.pos.y}, ${player.pos.z})`);

    // Setzt den Spieler ins Fahrzeug auf den Fahrersitz
    vehicle.setSyncedMeta("playerSeat", -1);
    alt.emitClient(player, "setPedIntoVehicle", vehicle);
  } catch (error) {
    alt.logError(`Fehler beim Spawnen des Fahrzeugs ${model} für ${player.name}: ${error.message}`);
  }
});

///////////////////////////////////////////////////////
//             Petmodel ändern Menüpunkt
///////////////////////////////////////////////////////

// Event für das Ändern des Pedmodels
alt.onClient("changePedModel", (player, model) => {
  alt.log(`Pedmodel ändern: ${model} für ${player.name}`);
  alt.emitClient(player, "setPedModel", model);
});

///////////////////////////////////////////////////////
//             Location Teleport Menüpunkt
///////////////////////////////////////////////////////

// Event zum Teleportieren des Spielers
alt.onClient("teleportToLocation", (player, position) => {
  alt.log(`Empfange Teleport-Anfrage für ${player.name} an Position: ${position}`);

  if (!position || position.length !== 3) {
    alt.logError(`Ungültige Position empfangen: ${position}`);
    return;
  }

  const [x, y, z] = position;

  // Debug-Log, um sicherzustellen, dass die richtigen Positionen ankommen
  alt.log(`${player.name} wird zu Position (${x}, ${y}, ${z}) teleportiert.`);

  try {
    // Setze die neue Position des Spielers
    player.pos = new alt.Vector3(x, y, z);
    alt.log(`Erfolgreich teleportiert: ${player.name} zu (${x}, ${y}, ${z})`);
    // Rückmeldung an den Spieler
    alt.emitClient(player, "teleportSuccessful", position);
  } catch (error) {
    alt.logError(`Fehler beim Teleportieren von ${player.name}: ${error.message}`);
  }
});
