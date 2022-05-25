import Education from "./resume/education"
import CS50X from '../static/images/CS50X.png'

export default function Resume() {
    return(
        <div className="w-full h-screen">
            <div className="flex flex-col">
                <Education 
                    title={'CS50X'}
                    institution={'HarvardX (on EDX)'}
                    discription={'This is an introduction to the intellectual enterprises of computer science and the art of programming. The course covers C, SQL, Python, Javascript, HTML & CSS, and Web Development using Flask.'}
                    grade={'Completed with Verified Certificate'}
                    image={CS50X}
                    url={'https://courses.edx.org/certificates/390fbc6b10a34b0e8fef28b735cad7f1'}
                />
            </div>
        </div>
    )
}