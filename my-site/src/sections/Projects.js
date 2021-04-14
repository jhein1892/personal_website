

export default function Project(props){
console.log('im at projects', props)
  return (
    <div>
      <p>{props.language}</p>
      <p>{props.title}</p>
      <p>{props.updated_at}</p>
      <p>{props.url}</p>
      <br/>
    </div>
  );
}