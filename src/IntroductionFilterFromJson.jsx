import Header from "./Header";
import Footer from "./Footer";
import IntroductionTemplate from "./IntroductionTemplate";
import { useEffect, useState } from "react";

export default function IntroductionFilterFromJson() {
    document.title = "Case Buttitta | Introduction Filter From JSON";
    const [name, setName] = useState('');
    const [numIntros, setNumIntros] = useState(0);
    const [checkboxStates, setCheckboxStates] = useState({
        name: true,
        mascot: true,
        image: true,
        personal_statement: true,
        backgrounds: true,
        classes: true,
        extra_info: true,
        fun_facts: true,
        quote: true,
        links: true
    });
    const [slideshow, setSlideshow] = useState(false);
    const [indexOfSlideshow, setIndexOfSlideshow] = useState(0);
    const [introductionData, setIntroductionData] = useState([]);
    const [error, setError] = useState(null);

     useEffect(() => {
        fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then((data) => setIntroductionData(data))
            .catch((error) => setError(error.message));
    }, [])

    const filteredIntroductionData = introductionData.filter((data) => {
        if (name === "") return true;
        const fullStudentName = `${data.name.first} ${data.name.middleInitial}. "${data.name.preferred}" ${data.name.last}`;
        return fullStudentName.toLowerCase().includes(name.toLowerCase());
    })

    const setIndexOfSlideshowT = (index) => {
        console.log(index, filteredIntroductionData.length);
        setIndexOfSlideshow(index);
    }

    // Handler function to update the state when a checkbox is toggled
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxStates((prevState) => ({
            ...prevState, // Spread the previous state to maintain other checkbox states
            [name]: checked, // Update the specific checkbox's state
        }));
    };
    const updateIntros = (event) => {
        setName(event.target.value);
        setNumIntros(filteredIntroductionData.length-1);
    };
    const updateSlideshow = () => {
        setSlideshow(prev => !prev);
    };
    return (
        <>
            <div id="introsContainer">
                <h1>Introduction List</h1>
                <form id="searchBar">
                    <label htmlFor="search">Search:</label>
                    <input type="text" id="search" name="search" value={name}
                        onChange={updateIntros} placeholder="Search for a name" />
                </form>
                <h2 id="numberOfIntros">Number of Intros: {numIntros}</h2>
                <ul className="checklist" role="list">
                    <li><label><input type="checkbox" name="name" checked={checkboxStates.name}
                        onChange={handleCheckboxChange} /> <span className="label-text">Name</span></label></li>
                    <li><label><input type="checkbox" name="mascot" checked={checkboxStates.mascot}
                        onChange={handleCheckboxChange} /> <span className="label-text">Mascot</span></label></li>
                    <li><label><input type="checkbox" name="image" checked={checkboxStates.image}
                        onChange={handleCheckboxChange} /> <span className="label-text">Image</span></label></li>
                    <li><label><input type="checkbox" name="personal_statement" checked={checkboxStates.personal_statement}
                        onChange={handleCheckboxChange} /> <span className="label-text">Personal Statement</span></label></li>
                    <li><label><input type="checkbox" name="backgrounds" checked={checkboxStates.backgrounds}
                        onChange={handleCheckboxChange} /> <span className="label-text">Backgrounds</span></label></li>
                    <li><label><input type="checkbox" name="classes" checked={checkboxStates.classes}
                        onChange={handleCheckboxChange} /> <span className="label-text">Classes</span></label></li>
                    <li><label><input type="checkbox" name="extra_info" checked={checkboxStates.extra_info}
                        onChange={handleCheckboxChange} /> <span className="label-text">Extra Information</span></label></li>
                    <li><label><input type="checkbox" name="fun_facts" checked={checkboxStates.fun_facts}
                        onChange={handleCheckboxChange} /> <span className="label-text">Computer, Fun Fact, etc.</span></label></li>
                    <li><label><input type="checkbox" name="quote" checked={checkboxStates.quote}
                        onChange={handleCheckboxChange} /> <span className="label-text">Quote</span></label></li>
                    <li><label><input type="checkbox" name="links" checked={checkboxStates.links}
                        onChange={handleCheckboxChange} /> <span className="label-text">Links (CLT Web, GitHub, etc.)</span></label></li>
                </ul>
                <button onClick={updateSlideshow}>{slideshow ? "View All" : "View Slideshow"}</button>
                {error == null ? "" : <p>Error Code: {error}</p>} {/* Error message*/}
                {
            slideshow

                ? 
                <>
                    <button onClick={() => indexOfSlideshow - 1 < 0 ? setIndexOfSlideshow(filteredIntroductionData.length-1) : setIndexOfSlideshow(indexOfSlideshow - 1)}>
                        Previous
                    </button>
                    <button onClick={() => indexOfSlideshow + 1 >= filteredIntroductionData.length ? setIndexOfSlideshow(0) : setIndexOfSlideshowT(indexOfSlideshow + 1)}>
                        Next
                    </button>
                    <input
                        id={"slider"}
                        type="range"
                        max={filteredIntroductionData.length - 1}
                        min={0}
                        step={1}
                        onChange={(event) =>
                            setIndexOfSlideshow(event.target.value)
                        }
                        value={indexOfSlideshow}
                    />

                    <IntroductionTemplate data={filteredIntroductionData[indexOfSlideshow]} name={checkboxStates.name} mascot={checkboxStates.mascot} image={checkboxStates.image} personal_statement ={checkboxStates.personal_statement} backgrounds ={checkboxStates.backgrounds} classes={checkboxStates.classes} extra_info ={checkboxStates.extra_info} fun_facts ={checkboxStates.fun_facts} quote={checkboxStates.quote} links ={checkboxStates.links}/>
                </>

                : // If False

                filteredIntroductionData.map((studentData, index) =>
                    <IntroductionTemplate key={index} data={studentData} name={checkboxStates.name} mascot={checkboxStates.mascot} image={checkboxStates.image} personal_statement ={checkboxStates.personal_statement} backgrounds ={checkboxStates.backgrounds} classes={checkboxStates.classes} extra_info ={checkboxStates.extra_info} fun_facts ={checkboxStates.fun_facts} quote={checkboxStates.quote} links ={checkboxStates.links}></IntroductionTemplate>
                )
        }
            </div>
        </>
    );
}