import Button from "./button"

export default function HoverBack({ see, title, description, Sitelink }) {
    return(
        <>
        {see && 
            <div className="absolute top-0 left-0 w-full h-full bg-white/50 flex flex-col">
                <div className="mx-auto p-3 rounded bg-red-700 mt-32">
                    <h1 className="text-4xl">{title}</h1>
                    <p className="mt-10">{description}</p>
                </div>
                <div className="mx-auto mt-2 flex">
                    <Button url={Sitelink} title={'See Site'}/>
                    <Button url={Githublink} title={'Github'}/>
                </div>
            </div> 
        }
        </>
    )
}