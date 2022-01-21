import React from 'react';
import { connect } from 'react-redux';
import Button from '../Component/ButtonLink';
import { setLink } from '../redux/action';

class Slider extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      flag: false,
      numberImage: 0,
      sliderLink: ["Redux", "Local"],
      imgLink: ["../Images/dota21.jpg", "../Images/dota23.jpg", "../Images/pick.jpg"],
    }
  }

  sliderSwitch() {
    this.setState({ flag: !this.state.flag });
  }

  backButtonHandler() {
    this.setState({
      numberImage: this.state.numberImage < 1 ? this.state.imgLink.length - 1 :
        this.state.numberImage - 1
    })
  }

  nextButtonHandler() {
    this.setState({
      numberImage: this.state.numberImage > this.state.imgLink.length - 2 ? 0 :
        this.state.numberImage + 1
    })
  }

  componentDidMount() {
    fetch("https://imagesapi.osora.ru/", {
      method: "GET"
    })
      .then(result => result.json())
      .then(result => {
        this.props.setLinkAction(result);
      })
  }

  render() {
    let link;
    link = this.state.flag ? this.props.link : this.state.imgLink;
    return (
      <div>
        <Button link="/" name="Перейти на главную"></Button>
        <div className='flex mx-auto mt-5 w-4/5'>
          <div className='flex mx-auto'>
            <div className='flex mx-auto w-2/12 text-center my-auto items-center mr-2
             sm:mr-20 rounded-2xl buttonSlide'
              onClick={() => this.backButtonHandler()}>
              <div className='flex mx-auto'> Back</div>
            </div>
            <div className='flex'>
              <div className='flex mx-auto'>
                <img className='w-11/12 sm:w-3/5 h-3/5 flex mx-auto imageBlock'
                  src={link[this.state.numberImage]}
                  alt={link[this.state.numberImage]}>
                </img>
              </div>
            </div>
            <div className='flex w-2/12 mx-auto my-auto items-center ml-2 sm:ml-20  
            rounded-2xl buttonSlide'
              onClick={() => this.nextButtonHandler()}>
              <div className='flex mx-auto'>Next</div>
            </div>
          </div>
        </div>
        <div className='flex mt-10'>
          <div className='flex mx-auto w-2/6 h-12 font-semibold justify-center rounded-2xl 
          reduxLink items-center text-xl'
            onClick={() => this.sliderSwitch()}>{this.state.sliderLink[+this.state.flag]}
          </div>
        </div>
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return {
    link: state.link
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLinkAction: link => dispatch(setLink(link)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Slider);
