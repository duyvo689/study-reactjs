import React from "react";

class Myprops extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleDelete = (job) => {
    this.props.deleteAJob(job);
  };

  render() {
    let { name, age, arrjob } = this.props;
    let { showJobs } = this.state;

    return (
      <>
        {/* <div>
                    hello {this.props.name}, i'm {this.props.age} year old
                </div> */}
        <div>
          hello {name}, i'm {age} year old
        </div>
        {showJobs === false && (
          <div>
            <button onClick={() => this.handleShowHide()}>show</button>
          </div>
        )}
        {showJobs === true && (
          <>
            <div>
              {arrjob.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <> </>
                    <span onClick={() => this.handleDelete(item)}>X</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Myprops;
