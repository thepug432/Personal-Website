import Education from "./resume/education"
import cS50X from '../static/images/CS50X.png'
import webdev from '../static/images/webdev.jpeg'

export default function Resume() {
    return(
        <div className="w-full h-screen">
            <div className="flex flex-col">
                <Education 
                    title={'Professional Certificate Computer Science For Web Programming'}
                    titleaddon={'(From HarvardX)'}
                    institution={'HarvardX (on EDX)'}
                    discription={'This is a professional certificate given out by Harvard university for the verified completion of its computer science for web programming courses.'}
                    image={webdev}
                    url={'https://credentials.edx.org/credentials/e70dbbc4f448422fa496e5650766fc45/'}
                />
                <Education 
                    title={'CS50X'}
                    institution={'HarvardX (on EDX)'}
                    discription={'This is an introduction to the intellectual enterprises of computer science and the art of programming. The course covers C, SQL, Python, Javascript, HTML & CSS, and Web Development using Flask.'}
                    grade={'Completed with Verified Certificate'}
                    image={cS50X}
                    url={'https://courses.edx.org/certificates/390fbc6b10a34b0e8fef28b735cad7f1'}
                />
            </div>
        </div>
    )
}