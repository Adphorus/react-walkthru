import React, { Component } from 'react';
import ReactDom from 'react-dom';
import WalkThru from 'walkthru';

import 'normalize.css';
import 'styles/global'
import styles from 'styles/main';

export default class Main extends Component {

  showThemingDemo() {
    WalkThru.create({
      renderer         : ReactDom,
      theme            : {
        step           : {
          transition   : 'left .3s ease, top .3s ease',
        },
        content        : {
          padding      : '50px 11px 11px',
          border       : 'none',
          top           : -50,
        },
        footer         : {
          background   : '#444',
          color        : '#fff',
          bottom       : 'initial',
          top          : 0,
        },
        button         : {
          background   : '#cb3837'
        },
        dotActive      : {
          background   : '#cb3837'
        }
      },
      steps            : [
        { position     : this.refs['title'],
          offset       : { left: 500, top: 20 },
          content      : (
            <div>
              <h3 style={{ padding: 0, margin: 0 }}>Lorem ipsum dolor sit amet</h3>
              <p style={{ padding: '10px 0 0', margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ),
        },
        { position     : this.refs['subtitle'],
          offset       : { left: 200, top: 16 },
          content      : (
            <div>
              <p style={{ padding: '10px 0 0', margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          ),
        },
        { position     : () => document.getElementsByClassName('Github')[0],
          offset       : { left: 190, top: 25 },
          content      : (
            <div>
              <h3 style={{ padding: 0, margin: 0 }}>Github repo</h3>
              <p style={{ padding: '10px 0 0', margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          ),
        },
        { position     : document.getElementsByClassName('Npm')[0],
          offset       : { left: 190, top: 25 },
          content      : (
            <div>
              <h3 style={{ padding: 0, margin: 0 }}>NPM package</h3>
              <p style={{ padding: '10px 0 0', margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          ),
        },
      ]
    })
  }

  componentDidMount() {
    WalkThru.create({
      renderer         : ReactDom,
      onEnd            : this.showThemingDemo.bind(this),
      steps            : [
        { position     : this.refs['title'],
          offset       : { left: 500, top: 20 },
          content      : (
            <div>
              <h3 style={{ padding: 0, margin: 0 }}>Lorem ipsum dolor sit amet</h3>
              <p style={{ padding: '10px 0 0', margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ),
        },
        { position     : this.refs['subtitle'],
          offset       : { left: 200, top: 16 },
          content      : (
            <div>
              <p style={{ padding: '10px 0 0', margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          ),
        },
        { position     : () => document.getElementsByClassName('Github')[0],
          offset       : { left: 190, top: 25 },
          content      : (
            <div>
              <h3 style={{ padding: 0, margin: 0 }}>Github repo</h3>
              <p style={{ padding: '10px 0 0', margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          ),
        },
        { position     : document.getElementsByClassName('Npm')[0],
          offset       : { left: 190, top: 25 },
          content      : (
            <div>
              <h3 style={{ padding: 0, margin: 0 }}>NPM package</h3>
              <p style={{ padding: '10px 0 0', margin: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          ),
        },
      ]
    });
  }

  render() {
    return (
      <main className={styles['Main']}>
        <h1 ref='title'>React - walkthru</h1>
        <h4 ref='subtitle'>Easy to use step-by-step site guide component for React.</h4>
        <p ref='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href='https://github.com/Adphorus/react-walkthru' target='blank' className='Github'>Github</a>
        <a href='https://www.npmjs.com/package/react-walkthru' target='blank' className='Npm'>NPM</a>
      </main>
    )
  }
}
