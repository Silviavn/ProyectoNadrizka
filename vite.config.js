const path = require('path')
export default {
  root: path.resolve(__dirname),
  base: 'https://silviavn.github.io/ProyectoNadrizka',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        cortes: path.resolve(__dirname, 'pages/cortes.html'),
        lavado: path.resolve(__dirname, 'pages/lavado.html'),
        permanente: path.resolve(__dirname, 'pages/permanente.html'),
        coloracion: path.resolve(__dirname, 'pages/coloracion.html'),
        peinados: path.resolve(__dirname, 'pages/peinados.html'),
      }
    }
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}