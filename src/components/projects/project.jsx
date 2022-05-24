import Button from "./button"

export default function Project({ title, description, Sitelink, Githublink, image}) {
    return(
        <div className="mt-2 text-white flex">
            <div className="mx-auto relative">
                <img src={image} className="w-full border-2 border-black"/>

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
            </div>
        </div>
    )
}