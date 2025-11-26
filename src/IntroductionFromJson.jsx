import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react";

export default function IntroductionFromJson() {
    document.title = "Case Buttitta | Introduction From JSON";
    console.log("Loading JSON...");
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students/cbuttitt")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error("Error loading JSON:", err));
    }, []);
    console.log(data);
    const firstName = data["name"]["first"];
    const lastName = data["name"]["last"];
    const acknowledgement = data["acknowledgement"];
    const acknowledgementDate = data["acknowledgementDate"];
    const mascot = data["mascot"];
    const divider = "||";
    const device = data["platform"]["device"];
    const os = data["platform"]["os"];
    const personalBackground = data["backgrounds"]["personal"];
    const professionalBackground = data["backgrounds"]["professional"];
    const academicBackground = data["backgrounds"]["academic"];
    const courses = data["courses"];
    const personalStatement = data["personalStatement"];
    const quoteText = data["quote"]["text"];
    const quoteAuthor = data["quote"]["author"];
    const funFact = data["funFact"];
    const charlotteLink = data["links"]["charlotte"];
    const githubLink = data["links"]["github"];
    const githubioLink = data["links"]["githubio"];
    const linkedinLink = data["links"]["linkedin"];
    const freecodecampLink = data["links"]["freecodecamp"];
    const codecademyLink = data["links"]["codecademy"];
    const imageSrc = "/media/2025-fall/itis-3135/cbuttitt-1764028488858.jpg"
    const imageCaption = "Case Buttitta";

    return (
        <>
            <h2>{firstName}{lastName} {divider} {mascot}</h2>
            <figure id="intro-figure">
                <img src={imageSrc} alt="Case Buttitta" />
                <figcaption id="intro-caption">{imageCaption}</figcaption>
            </figure>
            <section>
                <h3>Personal Information:</h3>
                <p><b>Personal Background: </b>{personalBackground}</p>
                <p><b>Professional Background: </b>{professionalBackground}</p>
                <p><b>Academic Background: </b>{academicBackground}</p>
                <p><b>Primary Computer: </b>{device}: {os}</p>
                <p><b>Courses I'm Taking and Why: </b></p>
                <ol>
                    <li><b>{courses[0]["dept"]}{courses[0]["num"]} - {courses[0]["name"]} </b><span>{courses[0]["reason"]}
                    </span></li>
                    <li><b>{courses[1]["dept"]}{courses[1]["num"]} - {courses[1]["name"]} </b><span>{courses[1]["reason"]}
                    </span></li>
                    <li><b>{courses[2]["dept"]}{courses[2]["num"]} - {courses[2]["name"]} </b><span>{courses[2]["reason"]}
                    </span></li>
                    <li><b>{courses[3]["dept"]}{courses[3]["num"]} - {courses[3]["name"]} </b><span>{courses[3]["reason"]}
                    </span></li>
                    <li><b>{courses[4]["dept"]}{courses[4]["num"]} - {courses[4]["name"]} </b><span>{courses[4]["reason"]}
                    </span></li>
                    <li><b>{courses[5]["dept"]}{courses[5]["num"]} - {courses[5]["name"]} </b><span>{courses[5]["reason"]}
                    </span></li>
                </ol>
                <p><b>Interesting Thing to Remember Me By: </b>{funFact}</p>
            </section>
            <section>
                <p>{quoteText}</p>
                <em>-{quoteAuthor}</em>
            </section>
        </>);
}