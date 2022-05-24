import Project from "./projects/project"
import WarframeSite from '../static/images/WarframeSite.png'
import UsStats from '../static/images/USstats.png'

export default function Projects() {
    return(
        <div className="h-screen-without-nav bg-red-500 flex flex-col">
            <Project 
                title={'Warframe API Parser'}
                description={'This project parses the warframe api using it to produce a website.'}
                image={WarframeSite}
                Sitelink={'https://warframeparser.netlify.app/'}
                Githublink={'https://github.com/thepug432/WarframeApiParser'}
            />
            <Project
                title={'United States Population Tracker'}
                description={'This website tracks the united states population with a chart throught the years.'}
                image={UsStats}
                Sitelink={'https://uspopulationtracker.netlify.app/'}
                Githublink={'https://github.com/thepug432/USPopulation'}
            />
        </div>
    )
}