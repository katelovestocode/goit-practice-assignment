import { Section } from "./App.styled"
import useStore from "../utils/store";
import {UserGallery} from "./UserGallery/UserGallery"


export const App = () => {
  
const allUsers = useStore((state) => state.users);

return ( 
  
<Section > 
<UserGallery users={allUsers}/> 
</Section>

  )
}


