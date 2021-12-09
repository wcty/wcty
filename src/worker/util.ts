export function util() {
  console.warn('Hello from modified util.');
  console.warn('es6+ syntax test:');
  let foo = { message: 'working' };
  console.warn(foo?.message);
}