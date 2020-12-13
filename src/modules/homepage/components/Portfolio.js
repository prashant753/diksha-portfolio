import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Work Profile</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.projects.map((item) => {
                  const imageClicked = () => window.open(`${item.image}`, '_blank')
                  return (
                    <div onClick={imageClicked} className="">
                      <div className="item-wrap">
                        <div>
                          <img src={`${item.image}`} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}