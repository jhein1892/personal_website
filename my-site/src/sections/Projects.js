import './project.css'

export default function Project(props){
console.log('im at projects', props)
  return (
    <div className='root' >
      <p>Title: {props.title}</p>
      <p>Primary Language: {props.language}</p>
      <p>Last Updated: {props.updated_at}</p>
      <p>Check the Repo: {props.url}</p>
      <br/>
    </div>
  );
}