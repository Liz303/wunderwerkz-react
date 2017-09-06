import React from 'react';
import { browserHistory } from 'react-router';
import Navigation from '../Navigation.jsx';

class HomePage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      backgroundImage: this.backgroundImage
    };
  }

  get backgroundImage() {
    return this.getRandomInt(1,4);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  changeBackground(e) {
    e.stopPropagation();
    if (this.state.backgroundImage === 4) {
      this.setState({ backgroundImage: 1});
      return;
    }
    this.setState({ backgroundImage: this.state.backgroundImage + 1 });
    return;
  }

  render() {
    let background = `url('../styles/images/home/${this.state.backgroundImage}.gif')`;
    return (
      <Navigation one="root" two="about" three="work" four="contact">
        <div className="home page flex-wrapper center cursor-click"
             onClick={() => {browserHistory.push('/about');}}
             style={{backgroundImage: background}}>
             <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0px" y="0px" width="1024px" height="319.543px" viewBox="0 225.957 1024 319.543" enableBackground="new 0 225.957 1024 319.543">
             <path className="letter-part-three" fill="#231F20" d="M191.408,227.286h-24.693v0.907c11.646,2.784,20.892,11.759,24.063,23.252h0.63h0.555h0.63  c3.171-11.494,12.417-20.469,24.063-23.252v-0.907h-24.693H191.408z"/>
             <path className="letter-part" fill="#231F20" d="M48.576,244.026l44.026,111.75l10.896-25.181l-35.289-91.006c4.497-5.586,10.777-9.676,17.98-11.397v-0.907  H61.705H60.94H27.583v0.907C36.579,230.344,44.137,236.187,48.576,244.026z"/>
             <path className="letter-part" fill="#231F20" d="M116.273,244.026l44.026,111.75l10.898-25.181l-35.291-91.006c4.496-5.586,10.779-9.676,17.982-11.397  v-0.907h-24.487h-0.762H95.283v0.907C104.276,230.344,111.834,236.187,116.273,244.026z"/>
             <path  className="letter-part-four" fill="#231F20" d="M496.18,227.286h-24.693v0.907c11.647,2.784,20.89,11.759,24.064,23.252h0.629h0.555h0.631  c3.171-11.494,12.417-20.469,24.066-23.252v-0.907h-24.697H496.18z"/>
             <path  className="letter-part-three"fill="#231F20" d="M392.884,352.684h24.695v-0.906c-11.649-2.784-20.895-11.759-24.065-23.252h-0.63h-0.557h-0.626  c-3.174,11.494-12.417,20.468-24.066,23.252v0.906h24.692H392.884z"/>
             <polygon onClick={this.changeBackground.bind(this)} className="z-slash" fill="#231F20" points="498.85,322.045 495.342,317.251 417.758,227.286 389.067,227.286 498.85,353.394 "/>
             <path className="letter-part" fill="#231F20" d="M372.447,227.286h-24.693h-0.556h-24.693v0.907c11.649,2.784,20.893,11.759,24.063,23.252h0.63h0.556h0.63  c3.171-11.494,12.417-20.469,24.063-23.252V227.286z"/>
             <path className="letter-part-three" fill="#231F20" d="M289.856,346.787c-4.552-1.923-8.403-4.667-11.554-8.224c-3.152-3.562-5.602-7.88-7.352-12.955  c-1.751-5.077-2.686-10.706-2.8-16.897c0-2.802-0.031-5.453-0.089-7.962c-0.06-2.504-0.087-5.101-0.087-7.79  c0-2.797,0-5.774,0-8.925c0-3.149,0-6.712,0-10.678c0-3.15,0-5.893,0-8.228c0-2.451,0-4.781,0-7.001  c0-2.216,0.027-4.488,0.087-6.828c0.058-2.33,0.146-5.014,0.263-8.05c0.115-2.684,0.699-4.904,1.749-6.653  c1.051-1.75,2.336-3.118,3.851-4.112c1.516-0.994,3.21-1.721,5.076-2.188c1.866-0.468,3.615-0.815,5.252-1.049v-1.754h-52.162v1.754  c3.031,0.348,5.746,0.961,8.139,1.836c2.39,0.875,4.402,2.304,6.04,4.286c0.7,0.82,1.225,1.956,1.572,3.416  c0.353,1.461,0.616,3.091,0.79,4.9c0.177,1.813,0.264,3.764,0.264,5.865s0,4.199,0,6.301v23.28c0,6.42-0.032,12.254-0.087,17.505  c-0.062,5.253-0.09,9.511-0.09,12.776c0,1.402,0.09,3.537,0.263,6.393c0.174,2.863,0.758,6.008,1.751,9.451  c0.99,3.444,2.508,6.942,4.549,10.505c2.041,3.562,4.928,6.822,8.667,9.798c3.732,2.976,8.49,5.34,14.264,7.089  c5.778,1.744,12.867,2.624,21.27,2.624l5.95-5.595C299.601,349.677,294.405,348.709,289.856,346.787z"/>
             <path className="letter-part" fill="#231F20" d="M661.388,249.467c-3.641-4.813-7.867-8.806-12.68-11.975c-4.817-3.173-9.924-5.697-15.321-7.574  c-5.399-1.878-10.981-3.201-16.732-3.961l-11.709,1.937c3.108,0.288,6.012,0.847,8.719,1.671  c12.675,3.641,22.158,10.711,28.437,21.22c6.282,10.51,9.428,24.155,9.428,39.537c0,15.385-3.146,28.326-9.428,38.834  c-6.278,10.506-15.762,17.585-28.437,21.22c-2.707,0.825-5.61,1.384-8.719,1.676l11.709,1.933c5.751-0.76,11.333-2.08,16.732-3.961  c5.397-1.878,10.504-4.4,15.321-7.57c4.812-3.173,9.039-7.162,12.68-11.979c3.636-4.813,6.516-10.568,8.627-17.258  c2.115-6.695,3.169-14.438,3.169-23.248c0-8.807-1.054-16.555-3.169-23.245C667.903,260.035,665.023,254.279,661.388,249.467z"/>
             <path className="letter-part-three" fill="#231F20" d="M856.27,227.286v1.731c2.995,0.343,5.674,0.952,8.037,1.812c2.357,0.866,4.345,2.276,5.958,4.236  c0.691,0.806,1.208,1.927,1.557,3.365c0.347,1.448,0.608,3.059,0.778,4.84v93.121c-0.17,1.786-0.432,3.397-0.778,4.844  c-0.344,1.439-0.862,2.56-1.554,3.365c-1.616,1.956-3.604,3.37-5.961,4.235c-2.363,0.862-5.042,1.466-8.037,1.815v1.729h38.223  V227.286H856.27z"/>
             <path className="letter-part-four" fill="#231F20" d="M985.854,345.294c-4.033-2.766-8.182-7.144-12.441-13.138c-2.765-3.916-5.907-8.413-9.424-13.481  c-3.512-5.074-6.768-9.795-9.766-14.176c-1.727-2.419-3.513-4.607-5.354-6.567c-1.851-1.96-3.746-3.458-5.706-4.497v-0.517  c3.801-1.269,7.433-2.826,10.89-4.667s6.48-4.061,9.075-6.658c2.592-2.592,4.666-5.587,6.223-8.984  c1.552-3.397,2.332-7.23,2.332-11.494c0-6.915-1.559-12.647-4.672-17.199c-3.108-4.552-7.198-8.156-12.267-10.807  c-4.954-2.646-10.432-4.204-16.421-4.666c-5.994-0.459-12.854-0.692-20.568-0.692h-3.133l1.923,2.591  c3.338,0,6.538,0.289,9.589,0.866c3.054,0.577,5.966,1.502,8.728,2.766c5.535,2.651,9.74,6.223,12.621,10.72  c2.884,4.492,4.321,9.621,4.321,15.381c0,3.109-0.402,6.109-1.208,8.989c-0.806,2.881-2.048,5.56-3.719,8.037  c-1.667,2.477-3.832,4.698-6.48,6.658c-2.651,1.96-5.819,3.512-9.506,4.667c-3.8,1.268-7.752,2.103-11.841,2.504l-9.249,3.028  c1.152,0,2.824,0.228,5.014,0.691c2.998,0.576,5.847,2.015,8.558,4.317c2.707,2.308,5.211,4.785,7.519,7.436  c2.766,3.225,5.156,6.131,7.176,8.728c2.011,2.592,3.884,5.156,5.614,7.689c1.727,2.535,3.431,5.101,5.102,7.692  c1.666,2.592,3.6,5.503,5.792,8.728c1.841,2.655,3.192,4.642,4.058,5.966c0.866,1.323,1.584,2.33,2.161,3.026  c0.576,0.688,1.095,1.292,1.557,1.813c0.458,0.518,1.209,1.296,2.249,2.334h35.433v-1.729  C994.613,349.845,989.889,348.059,985.854,345.294z"/>
             <path className="letter-part" fill="#231F20" d="M728.751,235.4c0.691,0.806,1.213,1.927,1.557,3.37c0.349,1.438,0.609,3.05,0.778,4.835v93.126  c-0.169,1.786-0.43,3.397-0.778,4.834c-0.344,1.439-0.865,2.564-1.557,3.37c-1.617,1.96-3.6,3.372-5.957,4.232  c-2.363,0.871-5.046,1.475-8.042,1.817v1.728h38.227V227.62h-38.227v1.731c2.996,0.343,5.679,0.948,8.042,1.813  C725.151,232.029,727.134,233.439,728.751,235.4z"/>
             <path  className="letter-part" fill="#231F20" d="M794.975,228.472c11.497,3.173,20.468,12.418,23.252,24.068h0.907v-25.254h-24.159V228.472z"/>
             <path  className="letter-part-three" fill="#231F20" d="M794.975,351.705v1.18h24.159v-25.248h-0.907C815.442,339.286,806.472,348.53,794.975,351.705z"/>
             <path className="letter-part-four"  fill="#231F20" d="M794.809,300.372h0.459V287.89v-0.284v-12.482h-0.459c-1.409,5.889-5.943,10.564-11.754,12.167v0.315v0.284  v0.316C788.865,289.808,793.399,294.484,794.809,300.372z"/>
             <path className="letter-part"  fill="#231F20" d="M191.408,412.383h-24.693v0.905c11.646,2.784,20.892,11.761,24.063,23.253h0.63h0.555h0.63  c3.171-11.492,12.417-20.469,24.063-23.253v-0.905h-24.693H191.408z"/>
             <path className="letter-part-two" fill="#231F20" d="M86.189,413.288v-0.905H61.705H60.94H27.583v0.905c8.996,2.153,16.554,7.997,20.993,15.835l44.026,111.749  l10.896-25.186l-35.289-91.004C72.706,419.096,78.985,415.01,86.189,413.288z"/>
             <path className="letter-part" fill="#231F20" d="M153.889,413.288v-0.905h-24.487h-0.762H95.283v0.905c8.993,2.153,16.551,7.997,20.99,15.835L160.3,540.872  l10.898-25.186l-35.291-91.004C140.403,419.096,146.686,415.01,153.889,413.288z"/>
             <polygon onClick={this.changeBackground.bind(this)} className="z-slash" fill="#231F20" points="687.946,537.393 712.073,537.557 806.481,412.492 782.354,412.41 "/>
             <path className="letter-part" fill="#231F20" d="M723.407,413.354v-0.908h-25.25v24.16h1.187C702.518,425.111,711.758,416.137,723.407,413.354z"/>
             <path className="letter-part" fill="#231F20" d="M776.383,536.568v0.906h25.249v-24.16h-1.187C797.272,524.809,788.031,533.783,776.383,536.568z"/>
             <path className="letter-part-four" fill="#231F20" d="M595.438,475.391l-20.692,0.146v-63.154h-38.222v1.73c2.989,0.34,5.674,0.943,8.036,1.813  c2.358,0.861,4.346,2.271,5.962,4.231c0.691,0.806,1.209,1.933,1.553,3.369c0.348,1.439,0.608,3.051,0.778,4.837v93.119  c-0.17,1.786-0.431,3.397-0.778,4.846c-0.344,1.438-0.861,2.564-1.553,3.37c-1.616,1.951-3.604,3.36-5.962,4.231  c-2.362,0.86-5.042,1.466-8.036,1.812v1.731h38.222v-58.091l52.12,58.091l1.025-0.01v0.01h25.254v-0.906  c-1.369-0.331-2.706-0.742-3.997-1.236L595.438,475.391z"/>
             <path className="letter-part" fill="#231F20" d="M627.892,412.445h-24.69v0.908c11.648,2.783,20.894,11.758,24.062,23.252h0.628h0.559h0.627  c3.173-11.494,12.414-20.469,24.068-23.252v-0.908H628.45H627.892z"/>
             <path className="letter-part-two" fill="#231F20" d="M368.448,412.383v1.73c2.995,0.34,5.673,0.943,8.037,1.813c2.362,0.861,4.345,2.271,5.964,4.231  c0.687,0.806,1.206,1.933,1.553,3.369c0.346,1.439,0.606,3.051,0.776,4.837l0.002,93.119c-0.172,1.786-0.433,3.397-0.778,4.846  c-0.347,1.438-0.866,2.564-1.553,3.37c-1.619,1.951-3.602,3.36-5.964,4.231c-2.363,0.86-5.042,1.466-8.037,1.812v1.731h38.224  l-0.002-125.092H368.448z"/>
             <path className="letter-part-three"  fill="#231F20" d="M485.591,517.243c-2.764-3.909-5.908-8.406-9.422-13.479c-3.514-5.064-6.77-9.791-9.767-14.168  c-1.726-2.428-3.515-4.607-5.355-6.575c-1.847-1.951-3.745-3.453-5.703-4.487v-0.523c3.801-1.263,7.43-2.821,10.889-4.662  c3.459-1.849,6.481-4.065,9.073-6.657c2.594-2.592,4.669-5.586,6.226-8.993c1.554-3.397,2.333-7.226,2.333-11.493  c0-6.905-1.558-12.647-4.671-17.199c-3.108-4.542-7.203-8.151-12.269-10.798c-4.96-2.656-10.431-4.203-16.424-4.672  c-5.989-0.457-12.851-0.686-20.567-0.686h-3.134l1.925,2.592c3.339,0,6.537,0.284,9.589,0.86c3.054,0.578,5.967,1.502,8.729,2.766  c5.532,2.656,9.74,6.229,12.62,10.716c2.88,4.497,4.32,9.626,4.32,15.386c0,3.113-0.405,6.108-1.211,8.994  c-0.809,2.876-2.047,5.558-3.716,8.03c-1.669,2.483-3.829,4.698-6.481,6.659c-2.65,1.96-5.818,3.517-9.502,4.661  c-3.805,1.272-7.752,2.106-11.844,2.51l-9.248,3.021c1.149,0,2.821,0.229,5.011,0.695c2.997,0.578,5.848,2.016,8.556,4.323  c2.706,2.299,5.214,4.781,7.524,7.428c2.761,3.232,5.152,6.136,7.171,8.728c2.015,2.592,3.888,5.166,5.616,7.693  c1.731,2.536,3.427,5.101,5.099,7.692c1.669,2.592,3.602,5.505,5.793,8.728c1.841,2.656,3.194,4.645,4.06,5.972  c0.865,1.319,1.584,2.326,2.163,3.022c0.573,0.687,1.093,1.292,1.553,1.813c0.46,0.512,1.211,1.3,2.249,2.335h35.438v-1.731  c-5.421-0.806-10.147-2.591-14.177-5.357C494.002,527.62,489.854,523.242,485.591,517.243z"/>
             <path className="letter-part-two" fill="#231F20" d="M235.591,412.547v1.731c2.993,0.348,5.674,0.953,8.037,1.813c2.358,0.86,4.345,2.271,5.96,4.23  c0.693,0.806,1.211,1.933,1.554,3.37c0.348,1.447,0.609,3.06,0.779,4.846v93.11c-0.169,1.786-0.431,3.399-0.776,4.846  c-0.346,1.438-0.863,2.564-1.557,3.37c-1.615,1.96-3.6,3.37-5.96,4.23c-2.363,0.87-5.044,1.475-8.037,1.813v1.731h38.222V412.547  H235.591z"/>
             <path className="letter-part" fill="#231F20" d="M315.813,413.398c11.494,3.17,20.469,12.419,23.253,24.068h0.904v-25.249h-24.158V413.398z"/>
             <path className="letter-part" fill="#231F20" d="M315.813,536.274v1.183h24.158v-25.25h-0.904C336.282,523.855,327.307,533.106,315.813,536.274z"/>
             <path className="letter-part-four" fill="#231F20" d="M316.106,472.818v-0.284v-12.483h-0.46c-1.408,5.889-5.944,10.56-11.757,12.162v0.321v0.284v0.31  c5.813,1.613,10.349,6.283,11.757,12.172h0.46V472.818z"/>
             <path className="letter-part-two" fill="#231F20" d="M539.639,227.423v1.731c2.989,0.343,5.672,0.952,8.035,1.813c2.358,0.865,4.347,2.276,5.963,4.235  c0.691,0.806,1.209,1.928,1.552,3.37c0.348,1.443,0.608,3.054,0.778,4.835v93.121c-0.17,1.786-0.431,3.397-0.778,4.844  c-0.343,1.439-0.86,2.56-1.552,3.365c-1.616,1.956-3.604,3.372-5.963,4.237c-2.363,0.861-5.041,1.464-8.035,1.812v1.731h38.221  V227.423H539.639z"/>
             <path  className="letter-part" fill="#231F20" d="M864.055,525.834c0,7.887-6.398,14.287-14.288,14.287s-14.285-6.4-14.285-14.287  c0-7.893,6.396-14.286,14.285-14.286S864.055,517.941,864.055,525.834z"/>
           </svg>
        </div>
      </Navigation>
    );
  }
}

export default HomePage;
