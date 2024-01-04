import Card from "../../components/card";

function Features() {
    const feature1 = {
        imgSrc: "https://images.squarespace-cdn.com/content/v1/58586fa5ebbd1a60e7d76d3e/1643343539252-NEJBEGNZ6AZ0EO8D1PQH/thumb_v3_me.jpg?format=500w",
        title: "Blender Beginner Donut Series",
        text: "Jan 27, 2022",
        button: "Watch"
    }
    const feature2 = {
        imgSrc: "https://images.squarespace-cdn.com/content/v1/58586fa5ebbd1a60e7d76d3e/1643330429860-1CZ8RQWIRON3539LIR5Q/thumbnail.jpg?format=500w",
        title: "How to Make Abondoned House in Blender",
        text: "Oct 27, 2021",
        button: "Watch"
    }
    const feature3 = {
        imgSrc: "https://images.squarespace-cdn.com/content/v1/58586fa5ebbd1a60e7d76d3e/1643330206864-33T4WE9SNK0Q9RNJZTN1/thumbnail1_smaller.jpg?format=500w",
        title: "How to Make a Cabin in the Woods in Blender",
        text: "Dec 22, 2020 ",
        button: "Watch"
    }
    const feature4 = {
        imgSrc: "https://images.squarespace-cdn.com/content/v1/58586fa5ebbd1a60e7d76d3e/1584339763846-A4JMNB3KA91A0WFEX53I/maxresdefault+%287%29.jpg?format=500w",
        title: "Blender 2.8 Beginner Tutorial Series",
        text:   "Sep 4, 2019",
        button: "Watch"
    }
    const feature5 = {
        imgSrc: "https://images.squarespace-cdn.com/content/v1/58586fa5ebbd1a60e7d76d3e/1584339835791-1VREB87YUWJANLLG6KEJ/maxresdefault+%288%29.jpg?format=500w",
        title: "How to Render Millions of Objects in Blender",
        text:   "Dec 13, 2019",
        button: "Watch"
    }
    const feature6 = {
        imgSrc: "https://images.squarespace-cdn.com/content/v1/58586fa5ebbd1a60e7d76d3e/1516256509961-SLPPECHX9CRUCHKYLKHI/black_AO.jpg?format=750w",
        title:  "Creating a Subway Corridor in 20 minutes",
        text:   "Aug 21, 2019",
        button: "Watch"
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <Card imgSrc={feature1.imgSrc} title={feature1.title} text={feature1.text} button={feature1.button} />
                    <Card imgSrc={feature2.imgSrc} title={feature2.title} text={feature2.text} button={feature2.button} />
                    <Card imgSrc={feature3.imgSrc} title={feature3.title} text={feature3.text} button={feature3.button} />
                    <Card imgSrc={feature4.imgSrc} title={feature4.title} text={feature4.text} button={feature4.button} />
                    <Card imgSrc={feature5.imgSrc} title={feature5.title} text={feature5.text} button={feature5.button} />
                    <Card imgSrc={feature6.imgSrc} title={feature6.title} text={feature6.text} button={feature6.button} />

                </div>
            </div>
        </>
    )
}



export default Features;
