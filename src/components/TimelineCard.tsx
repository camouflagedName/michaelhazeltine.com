
const TimelineCard = ({ month, year, description, direction }: { month: string, year: string, description: string, direction: string }) => {
 
    const colorType = direction === "right" ? "-4" : ""
    return (
        <div className={`timeline-4 ${direction}-4`}>
            <div className={`card gradient-custom${colorType}`}>
                <div className="card-body p-4">
                    <h4>{month}</h4>
                    <p className="small text-white-50 mb-4">{year}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TimelineCard;