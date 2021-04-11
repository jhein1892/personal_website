import './Mid.css'
import { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function MidSection(){
  const [loaded, setLoaded] = useState(false)
  // I would love to have a few sections: github, maybe the mlb standings. Current Golf Handicap, with most recent rounds played. Books I'm reading. 
  const [state, setState] = useState({
    JavaScript: false,
    Ruby: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { JavaScript, Ruby } = state;
  const error = [JavaScript, Ruby].filter((v) => v).length !== 2;
  
  // GitHub
  const getProjects = async () => {
    

    const macroURL = `https://api.github.com/search/repositories?q=user:jhein1892`
    const macroResponse = await fetch(macroURL)
    const macroResults = await macroResponse.json()
    setLoaded(true)
    console.log(macroResults)
    return macroResults
  }

  const myJavaScript = async () => {
    const projects = await getProjects().then((response) => console.log(response))
    // projects.forEach(element => {
    //   if (element.languages === 'Javacript'){
    //     return (
    //       <h1>element.name</h1>
    //     )
    //   }
    // })
  }

  const JSProjects = myJavaScript()
  return (
    <div>
      <h1>Hello</h1>
      <div>
      <FormControl component="fieldset" >
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={JavaScript} onChange={handleChange} name="JavaScript" />}
            label="JavaScript"
          />
          <FormControlLabel
            control={<Checkbox checked={Ruby} onChange={handleChange} name="Ruby" />}
            label="Ruby"
          />
        </FormGroup>
      </FormControl>
      </div>
      {state.JavaScript &&
        <div>
          {JSProjects}
        </div>
      }
    </div>
  );
}