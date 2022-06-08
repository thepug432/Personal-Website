import Project from "./projects/project"
import WarframeSite from '../static/images/WarframeSite.png'
import UsStats from '../static/images/USstats.png'
import Sherrysite from '../static/images/sherry.png'
import Hider from "./Hider"

export default function Projects() {
    return(
        <Hider>
            <div className="h-screen-without-nav bg-gray-500 flex flex-col">
                <Project 
                    title={'Sharry Pdf share'}
                    description={'This is a fullstack webapp that lets users login/create accounts and share pdfs.'}
                    image={Sherrysite}
                    Sitelink={'https://sherry-pdf-share.netlify.app/'}
                    Githublink={'https://github.com/thepug432/Sherry-filesharer'}
                    features={['Login/Logout', 'Register', 'Upload and delete pdf', 'Make pdf public/private', 'Share pdf with specific user', 'Add, remove and edit tags', 'Search by title and tag']}
                />
                <Project  
                    title={'Warframe API Parser'}
                    description={'This project parses the warframe api using it to produce a website.'}
                    image={WarframeSite}
                    Sitelink={'https://warframeparser.netlify.app/'}
                    Githublink={'https://github.com/thepug432/WarframeApiParser'}
                    features={['Minimize Data', 'Hide Data', 'Change Platforms (Stored Locally)', 'Error Checking On Data Fetching', 'Loading Screen While Fetching Data', 'Responsive']}
                />
                <Project
                    title={'United States Population Tracker'}
                    description={'This website tracks the united states population with a chart throught the years.'}
                    image={UsStats}
                    Sitelink={'https://uspopulationtracker.netlify.app/'}
                    Githublink={'https://github.com/thepug432/USPopulation'}
                    features={['Dynamic Chart Creation Via API', 'Data For United States', 'Data By State', 'Responsive']}
                />
                <div className="bg-gray-500 py-1">
                </div>
            </div>
        </Hider>
    )
}