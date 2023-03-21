
import DropdwonMenu from './DropdwonMenu.js';


export default function StarsContainer() {
    

    
    
    return (<div className="container-fluid" style={{
        backgroundImage: 'url(./stars.jpeg)', backgroundRepeat:'no-repeat', backgroundSize:'cover', minHeight: '100vh'
    }}>
        <div className="container">
            <h1 className="text-white text-align-center p-4">Did you know that 88 constellations populate the sky? Some names will sound incredibly similar to your Zodiac sign, some will remind you of Greek mithology characters. And don't worry if you're not fluent in Greek, we got you covered with English names as well!</h1>
        </div>
        <DropdwonMenu />
    </div >
    )
    
}