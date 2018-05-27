import React from 'react';

class ProfileCard extends React.Component {
  render() {
    var styles = {
      position: 'sticky',
      top: '2rem'
    };
    return (
      <div className="bg-white br2 pa4" style={styles}>
        <h3 className="dib w-100 mt0 mb1">Username</h3>
        <span className="dib w100">@username</span>
        <div className="flex flex-column mt3">
          <span className="pa2 bg-near-white mb2">Lists: 8</span>
          <span className="pa2 bg-near-white mb2">Following: 123</span>
          <span className="pa2 bg-near-white mb0">Followers: 198</span>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
