import * as React from "react";

export interface FrameProps {
  url: string;
}

export interface FrameState {
  loading: boolean;
}

export class ItemViewerFrame extends React.Component<FrameProps, FrameState> {
  constructor(props: FrameProps) {
    super(props);
    this.state = { loading: true };
  }

  startLoad = () => {
    this.setState({
      loading: true
    });
  };

  finishLoad = () => {
    this.setState({
      loading: false
    });
  };

  renderNoItem() {
    return (
      <div className="no-item">
        <p>No Item Found</p>
      </div>
    );
  }

  renderItem() {
    return (
      <div className="itemViewerFrame" tabIndex={0}>
        <iframe
          id="itemviewer-iframe"
          className="itemviewer-iframe"
          onLoadStart={this.startLoad}
          onLoad={this.finishLoad}
          src={this.props.url}
        />
      </div>
    );
  }

  render() {
    if (this.props.url) {
      return this.renderItem();
    } else {
      return this.renderNoItem();
    }
  }
}
