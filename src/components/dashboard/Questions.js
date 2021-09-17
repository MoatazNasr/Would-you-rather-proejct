import React from "react";
import '../../App.css';
import { connect } from "react-redux";
import { formatQuestion } from "../../utils/helpers";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Questions(props) {

    const { name,
        id,
        optionOneText,
        optionTwoText,
        avatar,
    } = props.question
    return (

        <Card >

            <section id='card'>

                <div>
                    <Typography
                        variant='subtitle2'
                        style={{ margin: 20 }}

                    > {`Asked By ${name}`} </Typography>

                    <CardMedia>
                        <img src={avatar} alt={`${name} avatar`} style={{ width: 150 }} />

                    </CardMedia>

                </div>
                <div>
                    <CardContent>

                        <Typography variant='h5'>
                            Would you rather
                        </Typography>

                        <Typography variant='body1' style={{ margin: 20 }}>
                            {optionOneText}
                        </Typography>
                        <Typography variant='body1'>
                            {optionTwoText}
                        </Typography>


                    </CardContent>
                </div>
            </section>

            <Link to={`/questions/${id}`}>
                <div id='link-div'> <span>Question's Details</span> </div>
            </Link>
        </Card>





    )


}



const mapStateToProps = ({ questions, users }, { ID }) => {


    const questionXid = questions[ID]

    const author = users[questionXid.author]

    return {

        question: formatQuestion(questionXid, author)
        ,
        
    }

}


export default connect(mapStateToProps)(Questions)