import React, { Component } from "react";

class Counter extends Component {
  state = {
    //value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: []
  };

  style = {
    //fontSize: 10,
    //fontWeight: "bold"
  };

  renderTags() {
    if (this.props.counter.tags.length === 0)
      return <p>There are no tags!!!</p>;

    return (
      <ul>
        {this.props.counter.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  componentDidUpdate(prevProps, PrevState) {
    //console.log("prevProps", prevProps);
    //console.log("prevState", PrevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     console.log("Increment Clicked!", this);
  //   }

  //handleIncrement = product => {
  //console.log(product);
  //console.log("Increment Clicked!", this);
  //this.setState({ value: this.state.value + 1 });
  //};

  render() {
    //let classes = this.getBadgeClasses();
    //console.log("props", this.props);

    console.log("Counter rendered");

    return (
      <React.Fragment>
        {/*
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <hr />
        {this.state.tags.length === 0 && "Please create a new tag!!!"}
        <div>{this.renderTags()}</div>
        <hr />
        */}
        <div>
          {this.props.children}
          <h4>Counter- {this.props.counter.value}</h4>
          <span style={this.style} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>

          <button
            //onClick={() => this.handleIncrement({ id: 1, name: "product1" })}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
