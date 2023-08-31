import TimelineCard from "./TimelineCard";

const Timeline = () => {

    const timelineCardArr = [
        {
            year: "2023",
            description: "Built prototype for Todoloo web app"
        },
        {
            year: "2023",
            description: "Joined Socratic Med's executive team as a consultant web developer"
        },
        {
            year: "2022",
            description: "Officially left teaching career"
        },
        {
            year: "2022",
            description: "Completed development/web programming certification through Harvard"
        },
        {
            year: "2021",
            description: "Completed MVP of GoPursue for Uncover Education"
        },
        {
            year: "2019-2021",
            description: "Initiated and led coding club at Deal Middle School"
        },
        {
            year: "2015",
            description: "Completed Master's Degree in Education"
        },
        {
            year: "2007",
            description: "Worked on, tested, and deployed language translation app in .NET for internal admin use at The Cognition Group"
        }
    ]

    return (
        <div className="container py-5">
            <div className="main-timeline-4 text-white">
                {
                    timelineCardArr.map((entry, i) => {
                        const direction =  i % 2 === 0 ? "left" : "right";

                        return <TimelineCard year={entry.year} description={entry.description} direction={direction} />
                    })
                }

            </div>
        </div>
    );
}

export default Timeline;


/* 
                <TimelineCard month="February" year="2023" description="Built prototype for Todoloo" direction="left" />
                <TimelineCard month="January" year="2023" description="Joined Socratic Med's executive team as a web developer" direction="right" />
                <TimelineCard month="August" year="2022" description="Completed web programming certification through Harvard" direction="left" />
                <TimelineCard month="March" year="2022" description="Officially left teaching" direction="right" />
                <TimelineCard month="October" year="2021" description="Completed MVP of GoPursue for Uncover Education" direction="left"/>
                <TimelineCard year="2007" description="Built my first app in C# using Visual Studio 2007" direction="right"/>
                ???
                <TimelineCard month="August" year="2007" description="Built my first app in C# using Visual Studio 2007" direction="right"/>
                <TimelineCard month="January" year="2007" description="Graduated with my Bachelor's" direction="left"/>
                <TimelineCard month="???" year="2005" description="Took my first CS class" direction="right"/>
*/