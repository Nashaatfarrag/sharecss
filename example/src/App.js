import React, { Component } from "react";

import share from "share";
import "./css/share.min.css";

export default class App extends Component {
  state = {
    loading: false,
    snackbar: false,
    sidenav: false
  };

  render() {
    return (
      <div>
        {/* Loading Example */}
        <button
          className="share-button share-accent-bg"
          onClick={() => this.setState({ loading: true })}
        >
          Show Loading
        </button>
        <share.Loading present={this.state.loading} />
        <button
          className="share-button share-accent-bg"
          onClick={() => this.setState({ snackbar: !this.state.snackbar })}
        >
          Show snackbar
        </button>
        {this.state.snackbar && (
          <share.Snackbar message="hello" duration="3000" />
        )}
        <button
          className="share-button share-accent-bg"
          onClick={() => this.setState({ sidenav: !this.state.sidenav })}
        >
          Show Navbar
        </button>
        <share.Sidenav
          buttonText="close"
          present={this.state.sidenav}
          onDismissClicked={() =>
            this.setState({ sidenav: !this.state.sidenav })
          }
          right="true"
          insideText="Sed vel urna ac purus luctus convallis venenatis eget magna. Proin
            vestibulum feugiat dictum. Duis vehicula, arcu vitae dapibus
            tincidunt, dui leo pulvinar nibh, a suscipit ex purus in sem. Fusce
            auctor tincidunt arcu. Integer placerat sem vel ipsum vehicula, vel
            luctus erat pretium. In egestas erat eros, in pellentesque orci
            imperdiet ut. Suspendisse aliquam hendrerit risus a vestibulum."
        />
        
      </div>
    );
  }
}
