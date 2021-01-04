import '../styles/global.css'

const App = ({ Component, pageProps }) =>(
  // This is the only place where you can import
  // Global CSS files
  <Component {...pageProps} />
)

export default App