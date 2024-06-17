import Image from "next/image";
import Header from "./components/header/Header";
import Landingblock from "./components/landingblock/landingblock";


export default function Home() {
  return (

      <body>
        <div className="mt-14 mx-28">
          <header>
            <Header></Header>
          </header>
          <main>
              <Landingblock></Landingblock>
          </main> 
        </div>  
      </body>

   
  );
} 
