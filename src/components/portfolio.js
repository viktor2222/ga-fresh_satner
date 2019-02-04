import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }


let elements = [];

const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92,643];
for(let i = 0; i< imgId.length; i++){
	const ih = 200 + Math.floor(Math.random()*10)*15;
	elements.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
}
//console.log(elements);

class Gallery extends React.Component {
    render() {
        if (this.props.elements === undefined) {
            //console.log(this.props);
            //console.log(this.props.elements);
            return false
        }

        const childElements = this.props.elements.map(function(element, index){
           return (
                <li className="image-element-class" key={index}>
                    <img src={element.src} alt="gallery item"/>
                </li>
            );
        });

        // const childElements = elements.map(function(element){
        //    return (
        //         <li className="image-element-class">
        //             <img src={element.src} alt="gallery item"/>
        //         </li>
        //     );
        // });
        
        return (
            <Masonry
                className={'my-gallery-class container'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
                
                {/* <li className="image-element-class">
                    <img src="/images/portfolio/p1.jpg" alt="gallery item"/>
                </li>
                <li className="image-element-class">
                    <img src="/images/portfolio/p2.jpg" alt="gallery item"/>
                </li>
                <li className="image-element-class">
                    <img src="/images/portfolio/p3.jpg" alt="gallery item"/>
                </li>
                <li className="image-element-class">
                    <img src="/images/portfolio/p4.jpg" alt="gallery item"/>
                </li>
                <li className="image-element-class">
                    <img src="/images/portfolio/p5.jpg" alt="gallery item"/>
                </li>
                <li className="image-element-class">
                    <img src="/images/portfolio/p6.jpg" alt="gallery item"/>
                </li>
                <li className="image-element-class">
                    <img src="/images/portfolio/p7.jpg" alt="gallery item"/>
                </li>
                <li className="image-element-class">
                    <img src="/images/portfolio/p8.jpg" alt="gallery item"/>
                </li>
                <li className="image-element-class">
                    <img src="/images/portfolio/p9.jpg" alt="gallery item"/>
                </li> */}
            </Masonry>
        );
    }
}

export default Gallery;