import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function IntroductionFromJson() {
    document.title = "Case Buttitta | Introduction From JSON";

    const [thing, setThing] = useState(null);

    useEffect(() => {
        fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students/cbuttitt")
            .then((res) => res.json())
            .then((data) => setThing(data))
            .catch((err) => console.error("Error loading JSON:", err));
    }, []);

    // Wait until JSON is loaded
    if (!thing) return <p>Loading...</p>;

    // Destructure safely now that thing exists
    const firstName = thing.name.first;
    const lastName = thing.name.last;
    const acknowledgement = thing.acknowledgement;
    const acknowledgementDate = thing.acknowledgementDate;
    const mascot = thing.mascot;
    const divider = "||";
    const device = thing.platform.device;
    const os = thing.platform.os;
    const personalBackground = thing.backgrounds.personal;
    const professionalBackground = thing.backgrounds.professional;
    const academicBackground = thing.backgrounds.academic;
    const courses = thing.courses;
    const personalStatement = thing.personalStatement;
    const quoteText = thing.quote.text;
    const quoteAuthor = thing.quote.author;
    const funFact = thing.funFact;
    const charlotteLink = thing.links.charlotte;
    const githubLink = thing.links.github;
    const githubioLink = thing.links.githubio;
    const linkedinLink = thing.links.linkedin;
    const freecodecampLink = thing.links.freecodecamp;
    const codecademyLink = thing.links.codecademy;

    const imageSrc = "/media/2025-fall/itis-3135/cbuttitt-1764028488858.jpg";
    const imageCaption = "Case Buttitta";

    return (
        <>
            <h2>{firstName} {lastName} {divider} {mascot}</h2>

            <figure id="intro-figure">
                <img src={`https://dvonb.xyz/"${imageSrc}`} alt="Case Buttitta" />
                <figcaption id="intro-caption">{imageCaption}</figcaption>
            </figure>

            <section>
                <h3>Personal Information:</h3>

                <p><b>Personal Background: </b>{personalBackground}</p>
                <p><b>Professional Background: </b>{professionalBackground}</p>
                <p><b>Academic Background: </b>{academicBackground}</p>
                <p><b>Primary Computer: </b>{device}: {os}</p>

                <p><b>Courses I'm Taking and Why:</b></p>
                <ol>
                    {courses.map((c, i) => (
                        <li key={i}>
                            <b>{c.dept}{c.num} - {c.name}</b> <span>{c.reason}</span>
                        </li>
                    ))}
                </ol>

                <p><b>Interesting Thing to Remember Me By: </b>{funFact}</p>
            </section>

            <section>
                <p>{quoteText}</p>
                <em>-{quoteAuthor}</em>
            </section>
        </>
    );
}
