import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';


export default class NewBooking extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }
  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample" style={{textAlign: 'center'}}>
        <Typography gutterBottom variant="h5" component="h3">
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
        </Typography>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />

        <Helmet>
          <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>
        <div>
         {/*<Link to='/bookings' className='unstyled-link'>*/}
          <Button style={{marginTop: '10px', display: 'flex', justifyContent: 'space-around', width: '100%', height: '3.5em', textAlign: 'center'}} className='unstyled-link' variant="contained" color="primary">SEND REQUEST</Button>
           {/*</Link>*/}
       </div>
      </div>
    );
  }
}


// import React from 'react';
// import Calendar from 'react-calendar';
// import Button from '@material-ui/core/Button';
// import { Link } from "react-router-dom";
// import Typography from '@material-ui/core/Typography';

// class NewBooking extends React.Component {
//   state = {
//     date: new Date(),
//   }

//   onChange = date => this.setState({ date })

//   render() {
//     const { selectRange } = this.state;

//     return (
//       <div>
//       <div style={{textAlign: 'center'}}>
//       <Typography gutterBottom variant="h5" component="h2">
//               When would you like to book?
//             </Typography></div>
//         <div>
//           <Calendar
//             onChange={this.onChange}
//             value={this.state.date}
//           />
//         </div>
//         {/*<Link to='/newbooking' className='unstyled-link'>*/}
//           <Button
//           style={{marginTop: '10px', display: 'flex', justifyContent: 'space-around', width:
//             '100%', height: '3.5em', textAlign: 'center'}} className='unstyled-link' variant="contained" color="primary">SEND REQUEST</Button>
//         {/*</Link>*/}
//       </div>
//     );
//   }
// }

// export default NewBooking;
