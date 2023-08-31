
const TimelineCard = ({ month, year, description, direction }: { month?: string, year: string, description: string, direction: string }) => {

    const colorType = direction === "right" ? "-4" : ""
    return (
        <div className={`timeline-4 ${direction}-4`}>
            <div className={`card gradient-custom${colorType}`}>
                <div className="card-body p-4">
                    <h4 className="text-white-50 mb-4">{year}</h4>
                    {
                        month ?
                            <p className="small text-white-50 mb-4">{month}</p>

                            :
                            <></>
                    }

                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default TimelineCard;