import './Section.css'
import Cardbox from '../card/Cardbox';
import Data from '../../../data';

const Section = () => {
    return <div className="section">
        {Data.map(i =>{
                    return <Cardbox key={i.imageUrl} url={i.imageUrl} groupName={i.groupName} />
                })
            }
      
        
        
    </div>
}

export default Section;