import './project.css'

export default function Project(props){
console.log('im at projects', props)
  return (
    <div className='root' >
      <p>Title: {props.title}</p>
      <p>Written In: {props.language}</p>
      <p>Last Updated: {props.updated_at}</p>
      <button>See Source Code</button>
    </div>
  );
}