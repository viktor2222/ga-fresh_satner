import React from 'react'
import Portfolio from '../styles/portfolio.module.scss'
import Lightbox from 'react-images'
import '../styles/layout.scss'

const data = [
  {
    key: 0,
    src: './images/portfolio/p1.jpg',
    section: 'popular'
  }, {
    key: 1,
    src: './images/portfolio/p2.jpg',
    section: 'latest'
  }, {
    key: 2,
    src: './images/portfolio/p3.jpg',
    section: 'following'
  }, {
    key: 3,
    src: './images/portfolio/p4.jpg',
    section: 'popular'
  }, {
    key: 4,
    src: './images/portfolio/p5.jpg',
    section: 'upcoming'
  }, {
    key: 5,
    src: './images/portfolio/p6.jpg',
    section: 'following'
  }, {
    key: 6,
    src: './images/portfolio/p7.jpg',
    section: 'latest'
  }, {
    key: 7,
    src: './images/portfolio/p8.jpg',
    section: 'upcoming'
  }, {
    key: 8,
    src: './images/portfolio/p9.jpg',
    section: 'latest'
  },
];

const Shot = (props) => (
    <div className="col-md-4">
      <div className={Portfolio.container_gallery_item}>
        <img className={Portfolio.tabs_img_item} src={props.info.src} alt="images gallery" onClick={() => props.fromChildToParentCallback(props.info.key)}/>
        <span className={Portfolio.plus_item}>+</span>
        <div className={Portfolio.overlay_img}></div>
      </div>    
      
    </div>
);

class Shots extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      lightboxIsOpen:false,
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox= (value) =>{
    this.setState({
      currentImage: value,
      lightboxIsOpen: true,
    }, function(){
      console.log('currentImage>',this.state.currentImage)
      console.log('lightboxIsOpen>',this.state.lightboxIsOpen)
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  filterList = (filter) => {
    return data.filter(function(d) {
      if(filter === 'all') return true;
      return d.section === filter;
    })
  }

  render() {
    const { filter } = this.props;
    const newList = this.filterList(filter);
    let that=this;
    return (
        <div className="row">
            {newList.map(function(d, index) {
              return (
                <Shot
                  key={index}
                  info={d}
                  fromChildToParentCallback={that.openLightbox}
                />
              );
            })}
            <Lightbox images={data}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
        </div>
    );
  }
}

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      shots: data,
      filter: 'all'
    }
  }

  filterShots = (filter) => {
    this.setState({
      filter
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className={Portfolio.title_portfolio}>QUALITY WORK <br/> RECENTLY DONE PROJECT</h3>
        <div className={Portfolio.tabs_list}>
          <div className="d-flex">
            <p className={this.state.filter === 'all' ? 'tabs_selected' : ''} onClick={() => { this.filterShots('all') }}>ALL</p>
            <p className={this.state.filter === 'popular' ? 'tabs_selected' : ''} onClick={() => { this.filterShots('popular') }}>POPULAR</p>
            <p className={this.state.filter === 'latest' ? 'tabs_selected' : ''} onClick={() => { this.filterShots('latest') }}>LATEST</p>
            <p className={this.state.filter === 'following' ? 'tabs_selected' : ''} onClick={() => { this.filterShots('following') }}>FOLLOWING</p>
            <p className={this.state.filter === 'upcoming' ? 'tabs_selected' : ''} onClick={() => { this.filterShots('upcoming') }}>UPCOMING</p>
          </div>
        </div>
        <Shots filter={this.state.filter} />
      </div>
    );
  }
}


export default Gallery;