import React from "react";

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="bg-white br2 pa4">
        <h3 className="dib w-100">Username</h3>
        <span className="dib w100">@username</span>
        <span className="dib w-100">Lists:</span>
        <span className="dib w-100">Following:</span>
        <span className="dib w-100">Followers:</span>
      </div>
    );
  }
}

export default ProfileCard;
