import TimelineCard from "./TimelineCard";

const Timeline = () => {

    return (
        <div className="container py-5">
            <div className="main-timeline-4 text-white">
                <TimelineCard month="February" year="2023" description="Built prototype for Todoloo" direction="left" />
                <TimelineCard month="January" year="2023" description="Joined Socratic Med's executive team as a web developer" direction="right" />
                <TimelineCard month="August" year="2022" description="Completed web programming certification through Harvard" direction="left" />
                <TimelineCard month="March" year="2022" description="Officially left teaching" direction="right" />
                <TimelineCard month="October" year="2021" description="Completed MVP of GoPursue for Uncover Education" direction="left"/>

            </div>
        </div>
    );
}

export default Timeline;


/* 
                <TimelineCard month="August" year="2007" description="Built my first app in C# using Visual Studio 2007" direction="right"/>
                <TimelineCard month="January" year="2007" description="Graduated with my Bachelor's" direction="left"/>
                <TimelineCard month="???" year="2005" description="Took my first CS class" direction="right"/>
*/