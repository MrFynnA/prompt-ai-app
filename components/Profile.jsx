import PromptCard from "./PromptCard"

const Profile=({name, desc, data, handleEdit, handleDelete})=>{
  return(
    <section className="w-full">
      <div className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient !text-4xl">{name} Profile</span></h1>
      </div>
        <p className="desc text-left mb-6">{desc}</p>
        <div className="flex flex-col gap-1">
        <div className="font-bold font-satoshi text-md">My Prompts</div>
        <div className="flex flex-wrap gap-4">
        {data && data.length>0 && data.map(prompt=><PromptCard 
        key={prompt._id} 
        data={prompt} 
        handleEdit={handleEdit && handleEdit.bind(null,prompt._id)}
        handleDelete={handleDelete && handleDelete.bind(null,prompt._id)}/>)
        }
        </div>
        </div>
    </section>
  )

}


export default Profile