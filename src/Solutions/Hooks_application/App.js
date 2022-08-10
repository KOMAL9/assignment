import UseMemoHook from "./Hooks/UseMemoHook";
import UseCallbackHook from "./Hooks/UseCallbackHook";
import UseRefHook from "./Hooks/UseRefHook";
import {UseEffectHook} from "./Hooks/UseEffectHook";
import { UseLayoutEffectHook } from "./Hooks/UseLayoutEffect";

function App() {
  return (
    <>
      <UseLayoutEffectHook />
    </>
  );
}

export default App;