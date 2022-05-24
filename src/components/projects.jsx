import { motion } from "framer-motion"
import Project from "./projects/project"
import WarframeSite from '../static/images/WarframeSite.png'
import UsStats from '../static/images/USstats.png'
import Hider from "./Hider"

export default function Projects() {
    return(
        <Hider>
        <motion.div 
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        className="h-screen-without-nav bg-red-500 flex flex-col">
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
        </motion.div>
        </Hider>
    )
}