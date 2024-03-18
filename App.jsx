import useBackgroundColor from "./useBackgroundColor";
function App() {
  const [color, setColor] = useBackgroundColor("red")
  return ( 
    <div className="w-full h-screen duration-200"
      style={{background:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"red"}}>
              RED
            </button>
            <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"blue"}}>
              BLUE
            </button>
            <button onClick={()=>setColor("Orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Orange"}}>
            Orange
            </button>
              <button onClick={()=>setColor("Lime")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Lime"}}>
              Lime
              </button>
              <button onClick={()=>setColor("Yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Yellow"}}>
              Yellow
              </button>
              <button onClick={()=>setColor("Cyan")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Cyan"}}>
              Cyan
              </button>
              <button onClick={()=>setColor("Indigo")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Indigo"}}>
              Indigo  
              </button>
  
          </div>
        </div>
    </div>  
    
    );
}
export default App;