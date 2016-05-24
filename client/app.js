// import React from 'react';
// import { Grid } from 'react-bootstrap';

// export const App = React.createClass({
//   propTypes: {
//     children: React.PropTypes.element.isRequired,
//   },
//   render() {
//     return <div>
//       <Grid>
//         { this.props.children }
//       </Grid>
//     </div>;
//   },
// });

import React from 'react';

export const App = ({content}) => (
  <div>
    <h1>My App</h1>
    <hr />
    <div>{content}</div>
  </div>
);