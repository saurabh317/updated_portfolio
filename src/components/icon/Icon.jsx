import './icon.css';
import { socialIcons } from "../../Data";

const Icon = () => {

  return (
    <div className='icons'>
      {
        socialIcons.map((e) => {
          return(
            <a href={e.link} target="_blank" rel="noreferrer">{e.icon}</a>
          )
        })
      }
    </div>
  )
}
export default Icon;