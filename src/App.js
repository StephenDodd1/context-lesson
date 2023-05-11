import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useContext,
} from "react";
import "./App.css";
import ThemeProvider, {ThemeContext} from "./context";
import Slider from "./Slider";
import Test from "./Test";
import Test2 from "./Test2";

function App() {
  const [letter, setLetter] = useState("b");

  const radioClicked = useRef(true);
  const runOnce = useRef(false);
  const theme = useContext(ThemeContext)


  // empty array means the useEffect will run only once.
  useLayoutEffect(() => {
    if (!runOnce.current) {
      console.log("ran first");
    }
    setLetter("a");
    runOnce.current = true;
  }, []);

  useEffect(() => {
    console.log("ran second");
    // ! means not
    radioClicked.current = !radioClicked.current;
  }, [letter]);

  const letterClick = useCallback((e) => {
    console.log("ran third");
    setLetter(e.target.value);
  });
  console.log(theme)
  return (
      <div className={theme.themes.dark? 'App bg-gray': 'App bg-white'}>
        <Slider/>
        <Test letter={letter} setLetter={letterClick} />
        <Test2 radioClicked={radioClicked}/>
      </div>
  );
}

export default App;
