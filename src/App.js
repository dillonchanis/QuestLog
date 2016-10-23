import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';

import './App.css';

import TopNavigation from './components/TopNavigation';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import AllQuests from './components/AllQuests';
import AchievementList from './components/AchievementList';

import sampleQuests from './sample-quests';

class App extends Component {
  constructor() {
    super();

    this.addQuest = this.addQuest.bind(this);
    this.getSampleQuests = this.getSampleQuests.bind(this);
    this.acceptQuest = this.acceptQuest.bind(this);
    this.completeQuest = this.completeQuest.bind(this);

    //Setup Initial States
    this.state = {
      quests: {},
      myQuests: {},
      completed: {}
    }
  }

  componentWillMount() {
    //Check Local Storage
    const localStorageItem = localStorage.getItem('quest-active');
    const localStorageAccepted = localStorage.getItem('quest-accepted');
    const localStorageCompleted = localStorage.getItem('quest-completed');

    //If there are quests -> set state
    if(localStorageItem || localStorageAccepted || localStorageCompleted) {
      this.setState({
        quests: JSON.parse(localStorageItem),
        myQuests: JSON.parse(localStorageAccepted),
        completed: JSON.parse(localStorageCompleted)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    //On Quest Creation, add to local storage for some persistance
    //Want to be able to see quest on page change
    localStorage.setItem('quest-active', JSON.stringify(nextState.quests));
    localStorage.setItem('quest-accepted', JSON.stringify(nextState.myQuests));
    localStorage.setItem('quest-completed', JSON.stringify(nextState.completed));
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
   * Takes in index and quest object
   * Adds them to user's myQuest object and removes from available quests
   */
  acceptQuest(index, quest) {
    //Make copy of state
    const quests  = {...this.state.quests};
    const myQuests = {...this.state.myQuests};
    myQuests[index] = quest;

    //Remove this quest from available quests
    delete quests[index];

    //Set the State
    this.setState({quests, myQuests});
  }

  /**
   * Takes in index and quest object
   * Places name of quest in user's completed object
   * Tracks number of times user completed the quest
   */
  completeQuest(index, quest) {
    const myQuests = {...this.state.myQuests};
    const completed = {...this.state.completed};


    //Check to see if User already completed that quest
    if (completed.hasOwnProperty(quest.name)) {
      //If so increment
      completed[quest.name] += 1;
    } else {
      //If not set it to 0
      completed[quest.name] = 0;
    }

    // Remove that quest from myQuest object
    delete myQuests[index];

    this.setState({myQuests, completed});
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

  setCurrentLocation(location) {
    console.log(location);
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
                    <Match exactly pattern="/" 
                      render={() => 
                        <Content 
                          addQuest={this.addQuest} 
                          getSampleQuests={this.getSampleQuests} 
                          myQuests={this.state.myQuests} 
                          completeQuest={this.completeQuest} 
                        />
                      } 
                    />
                    <Match exactly pattern="/quests" 
                      render={() => 
                        <AllQuests 
                          acceptQuest={this.acceptQuest} 
                          allQuests={this.state.quests} 
                        />
                      }
                    />
                    <Match exactly pattern="/achievements" 
                      render={() => 
                        <AchievementList 
                          completed={this.state.completed} 
                        />
                      } 
                    />
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
