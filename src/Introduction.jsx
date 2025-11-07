import Header from "./Header"
import Footer from "./Footer"

export default function Introduction() {
    document.title += " | Introduction";
    return (
        <>
                <h2>Case Buttitta | Curious Bison</h2>
                <figure id="intro-figure">
                    <img src="assetsd/case.jpg" alt="Case Buttitta" />
                    <figcaption id="intro-caption">Case Buttitta</figcaption>
                </figure>
                <section>
                    <h3>Personal Information:</h3>
                    <p><b>Personal Background: </b> I was born in California and moved to North Carolina when I was little. I played baseball in high school and did volunteer work on the weekends. I originally wanted to do chemistry in college, but I decided I liked computer science more.</p>
                    <p><b>Professional Background: </b>I have sold Christmas trees, worked both front and back of house at Shake Shack, as well as front of house at Chick-fil-a. I am currently between jobs, but looking for part-time work this fall.  </p>
                    <p><b>Academic Background: </b>Computer Science Major, Mathematics Minor, Software Engineering Concentration, Junior</p>
                    <p><b>Primary Computer: </b>Computer Science Major, Mathematics Minor, Software Engineering Concentration, Junior</p>
                    <p><b>Courses I'm Taking and Why: </b></p>
                    <ol>
                        <li><b>ITSC3155 - Software Engineering: </b><span>Required for my concentration and field of employment.
                        </span></li>
                        <li><b>ITIS3135 - Front-end Web App Development: </b><span>Computer Science degree compels me too
                        </span></li>
                        <li><b>ITCS3112 - Object Oriented Design and Implementation: </b><span>Concentration elective where I get to learn .NET and C#.</span></li>
                        <li><b>ITSC3990 - Undergraduate Research: </b><span> I find research interesting.
                        </span></li>
                        <li><b>ITSC3146 - Intro to Operating Systems and Networking: </b><span>I find operating systems interesting and knowledge of computer systems and networking is crucial for my degree.</span></li>
                        <li><b>FRE102 - French 2: </b><span>I need extra credit hours to complete my degree and I like learning French.</span></li>
                    </ol>
                    <p><b>Interesting Thing to Remember Me By: </b>I am blond.</p>
                </section>
                <section>
                    <p>“The best time to plant a tree was 20 years ago. The second best time is now.”</p>
                    <em>-Chinese Proverb</em>
                </section>
        </>);
}