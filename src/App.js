import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';

import './App.css';

import TopNavigation from './components/TopNavigation';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import AllQuests from './components/AllQuests';

import sampleQuests from './sample-quests';

class App extends Component {
  constructor() {
    super();

    this.addQuest = this.addQuest.bind(this);
    this.getSampleQuests = this.getSampleQuests.bind(this);

    //Setup Initial States
    this.state = {
      quests: {}
    }
  }

  componentWillMount() {
    //Check Local Storage
    const localStorageItem = localStorage.getItem('quest-active');

    //If there are quests -> set state
    if(localStorageItem) {
      this.setState({
        quests: JSON.parse(localStorageItem)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    //On Quest Creation, add to local storage for some persistance
    //Want to be able to see quest on page change
    localStorage.setItem('quest-active', JSON.stringify(nextState.quests));
  }

  /**
   * Gets quest from AddQuestForm
   * Sets it in State
   */
  addQuest(quest) {
    //Make copy of current state
    const quests = {...this.state.quests};

    /** Add In the New Quest **/
    //Create Timestamp
    const timestamp = Date.now();
    quests[`quest-${timestamp}`] = quest;

    //Set the State
    this.setState({quests});
  }

  /**
   * Gets the Sample Quests our 
   * premade JS file
   */
  getSampleQuests() {
    this.setState({
      quests: sampleQuests
    });
  }

  render() {
    return (
      <div>
        <div className="nav-wrapper">
         {/* Top Navbar */}
         <TopNavigation />

         

          <div className="container-fluid">
            <div className="row">
              {/* Sidebar */}
              <Sidebar />

              {/* Content */}
              <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <BrowserRouter>
                  <div>
                    <Match exactly pattern="/" render={() => <Content addQuest={this.addQuest} getSampleQuests={this.getSampleQuests} />} />
                    <Match exactly pattern="/quests" render={() => <AllQuests allQuests={this.state.quests} />}/>
                  </div>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
