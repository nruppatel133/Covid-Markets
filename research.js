// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.SemiCircle(container, {
  strokeWidth: 6,
  color: '#ED6A5A',
  trailColor: '#eee',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#ED6A5A'},
  to: {color: '#ED6A5A'},
  // Set default step function for all animate calls
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText('');
    } else {
      bar.setText(value+"%");
    }

    bar.text.style.color = state.color;
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.9);  // Number from 0.0 to 1.0



var bar2 = new ProgressBar.SemiCircle(container2, {
  strokeWidth: 6,
  color: '#ede15a',
  trailColor: '#eee',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#ede15a'},
  to: {color: '#ede15a'},
  // Set default step function for all animate calls
  step: (state, bar2) => {
    bar2.path.setAttribute('stroke', state.color);
    var value = Math.round(bar2.value() * 100);
    if (value === 0) {
      bar2.setText('');
    } else {
      bar2.setText(value+"%");
    }

    bar2.text.style.color = state.color;
  }
});
bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar2.text.style.fontSize = '2rem';

bar2.animate(0.5);  // Number from 0.0 to 1.0


var bar3 = new ProgressBar.SemiCircle(container3, {
  strokeWidth: 6,
  color: '#edab5a',
  trailColor: '#eee',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#edab5a'},
  to: {color: '#edab5a'},
  // Set default step function for all animate calls
  step: (state, bar3) => {
    bar3.path.setAttribute('stroke', state.color);
    var value = Math.round(bar3.value() * 100);
    if (value === 0) {
      bar3.setText('');
    } else {
      bar3.setText(value+"%");
    }

    bar3.text.style.color = state.color;
  }
});
bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar3.text.style.fontSize = '2rem';

bar3.animate(0.1);  // Number from 0.0 to 1.0


var bar4 = new ProgressBar.SemiCircle(container4, {
  strokeWidth: 6,
  color: '#93ff82',
  trailColor: '#eee',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#93ff82'},
  to: {color: '#93ff82'},
  // Set default step function for all animate calls
  step: (state, bar4) => {
    bar4.path.setAttribute('stroke', state.color);
    var value = Math.round(bar4.value() * 100);
    if (value === 0) {
      bar4.setText('');
    } else {
      bar4.setText(value+"%");
    }

    bar4.text.style.color = state.color;
  }
});
bar4.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar4.text.style.fontSize = '2rem';

bar4.animate(0.01);  // Number from 0.0 to 1.0