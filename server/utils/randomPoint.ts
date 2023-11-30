export default function generateRandomPoint(
  latitude: number,
  longitude: number,
  radius: number
) {
  const r = radius / 111; // Convert radius from kilometers to degrees (approximately)

  const randomAngle = Math.random() * (2 * Math.PI);
  const randomRadius = Math.sqrt(Math.random());

  const newLat = latitude + r * randomRadius * Math.cos(randomAngle);
  const newLon = longitude + r * randomRadius * Math.sin(randomAngle);

  return { latitude: newLat, longitude: newLon };
}
