import React from 'react';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// MATERIAL UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import moment from 'moment-js';

const styles = theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

class BookingCard extends React.Component {

  render () {
    const start = this.props.booking.start;
    const end = this.props.booking.end;
    const use = this.props.booking.use;
    const user = this.props.booking.user_id; //TODO: fix this and show on card
    const booking = this.props.booking;

    return (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {use}
            </Typography>
            <Typography>
              <span style={{color: '#888'}}>{moment(start).format('ll')}</span> to <span style={{color: '#888'}}>{moment(end).format('ll')}</span>
            </Typography>
          </CardContent>
        </Card>
      );
  }
}

export default BookingCard;


    // return (
    //   <div className="garden-card">
    //     <div className="garden-photo"><Image cloudName="drgdpdviq" publicId={photo}>
    //     <Transformation radius="10" width="250" height="150" crop="scale" />
    //     </Image></div>
    //     <div className="garden-name">{name}</div>
    //     <div className="garden-description">{description}</div>
    //   </div>
    //   );



