import React, { Component } from 'react';
import './App.css';

import TopNavigation from './components/TopNavigation';
import Content from './components/Content';

class App extends Component {
  constructor() {
    super();

    this.showMenu = this.showMenu.bind(this);
    this.addQuest = this.addQuest.bind(this);

    //Setup Initial States
    this.state = {
      quests: {}
    }
  }

  showMenu() {
    //Grab Main Menu & Place Into Array
    const menu = document.getElementsByClassName('main-menu');
    const nodes = Array.from(menu[0].children);
    if (menu[0].style.display === 'none' || menu[0].style.display === '') {
      //Set ul.main-menu to display: block
      menu[0].style.display = 'block';

      //Set ul.main-menu li to display: block
      nodes.map((val, i) => {
        nodes[i].style.display = 'block';
      });
    }
    else {
      //Set ul.main-menu to display: none
      menu[0].style.display = 'none';

      //Set ul.main-menu li to display: none
      nodes.map((val, i) => {
        nodes[i].style.display = 'none';
      });
    }
  }

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

  render() {
    return (
      <div>
        <div className="nav-wrapper">
         {/* Top Navbar */}
         <TopNavigation />

          {/* Content */}
          <Content 
            showMenu={this.showMenu} 
            addQuest={this.addQuest}
            allQuests={this.state.quests}
          />
        </div>
      </div>
    );
  }
}

export default App;
