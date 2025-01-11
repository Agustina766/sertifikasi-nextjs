export default function Header(){
    return (
      <> 
        <div className="flex p-4 justify-between items-center bg-slate-800">
          <div>
          <p className=" font-bold text-white text-2x1">
            Agustina
            </p>
          </div>    
            <div>
                <ul className="flex">
                    <li className= "text-white text-lg mx-3">Home</li>
                    <li className= "text-white text-lg mx-3">Techs</li>
                    <li className= "text-white text-lg mx-3">Biography</li>
                    <li className= "text-white text-lg mx-3">Contact</li>
                </ul>
            </div>
        </div>
        </> 
    );
  }